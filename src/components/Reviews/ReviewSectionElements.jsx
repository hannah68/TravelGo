import styled from 'styled-components';
import bgImage from '../../images/Alp-img.png';


export const TestimonialContainer = styled.section`
    min-height: 100vh;
    @media screen and (max-width:1024px){
        min-height: 30vh;
    }
    @media screen and (max-width:540px){
        min-height: 100vh;
    }
`

export const TestimonialTitle= styled.h1`
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 4rem;
    padding-top: 3.5rem;

    @media screen and (max-width:1024px){
        margin-bottom: 0;
    }

    @media screen and (max-width:768px){
        font-size: 30px;
    }
    @media screen and (max-width:540px){
        font-size: 25px;
    }
    @media screen and (max-width:414px){
        font-size: 16px;
        margin-bottom: 4rem;
    }
`

export const BgImage= styled.div`
    background-image: url(${bgImage});
    height: 85vh;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    @media screen and (max-width:1064px){
        background-image: none;
        height: 60vh;
        margin: 7rem auto;
        justify-content: center;
        align-items: center;
    }
    @media screen and (max-width:1024px){
        margin: 3rem auto;
    }
    @media screen and (max-width:540px){
        height: 80vh;
    }
`

export const ReviewContainer= styled.div`
    height: 550px;
    width: 650px;
    background: var(--clr-secondary-2);
    z-index: 9;
    border-top-left-radius: 40px;
    padding: 2rem;

    @media screen and (max-width:1440px){
        height: 500px;
    }
    @media screen and (max-width:1064px){
        border-top-right-radius: 40px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 40px;
    }
    @media screen and (max-width:1024px){
        height: 600px; 
    }
    @media screen and (max-width:540px){
        height: 560px;
        width: 400px;
    }
    @media screen and (max-width:487px){
        height: 650px;
        width: 350px;
    }
    @media screen and (max-width:414px){
        height: 550px;
        width: 300px;
        padding: 1rem;
    }
`

export const ImageContainer= styled.div`
    width: 153px;
    height: 153px;
    background: #fff;
    border-radius: 50%;
    margin: 2rem auto;
    position: relative;
    z-index: 99;

    &:before {
        content: "";
        width: 137px;
        height: 137px;
        background: var(--clr-tertiary);
        border-radius: 50%;
        position: absolute;
        top: -6px;
        right: -12px;
        z-index: -1;
    }
    @media screen and (max-width:540px){
        width: 133px;
        height: 133px;
    }
`

export const UserImage= styled.img`
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
`

export const QuoteIcon= styled.span`
    position: absolute;
    top: 4px;
    left: -2px;
`

export const UserName= styled.h4`
    font-size: 14px;
    text-align: center;
    margin-bottom: 1rem;
`

export const UserReview= styled.p`
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    line-height: 1.5;
    margin-bottom: 1.5rem;
    padding: 1rem 3rem 0;
    
    @media screen and (max-width:540px){
        font-size: 16px;
        padding: 0;
    }
    @media screen and (max-width:414px){
        font-size: 13px;
        padding: 1rem 1rem 0;
    }
`

export const BtnContainer= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PreviousBtn = styled.button`
    background: var(--clr-text);
    color: var(--clr-secondary-2);
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: none;
    outline: none;
    cursor: pointer;
    text-align: center;
    transition: all .2s ease-in;
    

    &:hover{
        background: var(--clr-secondary-2);
        color: var(--clr-text);
        border: 1px solid var(--clr-text);
    }
    &:active{
        transform: translateY(4px);
    }
`

export const NextBtn = styled.button`
    background: var(--clr-text);
    color: var(--clr-secondary-2);
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: none;
    outline: none;
    cursor: pointer;
    margin-left: 1rem;
    // padding:0 1rem;
    transition: all .2s ease-in;

    &:hover{
        background: var(--clr-secondary-2);
        color: var(--clr-text);
        border: 1px solid var(--clr-text);
    }
    &:active{
        transform: translateY(4px);
    }
`

export const QuoteIconBottom= styled.div`
    display: flex;
    justify-content: flex-end;
`