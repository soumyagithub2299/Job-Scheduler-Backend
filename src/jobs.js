const pool = require('./db');
const { scheduleJob } = require('./scheduler');

async function loadJobs() {
  try {
    const result = await pool.query('SELECT * FROM jobs');
    result.rows.forEach(scheduleJob);
  } catch (err) {
    console.error('Error loading jobs:', err);
  }
}

module.exports = loadJobs;
