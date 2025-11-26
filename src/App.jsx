import { RouterProvider } from "react-router/dom";
import router from "./router";
import gsap from "gsap";
import { ScrollTrigger, SplitText, TextPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(SplitText);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
