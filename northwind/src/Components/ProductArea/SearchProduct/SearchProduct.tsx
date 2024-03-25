import React, { useState, useEffect } from "react";
import "./SearchProduct.css";
import useTitle from "../../../Utils/useTitle";
import ProductModel from "../../../Models/ProductModel";
import { productService } from "../../../Services/ProductService";

export function SearchProduct(): JSX.Element {
	useTitle("Edit Product");

	const [searchQuery, setSearchQuery] = useState("");
	const [searchResults, setSearchResults] = useState<ProductModel[]>([]);

	const handleSearchInputChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setSearchQuery(event.target.value);
	};

	useEffect(() => {
		const fetchSearchResults = async () => {
			if (searchQuery.trim() === "") {
				setSearchResults([]);
				return;
			}

			try {
				const products = await productService.getAllProducts();
				const filteredProducts = products.filter((product) =>
					product
						.name!.toLowerCase()
						.includes(searchQuery.toLowerCase())
				);
				setSearchResults(filteredProducts);
			} catch (error) {
				console.error("Error fetching search results:", error);
			}
		};

		fetchSearchResults();
	}, [searchQuery]);

	return (
		<div className="SearchProduct">
			<h2>Search Products</h2>
			<input
				type="text"
				placeholder="Search by product name"
				value={searchQuery}
				onChange={handleSearchInputChange}
			/>
			<div className="search-results">
				{searchResults.map((product) => (
					<div key={product.id}>{product.name}</div>
				))}
			</div>
		</div>
	);
}
