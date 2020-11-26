import React from 'react';
import { connect } from 'react-redux';
import { auth } from '../Firebase/firebase';
import { CloseIcon, Icon,  SideBarAuth, SidebarContainer, SidebarLink, SidebarMenu, SideBarRoute, SideBtnWrap } from './SidebarSignIn.elements'

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
                Sign Up
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
};

const mapStateToProps = state =>({
    currentUser: state.user.currentUser
})

export default  connect(mapStateToProps)(SidebarSignIn);
