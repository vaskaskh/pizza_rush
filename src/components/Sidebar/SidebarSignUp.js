import React from 'react';
import { connect } from 'react-redux';
import { CloseIcon, Icon,  SideBarAuth, SidebarContainer, SidebarLink, SidebarMenu, SideBarRoute, SideBtnWrap } from './SidebarSignIn.elements'
import {auth} from './../Firebase/firebase';


const SidebarSignIn = ({isOpen, toggle, currentUser}) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} toggle={toggle}>
                <Icon>
                    <CloseIcon onClick={toggle}/>
                </Icon>
                <SidebarMenu>
                    <SidebarLink to='/'>Home</SidebarLink>


{ currentUser?(                
            <SideBarAuth to='/' onClick={()=>auth.signOut()}>
                Sign Out
            </SideBarAuth>
            ):(
            <SideBarAuth to='/signin'>
                Sign In
            </SideBarAuth>
            )
    }
 

                </SidebarMenu>

               

                <SideBtnWrap>
                    <SideBarRoute to='/checkout'>Order
                    </SideBarRoute>
                </SideBtnWrap>



            </SidebarContainer>   
        </>
    )
}
const mapStateToProps = state =>({
    currentUser: state.user.currentUser
})

export default  connect(mapStateToProps)(SidebarSignIn);
