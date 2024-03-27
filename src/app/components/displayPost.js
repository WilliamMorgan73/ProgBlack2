import React, { useState } from "react";
import { Container } from "react-bootstrap";
import PostCard from "./PostCard";
import CommentModal from "./CommentModal";
const data = require("@/../data/data.json");

const DisplayPost = () => {
    const [selectedPost, setSelectedPost] = useState(null);
    const [appear, setAppear] = useState(false);

    const handleAppear = (post) => {
        setSelectedPost(post);
        setAppear(true);
    };

    const handleExit = () => {
        setAppear(false);
    };

    return (
        <>
            <Container style={{ maxWidth: "98%" }}>
                {data.map((post) => (
                    <PostCard
                        key={post.postID}
                        post={post}
                        handleAppear={handleAppear}
                    />
                ))}
            </Container>
            {selectedPost !== null && (
                <CommentModal
                    selectedPost={selectedPost}
                    appear={appear}
                    handleExit={handleExit}
                />
            )}
        </>
    );
};

export default DisplayPost;
