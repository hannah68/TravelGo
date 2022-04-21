import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import { Link as LinkRoute } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: var(--clr-secondary);
    display: grid;
    align-items: center;
    top: 0; 
    left: 0;
    transition: .3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: var(--clr-text);
`

export const Icon = styled.div`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: var(--clr-text);
`
export const SidebarMenu = styled.ul`
    display: grid;
    grid-tempelate-columns: 1fr;
    grid-template-rows: repeat(4,80px);
    text-align: center;

    @media screen and (max-width:480px){
        grid-template-rows: repeat(4,60px);
    }
`


export const SidebarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    transition: .2s ease-in-out;
    text-decoration: none;
    cursor: pointer;
`

export const SideBtnWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const SidebarRoute = styled(LinkRoute)`
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all .2s ease-in-out;
    text-decoration: none;
    padding: 1rem;
    outline: none;
    border: none;

    &:nth-child(2){
        border-radius: 40px;
        background: var(--clr-tertiary);
        width: 120px;
        margin: 1.5rem auto;
        padding: .5rem;

        @media screen and (max-width:480px){
            margin: 1rem auto;
        }

        &:hover{
            background: var( --clr-tertiary-1);
            transition: all .2s ease-in-out;
        }
    }
    
`