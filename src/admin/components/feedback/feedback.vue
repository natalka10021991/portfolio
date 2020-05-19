<template lang="pug">
	section.section.feedback
		.section__header
			h2.section__title.feedback__title Блок &laquo;Отзывы&raquo;
		.admin-form__wrapper
			form.admin-form.feedback-form
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
					.feedback-form__column
						.feedback-form__row
							label.feedback-form__block
								.label.feedback-form__label Имя автора
								input.input.input_without-icons.feedback-form__input(
									type='text'
									placeholder='Наталья Быстрова'
									required=''
								)
								span.feedback-form__block-error
							label.feedback-form__block
								.label.feedback-form__label Титул автора
								input.input.input_without-icons.feedback-form__input(
									type='text'
									placeholder='Frontend разработчик'
									required=''
								)
								span.feedback-form__block-error
						.feedback-form__row
							label.feedback-form__block.feedback-form__block_full-width
								.label.feedback-form__label Отзыв
								textarea.textarea.textarea_bordered.feedback-form__textarea(
									type='text'
									placeholder='Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!'
								)
								span.feedback-form__block-error
				.buttons-group.feedback-form__buttons
					button.button.button_cancel.feedback-form__button(type="button") Отмена
					button.button.button_primary.feedback-form__button(type='submit') Сохранить

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

<style lang="postcss">
  @import "normalize.css";
  @import "../../../styles/mixins.pcss";
  @import "../../../styles/layout/base.pcss";
	@import "./feedback.pcss";

</style>