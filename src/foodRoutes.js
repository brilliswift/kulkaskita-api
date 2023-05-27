const foodController = require('../controllers/foodController');


const foodRoutes = [
  {
    method: 'GET',
    path: '/api/food',
    handler: foodController.getAllFood,
  },
  {
    method: 'POST',
    path: '/api/food',
    handler: foodController.createFood,
  },
  {
    method: 'GET',
    path: '/api/food/{id}',
    handler: foodController.getFoodById,
  },
  {
    method: 'PUT',
    path: '/api/food/{id}',
    handler: foodController.updateFoodById,
  },
  {
    method: 'DELETE',
    path: '/api/food/{id}',
    handler: foodController.deleteFoodById,
  },
];

module.exports = foodRoutes;
