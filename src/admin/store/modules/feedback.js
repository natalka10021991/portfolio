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
		UPDATE_REVIEW(state, review) {
			state.reviews = state.reviews.map( item => {
				if (item.id === review.id) {
					return review
				}
				return item
			})
		},
		DELETE_REVIEW(state, reviewId) {
			state.reviews = state.reviews.filter( item => {
				if (item.id !== reviewId) {
					return true
				}
			})
		},
		GET_REVIEWS(state, reviews) {
			state.reviews = reviews;
		},
		OPEN_FORM(state) {
			state.formIsOpened = true;
		},
		CLOSE_FORM(state) {
			state.formIsOpened = false;
		}
	},
	actions: {
		async addReview({commit}, review) {
			try {
				const {data} = await this.$axios.post("/reviews", review);
				commit("ADD_REVIEW", data);
			} catch (error) {
				throw new Error(
					error.response.data.error || error.response.data.message
				);
			}
		},

		async updateReview({commit}, review) {
			let formData = new FormData();
			formData.append('author', review.author);
			formData.append('occ', review.occ);
			formData.append('text', review.text);
			formData.append('photo', review.photo);
			formData.append('id', review.id);

			console.log(formData)
			try {
				const id = review.id;
				const {data} = await this.$axios.post("/reviews/" + id, formData);
				console.log(data)
				commit("UPDATE_REVIEW", data.review);
			} catch (error) {
				throw new Error(
					error.response.data.error || error.response.data.message
				);
			}
		},

		async deleteReview({commit}, reviewId) {
			console.log(reviewId)
			try {
				await this.$axios.delete("/reviews/" + reviewId);
				commit("DELETE_REVIEW", reviewId);

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
		},
		showForm({commit}) {
			commit("OPEN_FORM");
		},
		hideForm({commit}) {
			commit("CLOSE_FORM");
		}
	
	},
	getters: {
		fetchReviews(state) {
			return state.reviews.reverse();
		}
	}
};