import React from "react";
import { FaListUl } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { GoLocation } from "react-icons/go";

import {
	Results,
	Img,
	TourInfo,
	TourDetails,
	TourDescription,
	Details,
	TourTitle,
	TourBooking,
	TourBtn,
	TourPrice,
} from "./DestinationElement";

import { iconStyle } from "../utils";

const SearchResults = (props) => {
	return (
		<Results>
			<Img src={props.image} />
			<TourInfo>
				<TourTitle>{props.title}</TourTitle>
				<TourDetails>
					<Details>
						<GoLocation style={iconStyle} />
						{props.place}
					</Details>
					<Details>
						<FaListUl style={iconStyle} /> {props.tour}
					</Details>
					<Details>
						<BiTimeFive style={iconStyle} />
						{props.duration}
					</Details>
				</TourDetails>
				<TourDescription>{props.info}</TourDescription>
			</TourInfo>

			<TourBooking>
				<TourPrice>from £{props.price}</TourPrice>
				<TourBtn>Book Now</TourBtn>
			</TourBooking>
		</Results>
	);
};

export default SearchResults;
