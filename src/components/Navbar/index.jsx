import React,{useState, useEffect} from 'react';
import {animateScroll as scroll} from 'react-scroll';
import logo from '../../../public/images/logo.svg';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';
import {FaBars} from 'react-icons/fa';


const Navbar = ({toggle}) => {
    const [scrollNav, setscrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setscrollNav(true)
        }else{
            setscrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',changeNav)
    }, [])

    const toggleHome = () =>{
        scroll.scrollToTop()
    }

    return (
        <>
           <Nav scrollNav={scrollNav}>
               <NavbarContainer>
                   <NavLogo to='/' onClick={toggleHome}>
                       <img src={logo} alt='logo'/>
                   </NavLogo>
                   <MobileIcon onClick={toggle}>
                       <FaBars/>
                   </MobileIcon>
                   <NavMenu>
                        <NavItem>
                           <NavLinks to='home' smooth={true} duration={500} spy={true} exact='true'>Home</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' activeClass='active'>About</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to='destination' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>Destination</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to='contact' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>Contact</NavLinks>
                       </NavItem>
                   </NavMenu>

                   <NavBtn>
                       <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                       <NavBtnLink to='/signup'>Sign Up</NavBtnLink>
                   </NavBtn>
               </NavbarContainer>
            </Nav> 
        </>
    )
}


   

export default Navbar
