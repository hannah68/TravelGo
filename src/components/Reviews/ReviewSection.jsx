import {useState, useEffect} from 'react';
import SingleReview from './SingleReview';
import {TestimonialContainer, TestimonialTitle} from './ReviewSectionElements';

function ReviewSection() {
    const [tourReviews, setTourReviews] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const fetchTourReview = async() => {
            const tourRes = await fetch('http://localhost:3030/reviews')
            const tourData = await tourRes.json()
            setTourReviews(tourData)
        }
        fetchTourReview()
      }, []);


    return (
        <TestimonialContainer>
            <TestimonialTitle>Hear from our happy customers</TestimonialTitle>
            {tourReviews.length > 0 && (<SingleReview tourReviews={tourReviews} setIndex={setIndex} index={index}/>)}
        </TestimonialContainer>
    )
}

export default ReviewSection

