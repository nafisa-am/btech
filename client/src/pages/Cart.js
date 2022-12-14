import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

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
  function removeFromCart() {
    let items = JSON.parse(localStorage.getItem("item"));
    // items = items.filter((item) => item.prodname !== prodname);
    localStorage.setItem("item", JSON.stringify(items));
    if (items.length === 0) {
      localStorage.removeItem("item");
    }
  }

  return (
    <div className="container">
      {/* to add what components you want to render */}
      {/* <CategoryMenu />
        <ProductList />
        <Cart /> */}
      <h1>Cart</h1>
      {items.map((list) => (
        <>
          {["sm"].map((breakpoint) => (
            <ListGroup horizontal={breakpoint} className="my-2">
              <ListGroup.Item>
                <img width="200px" src={list.image} />
              </ListGroup.Item>
              <ListGroup.Item className="prodname">
                <p className="prodnametxt">{list.prodname}</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p className="prodpricetxt">£{list.cost}</p>
              </ListGroup.Item>
              <ListGroup.Item className="btun">
                <button
                  onClick={() => {
                    removeFromCart(this);
                  }}
                  id={list.prodname}
                >
                  Remove
                </button>
              </ListGroup.Item>
            </ListGroup>
          ))}
        </>
      ))}{" "}
      <Card body className="totalbox">
        <p className="total">Grand Total: £{total}</p>
      </Card>
      ;
      {/* {loading ? <div>Loading...</div> : <ProductList products={products} />} */}
    </div>
  );
};

export default Cart;
