// C:\Users\dheer\food-delivery-app\backend\controllers\foodController.js

import foodModel from "../models/foodModel.js";

// List all food items
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error fetching food items" });
    }
}


// --- MAKE SURE THIS EXPORT LINE IS EXACTLY LIKE THIS ---
export { listFood };