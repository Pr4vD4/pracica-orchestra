<template>

    <div class="wrapper">
        <div class="instrument xylophone"></div>
        <div class="instrument b"></div>
        <div class="instrument"></div>
    </div>

</template>

<script>
import {defineComponent} from 'vue'
import {startSelector} from "@/assets/js/selector";

export default defineComponent({
    name: "Index",
    mounted() {
        startSelector()
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
}
.instrument {
    position: absolute;
    z-index: 10;
    background-size: contain;
    background-repeat: no-repeat;
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

}
.selected {
    transform: scale(1.2);
}
</style>