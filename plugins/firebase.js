const firebase = require('firebase');
const config = require('../firebase-keys.json');

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
