import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { dishData, dessertData, cocktailData } from './components/Products/data'; // potentially import data from here?
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Our top 3 dishes' data={dishData} />
      <Feature />
      <Products heading='Perhaps a sweet treat?' data={dessertData} />
      <Products heading='Fancy a bev?' data={cocktailData} />
      <Footer />
    </Router>
  );
}

export default App;