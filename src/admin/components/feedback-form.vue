<template lang="pug">
	.admin-form__wrapper
		form.admin-form.feedback-form(@submit.prevent="createReview")
			.admin-form__header.feedback-form__header
				h3.admin-form__title.feedback-form__title Новый отзыв
			.admin-form__body.feedback-form__body
				.feedback-form__column
					.feedback-form__image-placeholder
						.avatar
							img(
								v-if="url"
								:src="url"
							)
					label.feedback-form__file-block.input-type-file
						.label.feedback-form__file-label.input-type-file__label Добавить фото
						input.input-type-file__input(
							type='file' 
							ref="image"
							@change="uploadImage"
						)
						span(:class="{'feedback-form__error-message': validation.hasError('currentReview.photo')}") {{ validation.firstError('currentReview.photo') }}
				.feedback-form__column
					.feedback-form__row
						label.feedback-form__block
							.label.feedback-form__label Имя автора
							input.input.input_without-icons.feedback-form__input(
								type='text'
								placeholder='Наталья Быстрова'
								v-model='currentReview.author'
							)
							span(:class="{'feedback-form__error-message': validation.hasError('currentReview.author')}") {{ validation.firstError('currentReview.author') }}
						label.feedback-form__block
							.label.feedback-form__label Титул автора
							input.input.input_without-icons.feedback-form__input(
								type='text'
								placeholder='Frontend разработчик'
								v-model='currentReview.occ'
							)
							span(:class="{'feedback-form__error-message': validation.hasError('currentReview.occ')}") {{ validation.firstError('currentReview.occ') }}
					.feedback-form__row
						label.feedback-form__block.feedback-form__block_full-width
							.label.feedback-form__label Отзыв
							textarea.textarea.textarea_bordered.feedback-form__textarea(
								type='text'
								placeholder='Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!'
								v-model='currentReview.text'
							)
							span(:class="{'feedback-form__error-message': validation.hasError('currentReview.text')}") {{ validation.firstError('currentReview.text') }}
			.buttons-group.feedback-form__buttons
				button.button.button_cancel.feedback-form__button(type="button" @click="reset") Отмена
				button.button.button_primary.feedback-form__button(type='submit') Сохранить
</template>

<script>
import Vue from "vue";
import SimpleVueValidator from 'simple-vue-validator';
import $axios from "../requests";
import { mapActions } from "vuex";

const Validator = SimpleVueValidator.Validator;

Vue.use(SimpleVueValidator);
const initialData = {
	author: '',
	occ: '',
	text: '',
	photo: {},
};
export default {
	data() {
		return {
			currentReview: {...initialData},
			url: '',
			id: ''
		}
	},
	props: ['formIsOpened','reviews', 'current'],
	validators: {
		'currentReview.author': function (value) {
			return Validator.value(value).required('Поле обязательно для заполнения');
		},
		'currentReview.occ': function(value) {
			return Validator.value(value).required('Поле обязательно для заполнения');
		},
		'currentReview.text': function(value) {
			return Validator.value(value).required('Поле обязательно для заполнения');
		},
		// 'currentReview.image': function(value) {
		// 	return Validator.value(value).required('Поле обязательно для заполнения');
		// }
	},
	watch: {
		current() {
			this.currentReview = this.current;
		}
	},
	methods: {
		...mapActions('aboutMe', ['test']),
		createReview: function() {
			let formData = new FormData();
			formData.append('author', this.currentReview.author);
			formData.append('occ', this.currentReview.occ);
			formData.append('text', this.currentReview.text);
			formData.append('photo', this.currentReview.photo);

			this.id = this.currentReview.id

			this.$validate()
				.then((success) => {
					if (success) {
						//this.test();

						if (!this.id) {
							$axios.post('/reviews', formData).then(response => {
								console.log(response.data)
								this.$emit('reviewAdded', {
									data: response.data,
									formIsOpened: false
								});
								this.currentReview = {...initialData}
							})
						} else {
							$axios.post('/reviews/' + this.id, formData).then(response => {
								console.log(this.currentReview)
								this.$emit('closeForm', {
									formIsOpened: false
									
								});
								this.currentReview = {...initialData}
								console.log(this.currentReview)
							})
						}
						
					}
				});
		},
		reset: function () {
			this.currentReview = {...initialData}
		},
		uploadImage: function(e) {
			const file = e.target.files[0];
			this.currentReview.photo = file;
			this.url = URL.createObjectURL(file);
			
			

		}
	}
}
</script>
