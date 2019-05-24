<template>
    <div class="big-header">
    <h1>{{ message }}</h1>
    <br />
    <router-link class="button" to="/home">Retour à l'accueil</router-link>
    <audio class="deathSound" volume="0.1" >
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
    color: white;
}
.big-header {
  background-image: url("../assets/images/dead.jpg");
  background-position: center;
  background-size: cover;
}
</style>

<script>
import data from '../data.json'
import theme from '../services/themeService'

export default {
    data () {
        return {
            message: data.lose[this.$route.params.id].message,
            
        }
    },
    
    
}
</script>
