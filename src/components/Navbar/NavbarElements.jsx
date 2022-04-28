import styled from "styled-components";
import { Link as LinkRoute } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
	background: var(--clr-primary);
	// background: ${({ scrollNav }) =>
		scrollNav ? "var(--clr-primary)" : "var(--clr-primary)"};
	height: 80px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.3rem;
	position: fixed;
	top: 0;
	z-index: 10;

	@media screen and (max-width: 1064px) {
		transition: 0.8s all ease;
	}
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	z-index: 1;
	width: 100%;
	padding: 0 24px;
	max-width: 1600px;
`;

export const NavLogo = styled(LinkRoute)`
	display: flex;
	align-items: center;
	margin-left: 24px;
	cursor: pointer;
`;

export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 1064px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-120%, 80%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: -22px;

	@media screen and (max-width: 1064px) {
		display: none;
	}
`;

export const NavItem = styled.li`
	height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1.5rem;
	height: 100%;
	cursor: pointer;

	&.active {
		border-bottom: 3px solid var(--clr-border);
	}
`;

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;

	@media screen and (max-width: 1064px) {
		display: none;
	}
`;

export const NavBtnLink = styled(LinkScroll)`
	white-space: nowrap;
	font-size: 1.3rem;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	padding-right: 1.5rem;

	&:nth-child(2) {
		border-radius: 40px;
		background: var(--clr-secondary);
		padding: 7px 20px;
		outline: none;
		border: none;
		box-shadow: var(--box-shadow);
		border: 0;

		&:hover {
			transition: all 0.2s ease-in-out;
			background: var(--clr-secondary-1);
		}
	}
`;
