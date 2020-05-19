<template lang="pug">
	nav.nav
		.nav__container
			ul.nav__list
				li.nav__item
					a.nav__link.nav__link_active(href="#") Обо мне
				li.nav__item
					a.nav__link(href="#") Работы
				li.nav__item
					a.nav__link(href="#") Отзывы

</template>

<style lang="postcss">
  @import "normalize.css";
  @import "../../../styles/mixins.pcss";
  @import "../../../styles/layout/base.pcss";
	
	 .nav {
    min-height: 80px;
  }
  .nav__container {
    display: flex;
    align-items: center;
    max-width: 1080px;
    margin: 0 auto;
    width: 100%

    @include phones {
      padding: 0 40px;
      justify-content: center;
    }
  }

  .nav__list {
    display: flex;
  }

  .nav__link {
    text-decoration: none;
    display: block;
    padding: 29px 25px;
    white-space: nowrap;

    &_active {
      color: $bright-blue;
      font-weight: 600;
      border-bottom: 3px solid $bright-blue;
    }

    @include phones {
      padding: 25px 20px;
    }
  }
</style>