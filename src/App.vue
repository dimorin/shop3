<template>
  <div id="app">
    <Header></Header>
    <transition name="fade">
    <router-view></router-view>
    </transition>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  mounted(){    
    $.initialize();
  },
  components:{
    Header,
    Footer
  }
}
</script>
<style>
.fade-enter-active{
  transition:opacity 1.5s, transform 1.5s;
}
.fade-leave-active {
  transition:opacity 0.5s, transform 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity:0;
  transform: translateY(-50px);
}
</style>
