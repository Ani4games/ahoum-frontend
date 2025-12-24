
// router.tsx
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import ProductList from "../pages/productList/ProductList";
import ProductDetail from "../pages/productDetail/ProductDetail";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Cart from "../pages/cart/Cart"
import Success from "../pages/order/Success"
import Failure from "../pages/order/Failure"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/products",
    element: <ProductList />
  },
  {
    path: "/products/:id",
    element: <ProductDetail />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/cart",
    element: <Cart />
  }
]); 

{
  path: "/success"
  element: <Success />
}
{
  path: "/failure"
  element: <Failure />
}
export default router;
