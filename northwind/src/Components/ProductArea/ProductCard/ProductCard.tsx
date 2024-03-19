import { NavLink } from "react-router-dom";
import { ProductModel } from "../../../Models/ProductModel";
import "./ProductCard.css";

type ProductCardProps = {
	product: ProductModel;
};

export function ProductCard(props: ProductCardProps): JSX.Element {
	return (
		<div className="ProductCard">
			<div>
				<h3>{props.product.name}</h3>
				<span>Price: {props.product.price}$, </span>
				<span>In Stock: {props.product.stock} </span>
			</div>
			<div>
				<NavLink to={`details/${props.product.id}`}>
					<img src={props.product.imageUrl} />
				</NavLink>
			</div>
		</div>
	);
}
