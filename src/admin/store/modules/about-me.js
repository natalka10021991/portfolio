export default {
	namespaced: true,
	state: {
		categories: [],
		reviews: []
	},
	mutations: {
		SET_CATEGORIES(state, categories) {
			state.categories = categories;
		},
		ADD_CATEGORY(state, newCategory) {
			state.categories.push(newCategory);
		},
		ADD_REVIEW(state, review) {
			state.reviews.push(review);
		}
	},
	actions: {
		test({commit}, payload) {
			this.$axios.post('/reviews', payload).then(response => {
					console.log(response.data)
					commit("ADD_REVIEW", data);
					this.currentReview = {...initialData}
				})
		},
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