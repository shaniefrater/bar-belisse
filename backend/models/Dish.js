// Defines how the meals are going to be displayed and what qualities

const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
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
    dishAvailable: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
})

const Dish = mongoose.model('dish', dishSchema)

module.exports = Dish;