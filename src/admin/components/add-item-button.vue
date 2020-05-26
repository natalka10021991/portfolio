<template lang="pug">
	.feedback__add-work-wrapper
		button.feedback__add-work-button(@click="$emit('click')") +
		.feedback__add-work-label {{buttonTitle}}
</template>

<script>
import Vue from "vue";

export default {
	data() {
		return {
			
		}
	},
	props: ["buttonTitle"],
	methods: {
		
	}
}
</script>
