const data = require('@/../data/data.json');

const DisplayPost = () => {

        return (
            <>
                {data.map((post) => (
                  <div key={post.postID}>
                    <p>{post.message}</p>
                    <p>{post.creationTime.slice(0,10)} {post.creationTime.slice(11,16)}</p>
                    <hr></hr>
                  </div>
                ))}
            </>
        ) 
    }

export default DisplayPost;