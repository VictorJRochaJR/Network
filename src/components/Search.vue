<template>
  <div>
    <form @submit.prevent="search">
      <input type="text"
             placeholder="Search.."
             v-model="state.query"
      />
    </form>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import { postService } from '../services/PostService'
export default {
  setup() {
    const router = useRouter()
    const state = reactive({
      query: null
    })
    return {
      state,
      search() {
        console.log('search')
        postService.search(state.query)
        state.query = ''
        router.push({ path: 'results' })
      }

    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
