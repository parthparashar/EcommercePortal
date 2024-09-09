// src/App.js
import './App.css';
import * as React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HomePage from './components/HomePage';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Header from './components/Header';
// Define the main App component
const AppLayout = () => (
  <>
    <Header />
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
        path: "/products/:productId",
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
