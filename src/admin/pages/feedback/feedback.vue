<template lang="pug">
	.sections-container-wrapper  
		.sections-container
			section.section.feedback
				.section__header
					h2.section__title.feedback__title Блок &laquo;Отзывы&raquo;

				FeedbackForm(
					:formIsOpened = "formIsOpened"
					v-if="formIsOpened"
					@reviewAdded="addReview"
					:reviews="reviews"
					:current="currentReview"
				)

				ul.feedback__list
					li.feedback__item.feedback__item_adding
						AddButton(
							@click="openForm",
							:buttonTitle="buttonTitle"
						)
						
					li.feedback__item(v-for="review in reviews" :key="review.id")
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


export default {
	data() {
		return {
			formIsOpened: false,
			buttonTitle: 'Добавить отзыв',
			userId: '',
			reviews: [],
			currentReview: {}
		}
	},
	components: {
		FeedbackForm,
		AddButton
	},
	created() {
		this.getReviews();
		//this.getUserId();
	},
	methods: {
	
		openForm: function() {
			this.formIsOpened = true;
		},
		addReview(data, formIsOpened) {
			this.reviews.unshift(data.data); 
			this.formIsOpened = formIsOpened;

		},
		getReviews() {
			$axios.get('/reviews/311').then(response => {
				console.log(response.data)
				this.reviews = response.data.reverse();
			})
		},
		removeReview(id) {
			$axios.delete('/reviews/' + id).then(response => {
				this.reviews = this.reviews.filter(item => item.id != id);
			})
		},
		editReview(review) {
			this.currentReview = review;
			this.formIsOpened = true;

		},
		getUserId() {
			$axios.get('/user').then(response => {
				console.log(response.data)
			})
		}
	}
}
</script>

<style lang="postcss">
  @import "normalize.css";
  @import "../../../styles/mixins.pcss";
  @import "../../../styles/layout/base.pcss";
	@import "./feedback.pcss";

</style>