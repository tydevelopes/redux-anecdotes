import React from 'react';
import { createAnecdote } from '../reducers/anecdoteReducer';
import { displayMessage, removeMessage } from '../reducers/notificationReducer';

const AnecdoteForm = ({ store }) => {
  const addAnecdote = event => {
    event.preventDefault();
    const content = event.target.anecdote.value.trim();
    event.target.anecdote.value = '';
    if (content) {
      store.dispatch(createAnecdote(content));
      store.dispatch(displayMessage(`You added '${content}'`));
      setTimeout(() => {
        store.dispatch(removeMessage());
      }, 3000);
    }
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
