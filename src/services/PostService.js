import { AppState } from '../AppState'
import { api } from './AxiosService'
class PostService {
  async getPosts(url = 'api/posts') {
    const res = await api.get(url)
    console.log('the posts', res.data.posts)
    AppState.posts = res.data.posts
  }

  async getPage(page, url = 'api/posts') {
    const res = await api.get(url + '?page=' + (AppState.page + page))
    console.log('the posts', res.data.posts)
    AppState.posts = res.data.posts
    console.log(res.data.page)
    AppState.page += page
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

  async search(query) {
    console.log(query, 'query results')
    const res = await api.get('api/posts?query=' + query)
    AppState.posts = res.data.posts
    console.log(res.data.posts, 'search results')
  }

  async deletePost(id) {
    const res = await api.delete('api/posts/' + id)
    AppState.activePost = {}
    this.getPosts()
    console.log(res)
  }

  async editPost(id, newPost) {
    const res = await api.put('api/posts/' + id, newPost)
    console.log(res, 'editpost')
  }

  async addLike(id) {
    const query = 'api/posts/' + id + '/like'
    console.log(query, 'query')
    // const payload = [...post.likes, { id: id, name: '', picture: '' }]
    const res = await api.post('api/posts/' + id + '/like')
    this.getPosts()
    console.log(res, 'addlike')
  }
}

export const postService = new PostService()
