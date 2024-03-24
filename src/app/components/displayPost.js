const data = require('@/../data/data.json');

const DisplayPost = () => {

        return (
            <>
                {data.map((post) => (
                  <div key={post.postID}>
                    <p>{post.message}</p>
                    <p>{post.creationTime}</p>
                    <hr></hr>
                  </div>
                ))}
            </>
        ) 
    }

export default DisplayPost;