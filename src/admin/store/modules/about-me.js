

export default {
	namespaced: true,
	state: {
		categories: []
	},
	mutations: {
		SET_CATEGORIES(state, categories) {
			state.categories = categories;
		},
		ADD_CATEGORY(state, newCategory) {
			state.categories.push(newCategory);
		}
	},
	actions: {
		async addCategory({commit}, title) {
			try {
				const {data} = await this.$axios.post("/categories", { title });
				commit("ADD_CATEGORY", data);
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