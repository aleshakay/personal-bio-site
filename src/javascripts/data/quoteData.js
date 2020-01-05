import axios from 'axios';
import apiKeys from '../helpers/apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getQuotes = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/quotes.json`)
    .then((response) => {
      const demquotes = response.data;
      const quotes = [];
      Object.keys(demquotes).forEach((fbId) => {
        demquotes[fbId].id = fbId;
        quotes.push(demquotes[fbId]);
      });
      resolve(quotes);
    })
    .catch((error) => reject(error));
});

export default { getQuotes };
