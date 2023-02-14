import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Button from 'react-bootstrap/Button';
import "./aboutStyle.css";
import API from "../utils/API";

function About() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Contact Details</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
            Please get in touch with my via the contact details or contact form below
            </p>
          </Col>
        </Row>
        <Row>
          <Col size="lg-3 md-3 sm-3">
            {/* Github Icon with built in link */}
          </Col>
          <Col size="lg-3 md-3 sm-3">
            {/* LinkedIn Icon with built in link */}
          </Col>
          <Col size="lg-3 md-3 sm-3">
            {/* E-mail */}
          </Col>
          <Col size="lg-3 md-3 sm-3">
            {/* Link to PDF of Resume */}
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <h1>Contact Form</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
