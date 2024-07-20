import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./component/pages/Home.jsx";
import About from "./component/pages/About.jsx";
import Contact from "./component/pages/Contacts.jsx";
import Products from "./component/pages/Products.jsx";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import ContactUs from "./component/ContactUs.jsx";
import Address from "./component/Address.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />}>
        <Route path="contactus" element={<ContactUs />} />
        <Route path="address" element={<Address />} />
      </Route>
      <Route path="products" element={<Products />} />
      
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);