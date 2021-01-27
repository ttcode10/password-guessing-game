import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/password',
  headers: { 'Content-Type': 'application/json' },
});

export const getHint = async () => {
  try {
    const response = await api.get('/new-password');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const verifyAnswer = async (hint, answer) => {
  try {
    const dataToSend = {hint, answer}
    const response = await api.post('/verify-password', dataToSend);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
