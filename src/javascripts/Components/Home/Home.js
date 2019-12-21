import ProjectsSection from '../ProjectSection/ProjectSection';

const bioNav = document.getElementById('bioPages');
const techNav = document.getElementById('technologiesPage');
const projNav = document.getElementById('projectsPage');


const myBioSelectors = () => {
  if (bioNav.style.display === 'none') {
    bioNav.style.display = 'block';
    techNav.style.display = 'none';
    projNav.style.display = 'none';
  } else {
    bioNav.style.display = 'none';
    techNav.style.display = 'none';
    projNav.style.display = 'none';
  }
};

const myTechSelectors = () => {
  if (techNav.style.display === 'none') {
    techNav.style.display = 'block';
    bioNav.style.display = 'none';
    projNav.style.display = 'none';
  } else {
    techNav.style.display = 'block';
    bioNav.style.display = 'none';
    projNav.style.display = 'none';
  }
};

const myProjectSelectors = () => {
  if (projNav.style.display === 'none') {
    projNav.style.display = 'block';
    // createProjectCards(projects);
    techNav.style.display = 'none';
    bioNav.style.display = 'none';
  } else {
    projNav.style.display = 'none';
    techNav.style.display = 'none';
    bioNav.style.display = 'none';
  }
};


const NavSelector = () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.id === 'personalBioPage') {
      myBioSelectors();
    }
    if (e.target.id === 'navToTechnologies') {
      myTechSelectors();
    }
    if (e.target.id === 'navToProjects') {
      myProjectSelectors();
      ProjectsSection.projectPage();
    }
  });
};

export default {
  myBioSelectors,
  myTechSelectors,
  myProjectSelectors,
  NavSelector,
};
