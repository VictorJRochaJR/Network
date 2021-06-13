import { AppState } from '../AppState'
import { api } from './AxiosService'
class PostService {
  async getPosts(url = 'api/posts') {
    const res = await api.get(url)
    console.log('the posts', res.data.posts)
    AppState.posts = res.data.posts
  }

  setPost(postId) {
    const post = AppState.posts.find(p => p.id === postId)
    console.log(post, 'activepost')
    AppState.activePost = post
  }

  async createPost(newPost) {
    const res = await api.post('api/posts', newPost)
    console.log('newpost', res.data)
  }
}

export const postService = new PostService()
