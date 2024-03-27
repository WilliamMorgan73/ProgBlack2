import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

const CommentModal = ({ selectedPost, appear, handleExit }) => {
    const [message, setMessage] = useState("");

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = async () => {
        const creationTime = new Date().toISOString();

        const { postID } = selectedPost;

        const commentData = {
            postID,
            message,
            creationTime,
        };

        const response = await fetch("/api/writeCommentJson", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(commentData),
        });
        setMessage("");
        handleExit();
    };

    return (
        <Modal show={appear} onHide={handleExit}>
            <Modal.Header closeButton>
                <Modal.Title>Post {selectedPost.postID} Comments</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group
                        className="mb-3"
                        controlId="addCommentForm.ControlTextarea1"
                    >
                        <Form.Label>Post Comment</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={message}
                            onChange={handleMessageChange}
                        />
                    </Form.Group>
                </Form>
                <Button
                    variant="primary"
                    style={{ backgroundColor: "#68246D", color: "white" }}
                    onClick={handleSubmit}
                >
                    Post
                </Button>
                <hr></hr>
                {selectedPost.comments.length === 0 && <p>No Comments</p>}
                {selectedPost.comments.map((comment, index) => (
                    <div key={index} style={{ marginBottom: "10px" }}>
                        <p style={{ fontSize: "16px", marginBottom: "5px" }}>
                            {comment.message}
                        </p>
                        <p style={{ fontSize: "12px", color: "#888" }}>
                            Commented on: {new Date(comment.creationTime).toLocaleString()}
                        </p>
                    </div>
                ))}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleExit}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CommentModal;
