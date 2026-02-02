const initSqlJs = require('sql.js');
const fs = require('fs');
const path = require('path');
const { events, exhibitors } = require('../data/seed-data.js');
const { powerPlants } = require('../data/power-plants.js');

const dbPath = path.join(__dirname, '../data/geothermal.db');

async function main() {
  const SQL = await initSqlJs();
  const db = new SQL.Database();

  // Create tables
  db.run(`
    CREATE TABLE events (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      year INTEGER NOT NULL,
      location TEXT,
      type TEXT,
      organizer TEXT,
      website TEXT
    );

    CREATE TABLE exhibitors (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      country TEXT,
      category TEXT,
      subcategory TEXT,
      website TEXT,
      description TEXT
    );

    CREATE TABLE event_exhibitors (
      event_id TEXT,
      exhibitor_id INTEGER,
      PRIMARY KEY (event_id, exhibitor_id)
    );

    CREATE TABLE power_plants (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      country TEXT,
      region TEXT,
      operator TEXT,
      developer TEXT,
      capacity_mw REAL,
      capacity_installed_mw REAL,
      plant_type TEXT,
      commissioning_year INTEGER,
      reservoir_temp_c INTEGER,
      reservoir_depth_m INTEGER,
      well_count INTEGER,
      area_km2 REAL,
      status TEXT,
      grid_connection TEXT,
      annual_generation_gwh REAL,
      thermal_output_mw REAL,
      capacity_factor REAL,
      lat REAL,
      lng REAL,
      description TEXT,
      notes TEXT,
      source TEXT
    );

    CREATE INDEX idx_exhibitors_category ON exhibitors(category);
    CREATE INDEX idx_exhibitors_country ON exhibitors(country);
    CREATE INDEX idx_events_year ON events(year);
    CREATE INDEX idx_plants_country ON power_plants(country);
    CREATE INDEX idx_plants_status ON power_plants(status);
    CREATE INDEX idx_plants_type ON power_plants(plant_type);
  `);

  // Insert events
  const insertEvent = db.prepare(`
    INSERT INTO events (id, name, year, location, type, organizer, website)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);

  for (const event of events) {
    insertEvent.run([event.id, event.name, event.year, event.location, event.type, event.organizer, event.website]);
  }
  insertEvent.free();

  // Insert exhibitors
  const insertExhibitor = db.prepare(`
    INSERT INTO exhibitors (name, country, category, subcategory, website, description)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  const insertRelation = db.prepare(`
    INSERT OR IGNORE INTO event_exhibitors (event_id, exhibitor_id) VALUES (?, ?)
  `);

  let exhibitorId = 1;
  for (const exhibitor of exhibitors) {
    insertExhibitor.run([
      exhibitor.name,
      exhibitor.country,
      exhibitor.category,
      exhibitor.subcategory,
      exhibitor.website,
      exhibitor.description
    ]);
    
    for (const eventId of exhibitor.events) {
      insertRelation.run([eventId, exhibitorId]);
    }
    exhibitorId++;
  }
  insertExhibitor.free();
  insertRelation.free();

  // Insert power plants
  const insertPlant = db.prepare(`
    INSERT INTO power_plants (name, country, region, operator, developer, capacity_mw, capacity_installed_mw, 
      plant_type, commissioning_year, reservoir_temp_c, reservoir_depth_m, well_count, area_km2, status,
      grid_connection, annual_generation_gwh, thermal_output_mw, capacity_factor, lat, lng, description, notes, source)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  for (const plant of powerPlants) {
    insertPlant.run([
      plant.name, plant.country, plant.region, plant.operator, plant.developer,
      plant.capacity_mw, plant.capacity_installed_mw, plant.plant_type, plant.commissioning_year,
      plant.reservoir_temp_c, plant.reservoir_depth_m, plant.well_count, plant.area_km2, plant.status,
      plant.grid_connection, plant.annual_generation_gwh, plant.thermal_output_mw || null, plant.capacity_factor,
      plant.coordinates?.lat, plant.coordinates?.lng, plant.description, plant.notes, plant.source
    ]);
  }
  insertPlant.free();

  // Save to file
  const data = db.export();
  const buffer = Buffer.from(data);
  fs.writeFileSync(dbPath, buffer);

  console.log(`✅ Imported ${events.length} events, ${exhibitors.length} exhibitors, ${powerPlants.length} power plants`);
  db.close();
}

main().catch(console.error);
