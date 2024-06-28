import { createBrowserRouter } from "react-router-dom";
import ProductList from "../ProductList/ProductList";
import ProductDetail from "../ProductDetail/ProductDetail";
import EditProduct from "../EditProduct/EditProduct";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductList/>,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "details/:id",
          element: <ProductDetail />,
        },
        {
          path: "/products/edit/:id",
          element: <EditProduct />,
        },
      ],
    },
  ]);