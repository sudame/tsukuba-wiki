import firebase from './firebase';

/**
 * @return {Promise} Promise's param: user || false
 */
function auth() {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(user => {
      resolve(user || false);
    });
  });
}

export default auth;
