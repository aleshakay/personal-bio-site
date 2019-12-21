import 'bootstrap';
import firebase from 'firebase';
import '../styles/main.scss';
import apiKeys from './helpers/apiKeys.json';
import selectors from './Components/Home/Home';
import projectSection from './Components/ProjectSection/ProjectSection';
import technologySection from './Components/TechnologiesSection/TechologiesSection';


const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  selectors.NavSelector();
  selectors.myBioSelectors();
  selectors.myProjectSelectors();
  selectors.myTechSelectors();
  projectSection.projectPage();
  technologySection.technologyPage();
  //  createProjectCards(projects)
};

init();
