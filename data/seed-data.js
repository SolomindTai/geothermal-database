// 全球主要地熱研討會/展覽會/技術論壇資料
// 近五年 (2020-2025) 主要活動

const events = [
  // World Geothermal Congress (WGC)
  { id: 'wgc2020', name: 'World Geothermal Congress 2020+1', year: 2021, location: 'Reykjavik, Iceland', type: 'Congress', organizer: 'IGA', website: 'https://www.wgc2020.com' },
  { id: 'wgc2025', name: 'World Geothermal Congress 2025', year: 2025, location: 'Antalya, Turkey', type: 'Congress', organizer: 'IGA', website: 'https://www.wgc2025.org' },
  
  // Geothermal Resources Council (GRC) Annual Meeting
  { id: 'grc2020', name: 'GRC Annual Meeting 2020', year: 2020, location: 'Virtual', type: 'Conference', organizer: 'GRC', website: 'https://geothermal.org' },
  { id: 'grc2021', name: 'GRC Annual Meeting 2021', year: 2021, location: 'San Diego, USA', type: 'Conference', organizer: 'GRC', website: 'https://geothermal.org' },
  { id: 'grc2022', name: 'GRC Annual Meeting 2022', year: 2022, location: 'Reno, USA', type: 'Conference', organizer: 'GRC', website: 'https://geothermal.org' },
  { id: 'grc2023', name: 'GRC Annual Meeting 2023', year: 2023, location: 'Reno, USA', type: 'Conference', organizer: 'GRC', website: 'https://geothermal.org' },
  { id: 'grc2024', name: 'GRC Annual Meeting 2024', year: 2024, location: 'Palm Springs, USA', type: 'Conference', organizer: 'GRC', website: 'https://geothermal.org' },
  
  // European Geothermal Congress (EGC)
  { id: 'egc2022', name: 'European Geothermal Congress 2022', year: 2022, location: 'Berlin, Germany', type: 'Congress', organizer: 'EGEC', website: 'https://europeangeothermalcongress.eu' },
  { id: 'egc2025', name: 'European Geothermal Congress 2025', year: 2025, location: 'Strasbourg, France', type: 'Congress', organizer: 'EGEC', website: 'https://europeangeothermalcongress.eu' },
  
  // Stanford Geothermal Workshop
  { id: 'sgw2020', name: 'Stanford Geothermal Workshop 2020', year: 2020, location: 'Stanford, USA', type: 'Workshop', organizer: 'Stanford University', website: 'https://geothermal.stanford.edu' },
  { id: 'sgw2021', name: 'Stanford Geothermal Workshop 2021', year: 2021, location: 'Virtual', type: 'Workshop', organizer: 'Stanford University', website: 'https://geothermal.stanford.edu' },
  { id: 'sgw2022', name: 'Stanford Geothermal Workshop 2022', year: 2022, location: 'Stanford, USA', type: 'Workshop', organizer: 'Stanford University', website: 'https://geothermal.stanford.edu' },
  { id: 'sgw2023', name: 'Stanford Geothermal Workshop 2023', year: 2023, location: 'Stanford, USA', type: 'Workshop', organizer: 'Stanford University', website: 'https://geothermal.stanford.edu' },
  { id: 'sgw2024', name: 'Stanford Geothermal Workshop 2024', year: 2024, location: 'Stanford, USA', type: 'Workshop', organizer: 'Stanford University', website: 'https://geothermal.stanford.edu' },
  
  // Indonesia International Geothermal Convention & Exhibition (IIGCE)
  { id: 'iigce2020', name: 'IIGCE 2020', year: 2020, location: 'Jakarta, Indonesia', type: 'Exhibition', organizer: 'INAGA', website: 'https://iigce.com' },
  { id: 'iigce2021', name: 'IIGCE 2021', year: 2021, location: 'Jakarta, Indonesia', type: 'Exhibition', organizer: 'INAGA', website: 'https://iigce.com' },
  { id: 'iigce2022', name: 'IIGCE 2022', year: 2022, location: 'Jakarta, Indonesia', type: 'Exhibition', organizer: 'INAGA', website: 'https://iigce.com' },
  { id: 'iigce2023', name: 'IIGCE 2023', year: 2023, location: 'Jakarta, Indonesia', type: 'Exhibition', organizer: 'INAGA', website: 'https://iigce.com' },
  { id: 'iigce2024', name: 'IIGCE 2024', year: 2024, location: 'Jakarta, Indonesia', type: 'Exhibition', organizer: 'INAGA', website: 'https://iigce.com' },
  
  // New Zealand Geothermal Workshop
  { id: 'nzgw2021', name: 'NZ Geothermal Workshop 2021', year: 2021, location: 'Auckland, New Zealand', type: 'Workshop', organizer: 'NZGA', website: 'https://nzgeothermal.org.nz' },
  { id: 'nzgw2022', name: 'NZ Geothermal Workshop 2022', year: 2022, location: 'Taupo, New Zealand', type: 'Workshop', organizer: 'NZGA', website: 'https://nzgeothermal.org.nz' },
  { id: 'nzgw2023', name: 'NZ Geothermal Workshop 2023', year: 2023, location: 'Auckland, New Zealand', type: 'Workshop', organizer: 'NZGA', website: 'https://nzgeothermal.org.nz' },
  
  // Japan Geothermal Congress
  { id: 'jgc2020', name: 'Japan Geothermal Congress 2020', year: 2020, location: 'Tokyo, Japan', type: 'Congress', organizer: 'GRSJ', website: 'https://grsj.gr.jp' },
  { id: 'jgc2022', name: 'Japan Geothermal Congress 2022', year: 2022, location: 'Sendai, Japan', type: 'Congress', organizer: 'GRSJ', website: 'https://grsj.gr.jp' },
  { id: 'jgc2024', name: 'Japan Geothermal Congress 2024', year: 2024, location: 'Fukuoka, Japan', type: 'Congress', organizer: 'GRSJ', website: 'https://grsj.gr.jp' },
  
  // Geothermie (Germany)
  { id: 'geo2022', name: 'Der Geothermiekongress 2022', year: 2022, location: 'Munich, Germany', type: 'Congress', organizer: 'BVG', website: 'https://www.geothermie.de' },
  { id: 'geo2023', name: 'Der Geothermiekongress 2023', year: 2023, location: 'Essen, Germany', type: 'Congress', organizer: 'BVG', website: 'https://www.geothermie.de' },
  { id: 'geo2024', name: 'Der Geothermiekongress 2024', year: 2024, location: 'Munich, Germany', type: 'Congress', organizer: 'BVG', website: 'https://www.geothermie.de' },
  
  // China Geothermal Congress
  { id: 'cgc2020', name: 'China Geothermal Congress 2020', year: 2020, location: 'Beijing, China', type: 'Congress', organizer: 'CGA', website: 'http://www.chinadrg.com' },
  { id: 'cgc2022', name: 'China Geothermal Congress 2022', year: 2022, location: 'Xian, China', type: 'Congress', organizer: 'CGA', website: 'http://www.chinadrg.com' },
  { id: 'cgc2023', name: 'China Geothermal Congress 2023', year: 2023, location: 'Tianjin, China', type: 'Congress', organizer: 'CGA', website: 'http://www.chinadrg.com' },
  
  // African Rift Geothermal Conference (ARGeo)
  { id: 'argeo2020', name: 'ARGeo-C8', year: 2020, location: 'Nairobi, Kenya', type: 'Conference', organizer: 'ARGeo', website: 'https://theargeo.org' },
  { id: 'argeo2022', name: 'ARGeo-C9', year: 2022, location: 'Djibouti', type: 'Conference', organizer: 'ARGeo', website: 'https://theargeo.org' },
  { id: 'argeo2024', name: 'ARGeo-C10', year: 2024, location: 'Addis Ababa, Ethiopia', type: 'Conference', organizer: 'ARGeo', website: 'https://theargeo.org' },
  
  // Taiwan Geothermal Symposium
  { id: 'twgeo2022', name: '台灣地熱研討會 2022', year: 2022, location: '台北, Taiwan', type: 'Symposium', organizer: 'ITRI', website: 'https://www.itri.org.tw' },
  { id: 'twgeo2023', name: '台灣地熱研討會 2023', year: 2023, location: '台北, Taiwan', type: 'Symposium', organizer: 'ITRI', website: 'https://www.itri.org.tw' },
  { id: 'twgeo2024', name: '台灣地熱研討會 2024', year: 2024, location: '宜蘭, Taiwan', type: 'Symposium', organizer: '台灣地熱協會', website: 'https://www.geothermal.org.tw' },

  // GeoTHERM Offenburg (World's largest geothermal trade fair)
  { id: 'geotherm2023', name: 'GeoTHERM 2023', year: 2023, location: 'Offenburg, Germany', type: 'Exhibition', organizer: 'Messe Offenburg', website: 'https://www.geotherm-offenburg.de' },
  { id: 'geotherm2024', name: 'GeoTHERM 2024', year: 2024, location: 'Offenburg, Germany', type: 'Exhibition', organizer: 'Messe Offenburg', website: 'https://www.geotherm-offenburg.de' },
  { id: 'geotherm2025', name: 'GeoTHERM 2025', year: 2025, location: 'Offenburg, Germany', type: 'Exhibition', organizer: 'Messe Offenburg', website: 'https://www.geotherm-offenburg.de' },
  { id: 'geotherm2026', name: 'GeoTHERM 2026', year: 2026, location: 'Offenburg, Germany', type: 'Exhibition', organizer: 'Messe Offenburg', website: 'https://www.geotherm-offenburg.de' },
];

// 主要參展廠商資料 (分類整理)
const exhibitors = [
  // === 鑽井/鑽探設備 Drilling ===
  { name: 'Halliburton', country: 'USA', category: 'Drilling', subcategory: 'Services', website: 'https://www.halliburton.com', description: 'Oilfield services, drilling, completion', events: ['wgc2020', 'grc2021', 'grc2022', 'grc2023', 'grc2024'] },
  { name: 'Schlumberger (SLB)', country: 'USA', category: 'Drilling', subcategory: 'Services', website: 'https://www.slb.com', description: 'Energy services, reservoir characterization', events: ['wgc2020', 'grc2021', 'grc2022', 'egc2022', 'grc2023'] },
  { name: 'Baker Hughes', country: 'USA', category: 'Drilling', subcategory: 'Equipment', website: 'https://www.bakerhughes.com', description: 'Drilling systems, turbomachinery', events: ['wgc2020', 'grc2022', 'egc2022', 'grc2024'] },
  { name: 'Weatherford', country: 'USA', category: 'Drilling', subcategory: 'Services', website: 'https://www.weatherford.com', description: 'Well construction, completion', events: ['grc2021', 'grc2022', 'iigce2022'] },
  { name: 'NOV (National Oilwell Varco)', country: 'USA', category: 'Drilling', subcategory: 'Equipment', website: 'https://www.nov.com', description: 'Drilling equipment, downhole tools', events: ['grc2022', 'grc2023', 'grc2024'] },
  { name: 'Epiroc', country: 'Sweden', category: 'Drilling', subcategory: 'Equipment', website: 'https://www.epiroc.com', description: 'Mining and infrastructure drilling', events: ['egc2022', 'grc2023'] },
  { name: 'Herrenknecht', country: 'Germany', category: 'Drilling', subcategory: 'Equipment', website: 'https://www.herrenknecht.com', description: 'Tunnel boring, vertical drilling', events: ['egc2022', 'geo2023', 'geo2024'] },
  { name: 'Boart Longyear', country: 'USA', category: 'Drilling', subcategory: 'Services', website: 'https://www.boartlongyear.com', description: 'Drilling services, products', events: ['grc2021', 'grc2022'] },
  { name: 'Daldrup & Söhne', country: 'Germany', category: 'Drilling', subcategory: 'Services', website: 'https://www.daldrup.eu', description: 'Deep geothermal drilling', events: ['egc2022', 'geo2022', 'geo2023', 'geo2024'] },
  { name: 'Iceland Drilling', country: 'Iceland', category: 'Drilling', subcategory: 'Services', website: 'https://www.icelanddrilling.is', description: 'Geothermal drilling specialist', events: ['wgc2020', 'egc2022', 'wgc2025'] },
  { name: 'KCA Deutag', country: 'UK', category: 'Drilling', subcategory: 'Services', website: 'https://www.kcadeutag.com', description: 'Drilling contractor', events: ['egc2022', 'grc2023'] },
  { name: 'H&P (Helmerich & Payne)', country: 'USA', category: 'Drilling', subcategory: 'Services', website: 'https://www.hpinc.com', description: 'Land drilling contractor', events: ['grc2022', 'grc2023', 'grc2024'] },
  { name: 'Nabors Industries', country: 'USA', category: 'Drilling', subcategory: 'Services', website: 'https://www.nabors.com', description: 'Drilling and rig services', events: ['grc2021', 'grc2022'] },
  { name: 'Quaise Energy', country: 'USA', category: 'Drilling', subcategory: 'Technology', website: 'https://www.quaise.energy', description: 'Millimeter wave drilling technology', events: ['grc2023', 'grc2024', 'sgw2024'] },
  { name: 'GA Drilling', country: 'Slovakia', category: 'Drilling', subcategory: 'Technology', website: 'https://www.gadrilling.com', description: 'Plasma drilling technology', events: ['egc2022', 'grc2023'] },

  // === 發電設備 Power Generation ===
  { name: 'Ormat Technologies', country: 'USA', category: 'Power Generation', subcategory: 'ORC/Binary', website: 'https://www.ormat.com', description: 'Geothermal and recovered energy', events: ['wgc2020', 'grc2021', 'grc2022', 'grc2023', 'grc2024', 'iigce2022', 'iigce2023', 'egc2022'] },
  { name: 'Turboden (Mitsubishi)', country: 'Italy', category: 'Power Generation', subcategory: 'ORC/Binary', website: 'https://www.turboden.com', description: 'ORC systems', events: ['wgc2020', 'egc2022', 'geo2023', 'grc2023'] },
  { name: 'Exergy International', country: 'Italy', category: 'Power Generation', subcategory: 'ORC/Binary', website: 'https://www.exergy-orc.com', description: 'ORC technology', events: ['egc2022', 'grc2022', 'iigce2023'] },
  { name: 'Atlas Copco', country: 'Sweden', category: 'Power Generation', subcategory: 'Turbines', website: 'https://www.atlascopco.com', description: 'Compressors, turbines', events: ['egc2022', 'grc2022', 'iigce2022'] },
  { name: 'Mitsubishi Heavy Industries', country: 'Japan', category: 'Power Generation', subcategory: 'Turbines', website: 'https://www.mhi.com', description: 'Steam turbines, power systems', events: ['wgc2020', 'jgc2022', 'iigce2023', 'grc2024'] },
  { name: 'Toshiba Energy Systems', country: 'Japan', category: 'Power Generation', subcategory: 'Turbines', website: 'https://www.toshiba-energy.com', description: 'Geothermal turbines', events: ['wgc2020', 'jgc2020', 'jgc2022', 'iigce2022', 'iigce2023'] },
  { name: 'Fuji Electric', country: 'Japan', category: 'Power Generation', subcategory: 'Turbines', website: 'https://www.fujielectric.com', description: 'Geothermal power systems', events: ['wgc2020', 'jgc2022', 'jgc2024', 'iigce2023'] },
  { name: 'Ansaldo Energia', country: 'Italy', category: 'Power Generation', subcategory: 'Turbines', website: 'https://www.ansaldoenergia.com', description: 'Power generation equipment', events: ['egc2022', 'wgc2020'] },
  { name: 'GE Vernova', country: 'USA', category: 'Power Generation', subcategory: 'Turbines', website: 'https://www.gevernova.com', description: 'Power generation, grid solutions', events: ['grc2023', 'grc2024'] },
  { name: 'Siemens Energy', country: 'Germany', category: 'Power Generation', subcategory: 'Turbines', website: 'https://www.siemens-energy.com', description: 'Power generation technology', events: ['egc2022', 'geo2023', 'grc2024'] },

  // === 熱泵/地源熱泵 Heat Pumps ===
  { name: 'NIBE', country: 'Sweden', category: 'Heat Pumps', subcategory: 'GSHP', website: 'https://www.nibe.com', description: 'Ground source heat pumps', events: ['egc2022', 'geo2023', 'geo2024'] },
  { name: 'Vaillant', country: 'Germany', category: 'Heat Pumps', subcategory: 'GSHP', website: 'https://www.vaillant.com', description: 'Heating, heat pumps', events: ['egc2022', 'geo2022', 'geo2023'] },
  { name: 'Viessmann', country: 'Germany', category: 'Heat Pumps', subcategory: 'GSHP', website: 'https://www.viessmann.com', description: 'Heating systems, heat pumps', events: ['egc2022', 'geo2022', 'geo2023', 'geo2024'] },
  { name: 'Bosch Thermotechnology', country: 'Germany', category: 'Heat Pumps', subcategory: 'GSHP', website: 'https://www.bosch-thermotechnology.com', description: 'Heating, cooling, hot water', events: ['egc2022', 'geo2023'] },
  { name: 'Danfoss', country: 'Denmark', category: 'Heat Pumps', subcategory: 'Components', website: 'https://www.danfoss.com', description: 'Climate and energy solutions', events: ['egc2022', 'geo2023', 'grc2023'] },
  { name: 'Waterfurnace', country: 'USA', category: 'Heat Pumps', subcategory: 'GSHP', website: 'https://www.waterfurnace.com', description: 'Geothermal heat pumps', events: ['grc2021', 'grc2022', 'grc2023'] },
  { name: 'Carrier', country: 'USA', category: 'Heat Pumps', subcategory: 'GSHP', website: 'https://www.carrier.com', description: 'HVAC, refrigeration', events: ['grc2022', 'grc2023'] },
  { name: 'Daikin', country: 'Japan', category: 'Heat Pumps', subcategory: 'GSHP', website: 'https://www.daikin.com', description: 'Air conditioning, heat pumps', events: ['jgc2022', 'egc2022'] },

  // === 探勘/地球物理 Exploration ===
  { name: 'CGG', country: 'France', category: 'Exploration', subcategory: 'Geophysics', website: 'https://www.cgg.com', description: 'Geoscience, data services', events: ['wgc2020', 'egc2022', 'grc2022'] },
  { name: 'TGS', country: 'Norway', category: 'Exploration', subcategory: 'Geophysics', website: 'https://www.tgs.com', description: 'Geoscience data products', events: ['grc2022', 'grc2023'] },
  { name: 'Zonge International', country: 'USA', category: 'Exploration', subcategory: 'Geophysics', website: 'https://www.zonge.com', description: 'Geophysical instruments, surveys', events: ['grc2021', 'grc2022', 'grc2023', 'grc2024'] },
  { name: 'Quantec Geoscience', country: 'Canada', category: 'Exploration', subcategory: 'Geophysics', website: 'https://www.quantecgeoscience.com', description: 'Geophysical surveys', events: ['grc2022', 'grc2023'] },
  { name: 'Geotech Instruments', country: 'USA', category: 'Exploration', subcategory: 'Instruments', website: 'https://www.geotechinstruments.com', description: 'Seismic instruments', events: ['grc2021', 'grc2022'] },
  { name: 'Geometrics', country: 'USA', category: 'Exploration', subcategory: 'Instruments', website: 'https://www.geometrics.com', description: 'Seismic, magnetic instruments', events: ['grc2022', 'grc2023', 'grc2024'] },
  { name: 'IESE (Innovative Earth Science)', country: 'USA', category: 'Exploration', subcategory: 'Services', website: 'https://www.innovativeearthscience.com', description: 'Geothermal exploration', events: ['grc2022', 'grc2023'] },
  { name: 'Zanskar Geothermal', country: 'USA', category: 'Exploration', subcategory: 'AI/ML', website: 'https://www.zanskar.us', description: 'AI-driven geothermal exploration', events: ['grc2023', 'grc2024', 'sgw2024'] },

  // === 地熱開發商 Developers ===
  { name: 'Enel Green Power', country: 'Italy', category: 'Developer', subcategory: 'IPP', website: 'https://www.enelgreenpower.com', description: 'Renewable energy developer', events: ['wgc2020', 'egc2022', 'grc2022', 'grc2023'] },
  { name: 'Chevron', country: 'USA', category: 'Developer', subcategory: 'O&G', website: 'https://www.chevron.com', description: 'Energy company, geothermal projects', events: ['grc2022', 'grc2023', 'iigce2023'] },
  { name: 'Star Energy', country: 'Indonesia', category: 'Developer', subcategory: 'IPP', website: 'https://www.starenergy.co.id', description: 'Indonesian geothermal developer', events: ['iigce2020', 'iigce2021', 'iigce2022', 'iigce2023', 'iigce2024'] },
  { name: 'Pertamina Geothermal Energy', country: 'Indonesia', category: 'Developer', subcategory: 'State', website: 'https://www.pgeindonesia.com', description: 'Indonesian state geothermal company', events: ['iigce2020', 'iigce2021', 'iigce2022', 'iigce2023', 'iigce2024', 'wgc2020'] },
  { name: 'Calpine', country: 'USA', category: 'Developer', subcategory: 'IPP', website: 'https://www.calpine.com', description: 'The Geysers operator', events: ['grc2021', 'grc2022', 'grc2023', 'grc2024'] },
  { name: 'ENGIE', country: 'France', category: 'Developer', subcategory: 'IPP', website: 'https://www.engie.com', description: 'Energy company', events: ['egc2022', 'grc2023'] },
  { name: 'Fervo Energy', country: 'USA', category: 'Developer', subcategory: 'EGS', website: 'https://www.fervoenergy.com', description: 'Enhanced geothermal systems', events: ['grc2022', 'grc2023', 'grc2024', 'sgw2023', 'sgw2024'] },
  { name: 'Eavor', country: 'Canada', category: 'Developer', subcategory: 'Closed Loop', website: 'https://www.eavor.com', description: 'Closed-loop geothermal', events: ['grc2022', 'grc2023', 'egc2022', 'geo2023', 'grc2024'] },
  { name: 'Sage Geosystems', country: 'USA', category: 'Developer', subcategory: 'EGS', website: 'https://www.sagegeosystems.com', description: 'Geopressured geothermal', events: ['grc2023', 'grc2024', 'sgw2024'] },
  { name: 'Baseload Capital', country: 'Sweden', category: 'Developer', subcategory: 'Investment', website: 'https://www.baseloadcap.com', description: 'Geothermal investment', events: ['wgc2020', 'egc2022', 'grc2023', 'twgeo2023'] },
  { name: 'Reykjavik Geothermal', country: 'Iceland', category: 'Developer', subcategory: 'IPP', website: 'https://www.rg.is', description: 'Geothermal development', events: ['wgc2020', 'argeo2022'] },
  { name: 'Contact Energy', country: 'New Zealand', category: 'Developer', subcategory: 'IPP', website: 'https://www.contact.co.nz', description: 'NZ geothermal operator', events: ['nzgw2021', 'nzgw2022', 'nzgw2023', 'wgc2020'] },
  { name: 'Mercury NZ', country: 'New Zealand', category: 'Developer', subcategory: 'IPP', website: 'https://www.mercury.co.nz', description: 'NZ geothermal operator', events: ['nzgw2021', 'nzgw2022', 'nzgw2023'] },
  { name: 'KenGen', country: 'Kenya', category: 'Developer', subcategory: 'State', website: 'https://www.kengen.co.ke', description: 'Kenya geothermal developer', events: ['wgc2020', 'argeo2020', 'argeo2022', 'argeo2024'] },
  { name: 'GDC (Geothermal Development Company)', country: 'Kenya', category: 'Developer', subcategory: 'State', website: 'https://www.gdc.co.ke', description: 'Kenya geothermal development', events: ['argeo2020', 'argeo2022', 'argeo2024', 'wgc2020'] },

  // === 工程/顧問 Engineering/Consulting ===
  { name: 'Jacobs', country: 'USA', category: 'Engineering', subcategory: 'Consulting', website: 'https://www.jacobs.com', description: 'Engineering consulting', events: ['grc2021', 'grc2022', 'grc2023'] },
  { name: 'WSP', country: 'Canada', category: 'Engineering', subcategory: 'Consulting', website: 'https://www.wsp.com', description: 'Engineering services', events: ['egc2022', 'grc2022'] },
  { name: 'Mannvit', country: 'Iceland', category: 'Engineering', subcategory: 'Geothermal', website: 'https://www.mannvit.com', description: 'Geothermal engineering', events: ['wgc2020', 'egc2022', 'grc2023'] },
  { name: 'ÍSOR (Iceland GeoSurvey)', country: 'Iceland', category: 'Engineering', subcategory: 'Research', website: 'https://www.isor.is', description: 'Geothermal research, consulting', events: ['wgc2020', 'egc2022'] },
  { name: 'GeothermEx (Schlumberger)', country: 'USA', category: 'Engineering', subcategory: 'Consulting', website: 'https://www.slb.com', description: 'Geothermal consulting', events: ['grc2021', 'grc2022', 'iigce2022'] },
  { name: 'Verkís', country: 'Iceland', category: 'Engineering', subcategory: 'Consulting', website: 'https://www.verkis.com', description: 'Engineering consulting', events: ['wgc2020', 'egc2022'] },
  { name: 'Burgundy Geothermal', country: 'Philippines', category: 'Engineering', subcategory: 'Consulting', website: 'https://www.burgundygeothermal.com', description: 'Geothermal consulting', events: ['iigce2022', 'iigce2023'] },

  // === 井下設備/工具 Downhole ===
  { name: 'Welltec', country: 'Denmark', category: 'Downhole', subcategory: 'Tools', website: 'https://www.welltec.com', description: 'Well intervention, completion', events: ['grc2022', 'grc2023', 'egc2022'] },
  { name: 'Tendeka', country: 'UK', category: 'Downhole', subcategory: 'Completion', website: 'https://www.tendeka.com', description: 'Completion technology', events: ['grc2022', 'grc2023'] },
  { name: 'Altus Intervention', country: 'Norway', category: 'Downhole', subcategory: 'Tools', website: 'https://www.altusintervention.com', description: 'Well intervention', events: ['egc2022', 'grc2023'] },
  { name: 'Hunting Energy Services', country: 'USA', category: 'Downhole', subcategory: 'Products', website: 'https://www.hunting-intl.com', description: 'OCTG, connections', events: ['grc2022', 'grc2023'] },

  // === 監測/感測 Monitoring/Sensors ===
  { name: 'Silixa', country: 'UK', category: 'Monitoring', subcategory: 'DAS/DTS', website: 'https://www.silixa.com', description: 'Distributed sensing', events: ['grc2022', 'grc2023', 'grc2024', 'egc2022'] },
  { name: 'Luna Innovations', country: 'USA', category: 'Monitoring', subcategory: 'Fiber Optic', website: 'https://www.lunainc.com', description: 'Fiber optic sensing', events: ['grc2022', 'grc2023'] },
  { name: 'Pruett Industries', country: 'USA', category: 'Monitoring', subcategory: 'Instruments', website: 'https://www.pruettindustries.com', description: 'Temperature, pressure tools', events: ['grc2021', 'grc2022', 'grc2023', 'grc2024'] },
  { name: 'Kuster Company', country: 'USA', category: 'Monitoring', subcategory: 'Instruments', website: 'https://www.kfrco.com', description: 'Downhole gauges', events: ['grc2022', 'grc2023'] },

  // === 材料/防腐蝕 Materials ===
  { name: 'Curran International', country: 'USA', category: 'Materials', subcategory: 'Corrosion', website: 'https://www.curran-intl.com', description: 'Corrosion control, coatings', events: ['grc2021', 'grc2022', 'grc2023', 'grc2024'] },
  { name: 'Cormetech', country: 'USA', category: 'Materials', subcategory: 'Emissions', website: 'https://www.cormetech.com', description: 'Emissions control', events: ['grc2022', 'grc2023'] },
  { name: 'Sandvik', country: 'Sweden', category: 'Materials', subcategory: 'Alloys', website: 'https://www.sandvik.com', description: 'High-performance materials', events: ['egc2022', 'grc2023'] },

  // === 軟體/數位 Software ===
  { name: 'Volsung (NREL)', country: 'USA', category: 'Software', subcategory: 'Simulation', website: 'https://www.nrel.gov', description: 'Geothermal simulation', events: ['sgw2023', 'sgw2024', 'grc2023'] },
  { name: 'Leapfrog (Seequent)', country: 'New Zealand', category: 'Software', subcategory: '3D Modeling', website: 'https://www.seequent.com', description: '3D geological modeling', events: ['nzgw2022', 'grc2022', 'grc2023'] },
  { name: 'Petrel (SLB)', country: 'USA', category: 'Software', subcategory: 'Reservoir', website: 'https://www.slb.com', description: 'Reservoir modeling', events: ['grc2022', 'grc2023'] },
  { name: 'CMG (Computer Modelling Group)', country: 'Canada', category: 'Software', subcategory: 'Reservoir', website: 'https://www.cmgl.ca', description: 'Reservoir simulation', events: ['grc2022', 'sgw2023'] },

  // === 研究機構 Research ===
  { name: 'NREL', country: 'USA', category: 'Research', subcategory: 'National Lab', website: 'https://www.nrel.gov', description: 'US National Renewable Energy Lab', events: ['grc2021', 'grc2022', 'grc2023', 'grc2024', 'sgw2023', 'sgw2024'] },
  { name: 'Sandia National Labs', country: 'USA', category: 'Research', subcategory: 'National Lab', website: 'https://www.sandia.gov', description: 'Geothermal R&D', events: ['grc2022', 'grc2023', 'sgw2023'] },
  { name: 'LBNL', country: 'USA', category: 'Research', subcategory: 'National Lab', website: 'https://www.lbl.gov', description: 'Lawrence Berkeley National Lab', events: ['grc2022', 'sgw2023', 'sgw2024'] },
  { name: 'GFZ Potsdam', country: 'Germany', category: 'Research', subcategory: 'Institute', website: 'https://www.gfz-potsdam.de', description: 'German Research Centre for Geosciences', events: ['egc2022', 'geo2023', 'wgc2020'] },
  { name: 'AIST', country: 'Japan', category: 'Research', subcategory: 'Institute', website: 'https://www.aist.go.jp', description: 'Japan geothermal research', events: ['jgc2020', 'jgc2022', 'jgc2024'] },
  { name: 'ITRI', country: 'Taiwan', category: 'Research', subcategory: 'Institute', website: 'https://www.itri.org.tw', description: '工業技術研究院', events: ['twgeo2022', 'twgeo2023', 'twgeo2024'] },
  { name: 'GNS Science', country: 'New Zealand', category: 'Research', subcategory: 'Institute', website: 'https://www.gns.cri.nz', description: 'NZ geoscience research', events: ['nzgw2021', 'nzgw2022', 'nzgw2023', 'wgc2020'] },

  // === 台灣廠商 Taiwan ===
  { name: '台灣中油', country: 'Taiwan', category: 'Developer', subcategory: 'State', website: 'https://www.cpc.com.tw', description: 'CPC Corporation', events: ['twgeo2022', 'twgeo2023', 'twgeo2024'] },
  { name: '台電', country: 'Taiwan', category: 'Developer', subcategory: 'State', website: 'https://www.taipower.com.tw', description: 'Taiwan Power Company', events: ['twgeo2022', 'twgeo2023', 'twgeo2024'] },
  { name: '結元能源', country: 'Taiwan', category: 'Developer', subcategory: 'IPP', website: 'https://www.geowell.com.tw', description: 'Geowell Energy', events: ['twgeo2023', 'twgeo2024'] },
  { name: '倍速羅得', country: 'Taiwan', category: 'Developer', subcategory: 'IPP', website: 'https://www.baseloadtw.com', description: 'Baseload Power Taiwan', events: ['twgeo2023', 'twgeo2024'] },
  { name: '宜元股份', country: 'Taiwan', category: 'Developer', subcategory: 'IPP', website: '', description: '宜蘭地熱開發', events: ['twgeo2024'] },

  // === 大陸廠商 China ===
  { name: '中國石化', country: 'China', category: 'Developer', subcategory: 'State', website: 'https://www.sinopec.com', description: 'Sinopec 地熱開發', events: ['cgc2020', 'cgc2022', 'cgc2023', 'wgc2020'] },
  { name: '中國石油', country: 'China', category: 'Developer', subcategory: 'State', website: 'https://www.cnpc.com.cn', description: 'CNPC 地熱業務', events: ['cgc2020', 'cgc2022', 'cgc2023'] },
  { name: '華清地熱', country: 'China', category: 'Developer', subcategory: 'IPP', website: '', description: 'Huaqing Geothermal', events: ['cgc2022', 'cgc2023'] },
  { name: '北京市地質工程公司', country: 'China', category: 'Engineering', subcategory: 'Services', website: '', description: 'Beijing Geological Engineering', events: ['cgc2020', 'cgc2022'] },
  { name: '天津地熱院', country: 'China', category: 'Research', subcategory: 'Institute', website: '', description: 'Tianjin Geothermal Institute', events: ['cgc2020', 'cgc2022', 'cgc2023'] },

  // === GeoTHERM 2026 Offenburg Exhibitors ===
  { name: 'ADC ENERGY Ltd.', country: 'UK', category: 'Drilling', subcategory: 'Services', website: '', description: 'Drilling Rig Inspection and Operational Assurance', events: ['geotherm2026'] },
  { name: 'ADLER Arbeitsmaschinen GmbH', country: 'Germany', category: 'Drilling', subcategory: 'Equipment', website: '', description: 'Bohrgeräte für Erdwärme und Brunnenbau', events: ['geotherm2026'] },
  { name: 'AFPG French Geothermal Association', country: 'France', category: 'Association', subcategory: 'Trade Body', website: '', description: 'French geothermal association of professionals', events: ['geotherm2026'] },
  { name: 'AGIVA International', country: 'Belgium', category: 'Drilling', subcategory: 'Equipment', website: '', description: 'Drilling Rigs, Mud Recycling, Drill Bits', events: ['geotherm2026'] },
  { name: 'Allengra GmbH', country: 'Germany', category: 'Monitoring', subcategory: 'Instruments', website: '', description: 'Ultrasonic Flow Meters, Smart Control Valves', events: ['geotherm2026'] },
  { name: 'Allied Associates Geophysical', country: 'Germany', category: 'Exploration', subcategory: 'Geophysics', website: '', description: 'Geophysikalische Messgeräte', events: ['geotherm2026'] },
  { name: 'Archer Oiltools AS', country: 'Norway', category: 'Drilling', subcategory: 'Tools', website: '', description: 'Whipstock, Cement technology, Iceland Drilling rigs', events: ['geotherm2026'] },
  { name: 'ASAtec GmbH', country: 'Germany', category: 'Drilling', subcategory: 'Equipment', website: '', description: 'Siebanlage zur Aufbereitung von Bohrgut', events: ['geotherm2026'] },
  { name: 'AW Drilling Services', country: 'Germany', category: 'Drilling', subcategory: 'Services', website: '', description: 'Bohrspülungen, Chemikalien, Feststoffkontrolle', events: ['geotherm2026'] },
  { name: 'Axon Energy Services', country: 'USA', category: 'Drilling', subcategory: 'Equipment', website: '', description: 'Drilling equipment', events: ['geotherm2026'] },
  { name: 'BAUER MAT Slurry Handling', country: 'Germany', category: 'Drilling', subcategory: 'Equipment', website: '', description: 'Entsandungsanlage, Injektionsanlage', events: ['geotherm2026'] },
  { name: 'BAYER CONSTRUCT ZRT.', country: 'Hungary', category: 'Drilling', subcategory: 'Services', website: '', description: 'Drilling Technology, Equipment, Geophysics', events: ['geotherm2026'] },
  { name: 'BC drilling tools GmbH', country: 'Germany', category: 'Drilling', subcategory: 'Equipment', website: '', description: 'Drilling Equipment', events: ['geotherm2026'] },
  { name: 'Bell Geospace Limited', country: 'UK', category: 'Exploration', subcategory: 'Geophysics', website: '', description: 'Geophysikalische Messungen', events: ['geotherm2026'] },
  { name: 'BLM Bohrlochmessungen', country: 'Germany', category: 'Monitoring', subcategory: 'Logging', website: '', description: 'Geophysikalische Bohrlochmessungen', events: ['geotherm2026'] },
  { name: 'BLZ Geotechnik GmbH', country: 'Germany', category: 'Engineering', subcategory: 'Software', website: '', description: 'Erdwärmesonde, Bemessungssoftware', events: ['geotherm2026'] },
  { name: 'Borobotics AG', country: 'Switzerland', category: 'Drilling', subcategory: 'Technology', website: '', description: 'Geothermie-Bohrer für oberflächennahes Bohren', events: ['geotherm2026'] },
  { name: 'Brenntag Energy Services', country: 'Poland', category: 'Materials', subcategory: 'Fluids', website: '', description: 'Wärmeträgerflüssigkeit, ORC Anlagen', events: ['geotherm2026'] },
  { name: 'Bundesverband Geothermie', country: 'Germany', category: 'Association', subcategory: 'Trade Body', website: 'https://www.geothermie.de', description: 'German Geothermal Association', events: ['geotherm2026', 'geo2022', 'geo2023', 'geo2024'] },
  { name: 'Canopus Drilling Solutions', country: 'Netherlands', category: 'Drilling', subcategory: 'Technology', website: '', description: 'Directional Steel Shot Drilling', events: ['geotherm2026'] },
  { name: 'COMDRILL Bohrausrüstungen', country: 'Germany', category: 'Drilling', subcategory: 'Equipment', website: '', description: 'Erdwärmesondenpacker, Preventer, Bohrausrüstungen', events: ['geotherm2026'] },
  { name: 'Con-Slot Screens GmbH', country: 'Germany', category: 'Downhole', subcategory: 'Screens', website: '', description: 'Filter and Sieve Technology, Wellbore Sand Screens', events: ['geotherm2026'] },
  { name: 'Conrad Drilling Equipment', country: 'Netherlands', category: 'Drilling', subcategory: 'Equipment', website: '', description: 'Vertical drilling rigs, Double drill head', events: ['geotherm2026'] },
  { name: 'COWI Geothermie GmbH', country: 'Germany', category: 'Engineering', subcategory: 'Consulting', website: '', description: 'Ingenieur-Dienstleistungen Bohrtechnik/Obertageanlage', events: ['geotherm2026'] },
  { name: 'Deep Drill', country: 'Netherlands', category: 'Drilling', subcategory: 'Services', website: '', description: 'Drilling Technology, Service, Equipment', events: ['geotherm2026'] },
  { name: 'DHI WASY GmbH', country: 'Germany', category: 'Software', subcategory: 'Simulation', website: '', description: 'FEFLOW - Groundwater Modelling Software', events: ['geotherm2026'] },
  { name: 'DMT GmbH & Co. KG', country: 'Germany', category: 'Exploration', subcategory: 'Seismic', website: '', description: 'Vibrotruck zur seismischen Erkundung', events: ['geotherm2026'] },
  { name: 'Dornier Group GmbH', country: 'Germany', category: 'Engineering', subcategory: 'Consulting', website: '', description: 'Planung & Consulting, Beratung', events: ['geotherm2026'] },
  { name: 'Downhole Equipment & Services', country: 'Germany', category: 'Downhole', subcategory: 'Tools', website: '', description: 'Liner Hanger, Inflatable Packer, Gravel Pack Tools', events: ['geotherm2026'] },
  { name: 'DrillTec GUT', country: 'Germany', category: 'Drilling', subcategory: 'Services', website: '', description: 'Tief- und Horizontalbohrungen für Geothermie', events: ['geotherm2026'] },
  { name: 'drillwerk GmbH', country: 'Germany', category: 'Drilling', subcategory: 'Equipment', website: '', description: 'Cementing Accessories, Drill Bits, BHA Components', events: ['geotherm2026'] },
  { name: 'Eavor GmbH', country: 'Germany', category: 'Developer', subcategory: 'Closed Loop', website: 'https://www.eavor.com', description: 'Tiefengeothermie / Eavor Loop closed-loop system', events: ['geotherm2026', 'grc2022', 'grc2023', 'egc2022'] },
  { name: 'EGEC', country: 'Belgium', category: 'Association', subcategory: 'Trade Body', website: '', description: 'European Geothermal Energy Council', events: ['geotherm2026'] },
  { name: 'Erdwerk GmbH', country: 'Germany', category: 'Engineering', subcategory: 'Consulting', website: '', description: 'Hydrogeologie, Geothermie', events: ['geotherm2026'] },
  { name: 'EV (Geothermal Camera)', country: 'UK', category: 'Monitoring', subcategory: 'Camera', website: '', description: 'High Temperature Downhole Camera, Well Diagnosis', events: ['geotherm2026'] },
  { name: 'Exalo Drilling S.A.', country: 'Poland', category: 'Drilling', subcategory: 'Services', website: '', description: 'Well engineering, onshore and geothermal drilling', events: ['geotherm2026'] },
  { name: 'Expro North Sea', country: 'UK', category: 'Drilling', subcategory: 'Services', website: '', description: 'Well construction, Flow Management, Intervention', events: ['geotherm2026'] },
  { name: 'Fangmann Energy Services', country: 'Germany', category: 'Drilling', subcategory: 'Services', website: '', description: 'Bohrservice', events: ['geotherm2026'] },
  { name: 'Fischer Spezialbaustoffe', country: 'Germany', category: 'Materials', subcategory: 'Cement', website: '', description: 'Geothermisches Verpressmaterial', events: ['geotherm2026'] },
  { name: 'Fraunhofer IEG', country: 'Germany', category: 'Research', subcategory: 'Institute', website: 'https://www.ieg.fraunhofer.de', description: 'Fraunhofer Institution for Energy Infrastructures', events: ['geotherm2026', 'geo2023', 'geo2024'] },
  { name: 'Funke Wärmeaustauscher', country: 'Germany', category: 'Power Generation', subcategory: 'Heat Exchanger', website: '', description: 'Plattenwärmetauscher, Rohbündelwärmetauscher', events: ['geotherm2026'] },
  { name: 'Future Pipe Industries', country: 'Netherlands', category: 'Materials', subcategory: 'Pipes', website: '', description: 'Casing and Downhole piping, Glass fibre Epoxy', events: ['geotherm2026'] },
  { name: 'G.E.O.S. Ingenieurgesellschaft', country: 'Germany', category: 'Engineering', subcategory: 'Consulting', website: '', description: 'Bohrplanung, Geologische Untersuchungen, 3D-Modellierung', events: ['geotherm2026'] },
  { name: 'GEOBIT Energieprojekte', country: 'Germany', category: 'Engineering', subcategory: 'Consulting', website: '', description: 'Beratung, Planung, Gutachten, Wärmenetzplanung', events: ['geotherm2026'] },
  { name: 'geoENERGIE Konzept GmbH', country: 'Germany', category: 'Engineering', subcategory: 'Consulting', website: '', description: 'Machbarkeitsstudien, Simulation, Monitoring', events: ['geotherm2026'] },
  { name: 'GeoEnergy Celle e.V.', country: 'Germany', category: 'Association', subcategory: 'Cluster', website: '', description: 'Bohrtechnologie, Beratung für tiefe/mitteltiefe Geothermie', events: ['geotherm2026'] },
  { name: 'Geofizyka Torun S.A.', country: 'Poland', category: 'Exploration', subcategory: 'Seismic', website: '', description: 'Seismic data acquisition, processing, well logging', events: ['geotherm2026'] },
  { name: 'geomecon GmbH', country: 'Germany', category: 'Engineering', subcategory: 'Consulting', website: '', description: 'Geomechanische Beratung, induzierte Seismizität', events: ['geotherm2026'] },
  { name: 'GEORG Geothermal Research Cluster', country: 'Iceland', category: 'Research', subcategory: 'Cluster', website: '', description: 'Geothermal Research Cluster Iceland', events: ['geotherm2026'] },
  { name: 'Geotec Bohrtechnik GmbH', country: 'Germany', category: 'Drilling', subcategory: 'Equipment', website: '', description: 'Bohrgeräte, Maschinenbau, Sondermaschinenbau', events: ['geotherm2026'] },
  { name: 'Geothermie-Schweiz', country: 'Switzerland', category: 'Association', subcategory: 'Trade Body', website: '', description: 'Swiss Geothermal Association', events: ['geotherm2026'] },
  { name: 'GFZ Potsdam', country: 'Germany', category: 'Research', subcategory: 'Institute', website: 'https://www.gfz-potsdam.de', description: 'Helmholtz-Zentrum für Geoforschung', events: ['geotherm2026', 'egc2022', 'geo2023'] },
  { name: 'GHEtool', country: 'Belgium', category: 'Software', subcategory: 'Design', website: '', description: 'GHEtool Cloud - design borefields', events: ['geotherm2026'] },
  { name: 'Halliburton Germany', country: 'Germany', category: 'Drilling', subcategory: 'Services', website: 'https://www.halliburton.com', description: 'Drill Bits, Drilling services', events: ['geotherm2026', 'grc2021', 'grc2022', 'grc2023', 'grc2024'] },
  { name: 'HakaGerodur AG', country: 'Switzerland', category: 'Heat Pumps', subcategory: 'Components', website: '', description: 'Erdwärmesonden & Zubehör', events: ['geotherm2026'] },
  { name: 'Hartmann Valves GmbH', country: 'Germany', category: 'Downhole', subcategory: 'Valves', website: '', description: 'Kugelhähne, Bohrlochköpfe', events: ['geotherm2026'] },
  { name: 'Heidelberg Materials AG', country: 'Germany', category: 'Materials', subcategory: 'Cement', website: '', description: 'Verfüllmaterial für Geothermie und Brunnenbau', events: ['geotherm2026'] },
  { name: 'Helmerich & Payne Germany', country: 'Germany', category: 'Drilling', subcategory: 'Services', website: 'https://www.hpinc.com', description: 'Bohrtechnik, Bohrausrüstung', events: ['geotherm2026', 'grc2022', 'grc2023', 'grc2024'] },
  { name: 'Herrenknecht Vertical', country: 'Germany', category: 'Drilling', subcategory: 'Equipment', website: 'https://www.herrenknecht.com', description: 'Tiefbohrrigs, VibroTruck', events: ['geotherm2026', 'egc2022', 'geo2023', 'geo2024'] },
  { name: 'Hunting (UK)', country: 'UK', category: 'Drilling', subcategory: 'Services', website: '', description: 'Brunnen- und Erdwärmebohrunternehmen', events: ['geotherm2026'] },
  { name: 'Iceland Drilling Company', country: 'Iceland', category: 'Drilling', subcategory: 'Services', website: 'https://www.icelanddrilling.is', description: 'Geothermal (SHR) Deep Drilling', events: ['geotherm2026', 'wgc2020', 'egc2022'] },
  { name: 'Ignis H2 Energy Inc.', country: 'USA', category: 'Developer', subcategory: 'IPP', website: '', description: 'High enthalpy geothermal for power production', events: ['geotherm2026'] },
  { name: 'Inco-Drilling B.V.', country: 'Netherlands', category: 'Drilling', subcategory: 'Directional', website: '', description: 'Directional Drilling and Well Planning Services', events: ['geotherm2026'] },
  { name: 'INTEC GMK GmbH', country: 'Germany', category: 'Power Generation', subcategory: 'ORC', website: '', description: 'Hersteller von ORC-Kraftwerken', events: ['geotherm2026'] },
  { name: 'Jansen AG', country: 'Switzerland', category: 'Heat Pumps', subcategory: 'Probes', website: '', description: 'Erdwärmesonden, Verteilerschächte', events: ['geotherm2026'] },
  { name: 'JFE Steel Corporation', country: 'Japan', category: 'Materials', subcategory: 'Steel', website: '', description: 'Steel Pipe Manufacturer', events: ['geotherm2026'] },
  { name: 'Johnson Screens SAS', country: 'France', category: 'Downhole', subcategory: 'Screens', website: '', description: 'Water well and Geothermal screens', events: ['geotherm2026'] },
  { name: 'K-UTEC AG', country: 'Germany', category: 'Engineering', subcategory: 'Consulting', website: '', description: 'Genehmigungsverfahren, seismische Überwachung, Lithium', events: ['geotherm2026'] },
  { name: 'KLEMM Bohrtechnik', country: 'Germany', category: 'Drilling', subcategory: 'Equipment', website: '', description: 'Bohrgeräte, Bohrausrüstung', events: ['geotherm2026'] },
  { name: 'KOLLER Maschinen', country: 'Germany', category: 'Drilling', subcategory: 'Equipment', website: '', description: 'Bohrgeräte, Bohrausrüstung', events: ['geotherm2026'] },
  { name: 'LIAG Leibniz-Institut', country: 'Germany', category: 'Research', subcategory: 'Institute', website: '', description: 'Geothermisches Informationssystem (GEOTIS)', events: ['geotherm2026'] },
  { name: 'Nippon Steel Corporation', country: 'Japan', category: 'Materials', subcategory: 'Steel', website: '', description: 'Drilling and Reservoir Exploration Technology', events: ['geotherm2026'] },
  { name: 'NORDMEYER TECHNOLOGIES', country: 'Germany', category: 'Drilling', subcategory: 'Equipment', website: '', description: 'Bohrgerät', events: ['geotherm2026'] },
  { name: 'NOV Germany', country: 'Germany', category: 'Drilling', subcategory: 'Equipment', website: 'https://www.nov.com', description: 'Well completion equipment, services', events: ['geotherm2026', 'grc2022', 'grc2023', 'grc2024'] },
  { name: 'Orcan Energy AG', country: 'Germany', category: 'Power Generation', subcategory: 'ORC', website: '', description: 'ORC-Module zur Stromerzeugung aus Wärme', events: ['geotherm2026'] },
  { name: 'Rock Flow Dynamics', country: 'UK', category: 'Software', subcategory: 'Reservoir', website: '', description: 'tNavigator Reservoir Modelling Software', events: ['geotherm2026'] },
  { name: 'Seequent', country: 'USA', category: 'Software', subcategory: '3D Modeling', website: 'https://www.seequent.com', description: 'Exploration, Geophysics, Geology Software', events: ['geotherm2026', 'nzgw2022', 'grc2022', 'grc2023'] },
  { name: 'Silixa (UK)', country: 'UK', category: 'Monitoring', subcategory: 'DAS/DTS', website: 'https://www.silixa.com', description: 'Distributed sensing fiber optics', events: ['geotherm2026', 'grc2022', 'grc2023', 'grc2024'] },
];

module.exports = { events, exhibitors };
