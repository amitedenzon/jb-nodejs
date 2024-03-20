import { useEffect, useState } from "react";
import "./ProductList.css";
import { productService } from "../../../Services/ProductService";
import { ProductCard } from "../ProductCard/ProductCard";
import { ProductModel } from "../../../Models/ProductModel";
import { notify } from "../../../Utils/Notify";
import useTitle from "../../../Utils/useTitle";

export function ProductList(): JSX.Element {
	useTitle("Products");

	const [products, setProducts] = useState<ProductModel[]>([]);

	useEffect(() => {
		productService
			.getAllProducts()
			.then((dbProducts) => setProducts(dbProducts))
			.catch((err) => notify.error(err));
	}, []);

	return (
		<div className="ProductList">
			{products.map((p) => (
				<ProductCard key={p.id} product={p} />
			))}
		</div>
	);
}
