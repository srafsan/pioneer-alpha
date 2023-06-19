import { useContext } from "react";
import { ProductsContext } from "../../../Providers/ProductsProvider";
import OrderRow from "./OrderRow";
import useTitle from "../../../Hooks/useTitle";

const Order = () => {
  useTitle("SnipShop | Orders");
  const { ordered, onDelete, onUpdate } = useContext(ProductsContext);

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
              <th>Amount</th>
              <th>Pay</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {ordered?.map((order, index) => (
              <OrderRow
                key={order.id}
                order={order}
                index={index}
                onDelete={onDelete}
                onUpdate={onUpdate}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
