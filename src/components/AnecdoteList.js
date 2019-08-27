import React from 'react';
import { addVote } from '../reducers/anecdoteReducer';
import Anecdote from './Anecdote';
import { displayMessage, removeMessage } from '../reducers/notificationReducer';
import { connect } from 'react-redux';

const AnecdoteList = props => {
  console.log('props', props);
  const { anecdotesToShow, addVote, displayMessage, removeMessage } = props;

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotesToShow.map(anecdote => (
        <Anecdote
          anecdote={anecdote}
          handleVote={() => {
            addVote(anecdote.id);
            displayMessage(`You voted '${anecdote.content}'`);
            setTimeout(() => {
              removeMessage();
            }, 3000);
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
  displayMessage,
  removeMessage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList);
