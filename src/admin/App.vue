<template lang="pug">
  .main-wrapper
    router-view(name="header")
    router-view(name="nav")
    router-view
</template>

<script>
  import Header from '../admin/pages/header/header'
  import Nav from '../admin/pages/nav/nav'

  export default {
    data() {
      return {
      }
    },
    components: {
      Header,
      Nav
    },
  }
</script>

<style lang="postcss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";
  @import "./styles/base.pcss";
  @import "./styles/forms.pcss";
  @import "../styles/blocks/avatar.pcss";
</style>