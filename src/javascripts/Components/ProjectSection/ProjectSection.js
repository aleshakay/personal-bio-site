// import $ from 'jquery';
// import firebase from 'firebase';
import utilities from '../../helpers/utilities';
import projectData from '../../data/projectData';
import Projectformat from '../ProjectFormat/ProjectFormat';


const projectPage = () => {
  projectData.getProject()
    .then((projects) => {
      let domString = '';
      domString += '<h1 class="personalBioh1">My Work in Progress</h1>';
      domString += '<div id="board-container" class="d-flex flex-wrap">';
      projects.forEach((project) => {
        domString += Projectformat.createProjectCards(project);
      });
      domString += '</div>';
      utilities.printToDom('projectsPage', domString);
    });
};

export default { projectPage };
