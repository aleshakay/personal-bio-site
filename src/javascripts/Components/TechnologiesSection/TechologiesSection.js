import utilities from '../../helpers/utilities';
import technologyData from '../../data/technologyData';
import technologyFormat from '../TechnologyFormat/TechnologyFormat';

import './TechnologiesSection.scss';

const technologyPage = () => {
  technologyData.getTechnology()
    .then((technologies) => {
      let domString = '';
      domString += '<h1 class="personalTechh1"> My Technology Stack</h1>';
      domString += '<div id="Tech-container" class="d-flex flex-wrap">';
      domString += '<ul class="list-group list-group-flush myCards">';
      technologies.forEach((technology) => {
        domString += technologyFormat.createTechnologyCards(technology);
      });
      domString += '</ul></div>';
      utilities.printToDom('technologiesPage', domString);
    });
};

export default { technologyPage };
