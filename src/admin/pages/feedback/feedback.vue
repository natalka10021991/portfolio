<template lang="pug">
	.sections-container-wrapper  
		.sections-container
			section.section.feedback
				.section__header
					h2.section__title.feedback__title Блок &laquo;Отзывы&raquo;

				FeedbackForm(
					:formIsOpened = "formIsOpened"
					v-if="formIsOpened"
				)

				ul.feedback__list
					li.feedback__item.feedback__item_adding
						AddButton(
							@click="openForm",
							:buttonTitle="buttonTitle"
						)
						
					li.feedback__item
						.feedback__item-header
							.feedback__user-avatar
								img.feedback__user-photo(src="")
							.feedback__user-info
								.feedback__user-name Владимир Сабанцев
								.feedback__user-position Преподаватель
						.feedback__desc-wrapper
							p.feedback__work-desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
							.feedback__item-buttons-group
								button.feedback__item-button
									span.feedback__button-title Править
									span.feedback__button-icon.works__button-icon_edit
								button.feedback__item-button
									span.feedback__button-title Удалить
									span.feedback__button-icon.works__button-icon_remove
					li.feedback__item
						.feedback__item-header
							.feedback__user-avatar
								img.feedback__user-photo(src="")
							.feedback__user-info
								.feedback__user-name Владимир Сабанцев
								.feedback__user-position Преподаватель
						.feedback__desc-wrapper
							p.feedback__work-desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
							.feedback__item-buttons-group
								button.feedback__item-button
									span.feedback__button-title Править
									span.feedback__button-icon.works__button-icon_edit
								button.feedback__item-button
									span.feedback__button-title Удалить
									span.feedback__button-icon.works__button-icon_remove
</template>

<script>
import Vue from 'vue';
import FeedbackForm from "../../components/feedback-form";
import AddButton from "../../components/add-item-button";


export default {
	data() {
		return {
			formIsOpened: false,
			buttonTitle: 'Добавить отзыв'
		}
	},
	components: {
		FeedbackForm,
		AddButton
	},
	methods: {
		openForm: function() {
			this.formIsOpened = true;
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