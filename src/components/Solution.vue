<template>
  <section>
    <div class="wrap">
      <h1 v-html="$t('message.solution')">
        Solution：Dlucky chain
      </h1>
      <vline></vline>
      <div class="layer">
          <div class="layerLeft">
            <img v-lazy="require('../assets/layerLeft.png')" alt="" srcset=""/>
            <div class="title">
              <h5 v-html="$t('message.softwareLayer')">Software Layer</h5>
              <p v-html="$t('message.softwareLayerIntroduction')">
                At the software level, we provide service functions including protocols, interfaces, validation, interaction, also support function extension.
              </p>
            </div>
          </div>
          <div class="layerRight">
            <img v-lazy="require('../assets/layerRight.png')" alt="" srcset=""/>
            <div class="title">
              <h5 v-html="$t('message.hardwareLaver')">Hardware Laver</h5>
              <p v-html="$t('message.hardwareLaverIntroduction')">
                The hardware level mainly includes auxiliary nodes, light wallet servers, dEye, DCode, etc
              </p>
            </div>
          </div>
      </div>
      <ol>
        <li><img v-lazy="require('../assets/point.png')"><span v-html="$t('message.overallSolution')">Combined with block chain technology, The unique design of hardware and software in the process of anti-counterfeiting will create</span></li>
      </ol>
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    section{
      background-image: url("../assets/solution.png");
      background-size: 100% 100%;
      .wrap{
        width: 1200px;
        margin: 0 auto;
        color:white;
      }
      h1{
        font-size: 56px;
        padding: 103px 0 29px 0;
      }
      .layer{
        margin-top: 80px;
        display: flex;
        .layerLeft,.layerRight{
          display: flex;
          flex: 1;
          img{
            margin-right: 30px;
            width: 92px;
            height: 92px;
          }
          h5{
            font-size: 28px;
            color:#1bdeb8;
          }
          p{
            padding-right: 10px;
            margin-top: 18px;
            line-height: 32px;
            font-size: 18px;
            color: white;
          }
        }
      }
      li{
        img{
          margin-right: 10px;
          vertical-align: middle;
        }
        padding:96px 0; 
        color: #91939a;
        font-size: 18px;
        line-height: 20px;
        height: 20px;
      }
    }
</style>
