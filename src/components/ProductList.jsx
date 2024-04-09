import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const response = await axios.get("/api/products");
      console.log(response.data); // Access the data property
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      return []; // Return an empty array or appropriate error handling
    }
  }

  async function deleteProduct(productId) {
    try {
      await axios.delete(`/api/products/${productId}`);
      // Remove the deleted product from the state
      setProducts(products.filter(product => product.id !== productId));
      console.log("Product deleted successfully");
    } catch (error) {
      console.error("Error deleting product:", error);
      // Handle error appropriately
    }
  }

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
