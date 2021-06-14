<template>
  <div class="row">
    <div class="card-body col-12">
      <button v-if="user.name" @click="addLike">
        {{ posts.likes.length }}
      </button>
      <button disabled v-if="!user.name" @click="addLike">
        {{ posts.likes.length }}
      </button>
      <div class=" project " data-toggle="modal" data-target="#postModal" @click="setPost">
        <h5 class="card-title">
          <img class="card-img img-fluid rounded-pill" :src="posts.creator.picture" alt="Card image cap" style="max-height:50; max-width:50px">
        </h5>
        <img class="card-img" :src="posts.imgUrl" alt="Card image cap">
        <p class="card-text">
          {{ posts.body }}
          {{ createdAt() }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>

import moment from 'moment'
import { reactive, computed } from 'vue'
import { postService } from '../services/PostService'
import { AppState } from '../AppState'
export default {
  props: { posts: { type: Object, required: true } },
  name: 'Posts',
  setup(props) {
    const state = reactive({

    })
    return {
      state,

      user: computed(() => AppState.user),
      setPost() {
        console.log('line36')
        postService.setPost(props.posts.id)
      },

      createdAt() {
        // const formattedTime = new Date(props.posts.createdAt).getTime()
        // return moment(formmatedTime).format()\
        const m = moment(props.posts.createdAt).from(new Date())
        console.log(m, 'time')
        console.log(props.posts.createdAt)
        return m
      },
      addLike() {
        postService.addLike(props.posts.id)
        console.log('addlike')
        postService.getPosts()
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
