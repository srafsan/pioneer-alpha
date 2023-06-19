import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Order from "../pages/Order/Order/Order";
import AllProducts from "../pages/AllProducts/AllProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
