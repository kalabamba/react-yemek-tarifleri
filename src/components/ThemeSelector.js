import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import "./ThemeSelector.css";

import lightIcon from "../assets/light.svg";
import darkIcon from "../assets/dark.svg";

export default function ThemeSelector() {
	const themeColors = ["warning", "success", "danger", "primary", "secondary", "info", "dark", "light"];

	const { color, changeColor, mode, changeMode } = useContext(ThemeContext);
	const toggleMode = () => {
		changeMode(mode === "light" ? "dark" : "light");
	};
  	return (
		<div className="container theme-selector mt-3">
			<div className="mode-toggle">
				<img src={mode === "dark" ? darkIcon : lightIcon } alt="dark light mode" onClick={toggleMode}/>
			</div>
			<div className="theme-links">
				{themeColors.map((themeColor) => (
					<span
					key={themeColor}
					className={`bg-${themeColor} ${
						color === themeColor ? "active" : ""
					}`}
					onClick={() => changeColor(themeColor)}
					>
					</span>
				))}
			</div>
		</div>
	);
}