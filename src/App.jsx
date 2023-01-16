import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import { Details, Home } from './pages';

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
          path : '/details/:id',
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
