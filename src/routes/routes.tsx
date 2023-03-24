import { createBrowserRouter } from "react-router-dom";
import * as React from "react";
import { LandingPage } from "../pages/LandingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);
