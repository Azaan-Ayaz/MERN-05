import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Career from "./Pages/Career";

const router = createBrowserRouter([
  {
    path: "./",
    element: <Home></Home>
  },
  {
    path: "./careers",
    element: <Career></Career> 
  }
])
export default router;