<template>
<div class="big-header">
    <div class="pnj-container">
        <img class="pnj" :src="pnj.skin">
      </div>
    <div class="question">
    <h1>{{ phase.message }}</h1>
    <div class="answers">
    <router-link
      v-for="answer in answers"
      v-bind:key="answer.message"
      class="button"
      :to="answer.link"
    >{{answer.message}}
    </router-link>
    </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

h1 {
 font-size: 35px;
 
 color: rgb(53, 31, 12);
 font-weight: bold;
 width: 80vw;
 text-align: center;
}
.big-header {
  background-image: url("../assets/images/chateau.jpg");
  background-position: center;
  background-size: cover;
}

.question {
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 30vh;
  width: 100vw;
  background-image: url("../assets/images/parch.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 20px;

  .answers {
    height: 300px;
    width: 80vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .button:hover {
      border: 2px solid black;
    }
  }

  .button {
    font-size: 20px;
    color: rgb(53, 31, 12);
    font-weight: bold;
    background-color: rgba(0,0,0,0);
    

    &:hover {
      font-size: 22px;
    }

  }
}
.pnj{
  width: 300px;
}
</style>

<script>
import character from '../services/characterService.js';
import step from '../services/stepService.js';
import data from "../data.json";
import theme from '../services/themeService'
import Sound from "../services/soundService.js";

export default {
  data() {
    return {
      phase: data.game[this.$route.params.id],
      answers: data.game[this.$route.params.id].answers,
      pnj: data.game[this.$route.params.id].pnj,
      sound: data.game[this.$route.params.id].sound,
      click: this.clickHandle()
    };
  },
  methods: {
    setStep() {
      step.set(this.$route.params.id)
      this.phase = this.$route.params.id
    },
    getQuestion() {
      let rawJson = data.game[this.$route.params.id]
      let characterName = localStorage.getItem('character')
      
      rawJson.forEach(question => {
        if(question.character === characterName) {
          this.question = question
        } 
      });
      
    },
    themeHandle() {
      let toDelete = document.querySelector('audio.active');
      toDelete ? document.body.removeChild(toDelete) : ''
      if(localStorage.getItem('music') === "on") {
        let sound = new Sound(this.question.music.src, this.question.music.loop)
        sound.sound.classList.add('active')
        sound.setVolume(this.question.music.volume)
        sound.play();
        return sound
      }
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
  }
};
</script>
