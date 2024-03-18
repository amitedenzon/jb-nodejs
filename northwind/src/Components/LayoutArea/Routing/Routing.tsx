import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../../HomeArea/Home/Home";
import { ProductList } from "../../ProductArea/ProductList/ProductList";
import { Page404 } from "../page404/page404";
import "./Routing.css";
import { Loading } from "../../SharedArea/Loading/Loading";

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
				<Route path="home" element={<Home />} />
				<Route path="products" element={<ProductList />} />
				<Route path="about" element={suspenseAbout} />
				<Route path="/" element={<Navigate to="/home" />} />
				<Route path="*" element={<Loading />} />
			</Routes>
		</div>
	);
}
