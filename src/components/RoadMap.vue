<template>
  <section>
    <div class="wrap">
       <every-title :imgAddress="titleImg"></every-title>
       <img v-lazy="roadMapImg" alt="" srcset="">
    </div>
  </section>
</template>

<script>
import EveryTitle from "./EveryTitle";
export default {
  name: 'Home',
  data(){
    return{
    }
  },
  computed:{
    titleImg(){
      return this.$store.state.i18n.roadImg;
    },
    roadMapImg(){
      return this.$store.state.i18n.roadMapImg;
    }
  },
  mounted() {
    this.init();
  },
  methods:{
    init(){
      
    },
    
  },
  components:{
    EveryTitle
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" scoped>
    section{
      .wrap{
        width: 1000px;
        margin: 0 auto;
        img{
          width: 975px;
          height: 811px;
        }
      }  
    }
     
</style>
