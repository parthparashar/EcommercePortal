// src/App.js
import './App.css';
import * as React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HomePage from './components/HomePage';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';

// Define the main App component
const AppLayout = () => (
  <>
    <h1>E-commerce App</h1>
    <Outlet /> {/* Renders child routes */}
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/product/:productId",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      }
    ],
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
