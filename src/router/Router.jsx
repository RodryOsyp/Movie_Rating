import { createBrowserRouter } from "react-router-dom";
import Movie from "../pages/movie/Movie";
import About from "../pages/about/About";
import Layout from "../components/Layout/Layout";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/film",
    element: (
      <Layout>
        <Movie />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
]);
