import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.json';

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
        <Col xs={2}></Col>
      </Row>
    </Container>
  );
}

function App() {
  return (
    <div>
      <h1>Users</h1>
      {data.users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default MainColumn;