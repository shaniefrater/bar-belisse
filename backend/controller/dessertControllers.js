// where all of the FETCHING takes place

const Dessert = require('../models/Dessert');
const Dish = require('../models/Dessert');

const getAllDesserts = async (req, res) => {
    try {
        const desserts = await Dessert.find({});

        res.json(desserts);
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "Server Error"});
    }
}

const getDessertById = async (req, res) => {
    try {
        const dessert = await Dessert.findById(req.params.id);

        res.json(dessert);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

module.exports = {
    getAllDesserts,
    getDessertById,
}