import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import SignUpForm from "./components/signup-form.tsx";
import VerifyOtp from "./components/verify-otp.tsx";
import Dashboard from "./components/dashboard.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUpForm />,
  },
  {
    path: "/verify",
    element: <VerifyOtp />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
