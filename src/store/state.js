import { storage } from '@/utils'
import config from '@/config'

const { auth = {}, init = false, menu = [], role = 1 } = storage.get('userData') || {}
const state = {
  userData: {
    auth,
    init,
    menu,
    role
  },
  config
}

export default state
