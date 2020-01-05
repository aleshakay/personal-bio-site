import './ProjectFormat.scss';

const createProjectCards = (project) => {
  let domString = '';
  domString += `
<div class="container-fluid ">
        <div class="row">
            <div class="card projCard">
            <div class "col-4">
                <h2>${project.title}</h2>
                <h3>${project.description}</h3>
                <img src=${project.screenshot} alt='Image of ${project.title}' />
                <h3>${project.technologiesUsed}</h3>
                <h3 class="projectURL"><a href=${project.url}>url</a></h3>
                <h3 class="gitURL"><a href=${project.githubUrl}>GitHub</a></h3>
                </div>
            </div>
        </div>
    </div>
  `;
  return domString;
};

export default { createProjectCards };
