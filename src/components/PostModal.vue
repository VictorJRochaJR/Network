<template>
  <div v-if="activePost.id">
    <!-- Modal -->
    <div class="modal fade"
         id="postModal"
         tabindex="-1"
         role="dialog"
         aria-labelledby="modelTitleId"
         aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content row border-0">
          <div class="modal-header border-0">
            <h5 class="modal-title">
              {{ activePost.body }}
            </h5>

            <button type="button" class="close text-light" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body row">
            <div class="col px-1 my-1">
              <img :src="activePost.imgUrl" class="img-fluid" alt="" srcset="">
            </div>
          </div>
          <div class="modal-footer border-0 col-6 ">
            <router-link :to="{name: 'ProfilePage', params:{ id: activePost.creator.id}}" data-dismiss="modal" :key="activePost.creator.id">
              <div class="col">
                <img :src="activePost.creator.picture" class="img-fluid rounded-pill" alt="" srcset="">
              </div>
            </router-link>
            <div>
              {{ activePost.creator.name }}
            </div>
          </div>
          <div v-if="user.name === activePost.creator.name">
            <button data-dismiss="modal" @click="deletePost">
              Delete
            </button>
            <button @click="toggle = !toggle">
              Edit
            </button>
          </div>
          <div v-if="toggle" class="row d-flex justify-content-center">
            <form @submit.prevent="editPost" class="mt-4 border bg-primary p-3">
              <div class="form-group text-center">
                <label for="exampleFormControlInput1">Edit Post</label>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { postService } from '../services/PostService'

import { computed, reactive } from 'vue'
export default {
  data() {
    const toggle = false
    return {
      toggle

    }
  },
  setup() {
    const state = reactive({
      newPost: {}
    })

    return {
      state,

      deletePost() {
        postService.deletePost(AppState.activePost.id)
        console.log(AppState.user.name, 'userinfo')
      },
      activePost: computed(() => AppState.activePost),
      user: computed(() => AppState.user),

      async editPost() {
        try {
          await postService.editPost(AppState.activePost.id, state.newPost)
          await postService.getPosts()
          state.newPost = {}
        } catch (error) {
          console.log(error)
          console.log(AppState.id, state.newPost)
        }
      }
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
