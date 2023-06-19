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
  //------------------------
  const [smartPhones, setSmartPhones] = useState([]);
  const [fragrance, setFragrance] = useState([]);
  const [skincare, setSkincare] = useState([]);
  const [groceries, setGroceries] = useState([]);
  const [homeDecoration, setHomeDecoration] = useState([]);
  const [tops, setTops] = useState([]);
  const [womenDresses, setWomenDresses] = useState([]);
  const [womenShoes, setWomenShoes] = useState([]);
  const [womenWatches, setWomenWatches] = useState([]);
  const [womenBags, setWomenBags] = useState([]);
  const [jewellery, setJewellery] = useState([]);
  const [sunglasses, setSunglasses] = useState([]);
  const [motorcycle, setMotorcycle] = useState([]);
  const [lighting, setLighting] = useState([]);

  useEffect(() => {
    fetchSmartPhones();
    fetchFragrance();
    fetchSkincare();
    fetchGroceries();
    fetchHomeDecoration();
    fetchTops();
    fetchWomenDresses();
    fetchWomenShoes();
    fetchWomenWatches();
    fetchWomenBags();
    fetchJewellery();
    fetchSunglasses();
    fetchMotorcycle();
    fetchLighting();
    fetchProducts();
    fetchMenShirt();
    fetchLaptops();
    fetchFurniture();
    fetchWatches();
  }, []);

  useEffect(() => {
    fetchOrders();
  }, [ordered]);

  const fetchSmartPhones = async () => {
    await fetch("https://dummyjson.com/products/category/smartphones")
      .then((res) => res.json())
      .then((data) => setSmartPhones(data.products));
  };

  const fetchFragrance = async () => {
    await fetch("https://dummyjson.com/products/category/fragrances")
      .then((res) => res.json())
      .then((data) => setFragrance(data.products));
  };

  const fetchSkincare = async () => {
    await fetch("https://dummyjson.com/products/category/skincare")
      .then((res) => res.json())
      .then((data) => setSkincare(data.products));
  };

  const fetchGroceries = async () => {
    await fetch("https://dummyjson.com/products/category/groceries")
      .then((res) => res.json())
      .then((data) => setGroceries(data.products));
  };

  const fetchHomeDecoration = async () => {
    await fetch("https://dummyjson.com/products/category/home-decoration")
      .then((res) => res.json())
      .then((data) => setHomeDecoration(data.products));
  };

  const fetchTops = async () => {
    await fetch("https://dummyjson.com/products/category/tops")
      .then((res) => res.json())
      .then((data) => setTops(data.products));
  };

  const fetchWomenDresses = async () => {
    await fetch("https://dummyjson.com/products/category/womens-dresses")
      .then((res) => res.json())
      .then((data) => setWomenDresses(data.products));
  };

  const fetchWomenShoes = async () => {
    await fetch("https://dummyjson.com/products/category/womens-shoes")
      .then((res) => res.json())
      .then((data) => setWomenShoes(data.products));
  };

  const fetchWomenWatches = async () => {
    await fetch("https://dummyjson.com/products/category/womens-watches")
      .then((res) => res.json())
      .then((data) => setWomenWatches(data.products));
  };

  const fetchWomenBags = async () => {
    await fetch("https://dummyjson.com/products/category/womens-bags")
      .then((res) => res.json())
      .then((data) => setWomenBags(data.products));
  };

  const fetchJewellery = async () => {
    await fetch("https://dummyjson.com/products/category/womens-jewellery")
      .then((res) => res.json())
      .then((data) => setJewellery(data.products));
  };

  const fetchSunglasses = async () => {
    await fetch("https://dummyjson.com/products/category/sunglasses")
      .then((res) => res.json())
      .then((data) => setSunglasses(data.products));
  };

  const fetchMotorcycle = async () => {
    await fetch("https://dummyjson.com/products/category/motorcycle")
      .then((res) => res.json())
      .then((data) => setMotorcycle(data.products));
  };

  const fetchLighting = async () => {
    await fetch("https://dummyjson.com/products/category/lighting")
      .then((res) => res.json())
      .then((data) => setLighting(data.products));
  };

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
    await fetch("https://pioneer-alpha-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setOrdered(data));
  };

  const onAdd = async (product) => {
    try {
      const productWithAmount = { ...product, amount: 1 }; // Add amount property with default value

      const response = await fetch(
        "https://pioneer-alpha-server.vercel.app/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productWithAmount), // Use the updated product object
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add the product");
      }

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

  const onUpdate = async (_id, updatedProduct) => {
    try {
      const response = await fetch(
        `https://pioneer-alpha-server.vercel.app/products/${_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProduct),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update the product");
      }

      const updatedProductData = await response.json();

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Product updated successfully",
        showConfirmButton: false,
        timer: 1500,
      });

      // Perform any additional actions after updating the product
    } catch (error) {
      console.error("Error updating product:", error);
      // Handle any errors that occurred during the request
    }
  };

  const onDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(
            `https://pioneer-alpha-server.vercel.app/products/${id}`,
            {
              method: "DELETE",
            }
          );

          if (response.status === 200) {
            setOrdered((prevOrdered) =>
              prevOrdered.filter((order) => order._id !== id)
            );
          } else {
            console.log("Failed to delete item.");
          }
        } catch (error) {
          console.log("Error occurred during deletion:", error);
        }

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const onDeleteImmediate = async (id) => {
    try {
      const response = await fetch(
        `https://pioneer-alpha-server.vercel.app/products/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.status === 200) {
        setOrdered((prevOrdered) =>
          prevOrdered.filter((order) => order._id !== id)
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
    ordered,
    setOrdered,
    onAdd,
    onDelete,
    onDeleteImmediate,
    onUpdate,
    menShirt,
    laptops,
    furniture,
    watches,
    smartPhones,
    fragrance,
    skincare,
    groceries,
    homeDecoration,
    tops,
    womenDresses,
    womenShoes,
    womenWatches,
    womenBags,
    jewellery,
    sunglasses,
    motorcycle,
    lighting,
  };

  return (
    <ProductsContext.Provider value={productsInfo}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
