import React from "react";

const Card2 = ({ product }) => {
  const { thumbnail, category, title, description, price } = product;

  return (
    <div className="card w-96 h-[650px] bg-base-100 shadow-xl">
      <figure className="h-[260px]">
        <img
          className="h-full rounded-b-2xl w-full"
          src={thumbnail}
          alt={category}
        />
      </figure>
      <div className="card-body items-center font-bold">
        <h2 className="card-title text-2xl mt-7 uppercase">{title}</h2>
        <p className="mt-3 text-center">{description}</p>
        <h3 className="text-[#0E4B80] text-lg mt-8">${price} USD</h3>
        <div className="card-actions justify-end mt-[70px]">
          <button className="btn bg-[#001439] text-white rounded-full w-[200px]">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card2;
