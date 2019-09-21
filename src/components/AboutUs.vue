<template>
  <section >
    <every-title :imgAddress="titleImg"></every-title>
    <ul>
      <li v-for="item of list" v-bind:key="item.imgUrl">
        <img v-lazy="item.imgUrl" alt="" sizes="" srcset="">
        <div>
          <h5>{{item.title}}</h5>
          <p v-html="item.content"></p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import EveryTitle from "./EveryTitle"
export default {
  name: 'Home',
  data(){
    return{
    }
  },
  mounted() {
    window.addEventListener('scroll', this.show, true);
  },
  computed:{
    list(){
      return[
        {
          imgUrl:require('../assets/support.png'),
          title:this.$store.state.i18n.aboutListTitle2,
          content:this.$store.state.i18n.aboutListContent2
        },
        {
          imgUrl:require('../assets/guys.png'),
          title:this.$store.state.i18n.aboutListTitle1,
          content:this.$store.state.i18n.aboutListContent1
        },
        {
          imgUrl:require('../assets/adviser.png'),
          title:this.$store.state.i18n.aboutListTitle3,
          content:this.$store.state.i18n.aboutListContent3
        }
      ]
    },
    titleImg(){
      return this.$store.state.i18n.aboutImg;
    }
  },
  methods:{
    show(){
      
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
      width: 1000px;
      margin: 0 auto;
      ul{
        margin-top: 78px;
        display: flex;
        flex-direction: column;
        align-items: center;
        li{
          display: flex;
          width: 1000px;
          height: 189px;
          background: url("../assets/usListBg.png") 0 0 no-repeat;
          background-size: 1000px 189px;
          img{
            margin: 40px 45px;
            width: 85px;
            height: 85px;
          }
          div{
            padding: 45px 0;
          }
          h5{
            margin-bottom: 10px;
            font-size: 26px;
            color: #333333;
          }
          p{
            width: 667px;
            line-height: 28px;
            color: #666666;
          }
        }
      }
    }
</style>
