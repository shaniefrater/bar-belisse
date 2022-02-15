require('dotenv').config();
const express = require('express');
const connectDatabase = require('./config/db')
const dishRoutes = require('./routes/dishRoutes');
const dessertRoutes = require('./routes/dessertRoutes');
const cocktailRoutes = require('./routes/cocktailRoutes');

connectDatabase();

const app = express();

app.use(express.json());

// creating the dish, dessert and cocktail API
app.use('/api/dish', dishRoutes);
app.use('/api/dessert', dessertRoutes);
app.use('/api/cocktail', cocktailRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));

