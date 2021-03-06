// import $ from 'jquery';
// import firebase from 'firebase';
import utilities from '../../helpers/utilities';
import projectData from '../../data/projectData';
import Projectformat from '../ProjectFormat/ProjectFormat';

import './ProjectSection.scss';

const projectPage = () => {
  projectData.getProjects()
    .then((projects) => {
      let domString = '';
      domString += '<h1 class="personalBioh1">My Porfolio</h1>';
      domString += '<div id="board-container" class="d-flex flex-wrap">';
      projects.forEach((project) => {
        domString += Projectformat.createProjectCards(project);
      });
      domString += '</div>';
      utilities.printToDom('projectsPage', domString);
    });
};

export default { projectPage };
