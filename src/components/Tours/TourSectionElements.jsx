import styled from 'styled-components';

export const TourContainer = styled.section`
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3rem auto;
    

    @media screen and (max-width:1670px){
        max-width: 1400px;
    }
    @media screen and (max-width:1464px){
        max-width: 1200px;
    }
    @media screen and (max-width:1250px){
        max-width: 1000px;
    }
    @media screen and (max-width:1064px){
        max-width: 720px;
    }
    @media screen and (max-width:540px){
        max-width: 400px;
        justify-content: center;
    }
    @media screen and (max-width:414px){
        max-width: 300px;
    }
` 

export const TourTitle = styled.div`
    text-align: center;
    margin-bottom: 4rem;
`

export const Title = styled.h2`
    font-size: 36px;
    
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

export const TourInfoContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: ". . .";
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;

    @media screen and (max-width:1064px){
        grid-template-columns: 1fr;
        grid-template-rows:repeat(3, 1fr);
        grid-template-areas: 
            "."
            "."
            ".";
    }

`

export const Button = styled.button`
    width: 185px;
    margin-top: 4rem;
    border: none;
    outline: none;
    cursor: pointer;
    background: var(--clr-tertiary);
    font-size: 24px;
    border-radius: 40px;
    text-align: center;
    padding: 10px 0;
    box-shadow: var(--box-shadow);
    border:0;
    transition: transform .3s ease-out;

    &:hover{
        background: #fff4b3;
        border:1px solid #FFD803;
    }
    &:active{
       transform: translateY(5px);
    }
    @media screen and (max-width:414px){
        font-size: 14px;
        width: 150px;
        padding: 5px 0;
    }
`