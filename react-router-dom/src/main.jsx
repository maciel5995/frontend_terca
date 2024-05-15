import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Products from './routes/Products.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import Home from './routes/Home.jsx'
import EditProduct from './routes/EditProduct.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // componente base
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/products/:id', // rota dinâmica
        element: <EditProduct />
      },
      {
        path: '/products/:id/info', // rota aninhada
        element: <EditProduct />
      }
    ]
  },
  // {
  //   path: '/products',
  //   element: <Products />
  // }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
