import { NavLink } from "react-router-dom";
import "./Menu.css";

export function Menu(): JSX.Element {
	return (
		<div className="Menu">
			<NavLink to="/home">
				Home
				<i className="gg-home-alt"></i>
			</NavLink>
			<NavLink to="/products" end>
				Products
				<i className="gg-box"></i>
			</NavLink>
			<NavLink to="/products/new">
				Add Product
				<i className="gg-math-plus"></i>{" "}
			</NavLink>
			<NavLink to="/about">
				About
				<i className="gg-info"></i>
			</NavLink>
		</div>
	);
}
