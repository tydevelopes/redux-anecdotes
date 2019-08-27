import React from 'react';
import { createAnecdote } from '../reducers/anecdoteReducer';
import { displayMessage, removeMessage } from '../reducers/notificationReducer';
import { connect } from 'react-redux';
import anecdoteService from '../services/anecdotes';

const AnecdoteForm = ({ createAnecdote, displayMessage, removeMessage }) => {
  const addAnecdote = async event => {
    event.preventDefault();
    const content = event.target.anecdote.value.trim();
    event.target.anecdote.value = '';
    if (content) {
      const newAnecdote = await anecdoteService.create(content);
      createAnecdote(newAnecdote);
      displayMessage(`You added '${content}'`);
      setTimeout(() => {
        removeMessage();
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

export default connect(
  null,
  { createAnecdote, displayMessage, removeMessage }
)(AnecdoteForm);
