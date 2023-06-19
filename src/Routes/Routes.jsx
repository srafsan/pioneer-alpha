import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Order from "../pages/Order/Order/Order";
import AllProducts from "../pages/AllProducts/AllProducts";
import Error from "../Error/Error";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PaymentForm from "../components/PaymentForm/PaymentForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/orders",
        element: <Order />,
      },
      {
        path: "/all-products",
        element: <AllProducts />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/payment/:id",
        element: <PaymentForm />,
      },
    ],
  },
]);

export default router;
