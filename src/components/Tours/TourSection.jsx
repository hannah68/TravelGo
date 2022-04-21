import React,{useState} from 'react'
import SingleTour from './SingleTour'
import {tourInfos, allTours} from './data'
import {TourContainer, TourInfoContainer, TourTitle,Button, Title} from './TourSectionElements';

function TourSection() {
    const [allTour, setAllTour] = useState([]);
    
    const getTours = () => {
        setAllTour(allTours)
    }
    
    
    return (
        <TourContainer id='destination'>
            <TourTitle>
                <Title>Our Best Sellers Tours</Title>
                <div className='underline'></div>
            </TourTitle>

            <TourInfoContainer>
                {tourInfos.map((tour) => {
                    return <SingleTour key={tour.id} {...tour}/>
                })}
                {allTour.length > 0 && allTours.map((el) => <SingleTour key={el.id} {...el}/>)}
            </TourInfoContainer>
            <Button onClick={getTours}>View All</Button>
        </TourContainer>
    )
}

export default TourSection
