import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import { Home } from './pages';

function App() {

  const router = createBrowserRouter([
    {
      path :'/',
      element :<Layout />,
      children : [
        {
          path : '/',
          element :<Home />
        }
      ]
    },
  ])
 
  return (
    <RouterProvider router={router} />
  )
}

export default App
