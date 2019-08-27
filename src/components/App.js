import React from 'react';
import AnecdoteList from './AnecdoteList';
import AnecdoteForm from './AnecdoteForm';
import Notification from './Notification';
import Filter from './Filter';

const App = ({ store }) => {
  return (
    <div>
      <Notification store={store} />
      <Filter store={store} />
      <AnecdoteList store={store} />
      <AnecdoteForm store={store} />
    </div>
  );
};

export default App;
