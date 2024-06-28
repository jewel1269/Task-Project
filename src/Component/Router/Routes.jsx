import { createBrowserRouter } from 'react-router-dom';
import ProductList from '../ProductList/ProductList';
import ProductDetail from '../ProductDetail/ProductDetail';
import EditProduct from '../EditProduct/EditProduct';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ProductList />,
  },
      {
        path: '/ProductDetail/:id', // Ensure this matches the dynamic parameter
        element: <ProductDetail />,
      },
      {
        path: '/products/:id',
        element: <EditProduct />,
      },

]);
