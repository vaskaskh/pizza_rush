import React, { useState } from 'react';
import { Bars, CartIcon, Deliver, Nav,   NavCenter,  NavIcon,  NavLeft, NavLink, NavRight} from './Navbar.elements';


const Navbar = ({toggle}) => {



    return (
        <>
            <Nav>
            <NavLeft>
                <NavLink to='/'>
                    Pizza Rush <Deliver/>
                </NavLink>
                </NavLeft>
                

            <NavCenter to='/checkout' >
                <CartIcon />
            
            </NavCenter>


        <NavRight>
    
    
                <NavIcon onClick={toggle}>
                    <p>Menu</p>   
                    <Bars />
                </NavIcon>
</NavRight>
            </Nav>
        </>
    )
}

export default Navbar
