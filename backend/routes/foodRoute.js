const express = require('express');
const router = express.Router();

// Import the controller functions
const { getAllFoods, addFood } = require('../controllers/foodController');

// Route to get all food items
router.get('/getallfoods', getAllFoods);

// Route to add a new food item
router.post('/addfood', addFood);

module.exports = router;