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
		},
		GET_REVIEWS(state, reviews) {
			state.reviews = reviews;
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
		},

		async getReviews({commit}) {
			try {
				const {data} = await this.$axios.get('/reviews/311');
				commit("GET_REVIEWS", data);
			} catch (error) {
				throw new Error(
					error.response.data.error || error.response.data.message
				);
			}
		}
	
	},
	getters: {
		fetchReviews(state) {
			return state.reviews.reverse();
		}
	}
};