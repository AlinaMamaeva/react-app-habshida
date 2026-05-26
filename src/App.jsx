import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ArticlesList from "./pages/ArticlesList";
import ArticlePage from "./pages/ArticlePage";
import GuestLayout from "./layouts/GuestLayout/GuestLayout";
import UserLayout from "./layouts/UserLayout/UserLayout";
//css
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        index: true,
        element: <ArticlesList />,
      },
      {
        path: "/articles",
        element: <ArticlesList />,
      },
      {
        path: "/articles/:slug",
        element: <ArticlePage />,
      },
    ],
  },

  {
    path: "/app",
    element: <UserLayout />,
    children: [
      {
        path: "articles",
        element: <ArticlesList />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
