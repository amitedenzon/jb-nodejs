import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../../HomeArea/Home/Home";
import { ProductDetails } from "../../ProductArea/ProductDetails/ProductDetails";
import { ProductList } from "../../ProductArea/ProductList/ProductList";
import { Page404 } from "../page404/page404";
import "./Routing.css";
import { EditProduct } from "../../ProductArea/EditProduct/EditProduct";
import AddProduct from "../../ProductArea/AddProduct/AddProduct";
import { EmployeeTable } from "../../EmployeeArea/EmployeeTable/EmployeeTable";
import AddEmployee from "../../EmployeeArea/AddEmployee/AddEmployee";

export function Routing(): JSX.Element {
	const LazyAbout = lazy(() => import("../../AboutArea/About/About"));
	const suspenseAbout = (
		<Suspense>
			<LazyAbout />
		</Suspense>
	);

	return (
		<div className="Routing">
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/products" element={<ProductList />} />
				<Route
					path="/products/details/:id"
					element={<ProductDetails />}
				/>
				<Route path="/products/new" element={<AddProduct />} />
				<Route path="/products/edit/:id" element={<EditProduct />} />
				<Route path="/employees" element={<EmployeeTable />} />
				<Route path="/employees/new" element={<AddEmployee />} />
				<Route path="/about" element={suspenseAbout} />
				<Route path="/" element={<Navigate to="/home" />} />
				<Route path="*" element={<Page404 />} />
			</Routes>
		</div>
	);
}
