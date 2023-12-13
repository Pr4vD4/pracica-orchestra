<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "MessageSuccess"
})
</script>

<template>
    <div class="message">
        <div data-v-5074c3c4="" class="message-box d-flex flex-column justify-content-center align-items-center">
            <div data-v-5074c3c4="" class="h1">Вы успешно справились!</div>
            <button data-v-5074c3c4="" onclick="window.location.reload()" class="toMenu mt-5">На главную</button>
        </div>
    </div>
</template>

<style scoped>
.message-box {

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    place-content: center;
    width: 80vw;
    height: 75vh;
    background: hsla(0,0%,100%,.9);
    box-shadow: 0 0 10px 0 hsla(0,0%,54%,.75);
    border-radius: 2vw;
    overflow: hidden;
}
.message {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 11;
    background-color: rgba(0,0,0,.1);
}
.h1 {
    font-size: 7rem;
}
.toMenu {
//font-family: CyrRound,serif;
    color: #fff;
    font-size: 6vh;
    text-align: center;
    padding: .25vh 1.5vw;
    margin: 0 1vw;
    background: #45b100;
    border-radius: 1vw;
    border: .15vw solid #fff;
    width: 30%;
    text-decoration: none;
}
</style>