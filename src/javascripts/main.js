import 'bootstrap';
import firebase from 'firebase';
import '../styles/main.scss';
import apiKeys from './helpers/apiKeys.json';
import selectors from './Components/Home/Home';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  selectors.NavSelector();
};

init();
