import { useEffect, useState } from "react";
import "./ProductDetails.css";
import { productService } from "../../../Services/ProductService";
import { ProductModel } from "../../../Models/ProductModel";
import { useNavigate, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { notify } from "../../../Utils/Notify";

export function ProductDetails(): JSX.Element {
	const [product, setProduct] = useState<ProductModel>();

	const navigate = useNavigate();
	const params = useParams();
	const id = +params.id!;

	console.log(id);

	useEffect(() => {
		productService
			.getOneProducts(id)
			.then((dbProduct) => setProduct(dbProduct));
	}, []);

	async function deleteMe() {
		try {
			const sure = window.confirm("Are you sure?");
			if (!sure) return;
			await productService.deleteProduct(product?.id || 0);
			notify.success("Product has been deleted successfully.");
			navigate("/products");
		} catch (err: any) {
			notify.error(err.message);
		}
	}

	return (
		<div className="ProductDetails">
			<div className="details">
				<div>
					<span className="header">{product?.name}</span>
					<br />
					<br />
					<span>Price: {product?.price}$, </span>
					<span>In Stock: {product?.stock} </span>
				</div>
				<div>
					<br />
					<img src={product?.imageUrl} />
				</div>
			</div>
			<br />
			<div className="buttonList">
				<div className="button">
					<NavLink to={`/products`}>
						<i className="gg-arrow-left"></i>
						<span>Back</span>
					</NavLink>
				</div>
				<div className="button">
					<NavLink to={`/products/edit/${product?.id}`}>
						<i className="gg-edit-markup"></i>
						<span>Edit</span>
					</NavLink>
				</div>
				<div className="button">
					<NavLink to="#" onClick={deleteMe}>
						<i className="gg-trash"></i>
						<span>Delete</span>
					</NavLink>
				</div>
			</div>
		</div>
	);
}
