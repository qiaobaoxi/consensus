<template>
  <section>
    <div class="wrap">
      <div class="title">
        <img :class="conactUsTitleHeight" v-lazy="titleImg" alt="" srcset="">
      </div>
      <div class="need">
        <el-input
          resize="none"
          class="input"
          type="textarea"
          :rows="2"
          :placeholder="textareaPlaceHolder"
          v-model="textarea">
        </el-input>
        <el-button class="submit">{{submitVale}}</el-button>
      </div>
      <ul>
        <li  ref="list"  @mouseover="rotateOverFn('list')" @mouseout="rotateOutFn('list')">
          <a>
            
          </a>
          <a>
            
          </a>
          <a>
            
          </a>
          <a>
            
          </a>
        </li>
          <li  ref="list1"  @mouseover="rotateOverFn('list1')" @mouseout="rotateOutFn('list1')">
          <a>
            
          </a>
          <a>
            
          </a>
          <a>
            
          </a>
          <a>
            
          </a>
        </li>
          <li  ref="list2"  @mouseover="rotateOverFn('list2')" @mouseout="rotateOutFn('list2')">
          <a>
            
          </a>
          <a>
            
          </a>
          <a>
            
          </a>
          <a>
            
          </a>
        </li>
          <li  ref="list3"  @mouseover="rotateOverFn('list3')" @mouseout="rotateOutFn('list3')">
          <a>
            
          </a>
          <a>
            
          </a>
          <a>
            
          </a>
          <a>
            
          </a>
        </li>
          <li  ref="list4"  @mouseover="rotateOverFn('list4')" @mouseout="rotateOutFn('list4')">
          <a>
            
          </a>
          <a>
            
          </a>
          <a>
            
          </a>
          <a>
            
          </a>
        </li>
          <li  ref="list5"  @mouseover="rotateOverFn('list5')" @mouseout="rotateOutFn('list5')">
          <a>
            
          </a>
          <a>
            
          </a>
          <a>
            
          </a>
          <a>
            
          </a>
        </li>
          <li  ref="list6"  @mouseover="rotateOverFn('list6')" @mouseout="rotateOutFn('list6')">
          <a>
            
          </a>
          <a>
            
          </a>
          <a>
            
          </a>
          <a>
            
          </a>
        </li>
          <li  ref="list7"  @mouseover="rotateOverFn('list7')" @mouseout="rotateOutFn('list7')">
          <a>
            
          </a>
          <a>
            
          </a>
          <a>
            
          </a>
          <a>
            
          </a>
        </li>
          <li  ref="list8"  @mouseover="rotateOverFn('list8')" @mouseout="rotateOutFn('list8')">
          <a>
            
          </a>
          <a>
            
          </a>
          <a>
            
          </a>
          <a>
            
          </a>
        </li>
      </ul>
    </div>

  </section>
</template>

<script>
import EveryTitle from "./EveryTitle";
export default {
  name: "Home",
  data() {
    return {
      textarea: '',
      
    };
  },
  mounted() {},
  methods: {
    rotateOverFn(obj) {
      let li=this.$refs[obj];
      li.style="transform: rotateX(90deg);"
    },
    rotateOutFn(obj) {
      let li=this.$refs[obj];
      li.style="transform: rotateX(0deg);"
    }
  },
  computed:{
    textareaPlaceHolder(){
      return this.$store.state.i18n.textareaPlaceholder
    },
    submitVale(){
      return this.$store.state.i18n.button
    },
    titleImg(){
      return this.$store.state.i18n.conactUsImg;
    },
    conactUsTitleHeight(){
      return this.$store.state.i18n.conactUsTitleHeight;
    }
  },
  components: {
    EveryTitle
  }
};
</script>
<style lang="less" >
    .input{
      textarea{
        margin: 0 auto;
        width:927px;
        height:120px;
        background-color: rgba(0, 0, 0, 0);
        border:2px solid rgba(255,255,255,1);
      } 
    }
    .submit{
      position: absolute;
      right: 52px;
      bottom: 14px;
      width:115px;
      height:37px;
      background:rgba(149,229,239,1);
      border: none;
      border-radius: 10px;
    }
</style>
<style scoped lang="less" >
section {
}
.wrap {
  width: 1000px;
  margin: 0 auto;
  color: white;
  .title{
        width: 100%;
        padding: 122px 0 51px 0;
        display: flex;
        align-items: center;
        justify-content: center;
          .conactUsTitleHeight{
            width: 250px;
            height: 76px;
          }
          .conactUsTitleHeight1{
            width: 418px;
            height: 70px;
          }
          .conactUsTitleHeight2{
            width: 438px;
            height: 70px;
          }
          .conactUsTitleHeight3{
            width: 158px;
            height: 72px;
          }
  }
  .need{
    position: relative;
  }
  ul{
    // perspective: 800px;
    display: flex;
    margin-top: 40px;
     li{
      flex: 1;
      position: relative;
      transform-style: preserve-3d;
      height: 58px;
      justify-content: center;
      transform-origin: center center -29px; 
      transform: rotateX(0deg);
      backface-visibility: hidden;
      transition: 1s;
      a{
        position: absolute;
        left: 0;
        top: 0;
        width: 58px;
        height: 58px;
        background: url("../assets/icon1.png") 0 0 no-repeat;
        background-size: 100% 100%;
      }
      a:nth-of-type(2){
        transform-origin: top; 
        transform: rotateX(-90deg);
        // transform: translateZ(58px);
      }
      a:nth-of-type(3){
        transform: translateZ(-58px);
      }
      a:nth-of-type(4){
        transform-origin: bottom; 
        transform:rotateX(90deg) rotateY(180deg) rotateZ(180deg)   translateY(58px);
      }
    }
    .loop(@counter) when (@counter > 0) {
      .loop((@counter - 1)); 
      li:nth-child(@{counter}){
        a{
          background: url("../assets/icon@{counter}.png") 0 0 no-repeat;
          background-size: 100% 100%;
        }
      } 
    }
    .loop(9);
  }
}
</style>
