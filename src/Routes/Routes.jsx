import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Order from "../pages/Order/Order/Order";
import AllProducts from "../pages/AllProducts/AllProducts";
import Error from "../Error/Error";

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
    ],
  },
]);

export default router;
