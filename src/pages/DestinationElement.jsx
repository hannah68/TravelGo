import styled from "styled-components";

export const ResultsContainer = styled.section`
	max-width: 1200px;
	display: flex;
	flex-direction: column;
	margin: 7rem auto;
	padding-bottom: 2rem;
`;
export const ResultsTitle = styled.h1`
	margin-bottom: 10px;
`;

export const ResultsParaghraph = styled.p`
	font-size: 20px;
	color: #808080;
	margin-bottom: 1rem;
`;

export const Results = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 3rem;
	border-bottom: 2px solid #d9d9d9;
	padding-bottom: 2rem;
`;

export const Img = styled.img`
	width: 300px;
	height: 200px;
`;

export const TourInfo = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 2rem;
`;

export const TourTitle = styled.h1`
	font-size: 24px;
	margin-bottom: 1rem;
	word-spacing: 5px;
`;

export const TourDetails = styled.p`
	display: flex;
`;

export const Details = styled.span`
	font-size: 18px;
	margin-right: 2rem;
	align-items: left;
	padding-bottom: 2px;
	display: inline-block;
`;

export const TourDescription = styled.p`
	font-size: 20px;
	margin-top: 1rem;
`;

export const TourBooking = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-left: 2rem;
`;

export const TourPrice = styled.h2`
	margin-bottom: 1rem;
`;

export const TourBtn = styled.button`
	cursor: pointer;
	font-size: 24px;
	width: 180px;
	background: var(--clr-tertiary);
	border-radius: 40px;
	padding: 10px 0;
	border: none;
	outline: none;
	text-align: center;
`;
