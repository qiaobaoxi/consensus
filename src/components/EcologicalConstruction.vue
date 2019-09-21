<template>
  <section>
    <div class="wrap">
      <every-title :imgAddress="titleImg"></every-title>
      <div class="subTitle">
        <img v-lazy="subTitleImg" alt srcset />
      </div>
      <div class="store">
        <canvas :width="canvasW" :height="canvasH" ref="canvas"></canvas>
      </div>
      <vline></vline>
      <div class="buyer">
        <canvas width="1000" height="536" ref="canvas1"></canvas>
      </div>
      <ul>
        <li>
          <div>
            <img v-lazy="exchangeTitleImg" alt srcset />
          </div>
          <img v-lazy="require('../assets/entity.jpg')" alt srcset />
        </li>
        <li>
          <div>
            <img v-lazy="require('../assets/atmTitle.png')" alt srcset />
          </div>
          <img v-lazy="require('../assets/atm.jpg')" alt srcset />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import EveryTitle from "./EveryTitle";
import Vline from "./utilCom/line";
import store from "../assets/shoppingStructure/store.png";
import leftArc from "../assets/shoppingStructure/leftArc.png";
import rightArc from "../assets/shoppingStructure/rightArc.png";
import square from "../assets/shoppingStructure/square.png";
import square1 from "../assets/shoppingStructure/square1.png";
import square2 from "../assets/shoppingStructure/square2.png";
import triangle from "../assets/shoppingStructure/triangle.png";
import buyerArrow from "../assets/shoppingStructure/buyerArrow.png";
import buyerSquare1 from "../assets/shoppingStructure/buyerSquare1.png";
import buyerDownTriangle from "../assets/shoppingStructure/buyerDownTriangle.png";
import buyerSquare2 from "../assets/shoppingStructure/buyerSquare2.png";
import buyerSquare3 from "../assets/shoppingStructure/buyerSquare3.png";
import jaSquare from "../assets/shoppingStructure/jaSquare.png";
export default {
  name: "Home",
  data() {
    return {
      num:0,
      num1:0
    };
  },
  mounted() {
    this.storeAnimate();
    this.buyerAnimate();
  },
  computed:{
    canvasW(){
       return  this.$store.state.i18n.canvasW
    },
    canvasH(){
       return  this.$store.state.i18n.canvasH
    },
    titleImg(){
      return this.$store.state.i18n.ecologicalConstructionImg;
    },
    subTitleImg(){
       return this.$store.state.i18n.subTitleImg;
    },
    exchangeTitleImg(){
      return this.$store.state.i18n.exchangeTitleImg;
    },
    storeData(){
      return  [
        {
          img:{
            url:this.$store.state.i18n.storeUrl,
            x:Number(this.$store.state.i18n.storeUrlX)-20,
            y:Number(this.$store.state.i18n.storeUrlY),
            x1:Number(this.$store.state.i18n.storeUrlX),
            y1:Number(this.$store.state.i18n.storeUrlY),
            w:Number(this.$store.state.i18n.storeUrlW),
            h:Number(this.$store.state.i18n.storeUrlH)
          },
          text:{
            content:this.$store.state.i18n.storeText,
            x:Number(this.$store.state.i18n.storeTextX)-20,
            y:Number(this.$store.state.i18n.storeTextY),
            x1:Number(this.$store.state.i18n.storeTextX),
            y1:Number(this.$store.state.i18n.storeTextY),
            size:18
          }
        },
        {
          img:{
            url:this.$store.state.i18n.leftArcUrl,
            x:Number(this.$store.state.i18n.leftArcUrlX)-20,
            y:Number(this.$store.state.i18n.leftArcUrlY),
            x1:Number(this.$store.state.i18n.leftArcUrlX),
            y1:Number(this.$store.state.i18n.leftArcUrlY),
            w:Number(this.$store.state.i18n.leftArcUrlW),
            h:Number(this.$store.state.i18n.leftArcUrlH)
          }
        },
        {
          img:{
            url:this.$store.state.i18n.storeIdUrl,
            x:Number(this.$store.state.i18n.storeIdUrlX)-20,
            y:Number(this.$store.state.i18n.storeIdUrlY),
            x1:Number(this.$store.state.i18n.storeIdUrlX),
            y1:Number(this.$store.state.i18n.storeIdUrlY),
            w:Number(this.$store.state.i18n.storeIdUrlW),
            h:Number(this.$store.state.i18n.storeIdUrlH)
          },
          text:{
            content:this.$store.state.i18n.storeIdText,
            x:Number(this.$store.state.i18n.storeIdTextX)-20,
            y:Number(this.$store.state.i18n.storeIdTextY),
            x1:Number(this.$store.state.i18n.storeIdTextX),
            y1:Number(this.$store.state.i18n.storeIdTextY),
            size:18
          }
        },
        {
          img:{
            url:this.$store.state.i18n.storeCommodityCertificationUrl,
            x:Number(this.$store.state.i18n.storeCommodityCertificationUrlX)-20,
            y:Number(this.$store.state.i18n.storeCommodityCertificationUrlY),
            x1:Number(this.$store.state.i18n.storeCommodityCertificationUrlX),
            y1:Number(this.$store.state.i18n.storeCommodityCertificationUrlY),
            w:Number(this.$store.state.i18n.storeCommodityCertificationUrlW),
            h:Number(this.$store.state.i18n.storeCommodityCertificationUrlH)
          },
          text:{
            content:this.$store.state.i18n.storeCommodityCertificationText,
            x:Number(this.$store.state.i18n.storeCommodityCertificationTextX)-20,
            y:Number(this.$store.state.i18n.storeCommodityCertificationTextY),
            x1:Number(this.$store.state.i18n.storeCommodityCertificationTextX),
            y1:Number(this.$store.state.i18n.storeCommodityCertificationTextY),
            size:18
          }
        },
        {
          img:{
            url:this.$store.state.i18n.rightUrl,
            x:Number(this.$store.state.i18n.rightUrlX)-20,
            y:Number(this.$store.state.i18n.rightUrlY),
            x1:Number(this.$store.state.i18n.rightUrlX),
            y1:Number(this.$store.state.i18n.rightUrlY),
            w:Number(this.$store.state.i18n.rightUrlW),
            h:Number(this.$store.state.i18n.rightUrlH)
          }
        },
        {
          img:{
            url:this.$store.state.i18n.storeBondUrl,
            x:Number(this.$store.state.i18n.storeBondUrlX)-20,
            y:Number(this.$store.state.i18n.storeBondUrlY),
            x1:Number(this.$store.state.i18n.storeBondUrlX),
            y1:Number(this.$store.state.i18n.storeBondUrlY),
            w:Number(this.$store.state.i18n.storeBondUrlW),
            h:Number(this.$store.state.i18n.storeBondUrlH)
          },
          text:{
            content:this.$store.state.i18n.storeBondText,
            x:Number(this.$store.state.i18n.storeBondTextX)-20,
            y:Number(this.$store.state.i18n.storeBondTextY),
            x1:Number(this.$store.state.i18n.storeBondTextX),
            y1:Number(this.$store.state.i18n.storeBondTextY),
            size:18
          }
        },
        
        {
          img:{
            url:this.$store.state.i18n.storeTriangleUrl,
            x:Number(this.$store.state.i18n.storeTriangleUrlX)-20,
            y:Number(this.$store.state.i18n.storeTriangleUrlY),
            x1:Number(this.$store.state.i18n.storeTriangleUrlX),
            y1:Number(this.$store.state.i18n.storeTriangleUrlY),
            w:Number(this.$store.state.i18n.storeTriangleUrlW),
            h:Number(this.$store.state.i18n.storeTriangleUrlH)
          }
        },
        {
          img:{
            url:this.$store.state.i18n.storeShoppingMallUrl,
            x:Number(this.$store.state.i18n.storeShoppingMallUrlX)-20,
            y:Number(this.$store.state.i18n.storeShoppingMallUrlY),
            x1:Number(this.$store.state.i18n.storeShoppingMallUrlX),
            y1:Number(this.$store.state.i18n.storeShoppingMallUrlY),
            w:Number(this.$store.state.i18n.storeShoppingMallUrlW),
            h:Number(this.$store.state.i18n.storeShoppingMallUrlH)
          },
          text:{
            content:this.$store.state.i18n.storeShoppingMallText,
            x:Number(this.$store.state.i18n.storeShoppingMallTextX)-20,
            y:Number(this.$store.state.i18n.storeShoppingMallTextY),
            x1:Number(this.$store.state.i18n.storeShoppingMallTextX),
            y1:Number(this.$store.state.i18n.storeShoppingMallTextY),
            size:18
          }
        },
      ]
    },
    buyerData(){
      return [
        {
          img:{
            url:this.$store.state.i18n.buyerUrl,
            x:Number(this.$store.state.i18n.buyerUrlX),
            y:Number(this.$store.state.i18n.buyerUrlY)-10,
            x1:Number(this.$store.state.i18n.buyerUrlX),
            y1:Number(this.$store.state.i18n.buyerUrlY),
            w:Number(this.$store.state.i18n.buyerUrlW),
            h:Number(this.$store.state.i18n.buyerUrlH)
          },
          text:{
            content:this.$store.state.i18n.buyerText,
            x:Number(this.$store.state.i18n.buyerTextX),
            y:Number(this.$store.state.i18n.buyerTextY)-10,
            x1:Number(this.$store.state.i18n.buyerTextX),
            y1:Number(this.$store.state.i18n.buyerTextY),
            size:18
          }
        },
        {
          img:{
            url:this.$store.state.i18n.buyerDownTriangleUrl,
            x:Number(this.$store.state.i18n.buyerDownTriangleUrlX),
            y:Number(this.$store.state.i18n.buyerDownTriangleUrlY)-10,
            x1:Number(this.$store.state.i18n.buyerDownTriangleUrlX),
            y1:Number(this.$store.state.i18n.buyerDownTriangleUrlY),
            w:Number(this.$store.state.i18n.buyerDownTriangleUrlW),
            h:Number(this.$store.state.i18n.buyerDownTriangleUrlH)
          },
        },
        {
          img:{
            url:this.$store.state.i18n.buyerIdUrl,
            x:Number(this.$store.state.i18n.buyerIdUrlX),
            y:Number(this.$store.state.i18n.buyerIdUrlY)-10,
            x1:Number(this.$store.state.i18n.buyerIdUrlX),
            y1:Number(this.$store.state.i18n.buyerIdUrlY),
            w:Number(this.$store.state.i18n.buyerIdUrlW),
            h:Number(this.$store.state.i18n.buyerIdUrlH)
          },
          text:{
            content:this.$store.state.i18n.buyerIdText,
            x:Number(this.$store.state.i18n.buyerIdTextX),
            y:Number(this.$store.state.i18n.buyerIdTextY-10),
            x1:Number(this.$store.state.i18n.buyerIdTextX),
            y1:Number(this.$store.state.i18n.buyerIdTextY),
            size:18
          }
        },
        {
          img:{
            url:this.$store.state.i18n.buyerTriangleUrl,
            x:Number(this.$store.state.i18n.buyerTriangleUrlX)-10,
            y:Number(this.$store.state.i18n.buyerTriangleUrlY),
            x1:Number(this.$store.state.i18n.buyerTriangleUrlX),
            y1:Number(this.$store.state.i18n.buyerTriangleUrlY),
            w:Number(this.$store.state.i18n.buyerTriangleUrlW),
            h:Number(this.$store.state.i18n.buyerTriangleUrlH)
          },
        },
        {
          img:{
            url:this.$store.state.i18n.buyerShoppingUrl,
            x:Number(this.$store.state.i18n.buyerShoppingUrlX)-10,
            y:Number(this.$store.state.i18n.buyerShoppingUrlY),
            x1:Number(this.$store.state.i18n.buyerShoppingUrlX),
            y1:Number(this.$store.state.i18n.buyerShoppingUrlY),
            w:Number(this.$store.state.i18n.buyerShoppingUrlW),
            h:Number(this.$store.state.i18n.buyerShoppingUrlH)
          },
          text:{
            content:this.$store.state.i18n.buyerShoppingText,
            x:Number(this.$store.state.i18n.buyerShoppingTextX)-10,
            y:Number(this.$store.state.i18n.buyerShoppingTextY),
            x1:Number(this.$store.state.i18n.buyerShoppingTextX),
            y1:Number(this.$store.state.i18n.buyerShoppingTextY),
            size:18
          }
        },
        {
           img:{
            url:this.$store.state.i18n.buyerLeftArcUrl,
            x:Number(this.$store.state.i18n.buyerLeftArcUrlX)-20,
            y:Number(this.$store.state.i18n.buyerLeftArcUrlY),
            x1:Number(this.$store.state.i18n.buyerLeftArcUrlX),
            y1:Number(this.$store.state.i18n.buyerLeftArcUrlY),
            w:Number(this.$store.state.i18n.buyerLeftArcUrlW),
            h:Number(this.$store.state.i18n.buyerLeftArcUrlH)
          }
        },
        {
          img:{
            url:this.$store.state.i18n.buyerPayUrl,
            x:Number(this.$store.state.i18n.buyerPayUrlX)-10,
            y:Number(this.$store.state.i18n.buyerPayUrlY),
            x1:Number(this.$store.state.i18n.buyerPayUrlX),
            y1:Number(this.$store.state.i18n.buyerPayUrlY),
            w:Number(this.$store.state.i18n.buyerPayUrlW),
            h:Number(this.$store.state.i18n.buyerPayUrlH)
          },
          text:{
            content:this.$store.state.i18n.buyerPayText,
            x:Number(this.$store.state.i18n.buyerPayTextX)-10,
            y:Number(this.$store.state.i18n.buyerPayTextY),
            x1:Number(this.$store.state.i18n.buyerPayTextX),
            y1:Number(this.$store.state.i18n.buyerPayTextY),
            size:18
          }
        },
        {
          img:{
            url:this.$store.state.i18n.buyerPayUrl1,
            x:Number(this.$store.state.i18n.buyerPayUrlX1)-10,
            y:Number(this.$store.state.i18n.buyerPayUrlY1),
            x1:Number(this.$store.state.i18n.buyerPayUrlX1),
            y1:Number(this.$store.state.i18n.buyerPayUrlY1),
            w:Number(this.$store.state.i18n.buyerPayUrlW1),
            h:Number(this.$store.state.i18n.buyerPayUrlH1)
          },
          text:{
            content:this.$store.state.i18n.buyerPayText1,
            x:Number(this.$store.state.i18n.buyerPayText1X)-10,
            y:Number(this.$store.state.i18n.buyerPayText1Y),
            x1:Number(this.$store.state.i18n.buyerPayText1X),
            y1:Number(this.$store.state.i18n.buyerPayText1Y),
            size:18
          }
        },
        {
           img:{
            url:this.$store.state.i18n.buyerRightArcUrl,
            x:Number(this.$store.state.i18n.buyerRightArcUrlX)-20,
            y:Number(this.$store.state.i18n.buyerRightArcUrlY),
            x1:Number(this.$store.state.i18n.buyerRightArcUrlX),
            y1:Number(this.$store.state.i18n.buyerRightArcUrlY),
            w:Number(this.$store.state.i18n.buyerRightArcUrlW),
            h:Number(this.$store.state.i18n.buyerRightArcUrlH)
          }
        },
        {
          img:{
            url:this.$store.state.i18n.buyerGoodsReceivedUrl,
            x:Number(this.$store.state.i18n.buyerGoodsReceivedUrlX)-10,
            y:Number(this.$store.state.i18n.buyerGoodsReceivedUrlY),
            x1:Number(this.$store.state.i18n.buyerGoodsReceivedUrlX),
            y1:Number(this.$store.state.i18n.buyerGoodsReceivedUrlY),
            w:Number(this.$store.state.i18n.buyerGoodsReceivedUrlW),
            h:Number(this.$store.state.i18n.buyerGoodsReceivedUrlH)
          },
          text:{
            content:this.$store.state.i18n.buyerGoodsReceivedText,
            x:Number(this.$store.state.i18n.buyerGoodsReceivedTextX)-10,
            y:Number(this.$store.state.i18n.buyerGoodsReceivedTextY),
            x1:Number(this.$store.state.i18n.buyerGoodsReceivedTextX),
            y1:Number(this.$store.state.i18n.buyerGoodsReceivedTextY),
            size:18
          }
        },
        {
          img:{
            url:this.$store.state.i18n.buyerTriangleUrl1,
            x:Number(this.$store.state.i18n.buyerTriangleUrlX1)-10,
            y:Number(this.$store.state.i18n.buyerTriangleUrlY1),
            x1:Number(this.$store.state.i18n.buyerTriangleUrlX1),
            y1:Number(this.$store.state.i18n.buyerTriangleUrlY1),
            w:Number(this.$store.state.i18n.buyerTriangleUrlW1),
            h:Number(this.$store.state.i18n.buyerTriangleUrlH1)
          },
        },
        {
          img:{
            url:this.$store.state.i18n.buyerConfirmUrl,
            x:Number(this.$store.state.i18n.buyerConfirmUrlX)-10,
            y:Number(this.$store.state.i18n.buyerConfirmUrlY),
            x1:Number(this.$store.state.i18n.buyerConfirmUrlX),
            y1:Number(this.$store.state.i18n.buyerConfirmUrlY),
            w:Number(this.$store.state.i18n.buyerConfirmUrlW),
            h:Number(this.$store.state.i18n.buyerConfirmUrlH)
          },
          text:{
            content:this.$store.state.i18n.buyerConfirmText,
            x:Number(this.$store.state.i18n.buyerConfirmTextX)-10,
            y:Number(this.$store.state.i18n.buyerConfirmTextY),
            x1:Number(this.$store.state.i18n.buyerConfirmTextX),
            y1:Number(this.$store.state.i18n.buyerConfirmTextY),
            size:18
          }
        },
        {
          img:{
            url:this.$store.state.i18n.buyerDownTriangleUrl1,
            x:Number(this.$store.state.i18n.buyerDownTriangleUrlX1),
            y:Number(this.$store.state.i18n.buyerDownTriangleUrlY1)-10,
            x1:Number(this.$store.state.i18n.buyerDownTriangleUrlX1),
            y1:Number(this.$store.state.i18n.buyerDownTriangleUrlY1),
            w:Number(this.$store.state.i18n.buyerDownTriangleUrlW1),
            h:Number(this.$store.state.i18n.buyerDownTriangleUrlH1)
          },
        },
        {
          text:{
            content:this.$store.state.i18n.buyerDisputeText,
            x:Number(this.$store.state.i18n.buyerDisputeTextX),
            y:Number(this.$store.state.i18n.buyerDisputeTextY)-10,
            x1:Number(this.$store.state.i18n.buyerDisputeTextX),
            y1:Number(this.$store.state.i18n.buyerDisputeTextY),
            size:18
          },
        },
        {
          img:{
            url:this.$store.state.i18n.buyerDownTriangleUrl2,
            x:Number(this.$store.state.i18n.buyerDownTriangleUrlX2),
            y:Number(this.$store.state.i18n.buyerDownTriangleUrlY2)-10,
            x1:Number(this.$store.state.i18n.buyerDownTriangleUrlX2),
            y1:Number(this.$store.state.i18n.buyerDownTriangleUrlY2),
            w:Number(this.$store.state.i18n.buyerDownTriangleUrlW2),
            h:Number(this.$store.state.i18n.buyerDownTriangleUrlH2)
          },
        },
        {
          img:{
            url:this.$store.state.i18n.buyerArbitrationUrl,
            x:Number(this.$store.state.i18n.buyerArbitrationUrlX)-10,
            y:Number(this.$store.state.i18n.buyerArbitrationUrlY),
            x1:Number(this.$store.state.i18n.buyerArbitrationUrlX),
            y1:Number(this.$store.state.i18n.buyerArbitrationUrlY),
            w:Number(this.$store.state.i18n.buyerArbitrationUrlW),
            h:Number(this.$store.state.i18n.buyerArbitrationUrlH)
          },
          text:{
            content:this.$store.state.i18n.buyerArbitrationText,
            x:Number(this.$store.state.i18n.buyerArbitrationTextX)-10,
            y:Number(this.$store.state.i18n.buyerArbitrationTextY),
            x1:Number(this.$store.state.i18n.buyerArbitrationTextX),
            y1:Number(this.$store.state.i18n.buyerArbitrationTextY),
            size:18
          }
        },
        {
          img:{
            url:this.$store.state.i18n.buyerDownTriangleUrl3,
            x:Number(this.$store.state.i18n.buyerDownTriangleUrlX3),
            y:Number(this.$store.state.i18n.buyerDownTriangleUrlY3)-10,
            x1:Number(this.$store.state.i18n.buyerDownTriangleUrlX3),
            y1:Number(this.$store.state.i18n.buyerDownTriangleUrlY3),
            w:Number(this.$store.state.i18n.buyerDownTriangleUrlW3),
            h:Number(this.$store.state.i18n.buyerDownTriangleUrlH3)
          },
        },
        {
          img:{
            url:this.$store.state.i18n.buyerRewardUrl,
            x:Number(this.$store.state.i18n.buyerRewardUrlX)-10,
            y:Number(this.$store.state.i18n.buyerRewardUrlY),
            x1:Number(this.$store.state.i18n.buyerRewardUrlX),
            y1:Number(this.$store.state.i18n.buyerRewardUrlY),
            w:Number(this.$store.state.i18n.buyerRewardUrlW),
            h:Number(this.$store.state.i18n.buyerRewardUrlH)
          },
          text:{
            content:this.$store.state.i18n.buyerRewardText,
            x:Number(this.$store.state.i18n.buyerRewardTextX)-10,
            y:Number(this.$store.state.i18n.buyerRewardTextY),
            x1:Number(this.$store.state.i18n.buyerRewardTextX),
            y1:Number(this.$store.state.i18n.buyerRewardTextY),
            size:18
          }
        },
        {
          img:{
            url:this.$store.state.i18n.buyerDistributionNodeUrl,
            x:Number(this.$store.state.i18n.buyerDistributionNodeUrlX)-10,
            y:Number(this.$store.state.i18n.buyerDistributionNodeUrlY),
            x1:Number(this.$store.state.i18n.buyerDistributionNodeUrlX),
            y1:Number(this.$store.state.i18n.buyerDistributionNodeUrlY),
            w:Number(this.$store.state.i18n.buyerDistributionNodeUrlW),
            h:Number(this.$store.state.i18n.buyerDistributionNodeUrlH)
          },
          text:{
            
            content:this.$store.state.i18n.buyerDistributionNodeText,
            x:Number(this.$store.state.i18n.buyerDistributionNodeTextX)-10,
            y:Number(this.$store.state.i18n.buyerDistributionNodeTextY),
            x1:Number(this.$store.state.i18n.buyerDistributionNodeTextX),
            y1:Number(this.$store.state.i18n.buyerDistributionNodeTextY),
            size:18
          }
        },
        {
          img:{
            url:this.$store.state.i18n.buyerDownTriangleUrl4,
            x:Number(this.$store.state.i18n.buyerDownTriangleUrlX4),
            y:Number(this.$store.state.i18n.buyerDownTriangleUrlY4)-10,
            x1:Number(this.$store.state.i18n.buyerDownTriangleUrlX4),
            y1:Number(this.$store.state.i18n.buyerDownTriangleUrlY4),
            w:Number(this.$store.state.i18n.buyerDownTriangleUrlW4),
            h:Number(this.$store.state.i18n.buyerDownTriangleUrlH4)
          },
        },
        {
          img:{
            url:this.$store.state.i18n.buyerArbitrationResultUrl,
            x:Number(this.$store.state.i18n.buyerArbitrationResultUrlX)-10,
            y:Number(this.$store.state.i18n.buyerArbitrationResultUrlY),
            x1:Number(this.$store.state.i18n.buyerArbitrationResultUrlX),
            y1:Number(this.$store.state.i18n.buyerArbitrationResultUrlY),
            w:Number(this.$store.state.i18n.buyerArbitrationResultUrlW),
            h:Number(this.$store.state.i18n.buyerArbitrationResultUrlH)
          },
          text:{
            content:this.$store.state.i18n.buyerArbitrationResultText,
            x:Number(this.$store.state.i18n.buyerArbitrationResultTextX),
            y:Number(this.$store.state.i18n.buyerArbitrationResultTextY),
            x1:Number(this.$store.state.i18n.buyerArbitrationResultTextX),
            y1:Number(this.$store.state.i18n.buyerArbitrationResultTextY),
            size:18
          }
        },
        {
          img:{
            url:this.$store.state.i18n.buyerArrowUrl,
            x:Number(this.$store.state.i18n.buyerArrowUrlX)-10,
            y:Number(this.$store.state.i18n.buyerArrowUrlY),
            x1:Number(this.$store.state.i18n.buyerArrowUrlX),
            y1:Number(this.$store.state.i18n.buyerArrowUrlY),
            w:Number(this.$store.state.i18n.buyerArrowUrlW),
            h:Number(this.$store.state.i18n.buyerArrowUrlH)
          },
        },
        {
          img:{
            url:this.$store.state.i18n.buyerTriangleUrl2,
            x:Number(this.$store.state.i18n.buyerTriangleUrlX2)-10,
            y:Number(this.$store.state.i18n.buyerTriangleUrlY2),
            x1:Number(this.$store.state.i18n.buyerTriangleUrlX2),
            y1:Number(this.$store.state.i18n.buyerTriangleUrlY2),
            w:Number(this.$store.state.i18n.buyerTriangleUrlW2),
            h:Number(this.$store.state.i18n.buyerTriangleUrlH2)
          },
        },
        {
          img:{
            url:this.$store.state.i18n.buyerFinishUrl,
            x:Number(this.$store.state.i18n.buyerFinishUrlX)-10,
            y:Number(this.$store.state.i18n.buyerFinishUrlY),
            x1:Number(this.$store.state.i18n.buyerFinishUrlX),
            y1:Number(this.$store.state.i18n.buyerFinishUrlY),
            w:Number(this.$store.state.i18n.buyerFinishUrlW),
            h:Number(this.$store.state.i18n.buyerFinishUrlH)
          },
          text:{
            content:this.$store.state.i18n.buyerFinishText,
            x:Number(this.$store.state.i18n.buyerFinishTextX),
            y:Number(this.$store.state.i18n.buyerFinishTextY),
            x1:Number(this.$store.state.i18n.buyerFinishTextX),
            y1:Number(this.$store.state.i18n.buyerFinishTextY),
            size:18
          }
        },
      ]
    }
  },
  watch:{
      storeData(){
        this.storeAnimate();
        this.buyerAnimate();
      } 
  },
  methods: {
    storeAnimate() {
      this.canvas = this.$refs["canvas"];//指定canvas
      let ctx = this.canvas.getContext("2d")
      for(let [i,item] of this.storeData.entries()){
        if(item.img){
          let img = new Image();
          img.src=item.img.url;
          item.img.url=img;
        }
      }
      window.requestAnimationFrame(()=>{
        ctx.clearRect(0,0,904,203)
        this.animate(ctx,'storeData','num',904,203)
      })
    },
    buyerAnimate(){
      this.canvas = this.$refs["canvas1"];//指定canvas
      let ctx = this.canvas.getContext("2d")
      for(let [i,item] of this.buyerData.entries()){
        if(item.img){
          let img = new Image();
          img.src=item.img.url;
          item.img.url=img;
        }
      }
      window.requestAnimationFrame(()=>{
        ctx.clearRect(0,0,1000,536)
        this.animate(ctx,'buyerData','num1',1000,536)
      }) 
    },
    animate(ctx,data,n,canvasW,canvasH){
      this.drawImages(ctx,data,n,canvasW,canvasH)
    },
    drawImages(ctx,item,i,canvasW,canvasH){
      ctx.beginPath();
      if(this[item][this[i]].img&&this[item][this[i]].img.x<this[item][this[i]].img.x1){
        this[item][this[i]].img.x++;
      }
      if(this[item][this[i]].text&&this[item][this[i]].text.x<this[item][this[i]].text.x1){
        this[item][this[i]].text.x++;
      }
      if(this[item][this[i]].img&&this[item][this[i]].img.y<this[item][this[i]].img.y1){
        this[item][this[i]].img.y++;
      }
      if(this[item][this[i]].text&&this[item][this[i]].text.y<this[item][this[i]].text.y1){
        this[item][this[i]].text.y++;
      }
      for(let j=0;j<this[i]+1;j++){
        if(this[item][j].img){
          ctx.drawImage(this[item][j].img.url,this[item][j].img.x,this[item][j].img.y,this[item][j].img.w,this[item][j].img.h);
        }
        if(this[item][j].text){
          let txt=this[item][j].text.content.split("\n")
          for(let k=0;k<txt.length;k++){
              let x1=0  
              let y1=0
              if(txt.length>1){
                y1=this[item][j].text.y+k*28
              }else{
                y1=this[item][j].text.y
              }
            x1=this[item][j].text.x;
            ctx.font = '16px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'top';
            ctx.fillText(txt[k], x1, y1)
          } 
        }
      }
      window.requestAnimationFrame(()=>{
        if(this[item][this[item].length-1].text&&this[item][this[item].length-1].img){
          if(this[item][this[item].length-1].text.x===this[item][this[item].length-1].text.x1&&this[item][this[item].length-1].img.x===this[item][this[item].length-1].img.x1&&this[item][this[item].length-1].text.y===this[item][this[item].length-1].text.y1&&this[item][this[item].length-1].img.y===this[item][this[item].length-1].img.y1){
            console.log("结束");
            return
          } 
        }
        if(this[item][this[item].length-1].text&&!this[item][this[item].length-1].img){
          if(this[item][this[item].length-1].text.x===this[item][this[item].length-1].text.x1&&this[item][this[item].length-1].text.y===this[item][this[item].length-1].text.y1){
            console.log("结束");
            return
          } 
        }
        if(!this[item][this[item].length-1].text&&this[item][this[item].length-1].img){
          if(this[item][this[item].length-1].img.x===this[item][this[item].length-1].img.x1&&this[item][this[item].length-1].img.y===this[item][this[item].length-1].img.y1){
            console.log("结束");
            return
          } 
        }
        this.everyImageAnimateEnd(item,i);
        ctx.clearRect(0,0,canvasW,canvasH)
        this.animate(ctx,item,i,canvasW,canvasH)
      })
    },
    //判断当前图是否结束，结束num+1
    everyImageAnimateEnd(item,num){
      if(this[item][this[num]].text&&this[item][this[num]].img){
        if(this[item][this[num]].text.x===this[item][this[num]].text.x1&&this[item][this[num]].img.x===this[item][this[num]].img.x1&&this[item][this[num]].text.y===this[item][this[num]].text.y1&&this[item][this[num]].img.y===this[item][this[num]].img.y1){
          this[num]++
        } 
      }
      if(this[item][this[num]].text&&!this[item][this[num]].img){
        if(this[item][this[num]].text.x===this[item][this[num]].text.x1&&this[item][this[num]].text.y===this[item][this[num]].text.y1){
          this[num]++
        } 
      }
      if(!this[item][this[num]].text&&this[item][this[num]].img){
        if(this[item][this[num]].img.x===this[item][this[num]].img.x1&&this[item][this[num]].img.y===this[item][this[num]].img.y1){
          this[num]++
        } 
      }
    }
  },
  components: {
    EveryTitle,
    Vline
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" scoped>
section {
  width: 1000px;
  margin: 0 auto;
  .wrap {
    padding-top: 20px;
    .subTitle {
      padding-top: 70px;
      img {
        height: 23px;
      }
    }
    .store {
      margin: 46px 0 50px 0;
      text-align: center;
      img {
        width: 904px;
        height: 203px;
      }
    }
    .buyer {
      padding-top: 57px;
      img {
        width: 100%;
        height: 536px;
      }
    }
    ul {
      margin-top: 109px;
      display: flex;
      li > img {
        margin-top: 18px;
        width: 450px;
        height: 280px;
      }
      li:nth-of-type(1) {
        margin-right: 97px;
        div {
          img {
            height: 18px;
          }
        }
      }
      li:nth-of-type(2) {
        div {
          img {
            height: 18px;
          }
        }
      }
    }
  }
}
</style>
