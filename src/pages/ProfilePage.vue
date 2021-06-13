<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-9">
        <CreatePost v-if="account.id == $route.params.id" />
        <Thread />
      </div>
    </div>
    <Profile />
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, reactive, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { profileService } from '../services/ProfileService'
import { postService } from '../services/PostService'
import Notification from '../utils/Notification'
export default {
//   name: 'ProfilePage',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const state = reactive({ })
    watchEffect(async() => {
      try {
        console.log(route.params.id, 'getprofile')
        await profileService.getProfile(route.params.id)
        await postService.getPosts('api/posts?creatorId=' + route.params.id)
      } catch (error) {
        Notification.toast('this user does not exist', 'warning')
        router.push({ name: 'Home' })
      }
    })
    return {
      state,
      account: computed(() => AppState.account),
      activeProfile: computed(() => AppState.activeProfile)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
