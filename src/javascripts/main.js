import 'bootstrap';

console.log('personal-bio-site');

const projects = [
  {
    title: 'Project1',
    screenshot: 'https://cdn.shopify.com/s/files/1/0533/2089/files/free-stock-photography-pixabay.jpg?v=1512762557',
    description: 'This is the first project',
    technologiesUsed: 'HTML, CSS, Vanilla Javascript, Version Control with Github',
    available: true,
    url: 'https://github.com/nss-evening-cohort-10/js-part-deux',
    githubUrl: 'https://github.com/aleshakay',

  },
  {
    title: 'Project2',
    screenshot: 'https://cdn.shopify.com/s/files/1/0533/2089/files/free-stock-photography-pixabay.jpg?v=1512762557',
    description: 'This is the second project',
    technologiesUsed: 'HTML, CSS, Vanilla Javascript, Version Control with Github',
    available: true,
    url: 'https://github.com/nss-evening-cohort-10/js-part-deux',
    githubUrl: 'https://github.com/aleshakay',

  },
];

const bioNav = document.getElementById('bioPages');
const techNav = document.getElementById('technologiesPage');
const projNav = document.getElementById('projectsPage');

const printToDom = (toPrint, divId) => {
  document.getElementById(divId).innerHTML = toPrint;
};
const createProjectCards = (projectsArray) => {
  let domString = '';

  for (let i = 0; i < projectsArray.length; i += 1) {
    const projectCard = projectsArray[i];
    if (projectCard.available === true) {
      domString += `
    <div class="container-fluid">
            <div class="row">
                <div class="card">
                <div class "d-flex">
                    <h2>${projectCard.title}</h2>
                    <h3>${projectCard.description}</h3>
                    <img src=${projectCard.screenshot} alt='Image of ${projectCard.title}' />
                    <h3>${projectCard.technologiesUsed}</h3>
                    <h3><a href=${projectCard.url}>url</a></h3>
                    <h3><a href=${projectCard.githubUrl}>GitHub</a></h3>
                    </div>
                </div>
            </div>
        </div>
      `;
    }
    printToDom(domString, 'projectsPage');
  }
};

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
    createProjectCards(projects);
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
    if (e.target.id === 'navToBio') {
      myBioSelectors();
    }
    if (e.target.id === 'navToTechnologies') {
      myTechSelectors();
    }
    if (e.target.id === 'navToProjects') {
      myProjectSelectors();
    }
  });
};


const init = () => {
  NavSelector();
  //  createProjectCards(projects)
};

init();
