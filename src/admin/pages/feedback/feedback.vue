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
								img.feedback__user-photo(:src="review.photo")
							.feedback__user-info
								.feedback__user-name {{review.author}}
								.feedback__user-position {{review.occ}}
						.feedback__desc-wrapper
							p.feedback__work-desc {{review.text}}
							.feedback__item-buttons-group
								button.feedback__item-button
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
import axios from "axios";

const baseUrl = 'https://webdev-api.loftschool.com';
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjMxMSwiaXNzIjoiaHR0cDovL3dlYmRldi1hcGkubG9mdHNjaG9vbC5jb20vbG9naW4iLCJpYXQiOjE1OTAxMzcwMDcsImV4cCI6MTU5MDE1NTAwNywibmJmIjoxNTkwMTM3MDA3LCJqdGkiOiJKTFRxUW1KMmRPTEozd3NZIn0.IqwQQ5uvvPgkCquL6LOz3NmsCvBjdEam8jwNU7I5juc';

axios.defaults.baseURL = baseUrl;
axios.defaults.headers['Authorization'] = `Bearer ${token}`;


export default {
	data() {
		return {
			formIsOpened: false,
			buttonTitle: 'Добавить отзыв',
			userId: '',
			reviews: []
		}
	},
	components: {
		FeedbackForm,
		AddButton
	},
	created() {
		this.getReviews();
		this.getUserId();
	},
	methods: {
		openForm: function() {
			this.formIsOpened = true;
		},
		addReview(data, formIsOpened) {
			console.log(data);
			this.reviews.push(data); 
			this.formIsOpened = formIsOpened;
			console.log(this.reviews);

		},
		getReviews() {
			axios.get('/reviews/311').then(response => {
				console.log(response.data)
				this.reviews = response.data;
			})
		},
		removeReview(id) {
			axios.delete('/reviews/' + id).then(response => {
				this.reviews = this.reviews.filter(item => item.id != id);
			})
		},
		getUserId() {
			axios.get('/user').then(response => {
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