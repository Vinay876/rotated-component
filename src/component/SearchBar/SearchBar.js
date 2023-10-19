import React, { useState, useEffect } from 'react';
import 
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const apiUrl = 'http://localhost:3001/names';

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setFilteredData(data))
      .catch((error) => console.error(error));
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filteredResults = filteredData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a name"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
