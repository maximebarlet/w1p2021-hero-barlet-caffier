<template>
    <div class="big-header">
    <h1>{{ message }}</h1>
    <br />
    <router-link class="button" to="/home">Retour à l'accueil</router-link>
    <audio class="deathSound" autoplay volume="0.1" >
        <source src="../assets/sounds/lost.mp3" type="audio/mp3">
    </audio>
  </div>
</template>
<style lang="scss" scoped>
h1 {
    font-family: 'Cinzel';
    font-size: 40px;
    width: 80vw;
    text-align: center;
}
.big-header {
  background-color: black;
}
</style>

<script>
import data from '../data.json'
import theme from '../services/themeService'

export default {
    data () {
        return {
            message: this.getMessage(),
            click: this.clickHandle()
        }
    },
    methods: {
      
        clickHandle() {
      setTimeout(() => {
        let toDelete = document.querySelector('audio.active');
      toDelete ? document.body.removeChild(toDelete) : ''
        const buttons = document.querySelectorAll('.button')
        buttons.forEach(button => {
          button.addEventListener('click', () => {
            document.querySelector('.clickSound').play();
          })
        })
      }, 200);
      return 'Hello'
    },
    getMessage() {
      setTimeout(() => {

        let rawJson = data.game[localStorage.getItem('step')]
      let characterName = localStorage.getItem('character')
      rawJson.forEach(question => {
        if(question.character === characterName) {
          this.message = question.lose
          setTimeout(() => {
            let h1 = document.querySelector('h1')
            h1 ? h1.innerHTML = question.lose : ""
          }, 100);
        } 
      });
      }, 100)
      
    }
    }
}
</script>
