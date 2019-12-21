import 'bootstrap';
import firebase from 'firebase';
import '../styles/main.scss';
import apiKeys from './helpers/apiKeys.json';
import Selectors from './Components/Home/Home';
import projectSection from './Components/ProjectSection/ProjectSection';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  Selectors.NavSelector();
  Selectors.myBioSelectors();
  Selectors.myProjectSelectors();
  Selectors.myTechSelectors();
  projectSection.projectPage();
  //  createProjectCards(projects)
};

init();
