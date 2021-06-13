<template>
  <div>
    {{ activeProfile.name }}
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, onMounted } from 'vue'
export default {
  setup() {
    onMounted(() => {

    })
    return {
      activeProfile: computed(() => AppState.activeProfile)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
