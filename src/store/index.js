import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { loginModule } from "./Modules/loginModule";
import { courseModule } from "./Modules/courseModule";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { loginModule, courseModule },
});
