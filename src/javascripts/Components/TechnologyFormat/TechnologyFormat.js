import './TechnologyFormat.scss';

const createTechnologyCards = (technology) => {
  let domString = '';
  domString += `
        <li class="list-group-item techName">${technology.name}</li>
  `;
  return domString;
};

export default { createTechnologyCards };
