const express = require('express');
require('dotenv').config();
const app = express();
const loadJobs = require('./src/jobs');

app.use(express.json());

app.use('/api/jobs', require('./src/routes/jobs'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  await loadJobs(); // Load & schedule existing jobs
});
