<template>
    <div class="big-header" >
    <h1>{{ message }}</h1>
    <br />
    <div class="characters">
        <Character  v-for="character in characters" :key="character.name" :character="character" />
    </div>
    <router-link class="button" to="/home">Retour</router-link>

  </div>
</template>

<style lang="scss" scoped>
* {
    font-family: Avenir;
}

.big-header{
    background-image: url("../assets/images/chateau.jpg");
    background-position: center;
    background-size: cover;
}

h1 {
    font-size: 24px;
    background-color: #00000096;
    padding: 30px;
    font-family: "Almendra";
}
.characters {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60vw;
    height: 40vh;
}
</style>

<script>
import Character from './Character.vue';
import data from '../data.json';
import theme from '../services/themeService';

export default {
    data () {
        return {
            message: 'Choisissez votre personnage',
            characters: data.characters,
            image: data.character.image,
            click: this.clickHandle()
        }
    },
    methods: {
        setBackground() {
          document.addEventListener('DOMContentLoaded', () => {
          let bigHeader = document.querySelector('.big-header')
          bigHeader.style.backgroundImage = 'url(' + data.home.image + ')'
          return data.home.image
      })
    },
    clickHandle() {
      setTimeout(() => {
        const buttons = document.querySelectorAll('.button')
        buttons.forEach(button => {
          button.addEventListener('click', () => {
            document.querySelector('.clickSound').play();
          })
        })
      }, 200);
      return 'Hello'
    }
    },
    components: {
        Character
    },
}
</script>
