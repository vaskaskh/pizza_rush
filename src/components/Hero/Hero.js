import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar';
import { HeroBtn, HeroContainer, HeroContent, HeroH1, HeroItems, HeroP } from './Hero.elements'

const Hero = () => {


    const [isOpen, setIsOpen] = useState(false);


    const toggle = ()=> setIsOpen(!isOpen);
    

    return (
        <>
            <HeroContainer id='top'>
               <Navbar isOpen={isOpen} toggle={toggle} />
                <Sidebar isOpen={isOpen} toggle={toggle} />

                <HeroContent>
                    <HeroItems>
                        <HeroH1>Greatest Pizza </HeroH1>
                        <HeroP>Ready in 60 seconds</HeroP>
                        <HeroBtn>Place Order</HeroBtn>
                    </HeroItems>
                </HeroContent>
            </HeroContainer>  
        </>
    )
}

export default Hero
