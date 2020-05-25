<template lang="pug">
	.sections-container-wrapper  
		.sections-container
			section.section.about-me
				.section__header.about-me__header
					h2.section__title.about-me__title Блок &laquo;Обо мне&raquo;
					button.about-me__button
						span.about-me__button-icon +
						span.button__text Добавить группу
				.about-me__body
					form.about-me__form(@submit.prevent="createNewCategory")
						.table-header
							.table-row
								.table-cell
									input.input.about-me__item-name(
										type="text"
										placeholder="Название новой группы"
										v-model="category.title"
									) 
								.table-cell
										button(type="submit").control-button.control-button_save
								.table-cell
										button(type="button").control-button.control-button_close
						.table-body
							skillGroupItem(
								v-for="skill in category.skills" 
								:key="skill.id"
							)
						skillGroup
					ul.about-me__blocks
							
						li.about-me__item(
							v-for="cat in categories" :key="cat.id"
						)
							.table-header
								pre {{category}}
								.table-row
									.table-cell
										input.input.about-me__item-name(
											type="text" 
											placeholder="Название новой группы"
											:value="cat.category" 
											readonly
											) 

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
							skillGroup(
								 :category="cat"
							)
							
											
</template>

<script>
import Vue from "vue";
import axios from "axios";
import skillGroup from "../../components/skill-group"
import skillGroupItem from "../../components/skill-group-item"
import { mapActions, mapState } from "vuex";

const baseUrl = 'https://webdev-api.loftschool.com';
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjMxMSwiaXNzIjoiaHR0cDovL3dlYmRldi1hcGkubG9mdHNjaG9vbC5jb20vbG9naW4iLCJpYXQiOjE1OTAzOTg0MDEsImV4cCI6MTU5MDQxNjQwMSwibmJmIjoxNTkwMzk4NDAxLCJqdGkiOiJNRGJ4eHBGV0k5eXpIVFFnIn0.YGSVxUodQTsurdDwj8nKk2qhIGX3ZbUIbLJq2eHpyw4';

axios.defaults.baseURL = baseUrl;
axios.defaults.headers['Authorization'] = `Bearer ${token}`;

export default {
	data() {
		return {
			category: {
				title: "",
			}
		}
	},
	components: {
		skillGroup,
		skillGroupItem
	},
	computed: {
		...mapState("aboutMe", {
			categories: state => state.categories
		})
	},
	created() {
		this.fetchCategories();
	},
	methods: {
		...mapActions("aboutMe", ["addCategory", "fetchCategories"]),
		async createNewCategory() {
			try {
				await this.addCategory(this.category.title);
				this.category.title = "";
			} catch (error) {
				alert(error.message);
			}
			
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