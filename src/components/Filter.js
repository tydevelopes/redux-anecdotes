import React from 'react';
import { changeSearchTerm } from '../reducers/filterReducer';

const Filter = ({ store }) => {
  const handleChange = event => {
    store.dispatch(changeSearchTerm(event.target.value.trim()));
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

export default Filter;
