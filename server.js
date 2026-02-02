const express = require('express');
const initSqlJs = require('sql.js');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = parseInt(process.env.PORT) || 3000;
const dbPath = path.join(__dirname, 'data/geothermal.db');

let db = null;

// Health check endpoint (must respond quickly)
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

async function initDB() {
  try {
    const SQL = await initSqlJs();
    if (fs.existsSync(dbPath)) {
      const buffer = fs.readFileSync(dbPath);
      db = new SQL.Database(buffer);
      console.log('Database loaded successfully');
    } else {
      console.error('Database not found at:', dbPath);
    }
  } catch (err) {
    console.error('Failed to init database:', err);
  }
}

app.use(express.static(path.join(__dirname, 'public')));

// Search exhibitors
app.get('/api/exhibitors', (req, res) => {
  if (!db) return res.status(500).json({ error: 'Database not initialized' });
  
  const { q, category, country, year, event } = req.query;
  
  let query = `
    SELECT DISTINCT e.*, GROUP_CONCAT(DISTINCT ev.name) as events_list
    FROM exhibitors e
    LEFT JOIN event_exhibitors ee ON e.id = ee.exhibitor_id
    LEFT JOIN events ev ON ee.event_id = ev.id
    WHERE 1=1
  `;
  const conditions = [];
  
  if (q) {
    query += ` AND (e.name LIKE '%${q.replace(/'/g, "''")}%' OR e.description LIKE '%${q.replace(/'/g, "''")}%')`;
  }
  if (category) {
    query += ` AND e.category = '${category.replace(/'/g, "''")}'`;
  }
  if (country) {
    query += ` AND e.country = '${country.replace(/'/g, "''")}'`;
  }
  if (year) {
    query += ` AND ev.year = ${parseInt(year)}`;
  }
  if (event) {
    query += ` AND ev.id = '${event.replace(/'/g, "''")}'`;
  }
  
  query += ` GROUP BY e.id ORDER BY e.name`;
  
  try {
    const result = db.exec(query);
    if (result.length === 0) return res.json([]);
    
    const columns = result[0].columns;
    const rows = result[0].values.map(row => {
      const obj = {};
      columns.forEach((col, i) => obj[col] = row[i]);
      return obj;
    });
    res.json(rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Get all events
app.get('/api/events', (req, res) => {
  if (!db) return res.status(500).json({ error: 'Database not initialized' });
  
  try {
    const result = db.exec(`SELECT * FROM events ORDER BY year DESC, name`);
    if (result.length === 0) return res.json([]);
    
    const columns = result[0].columns;
    const rows = result[0].values.map(row => {
      const obj = {};
      columns.forEach((col, i) => obj[col] = row[i]);
      return obj;
    });
    res.json(rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Get categories
app.get('/api/categories', (req, res) => {
  if (!db) return res.status(500).json({ error: 'Database not initialized' });
  
  try {
    const result = db.exec(`SELECT DISTINCT category FROM exhibitors WHERE category IS NOT NULL ORDER BY category`);
    if (result.length === 0) return res.json([]);
    res.json(result[0].values.map(r => r[0]));
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Get countries
app.get('/api/countries', (req, res) => {
  if (!db) return res.status(500).json({ error: 'Database not initialized' });
  
  try {
    const result = db.exec(`SELECT DISTINCT country FROM exhibitors WHERE country IS NOT NULL ORDER BY country`);
    if (result.length === 0) return res.json([]);
    res.json(result[0].values.map(r => r[0]));
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Stats
app.get('/api/stats', (req, res) => {
  if (!db) return res.status(500).json({ error: 'Database not initialized' });
  
  try {
    const exhibitorCount = db.exec(`SELECT COUNT(*) FROM exhibitors`)[0].values[0][0];
    const eventCount = db.exec(`SELECT COUNT(*) FROM events`)[0].values[0][0];
    const countryCount = db.exec(`SELECT COUNT(DISTINCT country) FROM exhibitors`)[0].values[0][0];
    const plantCount = db.exec(`SELECT COUNT(*) FROM power_plants`)[0].values[0][0];
    const totalCapacity = db.exec(`SELECT SUM(capacity_mw) FROM power_plants WHERE capacity_mw IS NOT NULL`)[0].values[0][0];
    res.json({ exhibitors: exhibitorCount, events: eventCount, countries: countryCount, plants: plantCount, totalCapacity: Math.round(totalCapacity) });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Power Plants API
app.get('/api/plants', (req, res) => {
  if (!db) return res.status(500).json({ error: 'Database not initialized' });
  
  const { q, country, type, status, min_capacity } = req.query;
  
  let query = `SELECT * FROM power_plants WHERE 1=1`;
  
  if (q) {
    query += ` AND (name LIKE '%${q.replace(/'/g, "''")}%' OR operator LIKE '%${q.replace(/'/g, "''")}%' OR description LIKE '%${q.replace(/'/g, "''")}%')`;
  }
  if (country) {
    query += ` AND country = '${country.replace(/'/g, "''")}'`;
  }
  if (type) {
    query += ` AND plant_type LIKE '%${type.replace(/'/g, "''")}%'`;
  }
  if (status) {
    query += ` AND status = '${status.replace(/'/g, "''")}'`;
  }
  if (min_capacity) {
    query += ` AND capacity_mw >= ${parseInt(min_capacity)}`;
  }
  
  query += ` ORDER BY capacity_mw DESC`;
  
  try {
    const result = db.exec(query);
    if (result.length === 0) return res.json([]);
    
    const columns = result[0].columns;
    const rows = result[0].values.map(row => {
      const obj = {};
      columns.forEach((col, i) => obj[col] = row[i]);
      return obj;
    });
    res.json(rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Plant types
app.get('/api/plant-types', (req, res) => {
  if (!db) return res.status(500).json({ error: 'Database not initialized' });
  
  try {
    const result = db.exec(`SELECT DISTINCT plant_type FROM power_plants WHERE plant_type IS NOT NULL ORDER BY plant_type`);
    if (result.length === 0) return res.json([]);
    res.json(result[0].values.map(r => r[0]));
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Plant countries
app.get('/api/plant-countries', (req, res) => {
  if (!db) return res.status(500).json({ error: 'Database not initialized' });
  
  try {
    const result = db.exec(`SELECT DISTINCT country FROM power_plants WHERE country IS NOT NULL ORDER BY country`);
    if (result.length === 0) return res.json([]);
    res.json(result[0].values.map(r => r[0]));
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Start server FIRST, then init DB
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`🌋 Server listening on port ${PORT}`);
  initDB();
});
