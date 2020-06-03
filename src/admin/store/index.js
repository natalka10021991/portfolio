import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import aboutMe from "./modules/about-me";
import feedback from "./modules/feedback";

export const store = new Vuex.Store ({
	modules: {
		aboutMe,
		feedback
	}
});