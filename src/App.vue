<template>
  <HeaderComponent />
  <router-view></router-view>
  <FooterComponent />
  
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue"
import FooterComponent from "./components/FooterComponent.vue"

export default {
  name: 'App',
  components:{
    HeaderComponent,FooterComponent
  },

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
@import url("assets/scss/global.scss");

</style>