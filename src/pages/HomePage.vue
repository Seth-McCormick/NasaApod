<template >
  <div>

    <NasaImg />
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { nasaimgsService } from '../services/NasaImgsService'
import Pop from '../utils/Pop'


export default {
  // NOTE think of the component/page as the "controller" in the MVC pattern
  name: 'Home',
  setup() {
    onMounted(async () => {
      try {
        // NOTE these are the things that will run when this home page "mounts" to the dom
        await nasaimgsService.getData()
      } catch (error) {
        Pop.toast(error.message, 'error')
      }
    })
    return {

    }
  }
}
</script>

<style scoped lang="scss">
</style>
