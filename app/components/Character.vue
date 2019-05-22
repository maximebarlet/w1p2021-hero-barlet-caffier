<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>
    <div class="character-box">
    <div class="character">
    <h2>{{ character1.name }}</h2>
    <h3>{{ character1.speciality }}</h3>
    <img class="skin" :src="character1.skin">
    <br>
    <router-link class="button" to="/game/1">Choisir</router-link>
    </div>
    <br>
    <div class="character">
    <h2>{{ character2.name }}</h2>
    <h3>{{ character2.speciality }}</h3>
    <img class="skin" :src="character2.skin">
    <br>
    <router-link class="button" to="/game/1">Choisir</router-link>
    </div>
    </div>
    <br>
  </div>
</template>

<script>
import data from "../data.json";
export default {
  data() {
    return {
      character1: data.character[1],
      character2: data.character[2],
      message: "Choisissez votre personnage",
      
      
   
      
    };
  }
};
</script>
