import { createContext, useReducer } from "react";
import ThemeReducer from "../reducers/ThemeReducer";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
	const [state, dispatch] = useReducer(ThemeReducer, {
		color: "primary",
		mode: "light",
	});
	const changeColor = (color) => {
		dispatch({ type: "CHANGE_COLOR", payload: color });
	};
	const changeMode = (mode) => {
		dispatch({ type: "CHANGE_MODE", payload: mode });
	};
  	return (
		<ThemeContext.Provider value={ { ...state, changeColor, changeMode} }>
	  		{ children }
		</ThemeContext.Provider>
  	);
}


