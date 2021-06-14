<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3">
        <CreatePost />
      </div>
      <div class="col-7">
        <div class="navbuttons">
          <button @click="back">
            Back
          </button>
          <button @click="forward">
            Forward
          </button>
          <Thread />
        </div>
      </div>
      <div class="col-2">
        <AdsThread />
      </div>
    </div>
  </div>
</template>
<script>
import { AppState } from '../AppState'
import { computed } from 'vue'
import { onMounted } from '@vue/runtime-core'
import { postService } from '../services/PostService'
import { adService } from '../services/AdService'
export default {
  data() {
    return {
      page: computed(() => AppState.page)
    }
  },
  setup() {
    onMounted(async() => {
      try {
        postService.getPosts()
      } catch (error) {
        console.log(error)
      }
    })
    onMounted(async() => {
      try {
        await adService.getAds()
      } catch (error) {
        console.log(error, 'getads')
      }
    })
    return {

      forward() {
        postService.getPage(1)
      },

      back() {
        postService.getPage(-1)
      }
    }
  }
}
</script>

  <style scoped lang="scss">
  .navbuttons{
    height: 20px;
  }
    .home{
    text-align: center;
    user-select: none;
    > img{
    height: 200px;
    width: 200px;
    }
    }
  </style>
