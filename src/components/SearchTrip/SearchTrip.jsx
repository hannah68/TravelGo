import { useContext } from "react";
import { FaSearch } from "react-icons/fa";

import {
	Container,
	FormContainer,
	StyledLabel,
	SelectedStyled,
	LinkBtn,
	ControlGroup,
} from "./SearchTripElements";

import { UserContext } from "../../Reducer";

import { PAGE_LINK } from "../../config";

const SearchTrip = () => {
	const userTicketInfo = useContext(UserContext);

	const changeHandler = (e) => {
		const { name, value } = e.target;

		userTicketInfo.dispatchTicket({
			type: "UPDATE_TICKET",
			field: name,
			payload: value,
		});
	};

	const submitFormHandler = (e) => {
		e.preventDefault();
	};

	return (
		<Container>
			<FormContainer onSubmit={submitFormHandler}>
				<ControlGroup>
					<StyledLabel htmlFor="destination">Destination:</StyledLabel>
					<SelectedStyled
						name="destination"
						id="destination"
						onChange={changeHandler}
						value={userTicketInfo.ticketInfoState.destination}
					>
						<option value="destination">Select Destination</option>
						<option value="Amsterdom">Amsterdom</option>
						<option value="Paris">Paris</option>
						<option value="Budapest">Budapest</option>
						<option value="Rome">Rome</option>
						<option value="London">London</option>
						<option value="Japan">Japan</option>
						<option value="Barcelona">Barcelona</option>
						<option value="Portugal">Portugal</option>
						<option value="Italy">Italy</option>
						<option value="Europe">Europe</option>
					</SelectedStyled>
				</ControlGroup>

				<ControlGroup>
					<StyledLabel htmlFor="date">Date:</StyledLabel>
					<SelectedStyled
						name="date"
						id="date"
						onChange={changeHandler}
						value={userTicketInfo.ticketInfoState.date}
					>
						<option value="Select">Select Date</option>
						<option value="Jan 2022">Jan 2023</option>
						<option value="Feb 2022">Feb 2023</option>
						<option value="Mar 2022">Mar 2023</option>
						<option value="Apr 2022">Apr 2022</option>
						<option value="May 2022">May 2022</option>
						<option value="Jun 2022">Jun 2022</option>
						<option value="Jul 2022">Jul 2022</option>
						<option value="Aug 2022">Aug 2022</option>
						<option value="Sep 2022">Sep 2022</option>
						<option value="Oct 2022">Oct 2022</option>
						<option value="Nov 2022">Nov 2022</option>
						<option value="Dec 2022">Dec 2022</option>
					</SelectedStyled>
				</ControlGroup>
				<ControlGroup>
					<StyledLabel htmlFor="passengers">Passengers:</StyledLabel>
					<SelectedStyled
						name="passengers"
						id="passengers"
						onChange={changeHandler}
						value={userTicketInfo.ticketInfoState.passengers}
					>
						<option value="Passangers">Select Passangers</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">+4</option>
					</SelectedStyled>
				</ControlGroup>

				<div>
					<LinkBtn to={{ pathname: PAGE_LINK.destionation }}>
						<FaSearch />
					</LinkBtn>
				</div>
			</FormContainer>
		</Container>
	);
};

export default SearchTrip;
