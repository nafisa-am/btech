import { Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Products from "./components/ProductList";
import Cart from "./pages/Cart";
const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home></Home>}></Route>
      <Route exact path="/products" element={<Products></Products>}></Route>
      <Route exact path="/cart" element={<Cart></Cart>}></Route>
    </Routes>
  );
};
export default AppRoutes;
