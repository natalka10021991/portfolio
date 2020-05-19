<template lang="pug">
  .main-wrapper
    router-view
    Header
    Nav
    .sections-container
      AboutMe
      Works
      Feedback
      
</template>

<script>
  import Header from '../admin/components/header/header'
  import Nav from '../admin/components/Nav/nav'
  import AboutMe from '../admin/components/about-me/about-me'
  import Works from '../admin/components/works/works'
  import Feedback from '../admin/components/feedback/feedback'

  export default {
    data() {
      return {

      }
    },
    components: {
      Header,
      Nav,
      AboutMe,
      Works,
      Feedback
    }
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