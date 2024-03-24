"use client";
import React from 'react';
import { Container, Row, Col, Modal, Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../src/styles/styles.css';
import { useState } from 'react';
import AddPostModal from '@/app/components/addPostModal';
import DisplayPost from '@/app/components/displayPost';


function MainColumn() {
  return (
    <Container fluid className='bg-dark' style={{ minHeight: '100vh' }}>
      <Row>
        <Col xs={2}></Col>
        <Col xs={8} className="bg-light text-center">
          <h1>Anonymous Posts</h1>
          <Row>
            <hr></hr>
            <DisplayPost />
          </Row>
        </Col>
        <Col xs={2}>
          <Row>
            <AddPostModal />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default MainColumn;