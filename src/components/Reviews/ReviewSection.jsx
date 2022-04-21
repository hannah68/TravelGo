import React from 'react'
import SingleReview from './SingleReview';
import {TestimonialContainer, TestimonialTitle} from './ReviewSectionElements';

function ReviewSection() {
    return (
        <TestimonialContainer>
            <TestimonialTitle>Hear from our happy customers</TestimonialTitle>
            <SingleReview/>
        </TestimonialContainer>
    )
}

export default ReviewSection

