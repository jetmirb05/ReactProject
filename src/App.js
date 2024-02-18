import Header from "../src/components/Header";

import Footer from "./components/Footer";

import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import Concerts from "./pages/Concerts";
import ArtistDetail from "./pages/ArtistDetail";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const Layout = () => {
    return (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/artists",
          element: <Artists />,
        },
        {
          path: "/concerts",
          element: <Concerts />,
        },
        {
          path: "/artists/:id",
          element: <ArtistDetail />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
