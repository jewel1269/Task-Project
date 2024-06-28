import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from react-dom/client
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store/store'; // Assuming your Redux store configuration is in store.js or store.jsx
import { RouterProvider } from 'react-router-dom'; // Import RouterProvider if using a custom router
import { router } from './Component/Router/Routes'; // Assuming your router configuration is defined in Routes.jsx
import App from './App'; // Assuming your main App component is in App.jsx
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
       
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
