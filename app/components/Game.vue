<template>
  <div class="big-header">
    <h1>{{ phase.message }}</h1>
    <img class="skin" :src="pnj.skin">
    <br>
    <router-link
      v-for="answer in answers"
      v-bind:key="answer.message"
      class="button"
      :to="answer.link"
    >{{answer.message}}</router-link>
  </div>
</template>

<script>
import data from "../data.json";
export default {
  data() {
    return {
      phase: data.game[this.$route.params.id],
      answers: data.game[this.$route.params.id].answers,
      pnj: data.game[this.$route.params.id].pnj
    };
  }
};
</script>
