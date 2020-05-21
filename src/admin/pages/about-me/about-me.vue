<template lang="pug">
	.sections-container-wrapper  
		.sections-container
			section.section.about-me
				.section__header.about-me__header
					h2.section__title.about-me__title Блок &laquo;Обо мне&raquo;
					button.about-me__button(@click="openForm")
						span.about-me__button-icon +
						span.button__text Добавить группу
				.about-me__body
					
							
					ul.about-me__blocks
						li.about-me__item(v-if="isNewCategoryFormOpened")
							form.about-me__form(@submit.prevent="createCategory")
								.table-header
									.table-row
										.table-cell
											input.input.about-me__item-name(type="text"
																												placeholder="Название новой группы"
																												v-model="title"
																												) 
										.table-cell
												button(type="submit").control-button.control-button_save
										.table-cell
												button(type="button").control-button.control-button_close
								.table-body
									.table-row
										.table-cell Git
										.table-cell 100 %
										.table-cell
											span.control-button.control-button_edit
										.table-cell
											span.control-button.control-button_remove
								skill(
									@skillAdded="addSkill"
									
								)
						li.about-me__item(v-for="cat in categories" :key="cat.id")
							.table-header
								.table-row
									.table-cell
										input.input.about-me__item-name(type="text" placeholder="Название новой группы" :value="cat.category") 
									.table-cell
										span.control-button.control-button_save
									.table-cell
										span.control-button.control-button_close
							.table-body
								.table-row
									.table-cell
									.table-cell 100 %
									.table-cell
										span.control-button.control-button_edit
									.table-cell
										span.control-button.control-button_remove
							skill(
								@skillAdded="addSkill"
								:categoryId="cat.id"
								)
											
</template>

<script>
import Vue from "vue";
import axios from "axios";
import skill from "../../components/skill"

const baseUrl = 'https://webdev-api.loftschool.com';
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjMxMSwiaXNzIjoiaHR0cDovL3dlYmRldi1hcGkubG9mdHNjaG9vbC5jb20vbG9naW4iLCJpYXQiOjE1OTAwODQzMjQsImV4cCI6MTU5MDEwMjMyNCwibmJmIjoxNTkwMDg0MzI0LCJqdGkiOiJ6TzVRN3VFejFXNlpXR3VMIn0.iGI7tMOmifjYhy9Pwtl5MM_TUX1rSzNXrB2Rj9s5vYI';

axios.defaults.baseURL = baseUrl;
axios.defaults.headers['Authorization'] = `Bearer ${token}`;

export default {
	data() {
		return {
			title: '',
			categories: [],
			isNewCategoryFormOpened: false,
		}
	},
	components: {
		skill
	},
	created() {
		this.getCategories();
	},
	methods: {
		openForm: function() {
			this.isNewCategoryFormOpened = true;
		},
		createCategory() {
			axios.post('/categories', {
				title: this.title
			}).then(response =>{

				this.inputDisabled = false;
			})
		},
		addSkill(newSkill) {
			console.log(newSkill)
		},
		getCategories() {
			axios.get('/categories').then(response => {
				this.categories = response.data;
			})
		},
	}
}
</script>

<style lang="postcss">
  @import "normalize.css";
  @import "../../../styles/mixins.pcss";
  @import "../../../styles/layout/base.pcss";
	
	@import "./about-me.pcss";
</style>