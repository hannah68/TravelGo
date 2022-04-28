import styled from "styled-components";

export const AboutContainer = styled.section`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	padding: 2rem;
	margin-top: 2rem;
`;

export const Title = styled.h1`
	font-size: 36px;
	font-weight: bold;
	text-align: center;

	@media screen and (max-width: 768px) {
		font-size: 30px;
	}
	@media screen and (max-width: 540px) {
		font-size: 25px;
	}
	@media screen and (max-width: 414px) {
		font-size: 18px;
	}
`;

export const StyledRow = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: 1400px;
	gap: 5rem;
	padding-top: 2rem;
	margin: 2rem auto;

	@media screen and (max-width: 1464px) {
		max-width: 1200px;
	}
	@media screen and (max-width: 1250px) {
		max-width: 1000px;
	}
	@media screen and (max-width: 1064px) {
		max-width: 720px;
		flex-direction: column;
	}
	@media screen and (max-width: 540px) {
		margin: 1rem auto;
	}
	@media screen and (max-width: 487px) {
		max-width: 520px;
	}
`;

// First column
export const ColText = styled.div`
	width: 700px;
	padding-top: 3rem;

	@media screen and (max-width: 1064px) {
		text-align: center;
	}
	@media screen and (max-width: 768px) {
		width: 500px;
		padding-top: 0;
	}
	@media screen and (max-width: 540px) {
		width: 450px;
	}
	@media screen and (max-width: 487px) {
		width: 350px;
	}
	@media screen and (max-width: 414px) {
		width: 300px;
	}
	@media screen and (max-width: 320px) {
		width: 250px;
	}
`;

export const SubTitle = styled.h2`
	font-size: 36px;
	font-weight: bold;
	margin-bottom: 3rem;

	@media screen and (max-width: 1250px) {
		font-size: 34px;
	}
	@media screen and (max-width: 768px) {
		font-size: 25px;
	}
	@media screen and (max-width: 540px) {
		font-size: 20px;
	}
	@media screen and (max-width: 414px) {
		font-size: 16px;
		margin-bottom: 1rem;
	}
`;

export const SubText = styled.p`
	font-size: 24px;
	line-height: 163%;
	margin-bottom: 3rem;

	@media screen and (max-width: 1250px) {
		font-size: 20px;
	}
	@media screen and (max-width: 540px) {
		font-size: 16px;
	}
	@media screen and (max-width: 414px) {
		font-size: 13px;
		margin-bottom: 1rem;
	}
`;

export const StyledBtn = styled.button`
	width: 180px;
	border: none;
	outline: none;
	cursor: pointer;
	background: var(--clr-tertiary);
	font-size: 24px;
	border-radius: 40px;
	text-align: center;
	padding: 10px 0;
	box-shadow: var(--box-shadow);
	border: 0;
	transition: transform 0.3s ease-out;

	&:hover {
		background: var(--clr-tertiary-1);
		border: 1px solid var(--clr-tertiary);
	}
	&:active {
		transform: translateY(5px);
	}
	@media screen and (max-width: 414px) {
		font-size: 14px;
		width: 150px;
		padding: 5px 0;
	}
`;

// second column
export const ColImg = styled.div`
	width: 700px;
	@media screen and (max-width: 1064px) {
		width: 600px;
		margin: 2rem auto;
	}
	@media screen and (max-width: 818px) {
		width: 400px;
	}
	@media screen and (max-width: 540px) {
		width: 350px;
	}
	@media screen and (max-width: 414px) {
		width: 250px;
	}
`;

export const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

// World image
export const WorldContainer = styled.div`
	width: 890px;
	height: 50%;
	display: block;
	margin: 2rem auto;

	@media screen and (max-width: 1064px) {
		width: 690px;
	}
	@media screen and (max-width: 818px) {
		width: 500px;
	}
	@media screen and (max-width: 540px) {
		width: 350px;
	}
	@media screen and (max-width: 414px) {
		width: 250px;
	}
`;

export const WorldImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	display: block;
`;
