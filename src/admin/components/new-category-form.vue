<template lang="pug">
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
				:inputDisabled="inputDisabled"
				:categoryId="categoryId"
				@skillAdded="addSkill"
				)
</template>

<script>
import Vue from "vue";
import axios from 'axios';
import skill from './skill'

const baseUrl = 'https://webdev-api.loftschool.com';
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjMxMSwiaXNzIjoiaHR0cDovL3dlYmRldi1hcGkubG9mdHNjaG9vbC5jb20vbG9naW4iLCJpYXQiOjE1OTAwODQzMjQsImV4cCI6MTU5MDEwMjMyNCwibmJmIjoxNTkwMDg0MzI0LCJqdGkiOiJ6TzVRN3VFejFXNlpXR3VMIn0.iGI7tMOmifjYhy9Pwtl5MM_TUX1rSzNXrB2Rj9s5vYI';

axios.defaults.baseURL = baseUrl;
axios.defaults.headers['Authorization'] = `Bearer ${token}`;

export default {
	data() {
		return {
			title: "",
			inputDisabled: true
		}
	},
	props: ['isNewCategoryFormOpened', 'categories', 'categoryId'],
	components: {
		skill,
	},
	methods: {
		createCategory() {
			axios.post('/categories', {
				title: this.title
			}).then(response =>{
				this.categories.unshift(response.data);
				this.inputDisabled = false;
			})
		},
		addSkill(newSkill) {
			console.log(newSkill)
		}
	}
}
</script>

<style lang="pcss">
@import "normalize.css";
@import "../../styles/mixins.pcss";
@import "../../styles/layout/base.pcss";
@import "../pages/about-me/about-me.pcss";
</style>