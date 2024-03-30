import React, {useEffect, useState} from 'react';
import { Dropdown} from 'react-bootstrap';
const data = require("@/../data/data.json");


const AddTag = ({ onSelect }) => {
    const [tag1, setTag1] = useState([]);
    const [selectedTag, setSelectedTag] = useState('');


    useEffect(() => {
        const tag1 = [...new Set(data.map(post => post.tags))]
        setTag1(tag1)
    }, [])

    const handleTagSelect = (tag) => {
        setSelectedTag(tag)
    }
    const handleOnSelect = (tag) => {
        onSelect(tag)
    }

      return (

        <Dropdown>
          <Dropdown.Toggle variant="primary" style={{ backgroundColor: '#68246D', color: 'white' }} id="dropdown-basic">
          {selectedTag ? selectedTag : 'Select Tag'}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {tag1.map((tag, index) => (
              <Dropdown.Item key={index} onClick={() => { handleTagSelect(tag); handleOnSelect(tag) }}>
                {tag}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

      );  



}

export default AddTag;