<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3">
        <CreatePost />
      </div>
      <div class="col-7">
        <Thread />
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted } from '@vue/runtime-core'
import { postService } from '../services/PostService'
export default {
  setup() {
    onMounted(async() => {
      try {
        postService.getPosts()
      } catch (error) {
        console.log(error)
      }
    })
  }
}
</script>

  <style scoped lang="scss">
    .home{
    text-align: center;
    user-select: none;
    > img{
    height: 200px;
    width: 200px;
    }
    }
  </style>
