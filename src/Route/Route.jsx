import { createBrowserRouter } from "react-router";
import Home from "./Pages/Home.jsx";
import MainLayout from "../Layout/MainLayout.jsx";
import Apps from "../Pages/Apps.jsx";
import Installation from "../Pages/Installation.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path:'/installation',
        Component:Installation,
      },
    ],
  },
]);
