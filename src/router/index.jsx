import { createBrowserRouter } from "react-router";
import Navistride from "../pages/navistride";
import RootLayout from "../layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Navistride />
      }
    ]
  }
]);

export default router;
