"use client";
import React from 'react';
import { Container, Row, Col, Modal, Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../src/styles/styles.css';
import { useState } from 'react';
import WriteJsonButton from '@/app/components/writeJsonButton';


function MainColumn() {

  const [appear, setAppear] = useState(false);
  const handleExit = () => setAppear(false);
  const handleAppear = () => setAppear(true);

  return (
    <Container fluid className='bg-dark' style={{ minHeight: '100vh' }}>
      <Row>
        <Col xs={2}></Col>
        <Col xs={8} className="bg-light text-center">
          <h1>Anonymous Posts</h1>
          <Row>
            <hr></hr>
          </Row>
          <WriteJsonButton />
        </Col>
        <Col xs={2}>
          <Row>
            <div className="buttonContainer">
              <button type="button" className="btn position-absolute bottom-0 end-0" style={{ backgroundColor: '#68246D', color: 'white' }} onClick={handleAppear} >Add Post</button>
              <Modal show={appear} onHide={handleExit}>
                <Modal.Header closeButton>
                  <Modal.Title>Add An Anonymous Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="addPostForm.ControlTextarea1">
                      <Form.Label>Post Content</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleExit}>Close</Button>
                  <Button variant="primary" style={{ backgroundColor: '#68246D', color: 'white' }} >Post</Button>
                </Modal.Footer>
              </Modal>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default MainColumn;