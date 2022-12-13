import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import StaticExample from "../popup";

import { idbPromise } from "../../utils/helpers";

export default function Items({ data }) {
  console.log("data", data);
  const [item, setItem] = useState([]);

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(item));
  }, [item]);

  function addToCart(product, price) {
    console.log({ prodname: product });
    const newProduct = [{ prodname: product, cost: price }, ...item];
    console.log(newProduct);
    setItem(newProduct);
    StaticExample();
  }

  // const [state, dispatch] = useStoreContext();
  // const { image, product_name, _id, price, product_description } = data;
  // const { cart } = state;

  // const addToCart = () => {
  //   const itemInCart = cart.find((cartItem) => cartItem._id === _id);
  //   if (itemInCart) {
  //     dispatch({
  //       type: UPDATE_CART_QUANTITY,
  //       _id: _id,
  //       purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
  //     });
  //     idbPromise("cart", "put", {
  //       ...itemInCart,
  //       purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
  //     });
  //   } else {
  //     dispatch({
  //       type: ADD_TO_CART,
  //       product: { ...data, purchaseQuantity: 1 },
  //     });
  //     idbPromise("cart", "put", { ...data, purchaseQuantity: 1 });
  //   }
  // };
  return (
    <Container className="mainbody">
      <Row xs={1} md={3} className="g-4">
        {data.map((item, idx) => (
          <Col className="d-flex">
            <Card className="flex-fill" key={item.product_name}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title className="projtit">{item.product_name}</Card.Title>

                <Card.Text>{item.product_description}</Card.Text>
                <Card.Text>
                  <strong>Price:</strong>£{item.price}
                </Card.Text>
                <button
                  onClick={() => {
                    addToCart(item.product_name, item.price);
                  }}
                >
                  Addtocart
                </button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
