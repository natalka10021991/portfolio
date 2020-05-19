<template lang="pug">
	header.header
		.header__container
			.header__left
				.header__user-avatar
					.avatar
						img(src="require('../images/content/user.jpg')")
				.header__user-name Наталья Быстрова
				h3.header__title Панель администрирования
				
			.header__right
				a.header__logout(href="#") Выйти
</template>

<style lang="postcss">
  @import "normalize.css";
  @import "../../../styles/mixins.pcss";
  @import "../../../styles/layout/base.pcss";
	@import "./header.pcss";
</style>