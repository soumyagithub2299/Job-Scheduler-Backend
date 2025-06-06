const express = require('express');
const router = express.Router();
const pool = require('../db');
const { scheduleJob } = require('../scheduler');

// Create a new job
router.post('/', async (req, res) => {
  const { name, type, minute, hour, day_of_week } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO jobs (name, type, minute, hour, day_of_week) 
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [name, type, minute || null, hour || null, day_of_week || null]
    );

    const job = result.rows[0];
    scheduleJob(job); // Schedule immediately

    res.status(201).json({ message: 'Job scheduled successfully', job });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to schedule job' });
  }
});

module.exports = router;
