import './ProjectFormat.scss';

const createProjectCards = (project) => {
  let domString = '';
  domString += `
<div class="flip flip-vertical">
    <div class="front" style="background-image: url(${project.url})">
       <h1 class="text-shadow">${project.title}</hi>
    </div>
    <div class="back">
       <h2>${project.technologiesUsed}</h2>
       <h3 class="projectURL"><a href=${project.url}>Project URL</a></h3>
       <h3 class="gitURL"><a href=${project.githubUrl}>GitHub</a></h3>
    </div>
</div>
    `;
  return domString;
};

export default { createProjectCards };
