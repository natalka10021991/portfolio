<template lang="pug">
	.sections-container-wrapper  
		.sections-container
			section.section.feedback
				.section__header
					h2.section__title.feedback__title Блок &laquo;Отзывы&raquo;

				FeedbackForm#feedback-form-component

				ul.feedback__list
					li.feedback__item.feedback__item_adding
						.feedback__add-work-wrapper
							button.feedback__add-work-button +
							.feedback__add-work-label Добавить отзыв
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


export default {
	data() {
		return {

		}
	},
	components: {
		FeedbackForm,
	},
	methods: {

	}
}
</script>

<style lang="postcss">
  @import "normalize.css";
  @import "../../../styles/mixins.pcss";
  @import "../../../styles/layout/base.pcss";
	@import "./feedback.pcss";

</style>