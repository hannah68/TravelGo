import { useState, useEffect } from "react";

import "./Home.css";

import Header from "../components/Header/Header";
import AboutSection from "../components/About/AboutSection";
import ReviewSection from "../components/Reviews/ReviewSection";
import TourSection from "../components/Tours/TourSection";
import FAQ from "../components/Footer/FAQ";

import { APIEndPoints } from "../config";

const Home = () => {
	const [tourInfo, setTourInfo] = useState([]);

	useEffect(() => {
		const fetchTourInfo = async () => {
			const tourRes = await fetch(APIEndPoints.tour);
			const tourData = await tourRes.json();
			setTourInfo(tourData);
		};
		fetchTourInfo();
	}, []);

	return (
		<>
			<Header />
			<AboutSection />
			<TourSection tourInfo={tourInfo} />
			<ReviewSection />
			<FAQ />
		</>
	);
};

export default Home;
