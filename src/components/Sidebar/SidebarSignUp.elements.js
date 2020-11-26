import styled from 'styled-components/macro';
import {FaTimes} from 'react-icons/fa';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';



export const SidebarContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 350px;
    height: 100%;
    background: #ffc500;
    display: grid;
    align-items: center;
    top: 0;
    transition: 0.3s ease-in-out;
    right: ${({isOpen})=> (isOpen? "0" : "-1000px")};


    @media ( max-width: 400px){
        width: 100%;
    }
`
export const CloseIcon = styled(FaTimes)`
   
    color: #000;
    &:hover{
        color: #e31837;
        transition: 0.2s ease-in-out;
    }
`


export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    background: transparent;
    border: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    right: 79px;

`
export const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;


    @media ( max-width: 400px){
    grid-template-rows: repeat(3, 60px);
    }
`


export const SidebarLink = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #000;
    cursor: pointer;

    &:hover{
        color: #e31837;
        transition: 0.2s ease-in-out;
    }

`


export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;

`

export const SideBarRoute = styled(LinkR)`
    background:#e31837;
    white-space: nowrap;
    padding:16px 64px;
    color: #fff;
    font-size: 16px;
    outline: none;
    cursor: pointer;
     border: none;
     transition: 0.2s ease-in-out;
     text-decoration: none;

     &:hover{
        background: white;
     transition: 0.2s ease-in-out;
     color: #010106
     }
`

export const SideBarAuth = styled(LinkR)`
     display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #000;
    cursor: pointer;
    &:hover{

        color: #e31837;
        transition: 0.2s ease-in-out;
    }
`