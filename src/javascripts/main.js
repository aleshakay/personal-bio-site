import 'bootstrap';
import firebase from 'firebase';
import ProjectSection from './Components/ProjectSection/ProjectSection';
import '../styles/main.scss';
import apiKeys from './helpers/apiKeys.json';
import Selectors from './Components/Home/Home';


const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  Selectors.NavSelector();
  Selectors.myBioSelectors();
  Selectors.myProjectSelectors();
  Selectors.myTechSelectors();
  Selectors.ProjectSection();
  ProjectSection.projectPage();
  //  createProjectCards(projects)
};

init();
