// Defines how the meals are going to be displayed and what qualities

const mongoose = require("mongoose");

const dessertSchema = new mongoose.Schema({
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

const Dessert = mongoose.model('dessert', dessertSchema)

module.exports = Dessert;