<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>
    <router-link class="button" to="/home">Go to Home</router-link>
    <div id="background-container">
    <video autoplay muted id="myVideo">
      <source src="../assets/images/winVid.mp4" type="video/mp4">
    </video>
    </div>
    <audio class="deathSound" autoplay volume="0.1" >
        <source src="../assets/sounds/win.wav" type="audio/wav">
    </audio>
    
  </div>
  
</template>

<style lang="scss" scoped>
h1 {
    font-family: 'Cinzel';
    font-size: 100px;
    margin-bottom: 50vh;
    color: blue;
    background-color: yellow;
    border-radius: 10px;
    padding: 10px;
}

video{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: block;
    z-index: -1;
    background-position: center center;
    background-repeat: no-repeat;
}

.big-header{
    background: none;
}

.button{
    opacity: 0.5;
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
