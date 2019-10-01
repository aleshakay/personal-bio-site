console.log('personal-bio-site')

projects =[
    {
        title: 'Project1',
        screenshot: 'https://cdn.shopify.com/s/files/1/0533/2089/files/free-stock-photography-pixabay.jpg?v=1512762557',
        description: 'This is the first project',
        technologiesUsed:'HTML, CSS, Vanilla Javascript, Version Control with Github',
        available: true,
        url: "https://github.com/nss-evening-cohort-10/js-part-deux",
        githubUrl: "https://github.com/aleshakay"

    },
    {
        title: 'Project2',
        screenshot: 'https://cdn.shopify.com/s/files/1/0533/2089/files/free-stock-photography-pixabay.jpg?v=1512762557',
        description: 'This is the second project',
        technologiesUsed:'HTML, CSS, Vanilla Javascript, Version Control with Github',
        available: true,
        url: "https://github.com/nss-evening-cohort-10/js-part-deux",
        githubUrl: "https://github.com/aleshakay"

    }
]

const bioNav = document.getElementById('bioPages');
const techNav = document.getElementById('technologiesPage');
const projNav = document.getElementById('projectsPage');

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint
}

//document.querySelector('fullpages').style.display = 'none';

const myBioSelectors = () => {
    if (bioNav.style.display == 'none') {
        bioNav.style.display = 'block';

    }else{
        bioNav.style.display = 'block';
    };
}

const myTechSelectors = () => {
    if (techNav.style.display == 'none') {
        techNav.style.display = 'block';

    }else{
        techNav.style.display = 'block';
    };
}

const myProjectSelectors = () => {
    if (projNav.style.display === 'none') {
        projNav.style.display = 'block';
        createProjectCards(projects);

    }else{
        projNav.style.display = 'block';
    };
}


const NavSelector = () => {
    document.body.addEventListener('click', (e) => {
        if (e.target.id == 'navToBio'){
            myBioSelectors();
        }else if (e.target.id == 'navToTechnologies'){
            myTechSelectors();
        }else if (e.target.id == 'navToProjects'){
            myProjectSelectors();
        };
    });
};



const createProjectCards = (projectsArray) => {
    let domString = ''

    for (let i = 0; i < projectsArray.length; i++) {
        const projectCard = projectsArray[i]
        if (projectCard.available == true){
        domString += `
        <div class="card">
            <h2>${projectCard.title}</h2>
            <h3>${projectCard.description}</h3>
            <img src=${projectCard.screenshot} alt='Image of ${projectCard.title}' />
            <h3>${projectCard.technologiesUsed}</h3>
            <h3><a href=${projectCard.url}>url</a></h3>
            <h3><a href=${projectCard.githubUrl}>GitHub</a></h3>
        </div>
      `
    }
    printToDom(domString, 'projectsPage')
}
}

const init = () =>{
    NavSelector();
  //  createProjectCards(projects)  
}

init();
