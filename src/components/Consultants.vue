<template>
  <section>
      <h1  :class="isWdith?'width':'width1'">
        <img v-lazy="require('../assets/squre.png')"><span v-html="$t('message.consultants')">CONSULTANTS</span>
      </h1>
       <ul>
        <li>
          <div class="content">
             <div class="contentWRap">
               <img v-lazy="require('../assets/taoran.png')">
               <p v-html="$t('message.taoran')">Member of the united Nations international academy of ecological and life safety Specialist of army general hospital
Deputy director, department of clinical
psychology, capital medical university
Director of Beijing shijian united medical</p>
             </div>       
          </div>
          <div class="content">
             <div class="contentWRap">
               <img v-lazy="require('../assets/taokai.png')">
               <p v-html="$t('message.taokai')">State experts in traditional chinese medicine Chief physician of pulmonary department,affiliated hospital of shandong university of traditional chinese medicine Professor, department of internal medicine, shandong university of traditional Chinese medicine</p>
             </div>       
          </div>
        </li>
      </ul>
  </section>
</template>

<script>
import Vline from "./utilCom/line"
export default {
  name: 'Home',
  data(){
    return{
      isWdith:true
    }
  },
  computed:{
   a(){
      return this.$t('message.menuHome');
   }
  },
  mounted() {
  },
  methods:{
    show(){
      
    },
  },
  components:{
    Vline
  },
  watch:{
    a(){
       this.isWdith=!this.isWdith
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
      .width{
        width: 430px;
      }
      .width1{
        width: 240px;
      }
      h1{
        position: relative;
        width: 430px;
        padding-left: 20px;
        border-left: 4px solid #1bdeb8;
        font-size: 56px;
        margin: 103px 0 29px 0;
        span{
          position: relative;
          z-index: 100;
        }
        img{
          position: absolute;
          right: 0;
          bottom: 4px;
        }
      }
      ul{
        li{
          display: flex;
          margin-bottom: 48px;
          .content{
            flex: 1;
            .contentWRap{
              width: 294px;
              margin: 0 auto;
              p{
                margin-top: 38px;
                font-size: 16px;
                line-height: 26px;
              }
            }
          }
        }  
      }
</style>
