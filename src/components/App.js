import React, { useEffect } from 'react';
import AnecdoteList from './AnecdoteList';
import AnecdoteForm from './AnecdoteForm';
import Notification from './Notification';
import Filter from './Filter';
import { connect } from 'react-redux';
import anecdoteService from '../services/anecdotes';
import { initializeAnecdotes } from '../reducers/anecdoteReducer';

const App = props => {
  useEffect(() => {
    anecdoteService
      .getAll()
      .then(anecdotes => props.initializeAnecdotes(anecdotes));
  }, [props]);

  return (
    <div>
      <h1>Programming anecdotes</h1>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default connect(
  null,
  { initializeAnecdotes }
)(App);
