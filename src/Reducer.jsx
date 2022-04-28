import { createContext } from "react";
export const UserContext = createContext();

export const ticketInfoReducer = (state, action) => {
	switch (action.type) {
		case "UPDATE_TICKET":
			const ticket = {
				...state,
				[action.field]: action.payload,
			};
			return ticket;
		default:
			return state;
	}
};
