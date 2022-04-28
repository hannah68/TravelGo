import { useContext } from "react";

import {
	ResultsContainer,
	ResultsTitle,
	ResultsParaghraph,
} from "./DestinationElement";

import SearchResults from "./SearchResults";

import { UserContext } from "../Reducer";

const Destination = (props) => {
	const { allTripData } = props;
	const userTicketInfo = useContext(UserContext);

	const filteredTour = allTripData.filter((tour) => {
		if (userTicketInfo.ticketInfoState) {
			if (userTicketInfo.ticketInfoState.destination === "Rome") {
				console.log(tour.place === "Italy");
				return tour.place === "Italy";
			}
			if (userTicketInfo.ticketInfoState.destination === "Barcelona") {
				return tour.place.includes("Spain") || tour.place.includes("Barcelona");
			}
			if (userTicketInfo.ticketInfoState.destination === "Europe") {
				return tour.place !== "Japan";
			}
			return (
				tour.place === userTicketInfo.ticketInfoState.destination ||
				tour.place.includes(userTicketInfo.ticketInfoState.destination)
			);
		}
		return tour;
	});

	return (
		<>
			<ResultsContainer>
				<ResultsTitle>Search Results</ResultsTitle>
				<ResultsParaghraph>{filteredTour.length} tour found</ResultsParaghraph>
				{filteredTour.map((tour) => (
					<SearchResults key={tour.id} {...tour} />
				))}
			</ResultsContainer>
		</>
	);
};

export default Destination;
