import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext(null);

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [ordered, setOrdered] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    fetchOrders();
  }, [ordered]);

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
      console.log("Product added successfully:", newProduct);
      // Perform any additional actions after adding the product
    } catch (error) {
      console.error("Error adding product:", error);
      // Handle any errors that occurred during the request
    }
  };

  const onDelete = async (id) => {
    await fetch(`https://dummyjson.com/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setOrdered(
            ordered.filter((order) => {
              return order.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const productsInfo = {
    products,
    onAdd,
    ordered,
    setOrdered,
    onDelete,
  };

  return (
    <ProductsContext.Provider value={productsInfo}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
