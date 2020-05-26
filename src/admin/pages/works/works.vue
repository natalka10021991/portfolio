<template lang="pug">
	.sections-container-wrapper  
		.sections-container
			section.section.works
				.section__header
					h2.section__title Блок &laquo;Работы&raquo;
				NewWorkForm(
					:formIsOpened = "formIsOpened"
					v-if="formIsOpened"
					@workAdded="addWork"
				)
				.works__list-wrapper
					ul.works__list
						li.works__item.works__item_adding
							AddButton(
								@click="openForm",
								:buttonTitle="buttonTitle"
							)
						li.works__item(v-for="work in works", :key="work.id")
							.works__preview-wrapper
								.works__preview
									img(:src="'https://webdev-api.loftschool.com/' + work.photo")
								.works__tags
									ul.works__tags-list
										li.works__tags-item
							.works__desc-wrapper
								h3.works__work-title {{work.title}}
								p.works__work-desc {{work.description}}
								a.works__work-link(:href="work.link") {{work.link}}
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
import $axios from "../../requests";

export default {
	data() {
		return {
			formIsOpened: false,
			buttonTitle: 'Добавить работу',
			works: [],
			tags: []
		}
	},
	created() {
		this.getWorks();
	},
	components: {
		NewWorkForm,
		AddButton
	},
	methods: {
		openForm: function() {
			this.formIsOpened = true;
		},
		getWorks() {
			$axios.get('/works/311').then(response => {
				console.log(response.data)
				this.works = response.data.reverse();
				
				this.tags = this.works.map( (work) => work.techs);
				console.log(this.tags)
			})
		},
		addWork(data, formIsOpened) {
			this.works.unshift(data.data); 
			this.formIsOpened = formIsOpened;

		},
	}
}
</script>

<style lang="postcss">
  @import "normalize.css";
  @import "../../../styles/mixins.pcss";
  @import "../../../styles/layout/base.pcss";

	@import "./works.pcss";


</style>