import React from 'react';

const WriteJsonButton = () => {
  const handleClick = async () => {
    try {
      const postData = {
        postID: 123, // Example post ID, replace with actual data
        message: 'Hello, JSON!', // Example message, replace with actual data
        creationTime: new Date().toISOString(), // Include creation time
      };

      const response = await fetch('/api/writeJson', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData), // Send post data as JSON
      });

      if (response.ok) {
        console.log('JSON data successfully added');
      } else {
        console.error('Failed to add JSON data');
      }
    } catch (error) {
      console.error('Failed to add JSON data:', error);
    }
  };

  return <button onClick={handleClick}>Add JSON Data</button>;
};

export default WriteJsonButton;
