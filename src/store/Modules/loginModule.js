export const loginModule = {
  namespaced: true,
  state: {
    user: null,
    currentUser: null,
  },

  mutations: {
    SET_USER(state, newUser) {
      state.user = newUser;
    },
    SET_CURRENT_USER(state, newUser) {
      state.currentUser = newUser;
    },
  },

  actions: {
    configUser(context, user) {
      context.commit("SET_USER", user);
    },
    defineCurrentUser(context, user) {
      context.commit("SET_CURRENT_USER", user);
    },
  },
};
