import React from 'react';
import { addVote } from '../reducers/anecdoteReducer';
import Anecdote from './Anecdote';
import { setNotification } from '../reducers/notificationReducer';
import { connect } from 'react-redux';

const AnecdoteList = props => {
  console.log('props', props);
  const { anecdotesToShow, addVote, setNotification } = props;

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotesToShow.map(anecdote => (
        <Anecdote
          anecdote={anecdote}
          handleVote={() => {
            const updatedAnecdote = { ...anecdote, votes: anecdote.votes + 1 };
            addVote(updatedAnecdote);
            setNotification(`You voted '${anecdote.content}'`, 3);
          }}
          key={anecdote.id}
        />
      ))}
    </div>
  );
};

const anecdotesToRender = ({ anecdotes, filterTerm }) => {
  if (filterTerm) {
    return anecdotes.filter(anecdote => anecdote.content.includes(filterTerm));
  } else {
    return anecdotes;
  }
};

const mapStateToProps = state => {
  return {
    anecdotesToShow: anecdotesToRender(state)
  };
};

const mapDispatchToProps = {
  addVote,
  setNotification
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList);
