import React from 'react';
import { changeSearchTerm } from '../reducers/filterReducer';
import { connect } from 'react-redux';

const Filter = ({ changeSearchTerm }) => {
  const handleChange = event => {
    changeSearchTerm(event.target.value.trim());
  };
  const style = {
    marginBottom: 10
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

export default connect(
  null,
  { changeSearchTerm }
)(Filter);
