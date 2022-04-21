import React from 'react'
import {Results, Img, TourInfo, TourDetails, TourDescription, Details, TourTitle, TourBooking, TourBtn, TourPrice} from './DestinationElement'
import {FaListUl} from 'react-icons/fa'
import {BiTimeFive} from 'react-icons/bi'
import {GoLocation} from 'react-icons/go'

const SearchResults = (props) => {
    let iconStyle = {paddingRight: '5px', height: '1rem', width: '1.5rem'}
    return (
        <Results>
            <Img src={props.image}/>
            <TourInfo>
                <TourTitle>{props.title}</TourTitle>
                <TourDetails>
                    <Details><GoLocation style={iconStyle}/>{props.place}</Details>
                    <Details><FaListUl style={iconStyle}/> {props.tour}</Details>
                    <Details><BiTimeFive style={iconStyle}/>{props.duration}</Details>
                </TourDetails>
                <TourDescription>{props.info}</TourDescription>
            </TourInfo>

            <TourBooking>
                <TourPrice>from £{props.price}</TourPrice>
                <TourBtn>Book Now</TourBtn>
            </TourBooking>
        </Results>
    )
}

export default SearchResults
