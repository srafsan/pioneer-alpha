import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

export const ProductsContext = createContext(null);

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [ordered, setOrdered] = useState([]);
  const [menShirt, setMenShirt] = useState([]);
  const [laptops, setLaptops] = useState([]);
  const [furniture, setFurniture] = useState([]);
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetchProducts();
    fetchMenShirt();
    fetchLaptops();
    fetchFurniture();
    fetchWatches();
  }, []);

  useEffect(() => {
    fetchOrders();
  }, [ordered]);

  const fetchMenShirt = async () => {
    await fetch("https://dummyjson.com/products/category/mens-shirts")
      .then((res) => res.json())
      .then((data) => setMenShirt(data.products));
  };

  const fetchLaptops = async () => {
    await fetch("https://dummyjson.com/products/category/laptops")
      .then((res) => res.json())
      .then((data) => setLaptops(data.products));
  };

  const fetchFurniture = async () => {
    await fetch("https://dummyjson.com/products/category/furniture")
      .then((res) => res.json())
      .then((data) => setFurniture(data.products));
  };

  const fetchWatches = async () => {
    await fetch("https://dummyjson.com/products/category/mens-watches")
      .then((res) => res.json())
      .then((data) => setWatches(data.products));
  };

  const fetchProducts = async () => {
    await fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  };

  const fetchOrders = async () => {
    await fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setOrdered(data));
  };

  const onAdd = async (product) => {
    try {
      const response = await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        throw new Error("Failed to add the product");
      }

      const newProduct = await response.json();

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Order added successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      // Perform any additional actions after adding the product
    } catch (error) {
      console.error("Error adding product:", error);
      // Handle any errors that occurred during the request
    }
  };

  const onDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/products/${id}`, {
        method: "DELETE",
      });

      if (response.status === 200) {
        setOrdered((prevOrdered) =>
          prevOrdered.filter((order) => order.id !== id)
        );
      } else {
        console.log("Failed to delete item.");
      }
    } catch (error) {
      console.log("Error occurred during deletion:", error);
    }
  };

  const productsInfo = {
    products,
    onAdd,
    ordered,
    setOrdered,
    onDelete,
    menShirt,
    laptops,
    furniture,
    watches,
  };

  return (
    <ProductsContext.Provider value={productsInfo}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
