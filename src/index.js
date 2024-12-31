import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/layout/layout';
import SignUp from './Components/auth/sign-in/SignIn';
import SignIn from './Components/auth/sign-up/SignUp';
import MyAccount from './Components/my-account/MyAccount';
import UpdateProfile from './Components/my-account/update-profile/UpdateProfile';
import ProtectedRouted from './Components/protected/ProtectedRouted';
import ProductSection from './Components/home/productSection2/productSection2/ProductSection';
import ProductDetail from './Components/home/productSection2/productSection2/ProductDetail';
import CheckoutForm from './Components/checkout/CheckoutForm';
import OrderComplete from './Components/order/OrderComplete';
import EarbudGallery from './Components/home/earbud-gallery/EarbudGallery';
import EarbudDetail from './Components/home/earbud-gallery/EarbudDetail';
import { ProductProvider } from './Components/context/ProductContext';
import { CheckoutProvider } from './Components/context/CheckoutContext';

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
      {
        path: "earbud-gallery",
        element: <EarbudGallery />,
      },
      {
        path: "earbud/:id",
        element: <EarbudDetail />,
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