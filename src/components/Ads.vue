<template>
  <div>
    <img :src="ads.tall" alt="adsimage">
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  props: { ads: { type: Object, required: true } },
  setup(props) {
    const state = reactive({

    })
    return {
      state
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
