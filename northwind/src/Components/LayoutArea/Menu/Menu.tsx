import { NavLink } from "react-router-dom";
import "./Menu.css";

export function Menu(): JSX.Element {
	return (
		<div className="Menu">
			<NavLink to="/home">
				<div className="special">
					Home
					<i className="gg-home-alt"></i>
				</div>
			</NavLink>
			<NavLink to="/products">
				<div className="special">
					Products
					<i className="gg-box"></i>
				</div>
			</NavLink>
			<NavLink to="/about">
				<div className="special">
					About
					<i className="gg-info"></i>
				</div>
			</NavLink>
		</div>
	);
}
