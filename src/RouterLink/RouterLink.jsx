import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "../layoutPage/MainPage";
import Home from "../components/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    children: [{ path: "/", element: <Home></Home> }],
  },
]);

export default router;
