<template lang="pug">
	.table-row
		.table-cell {{skill.title}}
		.table-cell {{skill.percent}}
		.table-cell
			span.control-button.control-button_edit
		.table-cell
			span.control-button.control-button_remove
					
</template>

<script>
export default {
	props: {
		skill: {
			type: Object,
			default: () => {},
			required: true
		}
	}
}

</script>

<style lang="postcss">

</style>