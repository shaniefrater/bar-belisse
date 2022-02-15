// database connection

require('dotenv').config();

const dishData = require('./data/dish');
const connectDishDatabase = require('./config/db');
const Dish = require('./models/Dish');

// importing dish menu
connectDishDatabase();

const importDishData = async () => {
    try {
        await Dish.deleteMany({})

        await Dish.insertMany(dishData);

        console.log("Data import of DISH - SUCCESS")

        // process.exit();
    } catch (error) {
        console.error("Data import of DISH - FAIL");
        process.exit(1);
    }
};

const dessertData = require('./data/dessert');
const connectDessertDatabase = require('./config/db');
const Dessert = require('./models/Dessert');

connectDessertDatabase();

// importing dessert menu
const importDessertData = async () => {
    try {
        await Dessert.deleteMany({})

        await Dessert.insertMany(dessertData);

        console.log("Data import of DESSERT - SUCCESS")

        // process.exit();
    } catch (error) {
        console.error("Data import of DESSERT - FAIL");
        process.exit(1);
    }
};

const cocktailData = require('./data/cocktail');
const connectCocktailDatabase = require('./config/db');
const Cocktail = require('./models/Cocktail');

connectCocktailDatabase();

const importCocktailData = async () => {
    try {
        await Cocktail.deleteMany({})

        await Cocktail.insertMany(cocktailData);

        console.log("Data import of COCKTAIL - SUCCESS")

        // process.exit();
    } catch (error) {
        console.error("Data import of COCKTAIL - FAIL");
        process.exit(1);
    }
};


importDishData();
importDessertData();
importCocktailData();