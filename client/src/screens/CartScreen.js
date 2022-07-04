import { React, useContext } from "react";
import Col from "react-bootstrap/esm/Col";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import Row from "react-bootstrap/esm/Row";
import { Helmet } from "react-helmet-async";
import ListGroup from "react-bootstrap/esm/ListGroup";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";

import { Store } from "../Store/Store";
import MessageBox from "../components/MessageBox/MessageBox";

const CartScreen = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  return (
    <div>
      <Helmet>
        <title>Shopping Cart</title>
      </Helmet>
      <h1>Shopping Cart</h1>
      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <MessageBox>
              Cart is empty. <Link to="/">Go Shopping</Link>
            </MessageBox>
          ) : (
            <ListGroup>
              {cartItems.map(item => (
                <ListGroupItem key={item.id}>
                  <Row className="align-items-center">
                    <Col md={4}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded img-thumbnail"
                      ></img>{" "}
                      <Link to={`/product/${item.slug}`}>{item.name}</Link>
                    </Col>
                    <Col md={3}>
                      <Button variant="light" disabled={item.quantity === 1}>
                        <i className="fas fa-minus-circle"></i>
                      </Button>
                      <span>{item.quantity}</span>{" "}
                      <Button
                        variant="light"
                        disabled={item.quantity === item.countInStock}
                      >
                        <i className="fas fa-plus-circle"></i>
                      </Button>
                    </Col>
                    <Col md={2}>
                      <Button variant="light">
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroupItem>
                  <h3>
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}
                    item) : ${" "}
                    {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                  </h3>
                </ListGroupItem>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CartScreen;
