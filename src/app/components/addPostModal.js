import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const AddPostModal = () => {
  const [appear, setAppear] = useState(false);
  const [message, setMessage] = useState('');

  const handleAppear = () => setAppear(true);
  const handleExit = () => {
    setAppear(false);
    setMessage(''); // Reset message input on modal exit
  };

  const handleSubmit = async () => {
    try {
      // Generate a unique postID
      const prevPostID = localStorage.getItem('postID') || 0;
      const postID = parseInt(prevPostID) + 1;
      localStorage.setItem('postID', postID);

      // Get current date and time
      const creationTime = new Date().toISOString();

      // Prepare post data
      const postData = {
        postID,
        message,
        creationTime,
      };

      // Send post data to the server
      const response = await fetch('/api/writeJson', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        console.log('Post added successfully');
      } else {
        console.error('Failed to add post');
      }
    } catch (error) {
      console.error('Failed to add post:', error);
    } finally {
      // Close the modal regardless of success or failure
      handleExit();
    }
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
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
              <Form.Control as="textarea" rows={3} value={message} onChange={handleMessageChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleExit}>Close</Button>
          <Button variant="primary" style={{ backgroundColor: '#68246D', color: 'white' }} onClick={handleSubmit}>Post</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddPostModal;
