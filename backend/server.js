console.log("--- SERVER.JS IS LOADING ---");
const express = require('express');
const cors = require('cors'); // <-- ADDED THIS
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to Database
connectDB();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// CORS Middleware to allow cross-origin requests
app.use(cors()); // <-- ADDED THIS

// Dynamic Port for Deployment
const PORT = process.env.PORT || 5000; // <-- MODIFIED THIS

// Import the food route
const foodRoute = require('./routes/foodRoute');
app.use('/api/food', foodRoute);

// Import the user route
const userRoute = require('./routes/userRoute');
app.use('/api/users', userRoute);


app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});