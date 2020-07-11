import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import PostCard from "../PostCard";

const Home = () => {
  return (
    <section className="home bg-light text-dark">
      <Container className="pt-6">
        <Row>
          <Col md={{ span: 7, offset: 1 }}>
            <div className="px-3">
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
            </div>
          </Col>
          <Col md={{ span: 3 }}></Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
