import React from 'react';
import './search.css';

const Search = (props) => {
  return (
    <div className='search'>
    <div className="search-content">
    <input
          value={props.location}
          onChange={props.onChange}
          placeholder="Enter Location"
          type="text"
        />
        <button onClick={props.searchLocation}>Search</button>
    </div>
    </div>
  )
}

export default Search;