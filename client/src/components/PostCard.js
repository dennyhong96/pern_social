import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";

import placeholder from "../img/placeholder.jpg";

const PostCard = () => {
  return (
    <Card className="mb-3 post-card">
      <Card.Header>
        <img
          src={process.env.PUBLIC_URL + `uploads/users/default.png`}
          className="avatar"
        />
        <div className="owner">
          <p>John Doe</p>
          <p>@john_123</p>
        </div>
        <small className="date ml-auto mb-1 text-muted align-self-end">
          July 11, 2020 4:40 AM
        </small>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col md="4" className="pr-md-0 mb-1 mb-md-0">
            <Card.Img src={placeholder} />
          </Col>
          <Col md="8" className="">
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium cum cupiditate tempore doloremque veniam? Voluptate
              maiores magnam.
            </Card.Text>
          </Col>
        </Row>
        <div className="actions mt-1 mt-md-2 d-flex align-items-center border-top border-primary-light pt-1 pt-md-2">
          <Button variant="accent" className="py-0 px-1 text-light">
            <i className="far fa-heart"></i> 10
          </Button>
          <Button variant="primary" className="ml-2 py-0 px-1">
            <i className="far fa-comment"></i> 5
          </Button>
          <Button variant="danger" className="delete">
            <i className="fas fa-times"></i>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PostCard;
