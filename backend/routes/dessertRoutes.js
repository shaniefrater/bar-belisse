const express = require('express');
const router = express.Router();

const { 
    getAllDesserts, 
    getDessertById
} = require('../controller/dessertControllers')

// @desc GET all dishes from database
// @route GET api/dish
// @access Public
router.get('/', getAllDesserts);

// @desc GET a dish via ID from database 
// @route GET api/dish/:id
// @access Public
router.get('/:id', getDessertById)

module.exports = router;

