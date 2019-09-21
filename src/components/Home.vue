<template>
  <section >
    <div class="menus">
      <div class="wrap">
        <vmenu></vmenu>
      </div>
    </div>
    <div class="carousel">
       <img src="../assets/banner.png" alt="" srcset="">
       <div class="banner">
          <img v-lazy="bannerTextImg" alt=""  :key="bannerTextImg">
          <img src="../assets/bannerAnmite.png" alt="" srcset="">
       </div>
    </div>
  </section>
</template>

<script>
import Vmenu from "./Menu"
export default {
  name: 'Home',
  data(){
    return{
    }
  },
  mounted() {
  },
  computed:{
    bannerTextImg(){
      return  this.$store.state.i18n.bannerTextImg
    }
  },
  methods:{
   
  },
  components:{
    Vmenu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    section{
      position: relative;
      height: 680px;
      overflow: hidden;
    }
    .wrap{
      width: 1000px;   
    } 
    .menus{
      position: relative;
      display: flex;
      justify-content: center;
      .wrap{
        padding-top: 28px;
        position: relative;
        z-index: 100;
      }
    }
    .carousel{
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      margin: auto;
      z-index: 1;
      height: 680px;
      >img{
        width: 100%;
        height: 680px;
      }
      .banner{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 1000px;
        height: 487px;
        img:nth-of-type(1){
          // position: absolute;
          // left: 450px;
          // top: 236px;
          vertical-align: middle;
          width: 582px;
          height: 232px;
        } 
        img:nth-of-type(2){
          vertical-align: middle;
          // position: absolute;
          // left: 1044px;
          // top: 112px;
          width: 416px;
          height: 487px;
          animation: homeAnimate 1s linear infinite alternate;
        } 
      } 
    }
    @keyframes homeAnimate {
      from {
        transform: translateX(0);
      }
      to{
        transform: translateX(26px);
      }
    }
</style>
