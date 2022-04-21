import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper,SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute,} from './SidebarElements';

const Sidebar = ({toggle,isOpen}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='home' onClick={toggle}>Home</SidebarLink>
                    <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                    <SidebarLink to='destination' onClick={toggle}>Destination</SidebarLink>
                    <SidebarLink to='contact' onClick={toggle}>Contact</SidebarLink>
                </SidebarMenu>

                <SideBtnWrap>
                    <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                    <SidebarRoute to='/signup'>Sign Up</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
