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
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center min-h-screen"
    >
      <h1>Payment for order: {orderId.id}</h1>
      <div className="w-1/4">
        <CardElement />
      </div>
      <button className="btn btn-warning btn-xs ms-7" type="submit">
        Pay
      </button>
    </form>
  );
};

export default PaymentForm;
