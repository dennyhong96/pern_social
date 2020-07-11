import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";

import placeholder from "../img/placeholder.jpg";

const PostCard = () => {
  return (
    <Card className="mb-3">
      <Card.Header>
        <img
          src={process.env.PUBLIC_URL + `uploads/users/default.png`}
          className="avatar"
        />
        <div className="owner">
          <p>John Doe</p>
          <p>@john_123</p>
        </div>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col md="6" className="pr-md-0">
            <Card.Img src={placeholder} />
          </Col>
          <Col md="6" className="pl-md-0">
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium cum cupiditate tempore doloremque veniam? Voluptate
              maiores magnam.
            </Card.Text>
          </Col>
        </Row>
        <div className="actions mt-2">
          <Button variant="accent" className="py-0 px-1 text-light">
            <i class="far fa-heart"></i> 10
          </Button>
          <Button variant="primary" className="ml-2 py-0 px-1">
            <i class="far fa-comment"></i> 5
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PostCard;
