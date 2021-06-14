import { AppState } from '../AppState'
import { api } from './AxiosService'
class AdService {
  async getAds(url = 'api/ads') {
    const res = await api.get(url)
    console.log('the ads', res.data)
    AppState.ads = res.data
  }
}

export const adService = new AdService()
