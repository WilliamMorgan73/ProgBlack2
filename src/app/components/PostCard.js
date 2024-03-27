import React from "react";
import { Card } from "react-bootstrap";

const PostCard = ({ post, handleAppear }) => {
    return (
        <Card
            style={{
                border: "1px solid #ccc",
                borderRadius: "15px",
                margin: "10px 0",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
            }}
            onClick={() => handleAppear(post)}
            onMouseEnter={(event) => event.currentTarget.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.3)'} // Increase shadow on hover
            onMouseLeave={(event) => event.currentTarget.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.1)'} // Reset shadow when not hovering
        >
            <Card.Body>
                <Card.Title>Post {post.postID}</Card.Title>
                <Card.Text>{post.message}</Card.Text>
                <Card.Text>
                    {post.creationTime.slice(0, 10)}{" "}
                    {post.creationTime.slice(11, 16)}{" - "}
                    {post.comments.length} {post.comments.length === 1 ? "comment" : "comments"}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default PostCard;
