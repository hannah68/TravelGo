import React, { useState } from 'react'
import {ImgTour, SingleTourContainer, Footer, TourTitle, TourInfos, LeftInfo, RightInfo, TourDescription, ReadMoreButton} from './SingleTourElements'
import {FaShuttleVan, FaCalendarAlt, FaUsers} from 'react-icons/fa';


function SingleTour({...tour}) {
    const [readMore, setReadMore] = useState(false);
    
    const readMoreHandler = ()=>{
        setReadMore(!readMore);
    }

    return (
        <SingleTourContainer>
            <ImgTour src={tour.image} alt={tour.place}/>
            <Footer>
                <TourTitle>{tour.title}</TourTitle>
                
                <TourInfos>
                    <LeftInfo>
                        <p><FaUsers/> Small group</p>
                        <p><FaShuttleVan/> Pickup available</p>
                        <p><FaCalendarAlt/> Duration: {tour.duration} days</p>
                    </LeftInfo>
                    <RightInfo>
                        <p>from £ {tour.price}<br/> per person</p>
                    </RightInfo>
                </TourInfos>
 
                <TourDescription>
                    {readMore ? tour.info : `${tour.info.substring(0,225)}...`}
                    <ReadMoreButton onClick={()=>readMoreHandler(tour.id)}>
                        {readMore ? 'Show Less' : 'Read More'}
                    </ReadMoreButton>
                </TourDescription>
                
            </Footer>
        </SingleTourContainer>
    )
}

export default SingleTour
