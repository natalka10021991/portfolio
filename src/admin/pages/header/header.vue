<template lang="pug">
	header.header
		.header__container
			.header__left
				.header__user-avatar
					.avatar
						img(src="../../../images/content/user.jpg")
				.header__user-name Наталья Быстрова
				h3.header__title Панель администрирования
				
			.header__right
				a.header__logout(href="#" @click="logoutUser") Выйти
</template>

<script>
import Vue from "vue";
import $axios from "../../requests";

export default {
	data() {
		return {

		}
	},
	methods: {

		async logoutUser() {
			try {
				const response = await $axios.post('/logout');
				console.log(response)

				await localStorage.removeItem('token');
				this.$router.replace("/login");

			} catch (error) {
				console.log(error)
			}
		}
	}
}
</script>

<style lang="postcss">
  @import "normalize.css";
  @import "../../../styles/mixins.pcss";
  @import "../../../styles/layout/base.pcss";
	@import "./header.pcss";
</style>