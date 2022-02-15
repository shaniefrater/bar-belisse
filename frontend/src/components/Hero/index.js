import React, { useState } from 'react'
import Navbar from '../Navbar'
import MenuScreen from '../Screens/Menu/menuScreen';
import Sidebar from '../Sidebar'
import {
    HeroContainer,
    HeroContent,
    HeroItems,
    HeroH1,
    HeroP,
    HeroBtn
} from './HeroElements'


const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <HeroContainer>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
                <HeroItems>
                    <HeroH1> THE MIDDLE EAST'S FINEST </HeroH1>
                    <HeroP> Our promise </HeroP>
                    <HeroBtn link to='/menu'> Order now </HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero
