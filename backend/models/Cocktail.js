// Defines how the meals are going to be displayed and what qualities

const mongoose = require("mongoose");

const cocktailSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description:    {
    type: String,
    required: true
    },
    price: {
        type: Number,
        required: true
    },
    cocktailAvailable: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
})

const Cocktail = mongoose.model('cocktail', cocktailSchema)

module.exports = Cocktail;