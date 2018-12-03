const firebase = require('firebase');
const config = require('../firebase-keys.json');

if (!firebase.apps.length) {
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });
}

export default firebase;
