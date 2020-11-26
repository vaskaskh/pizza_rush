import React, { useEffect } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import './App.css';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import firebase from './Firebase/firebase';
import {clearUser, setUser} from './Redux/actions/userAction';
import { connect } from 'react-redux';



const App = ({setUser, clearUser, currentUser}) => {

    useEffect(()=>{
        firebase.auth().onAuthStateChanged((User)=>{
            if(User){
                setUser(User)
            }else {
                clearUser(User)
            }
        })
    },[])

    return (
        <div className='app'>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route       path='/signin'  component={SignIn}/>
                <Route       path='/signup' component={SignUp}/>
            </Switch>
        </div>
    )
};



const mapDispatchToProps = dispatch =>({
    setUser: (user)=>dispatch(setUser(user)),
    clearUser: ()=> dispatch(clearUser())
});
const mapStateToProps = state =>({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
