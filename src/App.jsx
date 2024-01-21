import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import { loader as productDetailLoader } from "./pages/PostDetails";
import { loader as productsLoader } from "./pages/Posts";
import { About, Home, NotFound, PostDetails, Posts } from "./pages/index";
const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    errorElement: <NotFound />,
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
        path: "/products",
        element: <Posts />,
        loader: productsLoader,
      },
      {
        path: "/product/:postId",
        element: <PostDetails />,
        loader: productDetailLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
