import './TechnologyFormat.scss';

const createTechnologyCards = (technology) => {
  let domString = '';
  domString += `
      <ul class="list-group list-group-flush myCards">
        <li class="list-group-item techName">${technology.name}</li>
      </ul>
      </div>
  `;
  return domString;
};

export default { createTechnologyCards };
