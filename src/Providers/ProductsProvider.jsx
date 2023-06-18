import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext(null);

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [ordered, setOrdered] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    await fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  };

  const onAdd = async (products) => {
    const newProducts = products;

    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProducts),
    })
      .then((res) => res.json())
      .then((data) => setOrdered([...ordered, data]));
  };

  const productsInfo = {
    products,
    onAdd,
    ordered,
    setOrdered,
  };

  return (
    <ProductsContext.Provider value={productsInfo}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
