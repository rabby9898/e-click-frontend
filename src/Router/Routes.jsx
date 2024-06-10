import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import AdminDashboard from "../Pages/AdminDashboard";
import AddProducts from "../Pages/Admin/AddProducts";
import AllUsers from "../Pages/Admin/AllUsers";
import AllProducts from "../Pages/Admin/AllProducts";
import CategoryProduct from "../Pages/CategoryProduct";
import ProductDetails from "../Pages/ProductDetails";
import Cart from "../Pages/Cart";
import Search from "../Pages/Search";
import Success from "../Pages/Success";
import Cancel from "../Pages/Cancel";
import OrderPage from "../Pages/OrderPage";
import AllOrder from "../Pages/Admin/AllOrderPage";

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
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/search",
        element: <Search></Search>,
      },
      {
        path: "product-category",
        element: <CategoryProduct></CategoryProduct>,
      },
      {
        path: "product/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "success",
        element: <Success />,
      },
      {
        path: "cancel",
        element: <Cancel />,
      },
      {
        path: "order",
        element: <OrderPage />,
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
          {
            path: "all-products",
            element: <AllProducts></AllProducts>,
          },
          {
            path: "all-orders",
            element: <AllOrder></AllOrder>,
          },
        ],
      },
    ],
  },
]);
export default router;
