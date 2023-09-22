import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import DashboardLayout from "./pages/dashboard/DashboardLayout.jsx";
import "./assets/styles/style.scss";
import Invoice from "./pages/dashboard/DashboardPages/Invoice.jsx";
import InvoiceDetails from "./pages/dashboard/DashboardPages/InvoiceDetails.jsx";
// import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DashboardLayout />}>
      {/* <Route index element={<Home />} /> */}
      <Route index element={<Invoice />} />
      <Route path="invoice/:id" element={<InvoiceDetails />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
