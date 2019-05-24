<template>
    <div @click="characterChoice(character.name)">
    <h1 class="no-bg">{{ character.name }}</h1>
    <br>
    <img class="skin" :src="character.skin">
    <br>
  </div>
</template>
<style lang="scss" scoped>
    .no-bg {
        background: rgba(0, 0, 0, 0);
        text-align: center;
    }
    div {
        margin: 20px;
        background-color: #00000096;
        padding: 20px;
        cursor: pointer;
        transition: transform .4s;
        &:hover {
            transform: scale(1.1);
        }
    }

    .skin{

        width: 200px;
        height: 400px;
    }
</style>

<script>
import router from '../router.js';
import character from '../services/characterService.js';
export default {
    props: ['character'],
    methods: {
        characterChoice(name) {
            document.querySelector('.clickSound').play();
            character.choose(name)
            router.push('/game/1')
        }
    }
}
</script>