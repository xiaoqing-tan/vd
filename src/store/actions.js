
import { userLogin } from '@/api';
import { storage } from '@/utils';

const actions = {
  async userLogin ({ commit }, params) {
    const userData = await userLogin(params);
    storage.set('userData', userData);
    commit('SET_USER_DATA', userData);
  },
  async setMenu ({ commit }, params) {
    storage.set('menu', params);
    commit('SET_MENU', params);
  },
  async getUserData({ commit }) {
    const userData = storage.get('userData');
    commit('SET_USER_DATA', userData);
  }
};

export default actions;