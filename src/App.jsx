import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import { Home, Details } from './pages';

function App() {

  const router = createBrowserRouter([
    {
      path :'/',
      element :<Layout />,
      children : [
        {
          path : '/',
          element :<Home />
        },
        {
          path:'/details/:id',
          element : <Details />
        }
      ]
    },
  ])
 
  return (
    <RouterProvider router={router} />
  )
}

export default App
