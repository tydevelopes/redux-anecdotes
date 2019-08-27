import axios from 'axios';

const baseUrl = 'http://localhost:3005/anecdotes';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  console.log('response - ', response.data);
  return response.data;
};

const create = async content => {
  const object = { content, votes: 0 };
  const response = await axios.post(baseUrl, object);
  return response.data;
};

export default { getAll, create };
