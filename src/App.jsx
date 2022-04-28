import { Route, Routes } from "react-router";
import { useEffect, useState, useReducer } from "react";

import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Destination from "./pages/Destination";
import Nav from "./components/Nav/Nav";

import { ticketInfoReducer, UserContext } from "./Reducer";

import { APIEndPoints, PAGE_LINK } from "./config";

const Initdata = {
	destination: "",
	date: "",
	passengers: "",
};

const App = () => {
	const [allTripData, setallTripData] = useState([]);
	const [ticketInfoState, dispatchTicket] = useReducer(
		ticketInfoReducer,
		Initdata
	);

	useEffect(() => {
		const fetchTourData = async () => {
			const tourRes = await fetch(APIEndPoints.trip);
			const tourData = await tourRes.json();
			setallTripData(tourData);
		};
		fetchTourData();
	}, []);

	return (
		<UserContext.Provider value={{ ticketInfoState, dispatchTicket }}>
			<Nav />
			<Routes>
				<Route path={PAGE_LINK.home} element={<Home />} />
				<Route path={PAGE_LINK.signin} element={<Signin />} />
				<Route
					path={PAGE_LINK.destionation}
					element={<Destination allTripData={allTripData} />}
				/>
			</Routes>
		</UserContext.Provider>
	);
};

export default App;
