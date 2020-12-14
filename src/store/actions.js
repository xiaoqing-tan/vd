const actions = {
  setUserInfo ({ commit }, user) {
    commit('SET_USER_INFO', user);
  },
  setMenu ({ commit }, menu) {
    commit('SET_MENU', menu);
  }
};

export default actions;