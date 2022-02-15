// where all of the FETCHING takes place

const Cocktail = require('../models/Cocktail');

const getAllCocktails = async (req, res) => {
    try {
        const cocktails = await Cocktail.find({});

        res.json(cocktails);
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "Server Error"});
    }
}

const getCocktailById = async (req, res) => {
    try {
        const cocktail = await Cocktail.findById(req.params.id);

        res.json(cocktail);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

module.exports = {
    getAllCocktails,
    getCocktailById,
}