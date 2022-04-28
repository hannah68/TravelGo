import React from "react";

import {
	AboutContainer,
	Title,
	StyledRow,
	ColText,
	ColImg,
	Img,
	SubTitle,
	SubText,
	StyledBtn,
	WorldContainer,
	WorldImg,
} from "./AboutElements";

import aboutImg from "../../images/About-img.png";
import worldImg from "../../images/worldImg.png";

function AboutSection() {
	return (
		<AboutContainer id="about">
			<Title>About us</Title>

			<StyledRow>
				<ColText>
					<SubTitle>Best Travel Agency London</SubTitle>
					<SubText>
						Established in 2006, Known to our customers as one of the best
						travel agency London, we hold long standing and robust trade
						relationships with all major airlines, specialist airfare
						consolidators, tour operators,hotels and accommodation wholesalers
					</SubText>
					<StyledBtn>read more</StyledBtn>
				</ColText>

				<ColImg>
					<Img src={aboutImg} alt="trip image" />
				</ColImg>
			</StyledRow>

			<WorldContainer>
				<WorldImg src={worldImg} alt="world image" />
			</WorldContainer>
		</AboutContainer>
	);
}

export default AboutSection;
