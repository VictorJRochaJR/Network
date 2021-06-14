<template>
  <div>
    <Posts v-for="p in posts" :key="p.id" :posts="p" />
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, reactive } from 'vue'

export default {
  data() {
    return {
      posts: computed(() => AppState.posts)
    }
  },
  setup() {
    const state = reactive({

    })
    return {
      state
      // posts: computed(() => AppState.posts)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
