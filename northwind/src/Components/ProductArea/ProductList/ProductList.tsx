import { useEffect } from "react";
import "./ProductList.css";
import { productService } from "../../../Services/ProductService";

export function ProductList(): JSX.Element {
	useEffect(() => {
		productService.getAllProducts();
	}, []);

	return <div className="ProductList">Products...</div>;
}
