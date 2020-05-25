<template lang="pug">


.login-wrapper
	.login
		button.login__close-button
		form.login__form(@submit.prevent="loginUser")
			.login__form-wrapper
				h3.login__title Авторизация
				.login__form-block(:class="{'login__form-block_error': validation.hasError('name')}")
					.login__label Логин
					input.input.login__input.login__input_name(
						type='text'
						placeholder='Terminator'
						name="name"
						v-model="user.name"
					)
					span(:class="{'login__error-message': validation.hasError('name')}") {{ validation.firstError('name') }}
				.login__form-block(:class="{'login__form-block_error': validation.hasError('password')}")
					.login__label Пароль
					input.input.login__input.login__input_password(
						type='password'
						placeholder='*************'
						name="password"
						v-model="user.password"
					)
					span(:class="{'login__error-message': validation.hasError('password')}") {{ validation.firstError('password') }}
			button.login__submit-button Отправить

</template>

<script>

import Vue from "vue";
import $axios from "../requests";
import SimpleVueValidator from 'simple-vue-validator';
const Validator = SimpleVueValidator.Validator;



Vue.use(SimpleVueValidator);

export default {
	data() {
		return {
			user: {
				name: "",
				password: ""
			}
		}
	},
	validators: {
		name: function (value) {
			return Validator.value(value).required('Поле обязательно для заполнения');
		},
		password: function(value) {
			return Validator.value(value).required('Поле обязательно для заполнения');
		}
	},
	methods: {
		async loginUser() {
			try {
				const response = await $axios.post('/login', this.user);
				const token = response.data.token;

				localStorage.setItem('token', token);
				$axios.defaults.headers["Authorization"] = `Bearer ${token}`;
				this.$router.replace("/");
			} catch (error) {
				console.log(error)
			}
		}
	}
}

</script>

<style lang="postcss">

@import "normalize.css";
@import "../../styles/mixins.pcss";
@import "../../styles/layout/base.pcss";

.login-wrapper {
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background: url('../../images/content/admin/login-bg.png') center center no-repeat;

	@include phones {
		background: #fff;
	}
}

.login {
	background: #fff;
	padding: 60px 80px;
	position: relative;

	@include phones {
		width: 100%;
		height: 100%;
		padding: 60px 30px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
}

.login__form-wrapper {
	margin-bottom: 40px;
}

.login__form {
	width: 100%;
}

.login__close-button {
	position: absolute;
	right: 30px;
	top: 30px;
	width: 20px;
	height: 20px;
	background-image: svg-load('cross.svg', fill=#414c63, width=100%, height=100%);
	background-color: transparent;
}

.login__title {
	font-size: 36px;
	font-weight: 600;
	text-align: center;
	margin-bottom: 30px;

	@include phones {
		font-size: 30px;
	}
}

.login__form-block {
	margin-bottom: 40px;
	position: relative;

	&:last-child {
		margin-bottom: 0;
	}

	&_error {
		.input {
			border-bottom: 2px solid #cd1515;
			color: #cd1515;
		}
		.feedback-form__input_name {
			background-image: svg-load('user.svg', fill=#cd1515, width=100%, height=100%);
		}
		
		.feedback-form__input_passowr {
			background-image: svg-load('key.svg', fill=#cd1515, width=100%, height=100%);
		}
	}
}

.login__label {
	opacity: 0.3;
	font-size: 16px;
	font-weight: 600;
	margin-left: 50px;
}

.login__input_name {
	background-image: svg-load('user.svg', fill=#414c63, width=100%, height=100%, opacity=0.3);
	background-repeat: no-repeat;
	background-size: 26px 30px;
	background-position: 0 15px;
	padding-left: 50px;
}

.login__input_password {
	background-image: svg-load('key.svg', fill=#414c63, width=100%, height=100%, opacity=0.3);
	background-repeat: no-repeat;
	background-size: 26px 30px;
	background-position: 0 15px;
	padding-left: 50px;
}

.login__error-message {
	color: #ffffff;
	font-size: 14px;
	font-weight: 400;
	background-color: #cd1515;
	margin-left: 40px;
	display: inline-block;
	padding: 10px 25px;
	position: absolute;
	top: 100%;
	left: 0;
	
	&:before {
		content: '';
		display: block;
		width: 1px;
		height: 1px;
		border: 8px solid transparent;
		border-bottom: 8px solid #cd1515;
		position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
	}
}

.login__submit-button {
	color: #ffffff;
	font-size: 18px;
	font-weight: 700;
	line-height: 48px;
	text-transform: uppercase;
	border-radius: 40px 5px;
	background-color: #ffffff;
	background-image: linear-gradient(to right, #9300e8 0%, #4a00ed 100%);
	padding: 15px 120px;

	&:hover,
	&:focus {
		background-image: linear-gradient(to right, #bb00ff 0%, #5900ff 100%);
	}
	@include phones {
		padding: 15px 75px;
		margin: 0 auto;
		display: block;
	}
}
</style>