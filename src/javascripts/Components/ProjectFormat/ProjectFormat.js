import './ProjectFormat.scss';

const createProjectCards = (project) => {
  let domString = '';
  domString += `
<div class="container-fluid ">
        <div class="box">
            <div class="card projCard">
                <h2>${project.title}</h2>
                <h3>${project.description}</h3>
                <div class="imgbx">
                <img src=${project.screenshot}"auto=format&fit=crop&w=500&q=60" alt='Image of ${project.title}' />
                </div>
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
