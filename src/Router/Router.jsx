import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout.jsx";
import Apps from "../Pages/Apps.jsx";
import Installation from "../Pages/Installation.jsx";
import Home from "../Pages/Home.jsx";
import AppDetails from "../Components/AppDetails.jsx";
import ErrorPage from "../Pages/ErrorPage.jsx";
import AppsError from "../Pages/AppsError.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage/>,
    hydrateFallbackElement: <p className="bg-amber-600">loading....</p>,
    children: [
      {
        path: "/",
        Component: Home,
        loader: () => fetch('/appsData.json')
      },
      {
        path: "/apps",
        Component: Apps,
        loader: () => fetch('/appsData.json')

      },
      {
        path:'/installation',
        Component:Installation,
      },
      {
        path:'/appDetails/:id',
        errorElement:<AppsError/>,
        Component: AppDetails,
        // loader: () => fetch('appsData.json')
      },
    ],
  },
]);

export default Router
