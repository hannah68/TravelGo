import React, {useState} from 'react';
import {BgImage, ReviewContainer, ImageContainer, UserName, UserReview, BtnContainer, PreviousBtn, NextBtn, QuoteIconBottom, UserImage, QuoteIcon} from './ReviewSectionElements';
import quote from '../../images/quotes-top.svg';
import quoteBottom from '../../images/quotes.svg';
import reviewInfo from './data';
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa'



function SingleReview() {
    const [index, setIndex] = useState(0);
    const {name, image, text} = reviewInfo[index];

    // check index number
    const checkIndexNumber = (number) => {
        if(number > reviewInfo.length-1){
            return 0;
        }
        if(number < 0){
            return reviewInfo.length-1
        }
        return number;
    }

    // next button handler
    const nextPersonHandler = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkIndexNumber(newIndex);
        })
    }

    // previous button handler
    const prevPersonHandler = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkIndexNumber(newIndex);
        })
    }

    return (
        <BgImage>
                <ReviewContainer>
                    <ImageContainer>
                        <UserImage src={image} alt={name}/>
                        <QuoteIcon>
                            <img src={quote} alt='quote img'/>
                        </QuoteIcon>
                    </ImageContainer>
                    
                    <UserName>{name}</UserName>
                    <UserReview>{text}</UserReview>
                    
                    <BtnContainer>
                        <PreviousBtn onClick={prevPersonHandler}>
                            <FaArrowLeft/>
                        </PreviousBtn>
                        
                        <NextBtn onClick={nextPersonHandler}>
                            <FaArrowRight/>
                        </NextBtn>
                    </BtnContainer>
                    <QuoteIconBottom>
                        <img src={quoteBottom} alt='quote img'/>
                    </QuoteIconBottom>
                </ReviewContainer>
        </BgImage>
    )
}

export default SingleReview
