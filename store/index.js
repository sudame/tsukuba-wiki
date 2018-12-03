import Vuex from 'vuex';
import firebase from '../plugins/firebase';
import { firebaseAction, firebaseMutations } from 'vuexfire';

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      // ログイン状態(firebase.User || false)
      auth: false,
      articles: [],
    }),
    mutations: {
      // ログイン状態を変更する
      authStateChanger(state, user) {
        state.auth = user;
      },
      ...firebaseMutations,
    },
    actions: {
      setArticles: firebaseAction(({ bindFirebaseRef }) => {
        bindFirebaseRef(
          'articles',
          firebase
            .firestore()
            .collection('articles')
            .orderBy('created_at', 'desc')
            .limit(5)
        );
      }),
    },
  });
};

export default createStore;
