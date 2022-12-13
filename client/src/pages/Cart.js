import { useState, useEffect } from "react";
const Cart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("item"));
    if (items) {
      setItems(items);
    }
  }, []);
  console.log("items", items);
  var total = items.reduce((accum, item) => accum + item.cost, 0);
  console.log("total", total);
  return (
    <div className="container">
      {/* to add what components you want to render */}
      {/* <CategoryMenu />
        <ProductList />
        <Cart /> */}
      <h1>Cart</h1>
      {items.map((list) => (
        <p>{list.prodname}</p>
      ))}{" "}
      {total}
      {/* {loading ? <div>Loading...</div> : <ProductList products={products} />} */}
    </div>
  );
};

export default Cart;
