import React, { useContext, useState } from "react";
import { ProductsContext } from "../../Providers/ProductsProvider";

const Card1 = ({ product }) => {
  const { id, thumbnail, category, title, description, price } = product;
  const { ordered, onAdd } = useContext(ProductsContext);
  const [isDisabled, setIsDisabled] = useState(
    ordered.some((item) => item.id === id)
  );

  const handleOrder = (product) => {
    onAdd(product);
    setIsDisabled(true);
  };

  return (
    <div className="card w-96 h-[250px] bg-blue-100 shadow-xl grid grid-cols-2 border-2 border-blue-400">
      <div className="card-body items-start font-bold">
        <h2 className="card-title text-lg uppercase">{title}</h2>
        <p className="text-center text-gray-500">Starting</p>
        <h3 className="text-[#0E4B80] text-base">${price} USD</h3>
        <div className="card-actions justify-end">
          <button>View</button>
        </div>
      </div>
      <figure className="ms-3">
        <img
          className="rounded-r-2xl h-full w-full"
          src={thumbnail}
          alt={category}
        />
      </figure>
    </div>
  );
};

export default Card1;
