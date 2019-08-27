export const changeSearchTerm = searchTerm => {
  return {
    type: 'FILTER_BY_TERM',
    data: { searchTerm }
  };
};

const filterReducer = (state = null, action) => {
  switch (action.type) {
    case 'FILTER_BY_TERM':
      return action.data.searchTerm;
    default:
      return state;
  }
};

export default filterReducer;
