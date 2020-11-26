import React from 'react';
import { connect } from 'react-redux';
import { auth } from '../Firebase/firebase';
import { CloseIcon, Icon,  SideBarAuth, SidebarContainer, SidebarLink, SidebarLinkMenu, SidebarMenu, SideBarRoute, SideBtnWrap } from './Sidebar.elements'

const Sidebar = ({isOpen, toggle, currentUser}) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} toggle={toggle}>
                <Icon>
                    <CloseIcon onClick={toggle}/>
                </Icon>
                <SidebarMenu>
                    <SidebarLink to='Pizzas' spy={true} smooth={true} duration={500}>Pizzas</SidebarLink>
                    <SidebarLink to='Deserts' spy={true} smooth={true} duration={500}>Deserts</SidebarLink>
                    <SidebarLinkMenu to='/all'>Full Menu</SidebarLinkMenu>

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

export default connect(mapStateToProps)(Sidebar);
