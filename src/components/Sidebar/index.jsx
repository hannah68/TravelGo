import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
	SideBtnWrap,
	SidebarRoute,
} from "./SidebarElements";

import { PAGE_LINK } from "../../config";

const Sidebar = ({ toggle, isOpen }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to="home" onClick={toggle}>
						Home
					</SidebarLink>
					<SidebarLink to="about" onClick={toggle}>
						About
					</SidebarLink>
					<SidebarLink to="destination" onClick={toggle}>
						Destination
					</SidebarLink>
					<SidebarLink to="contact" onClick={toggle}>
						Contact
					</SidebarLink>
				</SidebarMenu>

				<SideBtnWrap>
					<SidebarRoute to={PAGE_LINK.signin}>Sign In</SidebarRoute>
					<SidebarRoute to={PAGE_LINK.signup}>Sign Up</SidebarRoute>
				</SideBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
