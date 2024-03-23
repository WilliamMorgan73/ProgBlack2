import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.json';
import styles from './styles.css'

function MainColumn() {
  return (
    <Container fluid className='bg-dark' style={{ minHeight: '100vh' }}>
      <Row>
        <Col xs={2}></Col>
        <Col xs={8} className="bg-light text-center">
          <h1>Anonymous Posts</h1>
          <Row>
            <hr></hr>
          </Row>
          <Row>
            {data.posts.map((posts) => (
              <div key={posts.id}>
                <p>{posts.content}</p>
                <p>{posts.date}</p>
                <hr></hr>
              </div>
            ))}
          </Row>
        </Col>
        <Col xs={2}>
          <Row>
            <div className="buttonContainer">
              <button type="button" className="btn position-absolute bottom-0 end-0" style={{ backgroundColor: '#68246D', color: 'white' }}>Add Post</button>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default MainColumn;