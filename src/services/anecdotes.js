import axios from 'axios';

const baseUrl = 'http://localhost:3005/anecdotes';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const create = async content => {
  const object = { content, votes: 0 };
  const response = await axios.post(baseUrl, object);
  return response.data;
};

const update = async (id, newObject) => {
  const response = await axios.put(`${baseUrl}/${id}`,newObject);
  console.log('updated response - ', response.data);
  return response.data
}

export default { getAll, create, update };
