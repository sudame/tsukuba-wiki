<template>
  <div>
    <input type="text" v-model="content" />
    <input type="text" v-model="title" />
    <button @click="addArticle()">送信</button>
    <p v-if="addArticleStatus === 'success'">送信に成功しました</p>
    <p v-else-if="addArticleStatus !== null">{{ addArticleStatus }}</p>
  </div>
</template>

<script>
import firebase from '../../plugins/firebase';

export default {
  data() {
    return {
      title: '',
      content: '',
      addArticleStatus: null,
    };
  },
  methods: {
    addArticle() {
      firebase
        .firestore()
        .collection('articles')
        .add({
          title: this.title,
          content: this.content,
          created_at: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {
          this.addArticleStatus = 'success';
          this.title = '';
          this.content = '';
        })
        .catch(e => {
          this.addArticleStatus = e.message;
        })
        .then(() => {
          window.setTimeout(() => {
            this.addArticleStatus = null;
          }, 3000);
        });
    },
  },
};
</script>

<style></style>
