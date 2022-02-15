// where all of the FETCHING takes place

const Dish = require('../models/Dish');

const getAllDishes = async (req, res) => {
    try {
        const dishes = await Dish.find({});

        res.json(dishes);
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "Server Error"});
    }
}

const getDishById = async (req, res) => {
    try {
        const dish = await Dish.findById(req.params.id);

        res.json(dish);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

module.exports = {
    getAllDishes,
    getDishById,
}