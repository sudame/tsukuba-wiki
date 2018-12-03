<template>
  <section>
    <nuxt-link to="/login">ログイン</nuxt-link>
    <p v-for="article in articles" :key="article.id">{{ article }}</p>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  created() {
    this.$store.dispatch('setArticles');
  },
  computed: {
    ...mapState(['articles']),
  },
};
</script>

<style></style>
