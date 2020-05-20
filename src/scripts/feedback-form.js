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
		message: '',
		formState: '',
		tooltipMessage: ''
	},
	validators: {
		name: function (value) {
			return Validator.value(value).required('Поле обязательно для заполнения').minLength(6, 'Минимальная длина 5 символов');
		},
		email: function(value) {
			return Validator.value(value).required('Поле обязательно для заполнения').email('Некорректный email');
		},
		message: function(value) {
			return Validator.value(value).required('Поле обязательно для заполнения').minLength(10, 'Минимальная длина 10 символов');
		}
	},
	methods: {
		submit: function() {
			this.$validate()
			.then((success) => {
				if (success) {
					this.formState = true;
					this.tooltipMessage = 'Сообщение отправлено';
				}
			});
		},
		closeTooltip: function() {
			this.formState = false;
		}
	}
});