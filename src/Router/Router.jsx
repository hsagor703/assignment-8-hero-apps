import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout.jsx";
import Apps from "../Pages/Apps.jsx";
import Installation from "../Pages/Installation.jsx";
import Home from "../Pages/Home.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: Home,
        loader: () => fetch('appsData.json')
      },
      {
        path: "/apps",
        Component: Apps,
        loader: () => fetch('appsData.json')

      },
      {
        path:'/installation',
        Component:Installation,
      },
    ],
  },
]);

export default Router
