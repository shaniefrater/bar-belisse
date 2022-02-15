import React from 'react';
import CocktailScreen from '../Screens/Cocktails/cocktailScreen';
import DessertScreen from '../Screens/Desserts/dessertScreen';
import DishScreen from '../Screens/Dishes/dishScreen';
import MenuScreen from '../Screens/Menu/menuScreen';

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/api/home">Home</SidebarLink>
        <SidebarLink to="/api/dishes" onClick={DishScreen}>Dishes</SidebarLink>
        <SidebarLink to="/api/dessert" onClick={DessertScreen}>Desserts</SidebarLink>
        <SidebarLink to="/api/cocktail" onClick={CocktailScreen}>Cocktails</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/menu" onClick={MenuScreen}>Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;