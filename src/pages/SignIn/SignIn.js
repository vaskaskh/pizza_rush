import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import SidebarSignIn from '../../components/Sidebar/SidebarSignIn';
import {   ActualLink, SignInBtn, SignInContainer, SignInDetail, SignInForm, SignInInput, SignInLbl, SignUpLink } from './SignIn.elements';
import firebase from './../../components/Firebase/firebase';

const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isOpen, setIsOpen] = useState(false);


    const toggle = ()=> setIsOpen(!isOpen);


   
    const handleSubmit = event =>{
        event.preventDefault();

        firebase.auth().signInWithEmailAndPassword(email, password).then((currentUser)=>{
            console.log(currentUser)
        }).catch((err)=>{
            console.log(err);
        })

    }
    


    return (
        <SignInContainer>
               <Navbar isOpen={isOpen} toggle={toggle}  />
               <SidebarSignIn isOpen={isOpen} toggle={toggle}  />
<SignInDetail>
               <SignInForm onSubmit={handleSubmit}>
                   <SignInLbl>Sign In</SignInLbl>

                    <SignInInput
                        name='email'
                        type='email'
                        placeholder="Email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        autoComplete='off'
                    />

                    <SignInInput
                        name='password'
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        autoComplete='off'
                    />

                    <SignInBtn>Sign In</SignInBtn>
               
               
               
               
               </SignInForm>

               <SignUpLink>New Here? <ActualLink to='/signup'>Sign Up</ActualLink></SignUpLink>
        </SignInDetail>



        </SignInContainer>
    )
}

export default SignIn;
