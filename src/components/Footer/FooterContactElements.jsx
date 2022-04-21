import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';

export const ContactSection = styled.footer`
    font-size: 20px;
    height: 40%;
    background: var(--clr-secondary-2);
    padding: 2rem;
    display: flex;
    justify-content: space-evenly;

    @media screen and (max-width:540px){
        font-size: 16px;
    }
    @media screen and (max-width:487px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @media screen and (max-width:414px){
        font-size: 13px;
    }

    
`

export const LogoSection = styled.div`
    display: inline-flex;   
    flex-direction: column;
    flex-wrap: wrap;
    gap: 15px;
`

export const ImgageLogo = styled.img`
    width: 134px;
    cursor: pointer;
`

export const SocialMedia = styled.div`
    display: inline-flex;   
    flex-wrap: wrap;
    gap: 12px;
`

export const SocialLink = styled.a`
    width: 35px;
    height: 35px;
    background: var(--clr-text);
    color: var(--clr-secondary-2);
    position: relative;
    border-radius: 50%;
    cursor: pointer;
    text-align: center;
    transition: all .2s ease-in;
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    @media screen and (max-width:1670px){
        flex-direction: column;
    }
`

export const NavItem = styled.li`
    height: 80px;
    @media screen and (max-width:1670px){
        height: 40px;
    }
` 

export const NavLinks = styled(LinkScroll)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1.5rem;
    height: 100%;
    cursor: pointer;

    &.active{
        border-bottom: 3px solid var(--clr-border);
    }
`

export const AddressInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
` 

export const Address = styled.p`
    margin-bottom: 12px;
    text-align: left;
` 