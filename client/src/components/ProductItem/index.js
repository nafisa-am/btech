import { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Items({ data, filters }) {
  let finalArr = [];
  if (filters) {
    filters.map((filter) => {
      let newArr = data.filter((a) => {
        return a.brand === filter;
      });

      finalArr.push(...newArr);
    });
  }
  const [item, setItem] = useState([]);

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(item));
  }, [item]);

  function addToCart(product, price, image) {
    console.log({ prodname: product });
    const newProduct = [
      { prodname: product, cost: price, image: image },
      ...item,
    ];
    console.log(newProduct);
    setItem(newProduct);

    alert("Item Added To Cart");
  }
  console.log(finalArr);

  return (
    <Container className="mainbody">
      <Row xs={1} md={3} className="g-4">
        {finalArr.map((item, idx) => (
          <Col className="d-flex">
            <Card className="flex-fill" key={item.product_name}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title className="projtit">{item.product_name}</Card.Title>
                <div className="d-flex flex-column justify-content-start align-items-start px-4 my-5">
                  {item.product_description.map((item) => {
                    return <Card.Text>{item}</Card.Text>;
                  })}
                </div>
                <Card.Text>
                  <strong>Price:</strong>£{item.price}
                </Card.Text>
                <button
                  onClick={() => {
                    addToCart(item.product_name, item.price, item.image);
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
