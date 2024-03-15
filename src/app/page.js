import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function MainColumn() {
  return (
    <Container fluid className='bg-dark' style={{ minHeight: '100vh' }}>
      <Row>
        <Col xs={2}></Col>
        <Col xs={8} className="bg-light text-center">
          <Row>
            <h1>Post 1</h1>
          </Row>
          <Row>
            <h1>Post 2</h1>
          </Row>
        </Col>
        <Col xs={2}></Col>
      </Row>
    </Container>
  );
}

export default MainColumn;
