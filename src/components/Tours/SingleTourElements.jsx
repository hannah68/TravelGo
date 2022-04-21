import styled from 'styled-components';


export const SingleTourContainer = styled.article`
    height: 73vh;
    background: var(--clr-secondary);
    border-top-right-radius: 60px;
    border-bottom-left-radius: 60px;
    transiton: all .3s linear;

    @media screen and (max-width:1440px){
        height: auto;
    }
    @media screen and (max-width:1250px){
        height: 80vh;
    }
    @media screen and (max-width:1064px){
        height: 60vh;
    }
    @media screen and (max-width:1024px){
        height: auto;
    }
    @media screen and (max-width:818px){
        height: 65vh;
    }
    @media screen and (max-width:540px){
        height: auto;
    }
    @media screen and (max-width:414px){
        height: 80vh;
    }
    @media screen and (max-width:375px){
        height: auto;
    }
`


export const ImgTour = styled.img`
    width: 100%;
    height: 330px;
    border-top-right-radius: 60px;

    @media screen and (max-width:414px){
        height: 250px;
    }
`

export const Footer = styled.footer`
    padding: 1.5rem 2rem;

    @media screen and (max-width:1250px){
        padding: 1rem;
    }
    @media screen and (max-width:414px){
        padding: .5rem 1rem;
    }
    
`

export const TourTitle = styled.h4`
    font-size: 22px;
    margin-bottom: 2rem;
    line-height: 1.4;
    background: var(--gradient);
    background: var(--gredient-color);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
    
    @media screen and (max-width:540px){
        font-size: 20px;
    }
    @media screen and (max-width:414px){
        font-size: 16px;
        margin-bottom: .5rem;
    }
`

export const TourInfos = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    
    @media screen and (max-width:414px){
        margin-bottom: .5rem;
    }
`

export const LeftInfo = styled.div`
    font-size: 13px;
    font-weight: bold;

    @media screen and (max-width:414px){
        font-size: 10px;
    }
`

export const RightInfo = styled.div`
    font-size: 18px;
    font-weight: bold;

    @media screen and (max-width:540px){
        font-size: 16px;
    }
    @media screen and (max-width:414px){
        font-size: 13px;
    }
`

export const TourDescription = styled.div`
    font-size: 18px;
    line-height: 1.7;
    margin-top: 2rem;

    @media screen and (max-width:540px){
        font-size: 16px;
        margin-top: 1rem;
    }
    @media screen and (max-width:414px){
        font-size: 13px;
        margin-top: 0;
    }
`

export const ReadMoreButton = styled.button`
    border: none;
    outline: none;
    background: transparent;
    color: var(--gradient);
    font-size: 18px;
    cursor: pointer;
`