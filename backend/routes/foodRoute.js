// C:\Users\dheer\food-delivery-app\backend\routes\foodRoute.js

import express from "express";
import { listFood } from "../controllers/foodController.js";

const foodRouter = express.Router();

// This creates the endpoint: /api/food/list
foodRouter.get("/list", listFood);

export default foodRouter;