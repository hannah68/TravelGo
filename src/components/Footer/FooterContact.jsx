import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import {ContactSection, LogoSection, ImgageLogo, SocialMedia, SocialLink, NavMenu, NavItem, NavLinks, AddressInfo, Address } from './FooterContactElements';
import logo from '../../images/logo.svg';
import {FiFacebook} from 'react-icons/fi';
import {FaPinterestP} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';

function FooterContact() {
    const toggleHome = () =>{
        scroll.scrollToTop()
    }
    let iconStyle = {position: 'absolute', top: '8px', right: '8px'}
    
    return (
        <ContactSection id='contact'> 
            <LogoSection>
                <ImgageLogo src={logo} onClick={toggleHome}/>
                <SocialMedia>
                    <SocialLink href='https://en-gb.facebook.com/' target='_blank' aria-label='facebook'>
                        <FiFacebook style={iconStyle}/>
                    </SocialLink>
                    <SocialLink href='https://www.pinterest.co.uk/' target='_blank' aria-label='pinterest'>
                        <FaPinterestP style={iconStyle}/>
                    </SocialLink>
                    <SocialLink href='https://www.instagram.com/' target='_blank' aria-label='instagram'>
                        <FiInstagram style={iconStyle}/>
                    </SocialLink>
                </SocialMedia>
            </LogoSection>

            <NavMenu>
                <NavItem>
                    <NavLinks to='home'>Home</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='about'>About</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='destination'>Destination</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='contact'>Contact</NavLinks>
                </NavItem>
            </NavMenu>

            <AddressInfo>
                <Address>9141 West Street, London W52 7LS</Address>
                <Address>+44 20 7946 0502</Address>
                <Address>travelgo@example.com</Address>
            </AddressInfo>
        </ContactSection>
    )
}

export default FooterContact
