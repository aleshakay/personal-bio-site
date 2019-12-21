import axios from 'axios';
import apiKeys from '../helpers/apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getTechology = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/techologies.json"`)
    .then((response) => {
      const demtechology = response.data;
      const techologies = [];
      Object.keys(demtechology).forEach((fbId) => {
        demtechology[fbId].id = fbId;
        techologies.push(demtechology[fbId]);
      });
      resolve(techologies); // Hard code to only return first machine that comes back
    })
    .catch((error) => reject(error));
});

export default { getTechology };
