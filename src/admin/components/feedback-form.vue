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
						span(:class="{'feedback-form__error-message': validation.hasError('image')}") {{ validation.firstError('image') }}
				.feedback-form__column
					.feedback-form__row
						label.feedback-form__block
							.label.feedback-form__label Имя автора
							input.input.input_without-icons.feedback-form__input(
								type='text'
								placeholder='Наталья Быстрова'
								v-model='name'
							)
							span(:class="{'feedback-form__error-message': validation.hasError('name')}") {{ validation.firstError('name') }}
						label.feedback-form__block
							.label.feedback-form__label Титул автора
							input.input.input_without-icons.feedback-form__input(
								type='text'
								placeholder='Frontend разработчик'
								v-model='position'
							)
							span(:class="{'feedback-form__error-message': validation.hasError('position')}") {{ validation.firstError('position') }}
					.feedback-form__row
						label.feedback-form__block.feedback-form__block_full-width
							.label.feedback-form__label Отзыв
							textarea.textarea.textarea_bordered.feedback-form__textarea(
								type='text'
								placeholder='Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!'
								v-model='review'
							)
							span(:class="{'feedback-form__error-message': validation.hasError('review')}") {{ validation.firstError('review') }}
			.buttons-group.feedback-form__buttons
				button.button.button_cancel.feedback-form__button(type="button" @click="reset") Отмена
				button.button.button_primary.feedback-form__button(type='submit') Сохранить
</template>

<script>
import Vue from "vue";
import SimpleVueValidator from 'simple-vue-validator';
import $axios from "../requests";

const Validator = SimpleVueValidator.Validator;

Vue.use(SimpleVueValidator);

export default {
	data() {
		return {
			name: '',
			position: '',
			review: '',
			image: '',
			url: ''
		}
	},
	props: ['formIsOpened','reviews', 'currentReview'],
	validators: {
		name: function (value) {
			return Validator.value(value).required('Поле обязательно для заполнения');
		},
		position: function(value) {
			return Validator.value(value).required('Поле обязательно для заполнения');
		},
		review: function(value) {
			return Validator.value(value).required('Поле обязательно для заполнения');
		},
		image: function(value) {
			return Validator.value(value).required('Поле обязательно для заполнения');
		}
	},
	methods: {
		createReview: function() {
			let formData = new FormData();
			formData.append('author', this.name);
			formData.append('occ', this.position);
			formData.append('text', this.review);
			formData.append('photo', this.$refs.image.files[0]);

			this.$validate()
				.then((success) => {
					if (success) {
						$axios.post('/reviews', formData).then(response => {
							console.log(response.data)
							this.$emit('reviewAdded', {
								data: response.data,
								formIsOpened: false
							});
							this.name = '';
							this.position = '';
							this.review = '';
							this.photo = '';
						})
					}
				});
		},
		reset: function () {
			this.name = '';
      this.position = '';
			this.review = '';
			this.photo = '';
		},
		uploadImage: function(e) {
			const file = e.target.files[0];
			this.url = URL.createObjectURL(file);
			this.image = URL.createObjectURL(file);

		}
	}
}
</script>
