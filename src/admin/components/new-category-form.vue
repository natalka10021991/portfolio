<template lang="pug">
	
</template>

<script>
import Vue from "vue";
import axios from 'axios';
import skill from './skill'

const baseUrl = 'https://webdev-api.loftschool.com';
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjMxMSwiaXNzIjoiaHR0cDovL3dlYmRldi1hcGkubG9mdHNjaG9vbC5jb20vbG9naW4iLCJpYXQiOjE1OTAzOTg0MDEsImV4cCI6MTU5MDQxNjQwMSwibmJmIjoxNTkwMzk4NDAxLCJqdGkiOiJNRGJ4eHBGV0k5eXpIVFFnIn0.YGSVxUodQTsurdDwj8nKk2qhIGX3ZbUIbLJq2eHpyw4';

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