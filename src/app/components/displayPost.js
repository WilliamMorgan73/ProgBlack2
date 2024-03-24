import { Card, Container } from 'react-bootstrap';
const data = require('@/../data/data.json');

const DisplayPost = () => {
    return (
        <Container style={{ maxWidth: '98%' }}>
            {data.map((post) => (
                <Card key={post.postID} style={{ border: '1px solid #ccc', borderRadius: '30px', margin: '10px 0' }}>
                    <Card.Body>
                        <Card.Title>Post {post.postID}</Card.Title>
                        <Card.Text>{post.message}</Card.Text>
                        <Card.Text>{post.creationTime.slice(0,10)} {post.creationTime.slice(11,16)}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    );
}

export default DisplayPost;
