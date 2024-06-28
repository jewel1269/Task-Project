import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './Store/store.jsx'
import { Router, RouterProvider } from 'react-router-dom'
import { router } from './Component/Router/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
  <Provider store={store} >
 <RouterProvider router={router}/>
     </Provider>

  </React.StrictMode>,
)
