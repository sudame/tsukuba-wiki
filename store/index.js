import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      // ログイン状態(firebase.User || false)
      auth: false,
    }),
    mutations: {
      // ログイン状態を変更する
      authStateChanger(state, user) {
        state.auth = user;
      },
    },
  });
};

export default createStore;
