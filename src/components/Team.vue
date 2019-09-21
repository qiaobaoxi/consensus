<template>
  <section>
    <div class="wrap">
      <h1 :class="isWdith?'width':'width1'">
        <img v-lazy="require('../assets/squre.png')"><span v-html="$t('message.ourTeam')">OUR TEAM</span>
      </h1>
      <ul>
        <li>
          <div class="content">
             <div class="contentWRap">
               <img v-lazy="isWdith?require('../assets/CEO.png'):require('../assets/CEO.jpg')">
               <p v-html="$t('message.ceo')">Major in pharmaceutical Chemistry.Beijing University of Traditional Chinese Medicine MBA from Renmin University of China.Zhejiang Guoguang Biopharmaceutical co LTD.General Manager of Health Group Industry Corporation</p>
             </div>       
          </div>
          <div class="content">
             <div class="contentWRap">
               <img v-lazy="isWdith?require('../assets/COO.png'):require('../assets/COO.jpg')">
               <p v-html="$t('message.coo')">Renmin university of China management MBA.Hubei xianning medical college pharmacy major Qingdao sanli chemical technology Co, LTD Inspection engineer</p>
             </div>       
          </div>
          <div class="content">
             <div class="contentWRap">
               <img v-lazy="require('../assets/CTO.png')">
               <p v-html="$t('message.cto')">CTO of DLucky Pharmaceutical R&D at Digital Stock Exchange Founder at Syndicate Group</p>
             </div>       
          </div>
        </li>
        <li>
          <div class="content">
             <div class="contentWRap">
               <img v-lazy="isWdith?require('../assets/CMO.png'):require('../assets/CMO.jpg')">
               <p v-html="$t('message.cmo')">Shandong university, majoring in biological engineering Dessert Zhendong pharmaceutical Co, Ltd Sales director for multiple companies</p>
             </div>       
          </div>
          <div class="content">
             <div class="contentWRap">
               <img v-lazy="isWdith?require('../assets/CIO.png'):require('../assets/CIO.jpg')">
               <p v-html="$t('message.cio')">Heilongjiang university of traditional Chinese medicine, majoring in traditional Chinese medicine Kang yuan pharmaceutical research institute deputy director We completed several major science
technology projects</p>
             </div>       
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Vline from "./utilCom/line"
import { download } from "vue-downloader";
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
    section{
      overflow: hidden;
      .width{
        width: 312px;
      }
      .width1{
        width: 240px;
      }
      h1{
        position: relative;
        width: 312px;
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
      H1:nth-of-type(2){
        width: 430px;
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
    }
</style>
