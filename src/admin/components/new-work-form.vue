<template lang="pug">
	.admin-form__wrapper
		form.admin-form.works-form(@submit.prevent="submit")
			.admin-form__header.works-form__header
				h3.form__title Редактирование Работы
			.admin-form__body
				.admin-form__column
					.works__preview-loader-wrapper
						.works__preview-loader
							p.works__preview-loader-desc Перетащите или загрузите для загрузки изображения
							label.input-type-file
								.button.button_primary.works__button Загрузить
								input.input-type-file__input(type='file')
				.admin-form__column
					.admin-form__row
						label.feedback-form__block
							.label.feedback-form__label(v-model="name") Название
							input.input.input_without-icons.feedback-form__input(
								type='text'
								placeholder='Дизайн сайта для авто салона Porsche'
							)
							span(:class="{'feedback-form__error-message': validation.hasError('name')}") {{ validation.firstError('name') }}
					.admin-form__row
						label.feedback-form__block
							.label.feedback-form__label Ссылка
							input.input.input_without-icons.feedback-form__input(
								type='text'
								placeholder='https://www.porsche-pulkovo.ru'
								v-model="link"
							)
							span(:class="{'feedback-form__error-message': validation.hasError('link')}") {{ validation.firstError('link') }}
					.admin-form__row
						label.feedback-form__block.feedback-form__block_full-width
							.label.feedback-form__label Описание
							textarea.textarea.textarea_bordered.feedback-form__textarea(
								type='text'
								placeholder='Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей'
								v-model="desc"
							)
							span(:class="{'feedback-form__error-message': validation.hasError('desc')}") {{ validation.firstError('desc') }}
					.admin-form__row
						label.feedback-form__block
							.label.feedback-form__label Добавление тэга
							input.input.input_without-icons.feedback-form__input(
								type='text'
								placeholder='Jquery, Vue.js, HTML5'
							)
							span.feedback-form__block-error

			.buttons-group.feedback-form__buttons
				button.button.button_cancel.works-form__button(type="button" @click="reset") Отмена
				button.button.button_primary.works-form__button(type='submit') Сохранить
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
			link: '',
			desc: ''
		}
	},
	props: ['formIsOpened'],
	validators: {
		name: function (value) {
			return Validator.value(value).required('Поле обязательно для заполнения');
		},
		link: function(value) {
			return Validator.value(value).required('Поле обязательно для заполнения');
		},
		desc: function(value) {
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
      this.link = '';
			this.desc = '';
		}
	}
}
</script>
