import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import PostCard from "../PostCard";
import PersonalInfo from "../PersonalInfo";

const Home = () => {
  return (
    <section className="home bg-light text-dark">
      <Container className="pt-6">
        <Row>
          <Col md={{ span: 7, offset: 1 }}>
            <div className="px-1 px-md-3 card-container">
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
            </div>
          </Col>
          <Col md={{ span: 3 }}>
            <PersonalInfo />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
