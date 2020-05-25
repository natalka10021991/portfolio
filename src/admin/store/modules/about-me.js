

export default {
	namespaced: true,
	state: {
		categories: []
	},
	mutations: {
		SET_CATEGORIES(state, categories) {
			state.categories = categories;
		}
	},
	actions: {
		async addCategory(store, title) {
			try {
				const response = await this.$axios.post("/categories", { title });
				console.log(response);
			} catch (error) {
				throw new Error(
					error.response.data.error || error.response.data.message
				);
			}
		},
		async fetchCategories({commit}) {
			try {
				const {data} = await this.$axios.get("/categories/311");
				console.log(data);
				commit("SET_CATEGORIES", data);
			} catch (error) {
				console.log(error);
			}
		}
	},
};