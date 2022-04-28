import { useState } from "react";

import SingleTour from "./SingleTour";

import {
	TourContainer,
	TourInfoContainer,
	TourTitle,
	Button,
	Title,
} from "./TourSectionElements";

function TourSection(props) {
	const { tourInfo } = props;
	const [allTour, setAllTour] = useState([]);

	const getRemaningTours = () => {
		setAllTour(tourInfo);
	};

	return (
		<TourContainer id="destination">
			<TourTitle>
				<Title>Our Best Sellers Tours</Title>
				<div className="underline"></div>
			</TourTitle>

			<TourInfoContainer>
				{allTour.length > 0
					? allTour.map((el) => <SingleTour key={el.id} {...el} />)
					: tourInfo.slice(0, 3).map((tour) => {
							return <SingleTour key={tour.id} {...tour} />;
					  })}
			</TourInfoContainer>
			<Button onClick={getRemaningTours}>View All</Button>
		</TourContainer>
	);
}

export default TourSection;
