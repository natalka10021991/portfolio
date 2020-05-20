<template lang="pug">
	.admin-form__wrapper
		form.admin-form.feedback-form(@submit.prevent="submit")
			.admin-form__header.feedback-form__header
				h3.admin-form__title.feedback-form__title Новый отзыв
			.admin-form__body.feedback-form__body
				.feedback-form__column
					.feedback-form__image-placeholder
						.avatar
							img(src="required('../images/content/admin/user-photo-placeholder.png')")
					label.feedback-form__file-block.input-type-file
						.label.feedback-form__file-label.input-type-file__label Добавить фото
						input.input-type-file__input(type='file')
						span(:class="{'feedback-form__error-message': validation.hasError('photo')}") {{ validation.firstError('photo') }}
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
const Validator = SimpleVueValidator.Validator;

Vue.use(SimpleVueValidator);

export default {
	data() {
		return {
			name: '',
			position: '',
			review: '',
			photo: ''
		}
	},
	props: ['formIsOpened'],
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
		photo: function(value) {
			return Validator.value(value).required('Поле обязательно для заполнения');
		}
	},
	methods: {
		submit: function() {
			this.$validate()
			.then((success) => {
				if (success) {
					
				}
			});
			
		},
		reset: function () {
			this.name = '';
      this.position = '';
			this.review = '';
			this.photo = '';
		}
	}
}
</script>
