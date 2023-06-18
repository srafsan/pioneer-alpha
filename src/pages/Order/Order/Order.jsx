import React, { useContext } from "react";
import { ProductsContext } from "../../../Providers/ProductsProvider";

const Order = () => {
  const { ordered } = useContext(ProductsContext);

  return (
    <div className="min-h-screen  mt-14">
      <h1 className="text-4xl text-center mb-8">My Orders: {ordered.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="uppercase">
              <th>#</th>
              <th>Name</th>
              <th>Job</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {ordered.map((order, index) => (
              <tr key={order.id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={order.thumbnail}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{order.title}</div>
                      <div className="text-sm opacity-50">{order.brand}</div>
                    </div>
                  </div>
                </td>
                <td>{order.description}</td>
                <td>{order.price}</td>
                <th>
                  <button className="btn btn-warning btn-xs">Update</button>
                </th>
                <th>
                  <button className="btn btn-error btn-xs">Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
