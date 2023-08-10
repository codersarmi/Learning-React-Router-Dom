import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import {
  Home,
  About,
  ProductDetails,
  Products,
  Error,
  Users,
} from "./pages/index";
import { loader as productLoader } from "./pages/Posts";
import { loader as postDetailsLoader } from "./pages/PostDetails";
import { loader as userLoader } from "./pages/Users";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <Error />,

      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/users",
          element: <Users />,
          loader: userLoader,
        },
        {
          path: "/products",
          element: <Products />,
          loader: productLoader,
        },
        {
          path: "/product/:postId",
          element: <ProductDetails />,
          loader: postDetailsLoader,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
