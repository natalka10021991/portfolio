<template lang="pug">
	section.section.works
		.section__header
			h2.section__title Блок &laquo;Работы&raquo;
		.admin-form__wrapper
			form.admin-form.works-form
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
								.label.feedback-form__label Название
								input.input.input_without-icons.feedback-form__input(
									type='text'
									placeholder='Дизайн сайта для авто салона Porsche'
									required=''
								)
								span.feedback-form__block-error
						.admin-form__row
							label.feedback-form__block
								.label.feedback-form__label Ссылка
								input.input.input_without-icons.feedback-form__input(
									type='text'
									placeholder='https://www.porsche-pulkovo.ru'
									required=''
								)
								span.feedback-form__block-error
						.admin-form__row
							label.feedback-form__block.feedback-form__block_full-width
								.label.feedback-form__label Описание
								textarea.textarea.textarea_bordered.feedback-form__textarea(
									type='text'
									placeholder='Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей'
								)
								span.feedback-form__block-error
						.admin-form__row
							label.feedback-form__block
								.label.feedback-form__label Добавление тэга
								input.input.input_without-icons.feedback-form__input(
									type='text'
									placeholder='Jquery, Vue.js, HTML5'
									required=''
								)
								span.feedback-form__block-error

				.buttons-group.feedback-form__buttons
					button.button.button_cancel.works-form__button(type="button") Отмена
					button.button.button_primary.works-form__button(type='submit') Сохранить

		.works__list-wrapper
			ul.works__list
				li.works__item.works__item_adding
					.works__add-work-wrapper
						button.works__add-work-button +
						.works__add-work-label Добавить работу
				li.works__item
					.works__preview-wrapper
						.works__preview
							img(src="../../../images/content/previews/1.jpg")
						.works__tags
							ul.works__tags-list
								li.works__tags-item HTML
					.works__desc-wrapper
						h3.works__work-title Сайт школы образования
						p.works__work-desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
						a(href="#").works__work-link http://loftschool.ru
						.works__item-buttons-group
							button.works__item-button
								span.works__button-title Править
								span.works__button-icon.works__button-icon_edit
							button.works__item-button
								span.works__button-title Удалить
								span.works__button-icon.works__button-icon_remove
				li.works__item.works__item_disabled
					.works__preview-wrapper
						.works__preview
							img(src="../../../images/content/previews/1.jpg")
						.works__tags
							ul.works__tags-list
								li.works__tags-item HTML
					.works__desc-wrapper
						h3.works__work-title Сайт школы образования
						p.works__work-desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
						a(href="#").works__work-link http://loftschool.ru
						.works__item-buttons-group
							button.works__item-button
								span.works__button-title Править
								span.works__button-icon.works__button-icon_edit
							button.works__item-button
								span.works__button-title Удалить
								span.works__button-icon.works__button-icon_remove
</template>

<style lang="postcss">
  @import "normalize.css";
  @import "../../../styles/mixins.pcss";
  @import "../../../styles/layout/base.pcss";

	@import "./works.pcss";


</style>