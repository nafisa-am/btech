import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function Items({ data }) {
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
                {/* <Card.Text>
                  <strong> GitHub: </strong>
                  <a href={item.links.github}> {item.links.github}</a>
                </Card.Text>
                <Card.Text>
                  <strong>Deployed: </strong>
                  <a href={item.links.deployed}>{item.links.deployed}</a>
                </Card.Text> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
