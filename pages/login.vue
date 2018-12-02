<template>
  <div>
    <h1>ログイン</h1>

    <div v-if="auth">
      <p>{{ auth.displayName }}でログイン中</p>
      <button @click="logout()">ログアウト</button>
    </div>
    <div v-else>
      <input v-model="email" type="text" />
      <input v-model="pass" type="password" />
      <button @click="login('email')">ログイン</button>
      <button @click="login('twitter')">Twitterログイン</button>
      <button @click="login('facebook')">facebookログイン</button>
      <button @click="login('google')">Googleログイン</button>
      <button @click="login('github')">GitHubログイン</button>
    </div>
  </div>
</template>

<script>
import firebase from '../plugins/firebase';
import { mapState } from 'vuex';

export default {
  data() {
    return {
      email: '',
      pass: '',
    };
  },
  computed: {
    ...mapState(['auth']),
  },
  methods: {
    login(method) {
      if (method === 'email')
        firebase.auth().signInWithEmailAndPassword(this.email, this.pass);
      else {
        let provider;
        switch (method) {
          case 'twitter':
            provider = new firebase.auth.TwitterAuthProvider();
            break;
          case 'facebook':
            provider = new firebase.auth.FacebookAuthProvider();
            break;
          case 'google':
            provider = new firebase.auth.GoogleAuthProvider();
            break;
          case 'github':
            provider = new firebase.auth.GithubAuthProvider();
            break;
          default:
            break;
        }
        firebase
          .auth()
          .signInWithPopup(provider)
          .then(result => {
            console.log(result.credential.accessToken);
          })
          .catch(e => {
            console.error(`[${e.code}]`, e.message);
          });
      }
    },
    logout() {
      firebase.auth().signOut();
    },
  },
};
</script>

<style></style>
