import { AppState } from '../AppState'
const { api } = require('./AxiosService')

class ProfileService {
  async getProfile(id) {
    const res = await api.get('api/profiles/' + id)
    console.log('profile', res.data)
    AppState.activeProfile = res.data
  }
}

export const profileService = new ProfileService()
