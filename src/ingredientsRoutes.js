const ingredientsController = require('./controllers/ingredientsController');

const ingredientsRoutes = [
  {
    method: 'POST',
    path: '/api/ingredients/detect',
    handler: ingredientsController.detectIngredients,
  },
  // Add other ingredients routes as needed
];

module.exports = ingredientsRoutes;
