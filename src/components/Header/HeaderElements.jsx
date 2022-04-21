import styled from 'styled-components';
import bgFirst from '../../images/bg-first.svg';
import {Link} from 'react-scroll';

export const HeaderConatiner = styled.header`
    background-image: url(${bgFirst});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    background-attachment: fixed;
    min-height: 100vh;
    width:100%;
    margin: 3rem 0;
    
    @media screen and (max-width:1464px){
        min-height: 50vh;
    }
    @media screen and (max-width:540px){
        min-height: 100vh;
    }
`
export const Container = styled.div`
    max-width: 1400px;
    min-height: 60vh;
    display: flex;
    padding: 5rem 5rem 0 5rem;
    justify-content: center;
    align-items: center;
    margin: 4rem auto;

    @media screen and (max-width:1464px){
        max-width: 1200px;
    }
    @media screen and (max-width:1250px){
        max-width: 1000px;
        min-height: 40vh;
    }
    @media screen and (max-width:768px){
        padding: 1rem;
    }
    @media screen and (max-width:540px){
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        min-height: 100vh;
    }

    
`

export const ImageContainer = styled.div`
    width: 700px;
    height: 666px;

    @media screen and (max-width:1464px){
        width: 500px;
        height: 566px;
    }
    @media screen and (max-width:1250px){
        height: 466px;
    }
    @media screen and (max-width:768px){
        height: 320px;
        width: 300px;
    }
    @media screen and (max-width:540px){
        height: 200px;
        width: 400px;
    }
    @media screen and (max-width:414px){
        height: 250px;
        width: 300px;
    }
    @media screen and (max-width:320px){
        height: 200px;
    }
    
`

export const Image = styled.img`
    width:100%;
    height:100%;
    object-fit: cover;
    border-bottom-left-radius: 80px;
    
    @media screen and (max-width:540px){
        border-top-right-radius: 80px;
        border-bottom-left-radius: 0;
    }
    
`


export const HeaderInfo = styled.div`
    background-color: var(--clr-tertiary-2);
    width: 700px;
    height: 666px;
    border-bottom-right-radius: 80px;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    @media screen and (max-width:1464px){
        height: 566px;
        padding: 3rem;
    }
    @media screen and (max-width:1250px){
        width: 500px;
        height: 466px;
    }
    @media screen and (max-width:768px){
        width: 300px;   
        height: 320px;
        padding: 1.5rem;
    }
    @media screen and (max-width:540px){
        align-items: center;
        justify-content: flex-start;
        text-align: center;
        border-bottom-right-radius: 0;
        width: 400px;
        height: 250px;
    }
    @media screen and (max-width:414px){
        width: 300px;
        height: 250px;
    }
    
`

export const HTitle = styled.h1`
    font-size: 48px;
    font-weight: bold:
    line-height: 129%;
    margin-bottom: 3.5rem;

    @media screen and (max-width:1464px){
        font-size: 38px;
    }
    @media screen and (max-width:1250px){
        font-size: 28px;
        margin-bottom: 2rem;
    }
    @media screen and (max-width:768px){
        font-size: 20px;
        margin-bottom: 1rem;
    }
    @media screen and (max-width:414px){
        font-size: 18px;
    }

    
`

export const HText = styled.h2`
    text-align: left;
    line-height: 1.5;
    font-size: 24px;
    margin-bottom: 3rem;

    @media screen and (max-width:1464px){
        font-size: 20px;
    }
    @media screen and (max-width:1250px){
        margin-bottom: 2rem;
    }
    @media screen and (max-width:768px){
        font-size: 16px;
        margin-bottom: 1rem;
    }
    @media screen and (max-width:414px){
        font-size: 13px;
    }
`

export const HButton = styled(Link)`
    background: var(--clr-tertiary);
    cursor: pointer;
    font-size: 20px;
    width: 180px;
    border-radius: 40px;
    padding: 10px 0;
    border: none;
    outline: none;
    text-align: center;
    box-shadow: var(--box-shadow);
    border: 0;
    transition: transform .3s ease-in-out;

    &:active{
       transform: translateY(5px);
    }

    @media screen and (max-width:1464px){
        font-size: 18px;
    }
    @media screen and (max-width:1250px){
        font-size: 16px;
        width: 150px;
    }
    @media screen and (max-width:768px){
        padding: 5px 0;
    }
    @media screen and (max-width:414px){
        font-size: 14px;
    }
    
`