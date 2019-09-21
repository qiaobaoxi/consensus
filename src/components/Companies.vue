<template>
  <section>
    <div class="wrap">
      <h1 v-html="$t('message.partnterCompanies')">
        PARTNER  <br> COMPANIES
      </h1>
      <vline></vline>
      <ul>
          <li>
             <img v-lazy="require('../assets/jiafucheng.png')" alt="">
             <p v-html="$t('message.jiafucheng')">
               Founded in May 2004, is a professional global asset management institution with the main business: asset management, wealth management and investment banking.
             </p>  
          </li>
          <li>
             <img v-lazy="require('../assets/qingchenziben.png')" alt="">
             <p v-html="$t('message.qingchenziben')">
               Morning Capital concentrates on the traditional investment banking business, includesb listing, financing, merging and OTC market etc.
             </p>  
          </li>
          <li>
             <img v-lazy="require('../assets/zhongxiangjituan.png')" alt="">
             <p v-html="$t('message.haichuanghui')">
               Founded in 2011, the company s business scope includes real estate development and management; Property management; Cleaning service, etc
             </p>  
          </li>
          <li>
             <img v-lazy="require('../assets/zhongxiangjituan.png')" alt="">
             <p v-html="$t('message.zhongxiangjituan')">
               Founded in 2011, the company s business scope includes real estate development and management; Property management; Cleaning service, etc
             </p>  
          </li>
          <li>
             <img v-lazy="require('../assets/genyuanziben.png')" alt="">
             <p v-html="$t('message.genyuanziben')">
               Founded in May 2004, is a professional global asset management institution with the main business: asset management, wealth management and investment banking.
             </p>  
          </li>
      </ul>
      <ol>
          <li>
             <img v-lazy="require('../assets/school1.png')" alt="">
          </li>
           <li>
             <img v-lazy="require('../assets/school4.png')" alt="">
          </li>
           <li>
             <img v-lazy="require('../assets/school5.png')" alt="">
          </li>
           <li>
             <img v-lazy="require('../assets/school2.png')" alt="">
          </li>
           <li>
             <img v-lazy="require('../assets/school3.png')" alt="">
          </li>
      </ol>
    </div>
  </section>
</template>

<script>
import Vline from "./utilCom/line"
export default {
  name: 'Home',
  data(){
    return{
    }
  },
  mounted() {
  },
  methods:{
  
  },
  components:{
    Vline
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    section{
      .wrap{
        width: 1200px;
        margin: 0 auto;
        color:white;
      }
      h1{
        font-size: 56px;
        padding: 103px 0 29px 0;
      }
      ul{
          margin-top: 60px;
          li{
            margin-bottom: 28px;
            min-height: 130px;
            background-color: #222638;
            padding: 30px 35px; 
            img{
                height: 52px;
            }
            p{
                margin-top: 20px;
                font-size: 20px;
                line-height: 32px;
            }
        }
      }
      ol{
          padding: 60px 0 156px 0;
          margin-top: 78px;
          border-top: 2px solid #61636e;
          display: flex;
          li{
            margin-right: 45px;
            img{
                height: 45px;
            }
          }
          li:nth-last-of-type(1){
            margin: 0;
            img{
                width: 100%;
            }
          }
      }
    }
</style>
