const Food = require('../models/food');

// Get all food items
const getAllFood = async (request, h) => {
  try {
    const foodItems = await Food.find();
    return h.response(foodItems).code(200);
  } catch (error) {
    return h.response({ error: 'Internal server error' }).code(500);
  }
};

// Create a new food item
const createFood = async (request, h) => {
  try {
    const { name, description } = request.payload;
    const foodItem = await Food.create({ name, description });
    return h.response(foodItem).code(201);
  } catch (error) {
    return h.response({ error: 'Internal server error' }).code(500);
  }
};

// Get a food item by ID
const getFoodById = async (request, h) => {
  try {
    const { id } = request.params;
    const foodItem = await Food.findById(id);
    if (!foodItem) {
      return h.response({ error: 'Food item not found' }).code(404);
    }
    return h.response(foodItem).code(200);
  } catch (error) {
    return h.response({ error: 'Internal server error' }).code(500);
  }
};

// Update a food item by ID
const updateFoodById = async (request, h) => {
  try {
    const { id } = request.params;
    const { name, description } = request.payload;
    const updatedFoodItem = await Food.findByIdAndUpdate(id, { name, description }, { new: true });
    if (!updatedFoodItem) {
      return h.response({ error: 'Food item not found' }).code(404);
    }
    return h.response(updatedFoodItem).code(200);
  } catch (error) {
    return h.response({ error: 'Internal server error' }).code(500);
  }
};

// Delete a food item by ID
const deleteFoodById = async (request, h) => {
  try {
    const { id } = request.params;
    const deletedFoodItem = await Food.findByIdAndDelete(id);
    if (!deletedFoodItem) {
      return h.response({ error: 'Food item not found' }).code(404);
    }
    return h.response({ message: 'Food item deleted successfully' }).code(200);
  } catch (error) {
    return h.response({ error: 'Internal server error' }).code(500);
  }
};

module.exports = {
  getAllFood,
  createFood,
  getFoodById,
  updateFoodById,
  deleteFoodById,
};
