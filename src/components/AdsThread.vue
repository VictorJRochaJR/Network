<template>
  <div>
    <Ads v-for="a in ads" :key="a.id" :ads="a" />
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'

export default {
  setup() {
    return {
      ads: computed(() => AppState.ads)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
