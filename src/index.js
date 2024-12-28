import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/layout/layout.jsx';
import SignUp from './Components/auth/sign-in/SignIn.jsx';
import SignIn from './Components/auth/sign-up/SignUp.jsx';
import MyAccount from './Components/my-account/MyAccount.jsx';
import UpdateProfile from './Components/my-account/update-profile/UpdateProfile.jsx';
import ProtectedRouted from './Components/protected/ProtectedRouted.jsx';
import ProductSection from './Components/home/productSection2/productSection2/ProductSection.jsx';
import ProductDetail from './Components/home/productSection2/productSection2/ProductDetail.jsx';
import CheckoutForm from './Components/checkout/CheckoutForm.jsx';
import OrderComplete from './Components/order/OrderComplete.jsx';
import { ProductProvider } from './Components/context/ProductContext.js';
import { CheckoutProvider } from './Components/context/CheckoutContext.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "account",
        element: <ProtectedRouted><MyAccount /></ProtectedRouted>,
      },
      {
        path: "profile",
        element: <ProtectedRouted><UpdateProfile /></ProtectedRouted>,
      },
      {
        path: "product-section",
        element: <ProductSection />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
      {
        path: "checkout",
        element: <CheckoutForm />,
      },
      {
        path: "order-complete",
        element: <OrderComplete />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CheckoutProvider>
    <ProductProvider>
      <RouterProvider router={router} />
    </ProductProvider>
  </CheckoutProvider>
);