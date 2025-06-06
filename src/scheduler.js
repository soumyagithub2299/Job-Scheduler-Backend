const cron = require('node-cron');

function scheduleJob(job) {
  let cronExpression;

  if (job.type === 'hourly') {
    cronExpression = `${job.minute || 0} * * * *`; // every hour at given minute
  } else if (job.type === 'daily') {
    cronExpression = `${job.minute || 0} ${job.hour || 0} * * *`; // every day
  } else if (job.type === 'weekly') {
    cronExpression = `${job.minute || 0} ${job.hour || 0} * * ${job.day_of_week}`; // weekly
  } else {
    console.error('Unsupported job type');
    return;
  }

  cron.schedule(cronExpression, () => {
    console.log(`🟢 Job "${job.name}" triggered: Hello World`);
    // You can write to file or call any external task here
  }, {
    timezone: 'Asia/Kolkata'  // Adjust timezone as needed
  });

  console.log(`🔔 Scheduled "${job.name}" with cron: ${cronExpression}`);
}

module.exports = { scheduleJob };
