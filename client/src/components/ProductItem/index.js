import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

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
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
