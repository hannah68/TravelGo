import styled from 'styled-components';
import bgImage from '../../../public/images/bg-g.svg';

export const FooterSection = styled.section`
    height: auto;
    padding-top: 3rem;
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    background-attachment: fixed;
    width:100%;
    @media screen and (max-width:414px){
        padding-top: 0;
    }
`

export const FaqSection = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 4rem 0;

    @media screen and (max-width:1250px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const FaqTitle = styled.h1`
    font-size: 36px;
    font-weight: bold;

    @media screen and (max-width:1464px){
        font-size: 34px;
    }
    @media screen and (max-width:768px){
        font-size: 30px;
    }
    @media screen and (max-width:540px){
        font-size: 25px;
    }
    @media screen and (max-width:414px){
        font-size: 18px;
    }
`

export const SingleQuestionContainer = styled.div`
    width: 90vw;
    display: grid;
    max-width: 920px;
    padding: 2rem 2.5rem;
`
