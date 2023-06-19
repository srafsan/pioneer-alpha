import React, { useContext, useState } from "react";
import { ProductsContext } from "../../Providers/ProductsProvider";

import { IoMdAddCircleOutline } from "react-icons/io";

const Card3 = ({ product }) => {
  const {
    id,
    thumbnail,
    category,
    title,
    description,
    price,
    discountPercentage,
  } = product;
  const { ordered, onAdd } = useContext(ProductsContext);
  const [isDisabled, setIsDisabled] = useState(
    ordered.some((item) => item.id === id)
  );

  const handleOrder = (product) => {
    onAdd(product);
    setIsDisabled(true);
  };

  return (
    <div
      className="card w-96 bg-base-100 shadow-lg"
      style={{ border: "1px solid #eeeeee" }}
    >
      <figure className="px-10 pt-10">
        <img
          src={thumbnail}
          alt="Shoes"
          className="rounded-xl h-[160px] w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-start">{title}</h2>
        <div className="card-actions flex justify-between items-center">
          <div className="flex gap-4">
            <p className="text-lg text-gray-500">
              ${parseInt(price * (discountPercentage / 100))}
            </p>
            <p className="text-red-600 line-through text-lg">${price}</p>
          </div>
          <button
            onClick={() => handleOrder(product)}
            className="btn btn-circle bg-slate-200"
            disabled={isDisabled}
          >
            <IoMdAddCircleOutline size="2em" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card3;
