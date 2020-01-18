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
      domString += '<div id="board-container" class="d-flex flex-wrap">';
      domString += '<h1 class="personalBioh1">Projects</h1>';
      domString += '<div class="row">';
      projects.forEach((project) => {
        domString += Projectformat.createProjectCards(project);
      });
      domString += '</div></div>';
      utilities.printToDom('projectsPage', domString);
    });
};

export default { projectPage };
