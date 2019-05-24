<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>
    <router-link class="button" to="/home">Go to Home</router-link>
    <audio class="deathSound" autoplay volume="0.1" >
        <source src="../assets/sounds/win.wav" type="audio/wav">
    </audio>
  </div>
</template>

<style lang="scss" scoped>
h1 {
    font-family: 'Cinzel';
    font-size: 100px;
    margin-bottom: 20vh;
    color: black;
}
.big-header {
  background-color: gold;
}
</style>
<script>
export default {
    data () {
        return {
            message: 'Vous avez gagné !',
            audio: this.playSound(),
            click: this.clickHandle()
        }
    },
    methods: {
        playSound() {
            document.addEventListener('DOMContentLoaded', () => {
                console.log('Sound Loaded');
                var audio = document.querySelector('.winSound');
                audio.volume = 0.1;
                return audio
            })
        },
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
    }
    }
}
</script>
