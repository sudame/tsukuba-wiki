import firebase from './firebase';

export default ({ store }) => {
  firebase.auth().onAuthStateChanged(user => {
    store.commit('authStateChanger', user || false);
  });
};
