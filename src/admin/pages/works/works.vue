<template lang="pug">
	.sections-container-wrapper  
		.sections-container
			section.section.works
				.section__header
					h2.section__title Блок &laquo;Работы&raquo;
				NewWorkForm(
					:formIsOpened = "formIsOpened"
					v-if="formIsOpened"
				)
				

				.works__list-wrapper
					ul.works__list
						li.works__item.works__item_adding
							AddButton(
								@click="openForm",
								:buttonTitle="buttonTitle"
							)
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

<script>
import Vue from 'vue';
import AddButton from "../../components/add-item-button";
import NewWorkForm from "../../components/new-work-form";


export default {
	data() {
		return {
			formIsOpened: false,
			buttonTitle: 'Добавить работу'
		}
	},
	components: {
		NewWorkForm,
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

	@import "./works.pcss";


</style>