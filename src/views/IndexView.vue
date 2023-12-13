<template>

    <div class="wrapper" ref="game">
        <div class="play"></div>
        <div class="instrument xylophone" data-correct="1"></div>
        <div class="instrument b" data-correct="1"></div>
        <div class="instrument maracas " data-correct="1"></div>
        <div class="instrument spoons" data-correct="1"></div>
        <div class="instrument triangle" data-correct="1"></div>
        <div class="instrument synth" data-correct="0"></div>
        <div class="instrument violin " data-correct="0"></div>
<!--        <div class="instrument"></div>-->
    </div>
    <MessageSuccess v-if="game.success"/>
</template>

<script>
import {defineComponent} from 'vue'
import {startSelector, Game} from "@/assets/js/selector";
import MessageSuccess from "@/components/MessageSuccess.vue";

export default defineComponent({
    name: "Index",
    components: {MessageSuccess},
    data() {
        return {
            game: {}
        }
    },
    mounted() {
        this.game = new Game(this.$refs.game)
        startSelector(this.game)
    }
})
</script>

<style scoped>

.wrapper {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-image: url("../assets/img/bg.jpg");
    background-size: cover;
    background-position-y: 50%;
    background-repeat: no-repeat;
    overflow: hidden;
}
.instrument {
    position: absolute;
    z-index: 10;
    background-size: contain;
    background-repeat: no-repeat;
}

.play {
    position: absolute;
    z-index: 10;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url("../assets/img/play.png");
    width: 8vw;
    height: 8vw;
    left: 47vw;
    top: 36vh;
}

.xylophone {
    background-image: url("../assets/img/xylophone.png");
    width: 200px;
    height: 200px;
    //transform: translateX(40vw) translateY(52vh);
    left: 40vw;
    top: 52vh;
}

.b {
    background-image: url("../assets/img/b.png");
    width: 200px;
    height: 200px;
    left: 80vw;
    top: 80vh;
}
.maracas {
    background-image: url("../assets/img/maracas.png");
    height: 150px;
    width: 150px;
    left: 60vw;
    top: 49vh;
}

.spoons {
    background-image: url("../assets/img/spoons.png");
    height: 150px;
    width: 150px;
    left: 90vw;
    top: 67vh;
}

.triangle {
    background-image: url("../assets/img/triangle.png");
    height: 150px;
    width: 150px;
    left: 15vw;
    top: 2vh;
}

.violin {
    background-image: url("../assets/img/violin.png");
    height: 300px;
    width: 150px;
    left: 32vw;
    top: 52vh;
}
.synth {
    background-image: url("../assets/img/synth.png");
    height: 70px;
    width: 225px;
    left: 48vw;
    top: 72vh;
}
.selected {
    transform: scale(1.5);
}
</style>