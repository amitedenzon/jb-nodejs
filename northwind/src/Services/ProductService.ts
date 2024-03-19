import axios from "axios";
import { ProductModel } from "../Models/ProductModel";
import { appConfig } from "../Utils/AppConfig";

class ProductService {
	public async getAllProducts(): Promise<ProductModel[]> {
		const response = await axios.get<ProductModel[]>(appConfig.productsUrl);
		return response.data;
	}

	public async getOneProducts(id: number): Promise<ProductModel> {
		console.log(`${appConfig.productsUrl}${id}`);

		const response = await axios.get<ProductModel>(
			`${appConfig.productsUrl}${id}`
		);
		return response.data;
	}

	public async addProduct(product: ProductModel): Promise<void> {
		const options = { headers: { "content-Type": "multipart/form-data" } };
		const response = await axios.post<ProductModel>(
			appConfig.productsUrl,
			product,
			options
		);
		const addedProduct = response.data;
	}

	public async deleteProduct(id: number): Promise<void> {
		await axios.delete(appConfig.productsUrl + id);
	}

	public async updateProduct(product: ProductModel): Promise<void> {
		const options = { headers: { "content-Type": "multipart/form-data" } };
		const response = await axios.put<ProductModel>(
			appConfig.productsUrl + product.id,
			product,
			options
		);
		const updatedProduct = response.data;
	}
}

export const productService = new ProductService();
