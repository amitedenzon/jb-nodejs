import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

export function Menu(): JSX.Element {
	const [isProductsActive, setIsProductsActive] = useState(false);
	const [isAddProductActive, setIsAddProductActive] = useState(false);
	const [isEmployeeActive, setIsEmployeeActive] = useState(false);
	const [isEditProductActive, setIsEditProductActive] = useState(false);
	const [isAddEmployeeActive, setIsAddEmployeeActive] = useState(false);

	const handleProductsClick = () => {
		setIsProductsActive(true);
		setIsAddProductActive(false);
		setIsEditProductActive(false);
		setIsEmployeeActive(false);
		setIsAddEmployeeActive(false);
	};

	const handleAddProductClick = () => {
		setIsAddProductActive(true);
		setIsEditProductActive(false);
		setIsEmployeeActive(false);
		setIsAddEmployeeActive(false);
	};

	const handleEditProductClick = () => {
		setIsEditProductActive(true);
		setIsAddProductActive(false);
		setIsEmployeeActive(false);
		setIsAddEmployeeActive(false);
	};

	const handleEmployeeClick = () => {
		setIsAddProductActive(false);
		setIsProductsActive(false);
		setIsEmployeeActive(true);
		setIsAddEmployeeActive(false);
	};

	const handleAddEmployeeClick = () => {
		setIsAddProductActive(false);
		setIsProductsActive(false);
		setIsAddEmployeeActive(true);
	};

	const handleOtherLinksClick = () => {
		setIsProductsActive(false);
		setIsAddProductActive(false);
		setIsEmployeeActive(false);
		setIsAddEmployeeActive(false);
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
				<>
					<NavLink
						to="/products/new"
						end
						onClick={handleAddProductClick}
						className={isAddProductActive ? "active" : ""}>
						Add Product
						<i className="gg-math-plus"></i>
					</NavLink>
					<NavLink
						to="/products/edit"
						end
						onClick={handleEditProductClick}
						className={isEditProductActive ? "active" : ""}>
						Edit Product
						<i className="gg-edit-markup"></i>
					</NavLink>
				</>
			)}
			<NavLink to="/employees" end onClick={handleEmployeeClick}>
				Employees
				<i className="gg-user"></i>{" "}
			</NavLink>
			{isEmployeeActive && (
				<React.Fragment>
					<NavLink
						to="/employees/new"
						onClick={handleAddEmployeeClick}
						className={isAddEmployeeActive ? "active" : ""}>
						Add Employee
						<i className="gg-math-plus"></i>
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
