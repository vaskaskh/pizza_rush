import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import SidebarSignUp from '../../components/Sidebar/SidebarSignUp';
import {   ActualLink, SignInLink, SignUpBtn, SignUpContainer, SignUpDetail, SignUpForm, SignUpInput, SignUpLbl} from './SignUp.elements';
import firebase from './../../components/Firebase/firebase';
import { connect } from 'react-redux';

const SignUp = (props, currentUser) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [errors, setErrors] = useState([]);
    const [usersRef, setUsersRef] = useState(firebase.database().ref('users'));



    const toggle = ()=> setIsOpen(!isOpen);
    
const handleSubmit = event=>{
    event.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email, password).then((createdUser)=>{
        console.log(createdUser);
    }).catch((err)=>{
        console.log(err);
    })
}

    return (
        <SignUpContainer>
               <Navbar isOpen={isOpen} toggle={toggle}  />
               <SidebarSignUp isOpen={isOpen} toggle={toggle}  />
<SignUpDetail>
               <SignUpForm onSubmit={handleSubmit}>
                   <SignUpLbl>Sign Up</SignUpLbl>

                   <SignUpInput
                        name='username'
                        type='text'
                        placeholder="Username"
                        value={userName}
                        onChange={(e)=>setUserName(e.target.value)}
                        autoComplete='off'
                    />

                    <SignUpInput
                        name='email'
                        type='email'
                        placeholder="Email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        autoComplete='off'
                    />

                    <SignUpInput
                        name='password'
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        autoComplete='off'
                    />
                    <SignUpInput
                        name='confirmPassword'
                        type='password'
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                        autoComplete='off'
                    />
                  

                    <SignUpBtn>Sign Up</SignUpBtn>
               
               
               
               
               </SignUpForm>

               <SignInLink>Already have an account? <ActualLink to='/signin'>Sign In</ActualLink></SignInLink>
        </SignUpDetail>



        </SignUpContainer>
    )
}

const mapStateToProps = state =>({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(SignUp);
