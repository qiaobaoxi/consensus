<template>
  <div id="app">
    <home/>
    <main-body></main-body>
    <!-- <solution id="solution"></solution>
    <dlucky-chain v-if="show1"></dlucky-chain>
    <our ></our>
    <road-map></road-map>
    <future-prospect v-if="show2"></future-prospect>
    <contact-us id="contactUs"></contact-us>
    <news></news>-->
    <vfooter></vfooter>
  </div>
</template>

<script>
import Home from './Home.vue'
import MainBody from './MainBody.vue'
import Vfooter from './Vfooter.vue'
export default {
  name: 'app',
  data(){
    return{
      show1:false,
      show2:false,
    }
  },
  mounted() {
    //输入框
    window.addEventListener('scroll', this.show, true);
  },
  methods:{
    show(){
        var scrollTop = document.documentElement.scrollTop ||     document.body.scrollTop
        if(scrollTop>2700&&!this.show1){
          this.show1=true
        }
        if(scrollTop>8300&&!this.show2){
          this.show2=true
        }
    },
  },
  components: {
    Home,
    MainBody,
    Vfooter
  }
}
</script>

<style>

</style>
