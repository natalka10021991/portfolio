<template lang="pug">
	section.section.about-me
		.section__header.about-me__header
			h2.section__title.about-me__title Блок &laquo;Обо мне&raquo;
			button.about-me__button
				span.about-me__button-icon +
				span.button__text Добавить группу
		.about-me__body
			ul.about-me__blocks
				li.about-me__item
					table(height="100%")
						thead
							tr
								th
									input.input.about-me__item-name(type="text" placeholder="Название новой группы") 
								th
								th
										span.control-button.control-button_save
								th
										span.control-button.control-button_close
						tbody
						tfoot
							tr
								td
									input.input.about-me__item-skill(type="text" placeholder="Новый навык") 
								td 
									input.input.about-me__item-percent(type="text" placeholder="100%") 
								td(colspan="2")
									button.button-add +
				li.about-me__item
					table
						thead
							tr
								th
									input.input.about-me__item-name(type="text" placeholder="Название новой группы" value="Workflow") 
								th
								th
										span.control-button.control-button_save
								th
										span.control-button.control-button_close
						tbody
							tr
								td Git
								td 100 %
								td
									span.control-button.control-button_edit
								td
									span.control-button.control-button_remove
							tr
								td Terminal
								td 90 %
								td
									span.control-button.control-button_edit
								td
									span.control-button.control-button_remove
							tr
								td Gulp
								td 80 %
								td
									span.control-button.control-button_edit
								td
									span.control-button.control-button_remove
							tr
								td Webpack
								td 100 %
								td
									span.control-button.control-button_edit
								td
									span.control-button.control-button_remove
						tfoot
							tr
								td
									input.input.about-me__item-skill(type="text" placeholder="Новый навык") 
								td 
									input.input.about-me__item-percent(type="text" placeholder="100%") 
								td(colspan="2")
									button.button-add +

				li.about-me__item
					table
						thead
							tr
								th
									input.input.about-me__item-name(type="text" placeholder="Название новой группы" value="Frontend") 
								th
								th
								th
										span.control-button.control-button_edit
						tbody
							tr
								td Html5
								td 100 %
								td
									span.control-button.control-button_edit
								td
									span.control-button.control-button_remove
							tr
								td Css3
								td 90 %
								td
									span.control-button.control-button_save
								td
									span.control-button.control-button_close
							tr
								td JavaScript
								td 80 %
								td
									span.control-button.control-button_edit
								td
									span.control-button.control-button_remove
							tr
								td jQuery и Vue.js
								td 100 %
								td
									span.control-button.control-button_edit
								td
									span.control-button.control-button_remove
						tfoot
							tr
								td
									input.input.about-me__item-skill(type="text" placeholder="Новый навык") 
								td 
									input.input.about-me__item-percent(type="text" placeholder="100%") 
								td(colspan="2")
									button.button-add +

</template>

<style lang="postcss">
  @import "normalize.css";
  @import "../../../styles/mixins.pcss";
  @import "../../../styles/layout/base.pcss";
	
	@import "./about-me.pcss";
</style>