<template lang="pug">
	nav.nav
		.nav__container
			ul.nav__list
				li.nav__item
					router-link.nav__link(to="/") Обо мне
				li.nav__item
					router-link.nav__link(to="/works") Работы
				li.nav__item
					router-link.nav__link(to="/feedback") Отзывы

</template> 

<style lang="postcss">
  @import "normalize.css";
  @import "../../../styles/mixins.pcss"; 
  @import "../../../styles/layout/base.pcss";
	
	.nav {
    @include phones {
      margin-bottom: 30px;
    }
  }
  .nav__container {
    display: flex; 
    align-items: center;
    max-width: 1080px;
    margin: 0 auto;
    width: 100%;
    padding: 0px 60px;
 
  	@include tablets {
		  padding: 0 20px;
	  }

    @include phones {
      padding: 0 15px;
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

    @include phones {
      padding: 25px 20px;
    }
  }

  .router-link-active {
    color: $bright-blue;
    font-weight: 600;
    border-bottom: 3px solid $bright-blue;
    }
</style>

<script>

</script>