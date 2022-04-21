import styled from 'styled-components';
import { Link as LinkRoute } from 'react-router-dom';

export const Container = styled.div`
    position: relative;
`

export const FormContainer = styled.form`
    background: var(--clr-secondary-2);
    font-size: 18px;
    padding: 3rem;
    width: 700px;
    margin: 0 auto;
    border-radius: 40px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 9;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    
    @media screen and (max-width:1464px){
        bottom: 3rem;
    }

    @media screen and (max-width:1250px){
        padding: 2rem;
        bottom: 7rem;
    }
     @media screen and (max-width:1024px){
        bottom: 1rem;
    }
    @media screen and (max-width:768px){
        width: 500px;
        font-size: 16px;
    }
    @media screen and (max-width:540px){
        width: 400px; 
        bottom: 6rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-bottom-left-radius: 80px;
        border-bottom-right-radius: 0;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
    @media screen and (max-width:414px){
        width: 300px;
        font-size: 13px;
        bottom: 4.5rem;
    }
    @media screen and (max-width:375px){
        bottom: 0;
    }
`

export const ControlGroup = styled.div`

    @media screen and (max-width:540px){
        display: grid;
        grid-template-columns: repeat(2,1fr);
        margin-bottom: 1rem;
        text-align: left;
    }
`

export const StyledLabel = styled.label`
    display: block;
    margin-bottom: 5px;
`

export const SelectedStyled = styled.select`
    border-color: var(--clr-text);
    color: var(--clr-text);
    display: block;
    padding: 4px 10px;
    border-radius: 22px;
    outline: none;
    width: 150px;

    @media screen and (max-width:768px){
        width: 120px;
    }
`


export const LinkBtn = styled(LinkRoute)`
    background: var(--clr-tertiary);
    width: 60px;
    padding: 5px 10px;
    border-radius: 22px;
    border: none;
    outline: none;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    box-shadow: var(--box-shadow);
    border:0;
    transition: transform .3s ease-out;

    &:hover{
        background: var(--clr-tertiary-1);
        border:1px solid var(--clr-tertiary);
    }
    &:active{
       transform: translateY(3px);
    }
    @media screen and (max-width:768px){
        width: 80px;
    }
    
`