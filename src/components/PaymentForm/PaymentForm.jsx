import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductsContext } from "../../Providers/ProductsProvider";
import Swal from "sweetalert2";

const PaymentForm = () => {
  const orderId = useParams();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { onDelete } = useContext(ProductsContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    const response = await fetch(
      "http://localhost:5000/create-payment-intent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: 1000 }), // Set the amount you want to charge here
      }
    );

    const { clientSecret } = await response.json();

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          // Include any additional billing details if required
        },
      },
    });

    if (result.error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: `Payment not succeeded for ${orderId.id}`,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      onDelete(orderId.id);
      form.reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Payment Succeeded for ${orderId.id}`,
        showConfirmButton: false,
        timer: 1500,
      });

      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl mt-36">Payment for order: {orderId.id}</h1>
        <button
          className="btn mt-5"
          onClick={() => window.my_modal_5.showModal()}
        >
          Demo Card Infomation
        </button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4 text-left">
              <p className="text-2xl mt-5">
                Use Card Info as:{" "}
                <span className="text-red-600 font-bold">4242424242424242</span>
              </p>
              <p className="text-xl mt-2">
                Use Month & Year as:{" "}
                <span className="text-red-600 font-bold">12</span> &
                <span className="text-red-600 font-bold">42</span> respectfully
              </p>
              <p className="text-xl mt-2">
                Use CVC as: <span className="text-red-600 font-bold">123</span>
              </p>
              <p className="text-xl mt-2">
                Use ZIP as:{" "}
                <span className="text-red-600 font-bold">12345</span>
              </p>
            </p>
            <div className="modal-action">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </div>
          </form>
        </dialog>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center min-h-screen mt-[-250px]"
      >
        <div className="w-1/4">
          <CardElement />
        </div>
        <button className="btn btn-warning btn-xs ms-7" type="submit">
          Pay
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
