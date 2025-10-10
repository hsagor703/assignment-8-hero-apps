import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout.jsx";
import Apps from "../Pages/Apps.jsx";
import Installation from "../Pages/Installation.jsx";
import Home from "../Pages/Home.jsx";
import AppDetails from "../Components/AppDetails.jsx";
import ErrorPage from "../Pages/ErrorPage.jsx";
import AppsError from "../Pages/AppsError.jsx";
import LoadingSpiner from "../Pages/LoadingSpiner.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage/>,
    hydrateFallbackElement: <LoadingSpiner/>,
    children: [
      {
        path: "/",
        Component: Home,
        hydrateFallbackElement:<LoadingSpiner/>,
      },
      {
        path: "/apps",
        Component: Apps,
        hydrateFallbackElement: <LoadingSpiner/>,
        loader: () => fetch('/appsData.json')

      },
      {
        path:'/installation',
        hydrateFallbackElement: <LoadingSpiner/>,
        Component:Installation,
      },
      {
        path:'/appDetails/:id',
        errorElement:<AppsError/>,
        hydrateFallbackElement: <LoadingSpiner/>,
        Component: AppDetails,
        // loader: () => fetch('appsData.json')
      },
    ],
  },
]);

export default Router
