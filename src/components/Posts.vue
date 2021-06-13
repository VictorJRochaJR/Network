<template>
  <div class="row">
    <div class=" project col-12" data-toggle="modal" data-target="#postModal" @click="setPost">
      <div class="card-body">
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
import { reactive } from 'vue'
import { postService } from '../services/PostService'
export default {
  props: { posts: { type: Object, required: true } },
  name: 'Posts',
  setup(props) {
    const state = reactive({

    })
    return {
      state,

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
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
