import React, { useState } from 'react';
import { Card, Container, Modal, Form, Button } from 'react-bootstrap';
const data = require('@/../data/data.json');

const DisplayPost = () => {
    const [selectedPost, setSelectedPost] = useState(null);
    const [appear, setAppear] = useState(false);
    const [message, setMessage] = useState('');

    const handleAppear = (post) => {
        setSelectedPost(post);
        setAppear(true);
    }

    const handleExit = () => {
        setAppear(false);
        setMessage('');
    }

    const handleSubmit = async () => {
        const creationTime = new Date().toISOString();

        const { postID } = selectedPost

        const commentData = {
            postID,
            message,
            creationTime
        };

        const response = await fetch('/api/writeCommentJson', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(commentData),
        });
        handleExit();
    }

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const commentModal = (selectedPost) => {
        return (
            <Modal show={appear} onHide={handleExit}>
                <Modal.Header closeButton>
                    <Modal.Title>Post {selectedPost.postID} Comments</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="addCommentForm.ControlTextarea1">
                            <Form.Label>Post Comment</Form.Label>
                            <Form.Control as="textarea" rows={3} value={message} onChange={handleMessageChange} />
                        </Form.Group>
                    </Form>
                    <Button variant="primary" style={{ backgroundColor: '#68246D', color: 'white' }} onClick={handleSubmit}>Post</Button>
                    {selectedPost.comments.length === 0 && <p>No Comments</p>}
                    {selectedPost.comments.map((comment, index) => (
                        <div key={index} style={{ marginBottom: '10px' }}>
                            <p style={{ fontSize: '16px', marginBottom: '5px' }}>{comment.message}</p>
                            <p style={{ fontSize: '12px', color: '#888' }}>Commented on: {new Date(comment.creationTime).toLocaleString()}</p>
                        </div>
                    ))}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleExit}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }

    return (
        <>
            <Container style={{ maxWidth: '98%' }}>
                {data.map((post) => (
                    <Card key={post.postID} style={{ border: '1px solid #ccc', borderRadius: '15px', margin: '10px 0', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', cursor: 'pointer' }} onClick={() => handleAppear(post)}>
                        <Card.Body>
                            <Card.Title>Post {post.postID}</Card.Title>
                            <Card.Text>{post.message}</Card.Text>
                            <Card.Text>{post.creationTime.slice(0, 10)} {post.creationTime.slice(11, 16)}</Card.Text>
                            <Card.Text>{post.comments.length} Comments</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </Container>
            {selectedPost !== null && commentModal(selectedPost)}
        </>
    );
}

export default DisplayPost;
