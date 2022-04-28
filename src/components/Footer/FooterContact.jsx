import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FiFacebook } from "react-icons/fi";
import { FaPinterestP } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

import {
	ContactSection,
	LogoSection,
	ImgageLogo,
	SocialMedia,
	SocialLink,
	NavMenu,
	NavItem,
	NavLinks,
	AddressInfo,
	Address,
} from "./FooterContactElements";

import logo from "../../images/logo.svg";

import { iconFooterStyle } from "../../utils";
import { PAGE_LINK, SOCIAL_LINK } from "../../config";

const FooterContact = () => {
	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<ContactSection id="contact">
			<LogoSection>
				<ImgageLogo src={logo} onClick={toggleHome} />
				<SocialMedia>
					<SocialLink
						href={SOCIAL_LINK.facebook}
						target="_blank"
						aria-label="facebook"
					>
						<FiFacebook style={iconFooterStyle} />
					</SocialLink>
					<SocialLink
						href={SOCIAL_LINK.pinterest}
						target="_blank"
						aria-label="pinterest"
					>
						<FaPinterestP style={iconFooterStyle} />
					</SocialLink>
					<SocialLink
						href={SOCIAL_LINK.instagram}
						target="_blank"
						aria-label="instagram"
					>
						<FiInstagram style={iconFooterStyle} />
					</SocialLink>
				</SocialMedia>
			</LogoSection>

			<NavMenu>
				<NavItem>
					<NavLinks to={PAGE_LINK.home}>Home</NavLinks>
				</NavItem>
				<NavItem>
					<NavLinks to={PAGE_LINK.about}>About</NavLinks>
				</NavItem>
				<NavItem>
					<NavLinks to={PAGE_LINK.destionation}>Destination</NavLinks>
				</NavItem>
				<NavItem>
					<NavLinks to={PAGE_LINK.contact}>Contact</NavLinks>
				</NavItem>
			</NavMenu>

			<AddressInfo>
				<Address>9141 West Street, London W52 7LS</Address>
				<Address>+44 20 7946 0502</Address>
				<Address>travelgo@example.com</Address>
			</AddressInfo>
		</ContactSection>
	);
};

export default FooterContact;
