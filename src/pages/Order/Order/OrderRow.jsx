import React, { useState } from "react";
import { Link } from "react-router-dom";

const OrderRow = ({ order, onDelete, onUpdate, index }) => {
  const [amount, setAmount] = useState(order.amount);

  const openModal = (id) => {
    const modalId = `my_modal_${id}`;
    window[modalId]?.showModal();
  };

  const handleUpdate = (_id) => {
    const updatedProduct = {
      ...order,
      amount: parseInt(amount),
    };

    onUpdate(_id, updatedProduct);
  };

  const handleDelete = (id) => {
    onDelete(id);
  };

  const handleChangeAmount = (event) => {
    setAmount(event.target.value);
  };

  return (
    <>
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
        <td>{order.amount}</td>
        <td>
          <Link to={`/payment/${order._id}`} className="btn btn-warning btn-xs">
            Pay
          </Link>
        </td>
        <td>
          <button
            onClick={() => openModal(order.id)}
            className="btn btn-warning btn-xs"
          >
            Update
          </button>
        </td>
        <td>
          <button
            onClick={() => handleDelete(order._id)}
            className="btn btn-error btn-xs"
          >
            Delete
          </button>
        </td>
      </tr>
      {/* MODAL */}
      <dialog
        id={`my_modal_${order.id}`}
        className="modal modal-bottom sm:modal-middle"
      >
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Hello! {order.id}</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Enter amount</span>
            </label>
            <label className="input-group">
              <span>Amount</span>
              <input
                type="text"
                placeholder="Enter amount"
                className="input input-bordered"
                value={amount}
                onChange={handleChangeAmount}
              />
              <button
                onClick={() => handleUpdate(order._id)}
                className="btn btn-warning"
              >
                Update
              </button>
            </label>
          </div>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default OrderRow;
