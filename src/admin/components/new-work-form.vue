<template lang="pug">
	.admin-form__wrapper
		form.admin-form.works-form(@submit.prevent="createNewWork")
			.admin-form__header.works-form__header
				h3.form__title Редактирование Работы
			.admin-form__body
				.admin-form__column
					.works__preview-loader-wrapper
						.works__preview-loader
							p.works__preview-loader-desc Перетащите или загрузите для загрузки изображения
							label.input-type-file
								.button.button_primary.works__button Загрузить
								input.input-type-file__input(
									type='file'
									ref='image'
									@change='uploadImage'
								)
				.admin-form__column
					.admin-form__row
						label.feedback-form__block
							.label.feedback-form__label Название
							input.input.input_without-icons.feedback-form__input(
								type='text'
								placeholder='Дизайн сайта для авто салона Porsche'
								v-model="title"
							)
							span
					.admin-form__row
						label.feedback-form__block
							.label.feedback-form__label Ссылка
							input.input.input_without-icons.feedback-form__input(
								type='text'
								placeholder='https://www.porsche-pulkovo.ru'
								v-model="link"
							)
							span
					.admin-form__row
						label.feedback-form__block.feedback-form__block_full-width
							.label.feedback-form__label Описание
							textarea.textarea.textarea_bordered.feedback-form__textarea(
								type='text'
								placeholder='Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей'
								v-model="desc"
							)
							span
					.admin-form__row
						label.feedback-form__block
							.label.feedback-form__label Добавление тэга
							input.input.input_without-icons.feedback-form__input(
								type='text'
								placeholder='Jquery, Vue.js, HTML5'
								v-model='tags'
							)
							ul.tags-list
								li.tags-item(v-for="tag in getTags" :key="tag")
									span {{tag}}
									button.tags-item-button x

							span.feedback-form__block-error

			.buttons-group.feedback-form__buttons
				button.button.button_cancel.works-form__button(type="button" @click="reset") Отмена
				button.button.button_primary.works-form__button(type='submit') Сохранить
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
			title: '',
			link: '',
			desc: '',
			tags: '',
			image: '',
			url: '',
		}
	},
	props: ['formIsOpened'],
	computed: {
		getTags() {
			this.tags.split(',')
		},
	},
	methods: {
		createNewWork: function() {
			let formData = new FormData();
			formData.append('title', this.title);
			formData.append('link', this.link);
			formData.append('description', this.desc);
			formData.append('techs', this.tags);
			formData.append('photo', this.$refs.image.files[0]);

			$axios.post('/works', formData).then(response => {
				console.log(response.data)
				this.$emit('workAdded', {
					data: response.data,
					formIsOpened: false
				});
				this.title = '';
				this.link = '';
				this.desc = '';
				this.tags = '';
				this.image = '';
			})
			
		},
		uploadImage: function(e) {
			const file = e.target.files[0];
			this.url = URL.createObjectURL(file);
			this.image = URL.createObjectURL(file);
		},
		reset: function () {
			this.name = '';
      this.link = '';
			this.desc = '';
		},
	}
}
</script>

<style lang="postcss">

.tags-item {
	border-radius: 15px;
	background-color: #f4f4f4;
}
<style>
