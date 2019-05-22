<template>
  <div class="big-header">
    <img class="logo" src= "../assets/img/logo.png">

    
    <br />
    <router-link class="button" to="/character">Go to Character</router-link>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      message: 'Home page'
    };
  }
};
</script>
