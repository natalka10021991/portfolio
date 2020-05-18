import Vue from "vue";
import SimpleVueValidator from 'simple-vue-validator';
const Validator = SimpleVueValidator.Validator;

Vue.use(SimpleVueValidator);

new Vue ({
	el: "#feedback-form-component",
	template: "#feedback-form-container",
	data: {
		name: '',
		email: '',
		message: ''
	},
	validators: {
		name: function (value) {
			return Validator.value(value).required().minLength(6);
		},
		email: function(value) {
			return Validator.value(value).required().email();
		}
	},
	methods: {
		submit: function() {
			this.$validate();
		}
	}

});