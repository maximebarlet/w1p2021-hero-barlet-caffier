<template>
    
  <div class="big-header">
    <img class="name" src="../assets/images/logo.png">
    <br>
    <router-link class="button" to="/characters">Choix du personnage</router-link>
    <router-link class="button" :to="'/game/' + getStep()">Reprendre la partie en cours</router-link>
    
  </div>
</template>

<style lang="scss" scoped>

.big-header {
  background-image: url("../assets/images/chateau.jpg");
  background-position: center;
  background-size: cover;

}

.name {
  opacity: 0;
  margin-bottom: 20vh;
  height: 30vh;
}
.name.name-visible {
  opacity: 1;
  transition: opacity 1.7s;
}
#myVideo {
  position: fixed;
  z-index: -1;
  right: 0;
  bottom: 0;
  min-width: 100%; 
  min-height: 100%;
}



</style>


<script>
import step from "../services/stepService.js";
import Sound from "../services/soundService.js";
import theme from "../services/themeService";
import data from "../data.json";

/**
 * Function to make title appear
 */
setTimeout(() => {
  let name = document.querySelector('.name')
  let video = document.querySelector('#myVideo')
  video ? video.playbackRate = 2  : ''
  setTimeout(() => {
    name.classList.add('name-visible')
  }, 12000);
},100)

/**
 * Link settings and sound class
*/
  let settingsBtn = document.querySelector('.settings')
  
  settingsBtn.addEventListener('mouseover', () => {
    document.querySelector('.settings').classList.add('is-open');
  })
  settingsBtn.addEventListener('mouseleave', () => {
    document.querySelector('.settings').classList.remove('is-open');
  })
    let music = document.querySelector(".settings #sound");
    let active = null
    if(localStorage.getItem('music') === "off") music.checked = false;
    music.addEventListener('click', () => {
    let checkBox = document.querySelector('.settings input[type=checkbox]')
    if (checkBox.checked && theme.state !== 'playing') {
      theme.play()
      active =  document.querySelector('audio.active');
      active ? active.play() : '';
      localStorage.setItem('music', 'on')
    } else {
      active = document.querySelector('audio.active');
      active ? active.pause(): '';
      theme.pause();
      localStorage.setItem('music', 'off')
    }
  })

  let volume = document.querySelector(".settings #volume");
  volume.addEventListener('change', () => {
    theme.setVolume(volume.value);
  })

export default {
  data() {
    return {
      message: "Home page",
      image: data.home.image, 
      theme: this.themeHandle(),
      click: this.clickHandle()
    };
  },
  methods: {
    getStep() {
      return step.get();
    },
    themeHandle() {
      theme.change(data.home.music.src, data.home.music.loop)
      theme.setVolume(data.home.music.volume)
      if(localStorage.getItem('music') === "on") theme.play();
      return theme
    },
    clickHandle() {
      document.addEventListener('DOMContentLoaded', () => {
        const buttons = document.querySelectorAll('.button')
        buttons.forEach(button => {
          button.addEventListener('click', () => {
            document.querySelector('.clickSound').play();
          })
        })
      })
      return 'Hello'
    }
  }
};
</script>
