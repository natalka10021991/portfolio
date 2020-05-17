import Vue from 'vue';
import SimpleVueValidation from 'simple-vue-validator';



module.exports = {
	mixins: [SimpleVueValidator.mixin],
	data: function () {
		return {
			name: ''
		};
	},
	validators: {
		name: function (value) {
			return Validator.value(value).required();
		}
	},
	methods: {
		submit: function () {
			this.$validate();
		}
	}
}