import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";

import "./index.css";
import ProductsProvider from "./Providers/ProductsProvider.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ProductsProvider>
        <div className="max-w-screen-2xl mx-auto">
          <RouterProvider router={router} />
        </div>
      </ProductsProvider>
    </AuthProvider>
  </React.StrictMode>
);
