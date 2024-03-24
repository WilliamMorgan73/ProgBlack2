import React from 'react';

const WriteJsonButton = () => {
  const handleClick = async () => {
    try {
      const response = await fetch('/api/writeJson', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: 'Hello, JSON!' }), // Data to be written to JSON file
      });
      if (response.ok) {
        console.log('JSON file written successfully');
      } else {
        console.error('Failed to write JSON file');
      }
    } catch (error) {
      console.error('Failed to write JSON file:', error);
    }
  };

  return <button onClick={handleClick}>Write to JSON</button>;
};

export default WriteJsonButton;
