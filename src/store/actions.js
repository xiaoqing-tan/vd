
import { userLogin } from '@/api';
import { storage } from '@/utils';

const actions = {
  async userLogin ({ commit }, params) {
    const auth = await userLogin(params);
    storage.set('userData', { auth, role: 1 });
    commit('SET_USER_DATA', auth);
  },
  async setMenu ({ commit }, params) {
    commit('SET_MENU', params);
  },
  async getUserData({ commit }) {
    const userData = storage.get('userData');
    commit('SET_USER_DATA', userData);
  },
  updateConfig({ commit }, params) {
    commit('UPDATE_CONFIG', params);
  }
};

export default actions;