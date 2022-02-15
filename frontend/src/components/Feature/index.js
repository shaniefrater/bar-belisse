import React from 'react';
import { FeatureContainer, FeatureButton } from './featureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Cocktail Spotlight</h1>
      <p>A sweet passionfruit mix of tequila and pink lemonade, topped as always with our 24 carat gold dust.</p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;