<template>
  <section >
    <every-title :imgAddress="titleImg"></every-title>
    <div class="whitePaper">
      <ul>
        <li v-for="item of list" v-bind:key="item.title">
          <a :href="item.url" :download="item.name">{{item.title}}</a>
        </li>
      </ul>
      <img v-lazy="require('../assets/whitePaperDownload.png')" alt="" srcset="">
    </div>
    <div class="aboutFuntion">
        <img class="funtionSign" v-lazy="require('../assets/funtion.png')" alt="" srcset="">
        <div class="funtionDes">
             <img v-lazy="require('../assets/funtionDes.png')" alt="" srcset="">
            <dl>
              <dt>
                {{functionTitle}}
              </dt>
              <dd v-for="item in functionList" v-bind:key="item">
                <p> {{item}}</p>
              </dd>
            </dl>
        </div>
    </div>
  </section>
</template>

<script>
import EveryTitle from "./EveryTitle"
import { download } from "vue-downloader";
export default {
  name: 'Home',
  data(){
    return{
      list:[
        {
          title:"한글판",
          url:'https://con-co.app/CONSENSUS-NODE-%E1%84%92%E1%85%A1%E1%86%AB%E1%84%80%E1%85%AE%E1%86%A8%E1%84%8B%E1%85%A5.pdf',
          name:"CONSENSUS-NODE-한국어.pdf"
        },
        {
          title:"中文版",
          url:'https://con-co.app/CONSENSUS-Node-%E4%B8%AD%E6%96%87%E7%89%88.pdf',
          name:"CONSENSUS-Node-中文版.pdf"
        },
        {
          title:"English version",
          url:"https://con-co.app/CONSENSUS-Node-English.pdf",
          name:"CONSENSUS-Node-English.pdf"
        },
        {
          title:"日本語版",
          url:"https://con-co.app/CONSENSUS-Node-%E6%97%A5%E6%9C%AC%E8%AA%9E.pdf",
          name:"CONSENSUS-Node-日本語.pdf"
        },
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.show, true);
  },
  methods:{
    show(){
      
    },
    downLoad(url){
      download("https://con-co.app/CONSENSUS-Node-%E6%97%A5%E6%9C%AC%E8%AA%9E.pdf", "CONSENSUSqiao.pdf");
    }
  },
  computed:{
    functionTitle(){
      return this.$store.state.i18n.whiteFuntionTitle
    },
    functionList(){
      return [
        this.$store.state.i18n.whiteFuntion1,
        this.$store.state.i18n.whiteFuntion2,
        this.$store.state.i18n.whiteFuntion3,
        this.$store.state.i18n.whiteFuntion4,
      ] 
    },
    titleImg(){
      return this.$store.state.i18n.whitePaperImg;
    }
  },
  components:{
    EveryTitle
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" scoped>
    section{
      width: 1000px;
      margin: 0 auto;
      .whitePaper{
        display: flex;
        img{
          width: 564px;
          height: 396px;
        }
        ul{
          margin: 0 79px 0 41px;
          width: 316px;
          li{
            margin-bottom: 20px;
            height: 56px;
            line-height: 56px;
            border: 1px solid #02F6FF;
            border-radius: 20px;
            text-align: center;
            a{
              color: #02F6FF;
              display: block;
              text-decoration: none;
              margin-bottom: 10px;
              font-size: 18px;
            }
          }
        }
      }
      .aboutFuntion{
        padding-top: 112px;
        display: flex;
        .funtionSign{
          margin-right: 40px;
          width: 339px;
          height: 658px;
        }
        .funtionDes{
          padding-top: 26px;
          img{ 
            width: 624px;
          }
          dl{
            margin-top: 64px;
            dt{
              width: 436px;
              font-size: 22px;
              color: white;
              line-height: 32px;
              display: table;
            }
            dd{
	              display: table;
                padding: 0 30px;
                margin-top: 24px;
                width: 526px;
                height: 72px;
                background: url("../assets/functionListBg.png") 0 0 no-repeat;
                background-size:100% 100%; 
                p{
                  font-size: 16px;
                  line-height: 28px;
                  display: table-cell;
	                vertical-align: middle;
                }
            }
          }
        }
      }
    }
</style>
