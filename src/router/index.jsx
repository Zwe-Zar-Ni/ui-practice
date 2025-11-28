import { createBrowserRouter } from "react-router";
import Navistride from "../pages/navistride";
import AnimeFashion from "../pages/anime";
import RootLayout from "../layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <AnimeFashion />
      },
      {
        path: "/navistride",
        element: <Navistride />
      }
    ]
  }
]);

export default router;
