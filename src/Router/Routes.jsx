import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import AdminDashboard from "../Pages/AdminDashboard";
import AddProducts from "../Pages/Admin/AddProducts";
import AllUsers from "../Pages/Admin/AllUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/admin-dashboard",
        element: <AdminDashboard></AdminDashboard>,
        children: [
          {
            path: "all-users",
            element: <AllUsers></AllUsers>,
          },
          {
            path: "add-products",
            element: <AddProducts></AddProducts>,
          },
        ],
      },
    ],
  },
]);
export default router;
