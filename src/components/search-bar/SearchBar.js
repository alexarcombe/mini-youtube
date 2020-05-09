import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

/**
 * Search Bar component.
 * @param {Object} props
 * @param {function} props.onSubmit - callback for on submit.
 */
function SearchBar(props) {
  const { onSubmit } = props;
  const [search, setSearch] = useState('New Zealand');

  return (
    <form className="ui form" onSubmit={(e) => onSubmit(e, search)}>
      <div className="field search-field">
        <input
          className="search-input"
          type="text"
          value={search}
          placeholder="Search for an YouTube video"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
    </form>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
