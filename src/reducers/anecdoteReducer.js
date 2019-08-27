export const addVote = id => {
  return {
    type: 'VOTE',
    data: { id }
  };
};

export const createAnecdote = data => {
  return {
    type: 'NEW_ANECDOTE',
    data
  };
};

export const initializeAnecdotes = anecdotes => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE':
      return state.map(item => {
        if (item.id === action.data.id) {
          return { ...item, votes: item.votes + 1 };
        }
        return item;
      });
    case 'INIT_ANECDOTES':
      return action.data;
    case 'NEW_ANECDOTE':
      return [...state, action.data];
    default:
      return state;
  }
};

export default reducer;
