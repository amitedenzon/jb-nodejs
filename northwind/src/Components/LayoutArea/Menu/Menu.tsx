import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

export function Menu(): JSX.Element {
	const [isProductsActive, setIsProductsActive] = useState(false);
	const [isAddProductActive, setIsAddProductActive] = useState(false);

	const handleProductsClick = () => {
		setIsProductsActive(true);
		setIsAddProductActive(false); // Ensure Add Product is not active when Products is clicked
	};

	const handleAddProductClick = () => {
		setIsAddProductActive(true);
	};

	const handleOtherLinksClick = () => {
		setIsProductsActive(false);
		setIsAddProductActive(false);
	};

	return (
		<div className="Menu">
			<NavLink to="/home" onClick={handleOtherLinksClick}>
				Home
				<i className="gg-home-alt"></i>
			</NavLink>
			<NavLink to="/products" end onClick={handleProductsClick}>
				Products
				<i className="gg-box"></i>
			</NavLink>
			{isProductsActive && (
				<React.Fragment>
					<NavLink
						to="/products/new"
						onClick={handleAddProductClick}
						className={isAddProductActive ? "active" : ""}>
						Add Product
						<i className="gg-math-plus"></i>{" "}
					</NavLink>
				</React.Fragment>
			)}
			<NavLink to="/about" onClick={handleOtherLinksClick}>
				About
				<i className="gg-info"></i>
			</NavLink>
		</div>
	);
}
