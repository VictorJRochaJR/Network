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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'

import { computed, reactive } from 'vue'
export default {
  setup() {
    const state = reactive({
    })
    return {
      state,
      activePost: computed(() => AppState.activePost)
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
