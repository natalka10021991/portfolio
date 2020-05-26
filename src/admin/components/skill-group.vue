<template lang="pug">
	form.table-footer(@submit.prevent="createSkill")
		.table-row
			.table-cell
				input.input.about-me__item-skill(
					type="text" 
					placeholder="Новый навык" 
					:disabled="inputDisabled ? true : false"
					v-model="skill.title"
				) 
			.table-cell 
				input.input.about-me__item-percent(
					type="text" 
					placeholder="100%" 
					:disabled="inputDisabled ? true : false"
					v-model="skill.percent"
				) 
			.table-cell
				button.button-add(
					type="submit"
					:disabled="inputDisabled ? true : false"
				) +
</template>

<script>

import Vue from "vue";
import axios from "axios";

export default {
	data() {
		return {
			inputDisabled: true,
			skill: {
				title: '',
				percent: 0,
				category: this.categoryId
			},
		}
	},
	props: {
		category: Object
	},
	methods: {
		createSkill() {
			axios.post('/skills', this.skill).then(response => {
				this.$emit('skillAdded', response.data)
				this.inputDisabled = false;
			})
		}
	}
}
</script>