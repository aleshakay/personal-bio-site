import './TechnologyFormat.scss';

const createTechnologyCards = (technology) => {
  let domString = '';
  domString += `
    <div class="container-fluid">
      <div class="card technoCard">
      <ul class="list-group list-group-flush">
        <li class="list-group-item techName">${technology.name}</li>
      </ul>
      </div>
    </div>
  `;
  return domString;
};

export default { createTechnologyCards };
