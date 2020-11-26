import styled from 'styled-components/macro';
import {Link as LinkR} from 'react-router-dom';


export const SignInContainer = styled.div`
    background: url('https://pomodoropizza.co.za/wp-content/uploads/pizza-background.jpg');
    background-position: center;
    background-size: cover;
    height: 100vh;

    @media (max-width: 990px){
        background: none;
        background-color:#000000;
        height: 100vh;
    }
`

export const SignInForm = styled.form`
    display: flex;
    flex-direction: column;
`
export const SignInLbl  = styled.label`
    color: white;
    margin-bottom: 50px;
    font-size: 25px;

`

export const SignInInput = styled.input`
    margin-bottom: 25px;
    background-color: #333333;
    color: #7B8C8C;
    outline: none;
    border: none;
    padding: 10px;
    border-radius: 4px;

    @media (max-width:990px){
        margin-bottom: 35px;
        background-color: #333333;
        color: #7B8C8C;
        border: none;
        outline:none;
}
`

export const SignInBtn = styled.button`
       color: white;  
        outline: none;
        text-decoration: none;
        border: none;
        background-color: #E50914;
        border-radius: 15px;
        height: 35px;
        cursor: pointer;
        font-size: 16px;
        &:active{
           
            color: #E50914;
            background-color: white;
        }
`

export const SignUpLink = styled.h6`
margin-top: 18px;
    color:#7b8c8c;
    font-size: 16px;
`

export const SignInDetail = styled.div`
  margin: auto;
    background-color: #0b0c0ce1;
    max-width: 450px;
    padding: 55px;
    border-radius: 5px;
    box-shadow: 150px 10px 150px rgba(0, 0, 0, 0.925);
    margin-top:100px;
   
    @media(max-width: 990px){
        max-width: 100%;  
        background-color: #050505;
        padding: 100px;
        margin-top: 10px;
        box-shadow:none;
        margin-top: 25px;
    }
`

export const ActualLink = styled(LinkR)`
 outline: none;
    text-decoration: none;
    color: lightcyan;
    font-size: 14px;
    cursor: pointer;
    margin-left: 7.5px;

    &:hover{
        text-decoration: underline;
    }
`