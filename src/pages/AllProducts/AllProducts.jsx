import React, { useContext, useState } from "react";
import { ProductsContext } from "../../Providers/ProductsProvider";
import Card2 from "../../components/Card2/Card2";
import Pagination from "../../components/Pagination";
import useTitle from "../../Hooks/useTitle";

const AllProducts = () => {
  useTitle("Pioneer Alpha | All Products");
  const { products } = useContext(ProductsContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = products.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      <h1 className="text-5xl uppercase text-center my-16">All Products</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {currentPosts.map((product) => (
          <Card2 key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        totalPosts={products.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default AllProducts;
