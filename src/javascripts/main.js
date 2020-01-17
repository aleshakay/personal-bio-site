import 'bootstrap';
import firebase from 'firebase';
import '../styles/main.scss';
import apiKeys from './helpers/apiKeys.json';
import selectors from './Components/Home/Home';
import homeSection from './Components/HomeScreen/HomeScreen';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  homeSection.homePage();
  selectors.NavSelector();
};

init();
