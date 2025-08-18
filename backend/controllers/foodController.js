const Food = require('../models/foodModel');

// This function gets all food items
const getAllFoods = async (req, res) => {
  try {
    const foods = await Food.find({});
    res.status(200).json(foods);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// This function adds a new food item
const addFood = async (req, res) => {
  try {
    // create a new document using the Food model
    const newFood = new Food(req.body);
    // save the document to the database
    await newFood.save();
    res.status(201).json({ message: 'Food Added Successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllFoods,
  addFood,
};