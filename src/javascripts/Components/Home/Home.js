import ProjectsSection from '../ProjectSection/ProjectSection';
import technologySection from '../TechnologiesSection/TechologiesSection';
import homeSection from '../HomeScreen/HomeScreen';
import bioSection from '../BioSection/BioSection';

const homeNav = document.getElementById('homePage');
const bioNav = document.getElementById('bioPage');
const techNav = document.getElementById('technologiesPage');
const projNav = document.getElementById('projectsPage');


const myHomeSelectors = () => {
  if (homeNav.style.display === 'none') {
    homeNav.style.display = 'block';
    bioNav.style.display = 'none';
    techNav.style.display = 'none';
    projNav.style.display = 'none';
    homeSection.homePage();
  } else {
    homeNav.style.display = 'none';
    bioNav.style.display = 'none';
    techNav.style.display = 'none';
    projNav.style.display = 'none';
  }
};

const myBioSelectors = () => {
  if (bioNav.style.display === 'none') {
    bioNav.style.display = 'block';
    homeNav.style.display = 'none';
    techNav.style.display = 'none';
    projNav.style.display = 'none';
    bioSection.createBioCard();
  } else {
    bioNav.style.display = 'none';
    homeNav.style.display = 'none';
    techNav.style.display = 'none';
    projNav.style.display = 'none';
  }
};

const myTechSelectors = () => {
  if (techNav.style.display === 'none') {
    techNav.style.display = 'block';
    homeNav.style.display = 'none';
    bioNav.style.display = 'none';
    projNav.style.display = 'none';
    technologySection.technologyPage();
  } else {
    techNav.style.display = 'none';
    homeNav.style.display = 'none';
    bioNav.style.display = 'none';
    projNav.style.display = 'none';
  }
};

const myProjectSelectors = () => {
  if (projNav.style.display === 'none') {
    projNav.style.display = 'block';
    homeNav.style.display = 'none';
    techNav.style.display = 'none';
    bioNav.style.display = 'none';
    ProjectsSection.projectPage();
  } else {
    projNav.style.display = 'none';
    homeNav.style.display = 'none';
    techNav.style.display = 'none';
    bioNav.style.display = 'none';
  }
};


const NavSelector = () => {
  document.body.addEventListener('click', (e) => {
    const link = e.target.id;
    if (link === 'personalBioPage') {
      myBioSelectors();
    }
    if (link === 'personalHomePage') {
      myHomeSelectors();
      homeSection.homePage();
    }
    if (link === 'navToTechnologies') {
      myTechSelectors();
    }
    if (link === 'navToProjects') {
      myProjectSelectors();
    }
  });
};

export default {
  NavSelector,
};
