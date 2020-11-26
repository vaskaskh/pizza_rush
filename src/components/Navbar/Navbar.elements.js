import styled from 'styled-components/macro';
import {Link as LinkR } from 'react-router-dom';
import {FaPizzaSlice} from 'react-icons/fa';
import {IoMdBicycle} from 'react-icons/io';
import {FiShoppingCart} from 'react-icons/fi';

export const Nav = styled.nav`
    background:transparent;
    height: 10vh;
    position: sticky;
    width: 100%;
    padding: 0 55px;
    display: flex;
    justify-content: center;
    font-weight: 700;
    align-items:center;
    justify-content:space-between;
    align-items: center;
`

export const NavLink = styled(LinkR)`
    color: #fff;
    font-size:2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    align-items: center;


    @media (max-width: 400px ){
        position: absolute;
        top: 10px;
        left: 25px;
    }
`

export const NavIcon = styled.div`
    display: flex;
    cursor: pointer;
    color: #fff;
    align-items: center;

    p{
        transform: translate(-175%);
        font-weight: bold;
    }

`

export const Bars = styled(FaPizzaSlice)`
    font-size: 2rem;
    transform: translate(-50%, -15%);
    display: flex;
    align-items:center;
`
export const Deliver = styled(IoMdBicycle)`
    margin-left:5px;
    font-size: 17px;
    display:flex;
    align-items: center;
    color: white;

`

export const NavLeft = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const NavRight = styled.div`
display: flex;
align-items: center;


`

export const NavCenter = styled(LinkR)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`

export const CartIcon = styled(FiShoppingCart)`
    font-size: 20px;
    color: white;
    
`
