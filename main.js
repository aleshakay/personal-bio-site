console.log('personal-bio-site')

projects =[
    {
        title: 'project1',
        screenshot: 'https://google.com',
        description: 'This is the first project',
        technologiesUsed:'HTML, CSS, Vanilla Javascript, Version Control with Github',
        available: true,
        url: "https://github.com/nss-evening-cohort-10/js-part-deux",
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"

    }
]

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint
}

const createProjectCards = (projectsArray) => {
    let domString = ''
  for (let i = 0; i < projectsArray.length; i++) {
      const projectCard = projectsArray[i]
       domString += `
      <div class="card">
          <h2>${projectCard.title}</h2>
          <h3>${projectCard.description}</h3>
          <img src=${projectCard.screenshot} alt='Image of ${projectCard.title}' />
          <h3>${projectCard.technologiesUsed}</h3>
          <a href=${projectCard.url}></a>
          <a href=${projectCard.githubUrl}></a>
      </div>
      `
  }
  printToDom(domString, 'projectsPage')
}

createProjectCards(projects)