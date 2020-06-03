<template lang="pug">
	.sections-container-wrapper  
		.sections-container
			section.section.feedback
				.section__header
					h2.section__title.feedback__title Блок &laquo;Отзывы&raquo;

				FeedbackForm(
					v-if="formIsOpened"
					@reviewAdded="addReview"
					@closeForm="closeForm"
				)

				ul.feedback__list
					li.feedback__item.feedback__item_adding
						AddButton(
							@click="openForm",
							:buttonTitle="buttonTitle"
						)
						
					li.feedback__item(v-for="review in fetchReviews" :key="review.id")
						.feedback__item-header
							.feedback__user-avatar
								img.feedback__user-photo(:src="'https://webdev-api.loftschool.com/' + review.photo")
							.feedback__user-info
								.feedback__user-name {{review.author}}
								.feedback__user-position {{review.occ}}
						.feedback__desc-wrapper
							p.feedback__work-desc {{review.text}}
							.feedback__item-buttons-group
								button.feedback__item-button(@click="editReview(review)")
									span.feedback__button-title Править
									span.feedback__button-icon.works__button-icon_edit
								button.feedback__item-button(@click="removeReview(review.id)")
									span.feedback__button-title Удалить
									span.feedback__button-icon.works__button-icon_remove
</template>

<script>
import Vue from 'vue';
import FeedbackForm from "../../components/feedback-form";
import AddButton from "../../components/add-item-button";
import $axios from "../../requests";
import { mapState, mapActions, mapGetters } from "vuex";


export default {
	data() {
		return {
		}
	},
	components: {
		FeedbackForm,
		AddButton
	},
	
	computed: {
		...mapGetters("feedback", ["fetchReviews"]),
		...mapState("feedback", {
			reviews: state => state.reviews,
			current: state => state.current,
			formIsOpened: state => state.formIsOpened,
			userId: state => state.userId,
			buttonTitle: state => state.buttonTitle
		})
	},
	methods: {
		...mapActions("feedback", "getReviews"),
		openForm: function() {
			this.formIsOpened = true;
		},
		addReview(data, formIsOpened) {
			this.reviews.unshift(data.data); 
			this.formIsOpened = formIsOpened;
		},
		closeForm(formIsOpened) {
			this.formIsOpened = formIsOpened;

		},
		// getReviews() {
		// 	$axios.get('/reviews/311').then(response => {
		// 		console.log(response.data)
		// 		this.reviews = response.data.reverse();
		// 	})
		// },
		// removeReview(id) {
		// 	$axios.delete('/reviews/' + id).then(response => {
		// 		this.reviews = this.reviews.filter(item => item.id != id);
		// 	})
		// },
		// editReview(review) {
		// 	this.current = review;
		// 	this.formIsOpened = true;
		// },
		// getUserId() {
		// 	$axios.get('/user').then(response => {
		// 		console.log(response.data)
		// 	})
		// }
	},
	created() {
		this.getReviews();
	},
}
</script>

<style lang="postcss">
  @import "normalize.css";
  @import "../../../styles/mixins.pcss";
  @import "../../../styles/layout/base.pcss";
	@import "./feedback.pcss";

</style>