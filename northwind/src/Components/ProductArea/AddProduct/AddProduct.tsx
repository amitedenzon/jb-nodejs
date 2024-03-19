import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./AddProduct.css";
import { ProductModel } from "../../../Models/ProductModel";
import { productService } from "../../../Services/ProductService";
import { notify } from "../../../Utils/Notify";

function AddProduct(): JSX.Element {
	const { register, handleSubmit, formState } = useForm<ProductModel>();
	const navigate = useNavigate();

	async function send(product: ProductModel) {
		try {
			product.image = (product.image as unknown as FileList)[0];
			await productService.addProduct(product);
			notify.success("Product has been added.");
			navigate("/products");
		} catch (err: any) {
			notify.error(err);
		}
	}

	return (
		<div className="AddProduct">
			<form onSubmit={handleSubmit(send)}>
				<h2>Add Product</h2>

				<label>Name: </label>
				<input
					type="text"
					{...register("name", ProductModel.nameValidation)}
				/>
				<span className="err">{formState.errors.name?.message}</span>

				<label>Price: </label>
				<input
					type="number"
					step="0.01"
					{...register("price", ProductModel.priceValidation)}
				/>
				<span className="err">{formState.errors.price?.message}</span>

				<label>Stock: </label>
				<input
					type="number"
					{...register("stock", ProductModel.stockValidation)}
				/>
				<span className="err">{formState.errors.stock?.message}</span>

				<label>Image: </label>
				<input
					type="file"
					accept="image/*"
					{...register("image", ProductModel.imageValidation)}
				/>
				<span className="err">{formState.errors.image?.message}</span>

				<button>Add</button>
			</form>
		</div>
	);
}

export default AddProduct;
