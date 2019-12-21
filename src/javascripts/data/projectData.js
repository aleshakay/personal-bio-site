import axios from 'axios';
import apiKeys from '../helpers/apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getProject = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const demprojects = response.data;
      const projects = [];
      Object.keys(demprojects).forEach((fbId) => {
        demprojects[fbId].id = fbId;
        projects.push(demprojects[fbId]);
      });
      resolve(projects); // Hard code to only return first machine that comes back
    })
    .catch((error) => reject(error));
});

export default { getProject };
