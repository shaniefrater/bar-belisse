const express = require('express');
const router = express.Router();

const { 
    getAllDishes, 
    getDishById
} = require('../controller/dishControllers')

// @desc GET all dishes from database
// @route GET api/dish
// @access Public
router.get('/', getAllDishes);

// @desc GET a dish via ID from database 
// @route GET api/dish/:id
// @access Public
router.get('/:id', getDishById)

module.exports = router;

