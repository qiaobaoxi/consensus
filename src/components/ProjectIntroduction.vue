<template>
  <section>
    <div class="wrap">
      <every-title :imgAddress="titleImg"></every-title>
      <div class="contect">
        <img class="" v-lazy="require('../assets/introdutionAi.png')"  alt="" srcset="">
        <div>
          <p>{{introduction1}}</p>
          <p>{{introduction2}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import EveryTitle from "./EveryTitle"
export default {
  name: 'Home',
  data(){
    return{
      checked:false,
    }
  },
  mounted() {
  },
  computed:{
    introduction1(){
      return this.$store.state.i18n.introduction1;
    },
    introduction2(){
      return this.$store.state.i18n.introduction2;
    },
    titleImg(){
      return this.$store.state.i18n.introductionImg;
    }
  },
  methods:{
    
   
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
      }
      .title{
        padding: 122px 0 51px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          width: 469px;
          height: 54px;
        }
      }
      .contect{
        display: flex;
        img{
          margin-right: 62px;
          width: 304px;
          height: 264px;
        }
        div{
          width: 604px;
          line-height: 28px;
          >p{
            margin-top: 32px;
            color: #666666;
          }
          
        }
      }
    }
</style>
