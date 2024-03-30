import React, { useState, useEffect } from 'react';
import { Dropdown} from 'react-bootstrap';
const data = require("@/../data/data.json");

const AddTag = () => {
    const [tags, setTags] = useState([]);
    const [selectedTag, setSelectedTag] = useState('');

    useEffect(() => {
        const tags = [...new Set(data.map(post => post.tags))]
        setTags(tags)
    }, [])

    const handleTagSelect = (tag) => {
        setSelectedTag(tag)
    }

      return (

        <Dropdown>
          <Dropdown.Toggle variant="primary" style={{ backgroundColor: '#68246D', color: 'white' }} id="dropdown-basic">
            {selectedTag ? selectedTag : 'Select Tag'}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {tags.map((tag, index) => (
              <Dropdown.Item key={index} onClick={() => handleTagSelect(tag)}>
                {tag}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
                 
      );  
      
      

}

export default AddTag;