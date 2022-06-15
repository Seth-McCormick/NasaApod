<template >
    <div id="app" :style="imageStyleObject">

    </div>

</template>


<script>
import { computed } from 'vue'
import { AppState } from '../AppState'

export default {
    setup() {
        return {
            nasaImg: computed(() => AppState.nasaData),


        }
    },
    computed: {
        imageStyleObject() {
            return {
                backgroundImage: `url(${this.nasaImg.url})`
            }
        }
    }
}
</script>


<style lang="scss" scoped>
#app {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
</style>


<!-- :style="{ 'backgroundImage': nasaImg.url }" -->
<!-- :src="nasaImg.hdurl" -->