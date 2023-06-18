import React, { useContext, useState } from "react";
import { ProductsContext } from "../../Providers/ProductsProvider";

const Card2 = ({ product }) => {
  const { id, thumbnail, category, title, description, price } = product;
  const { ordered, onAdd } = useContext(ProductsContext);
  const [isDisabled, setIsDisabled] = useState(
    ordered.some((item) => item.id === id)
  );

  const handleOrder = (product) => {
    console.log("Added", product.id);
    onAdd(product);
    setIsDisabled(true);
  };

  return (
    <div className="card w-96 h-[650px] bg-base-100 shadow-xl">
      <figure className="">
        <img
          className="h-[260px] rounded-b-2xl w-full"
          src={thumbnail}
          alt={category}
        />
      </figure>
      <div className="card-body items-center font-bold">
        <h2 className="card-title text-2xl mt-7 uppercase">{title}</h2>
        <p className="mt-3 text-center">{description.slice(0, 50)}...</p>
        <h3 className="text-[#0E4B80] text-lg mt-8">${price} USD</h3>
        <div className="card-actions justify-end mt-[70px]">
          <button
            onClick={() => handleOrder(product)}
            disabled={isDisabled}
            className="btn bg-[#001439] text-white rounded-full w-[200px]"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card2;
