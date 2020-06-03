export default {
	namespaced: true,
	state: {
		formIsOpened: false,
		buttonTitle: 'Добавить отзыв',
		userId: '',
		reviews: [],
		current: {}
	},
	mutations: {
		ADD_REVIEW(state, review) {
			state.reviews.push(review);
		}
	},
	actions: {
		async addReview({commit}, review) {
			try {
				const {data} = await this.$axios.post("/reviews", review);
				commit("ADD_REVIEW", data);
				this.currentReview = {...initialData}
			} catch (error) {
				throw new Error(
					error.response.data.error || error.response.data.message
				);
			}
		}
	
	},
};