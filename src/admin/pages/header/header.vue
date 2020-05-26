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
				router-link.header__logout(to="/login") Выйти
</template>

<style lang="postcss">
  @import "normalize.css";
  @import "../../../styles/mixins.pcss";
  @import "../../../styles/layout/base.pcss";
	@import "./header.pcss";
</style>