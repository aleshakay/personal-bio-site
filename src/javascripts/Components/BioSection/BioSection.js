import utilities from '../../helpers/utilities';
import './BioSection.scss';

const createBioCard = () => {
  let domString = '<div class="row>';
  domString += `<div class="card-body>
                  <h2 class="backgroundHeading">An IT Girl</h2>
                    <p>My passion for technology started as an adoloscent when I received my first computer. I have been tinkering with technology in various forms since that day. The passion led me to enroll at Middle Tennessee State University, where I graduated with a BA in Computer Information Systems.  I love the idea of seeing an idea forming before my eyes and under my fingers tips.</p><p>Last year, I continue look for ways to increase my tech tool kit and found an amazing community at Nashville Software School. Months later I enrolled in the Full Stack Web Development Bootcamp and here I am.</p>
                    <p>Outside of technology, I have enjoyed photography.  I take a great black and white photo, if I might so say myself.  You can also find me doing any of the following equally important hobbies.</p>
    <p><ul class="aleshaHobbies">
      <li>Enjoying my family</li>
      <li>Crafting</li>
      <li>Volunteering</li>
      <li>Taking a class or at a meetup</li>
    </ul></p>`;
  domString += '</div></div>';
  utilities.printToDom('bioPage', domString);
};

export default { createBioCard };
