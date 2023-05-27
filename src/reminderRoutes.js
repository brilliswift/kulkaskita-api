const reminderController = require('./controllers/reminderController');

const reminderRoutes = [
  {
    method: 'GET',
    path: '/api/reminders',
    handler: reminderController.getReminders,
  },
  {
    method: 'POST',
    path: '/api/reminders',
    handler: reminderController.createReminder,
  },
  // Add other reminder routes as needed
];

module.exports = reminderRoutes;
