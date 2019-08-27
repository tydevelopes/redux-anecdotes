import React from 'react';
import { addVote } from '../reducers/anecdoteReducer';
import Anecdote from './Anecdote';
import { displayMessage, removeMessage } from '../reducers/notificationReducer';

const AnecdoteList = ({ store }) => {
  const { anecdotes, filterTerm } = store.getState();

  const anecdotesToRender = () => {
    if (filterTerm) {
      return anecdotes.filter(anecdote =>
        anecdote.content.includes(filterTerm)
      );
    } else {
      return anecdotes;
    }
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotesToRender().map(anecdote => (
        <Anecdote
          anecdote={anecdote}
          handleVote={() => {
            store.dispatch(addVote(anecdote.id));
            store.dispatch(displayMessage(`You voted '${anecdote.content}'`));
            setTimeout(() => {
              store.dispatch(removeMessage());
            }, 3000);
          }}
          key={anecdote.id}
        />
      ))}
    </div>
  );
};

export default AnecdoteList;
