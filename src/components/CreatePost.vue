<template>
  <div class="row d-flex justify-content-center">
    <form @submit.prevent="createPost" class="mt-4 border bg-primary p-3">
      <div class="form-group text-center">
        <label for="exampleFormControlInput1">Create New Post</label>
        <input type="img"
               v-model="state.newPost.imgUrl"
               class="form-control"
               id="exampleFormControlInput1"
               placeholder="Paste Image Here"
               required
        >
      </div>
      <div class="form-group">
        <input type="text"
               v-model="state.newPost.body"
               class="form-control"
               id="exampleFormControlTextarea1"
               rows="3"
               required
        >
      </div>
      <div class="text-center">
        <button class="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { postService } from '../services/PostService'
import { reactive } from 'vue'
import Notification from '../utils/Notification'
export default {

  setup() {
    const state = reactive({
      newPost: {}
    })
    return {
      state,
      async createPost() {
        try {
          await postService.createPost(state.newPost)
          await postService.getPosts()
          state.newPost = {}
        } catch (error) {
          Notification.toast(error, 'error')
        }
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
