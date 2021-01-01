const mutations = {
  SET_USER_DATA(state, data) {
    state.userData = {
      ...state.userData,
      auth: data
    };
  },
  SET_MENU(state, data) {
    state.userData = {
      ...state.userData,
      menu: data,
      init: true
    };
  }
};

export default mutations;