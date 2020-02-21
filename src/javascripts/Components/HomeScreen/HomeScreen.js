// import $ from 'jquery';
// import firebase from 'firebase';
import utilities from '../../helpers/utilities';
import HomeFormat from '../HomeFormat/HomeFormat';
import quoteData from '../../data/quoteData';
import homePagePhoto from '../../../asset/homepageimage.jpg';

import './HomeScreen.scss';

const homePage = () => {
  quoteData.getQuotes()
    .then((quotes) => {
      let domString = '';
      domString += `<p class="column">
      <p><img class="pictureOfMe" src=${homePagePhoto} />`;
      quotes.forEach((quote) => {
        domString += HomeFormat.createQuoteCards(quote);
      });
      domString += '</p></div>';
      utilities.printToDom('homePage', domString);
    });
};

export default { homePage };
