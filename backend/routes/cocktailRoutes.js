const express = require('express');
const router = express.Router();

const { 
    getAllCocktails, 
    getCocktailById
} = require('../controller/cocktailControllers');

// @desc GET all dishes from database
// @route GET api/dish
// @access Public
router.get('/cocktails', getAllCocktails);


// @desc GET a dish via ID from database 
// @route GET api/dish/:id
// @access Public
router.get('/:id', getCocktailById)

module.exports = router;
