import styled from "styled-components";

export const Question = styled.article`
	background: var(--clr-tertiary-2);
	padding: 1rem;
	box-shadow: var(--box-shadow-1);
	border: 0;
	margin-bottom: 1rem;
	transition: all 0.4s ease-out;

	@media screen and (max-width: 414px) {
		padding: 0.5rem;
	}
`;

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;
`;

export const QTitle = styled.h4`
	font-size: 20px;
	font-weight: bold;

	@media screen and (max-width: 540px) {
		font-size: 16px;
	}
	@media screen and (max-width: 414px) {
		font-size: 13px;
	}
`;

export const Btn = styled.button`
	border: none;
	outline: none;
	cursor: pointer;
	background: transparent;
`;

export const Answer = styled.p`
	font-size: 18px;
	@media screen and (max-width: 414px) {
		font-size: 13px;
	}
`;
