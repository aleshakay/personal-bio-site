import axios from 'axios';
import apiKeys from '../helpers/apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getTechnology = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/technologies.json`)
    .then((response) => {
      const demtechnology = response.data;
      const technologies = [];
      Object.keys(demtechnology).forEach((fbId) => {
        demtechnology[fbId].id = fbId;
        technologies.push(demtechnology[fbId]);
      });
      resolve(technologies);
    })
    .catch((error) => reject(error));
});

export default { getTechnology };
