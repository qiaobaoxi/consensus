<template>
    <section>
        <img v-lazy="require('../assets/logo.png')" alt="">
        <ul class="menu">
          <li v-for="(item,index) in menus">
            <input type="radio" name="menu" :id="index" :checked="index===selectMenu?true:fasle">
            <label :for="index">
              <a :href="item.toTarget" @click="selectMenuFn(index)">{{item.val}}</a>
              <span></span>
            </label>
          </li>
        </ul>
        <div class="languase">
            <el-select v-model="selection" @change="switchLanguage" class="selectLag" :placeholder="selectPlaceholder">
              <el-option
                v-for="item in selectLag"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          <!-- <input type="radio" name="lan" id="English" checked>
          <label for="English" @click="switchLanguage(0)" >English</label>
          <em></em>
          <input type="radio" name="lan" id="chinese">
          <label for="chinese"  @click="switchLanguage(1)" >中文</label> -->
        </div>
    </section>
</template>
<script>
export default {
  name: 'Home',
  data(){
    return{
      toTarget:[
        "javascript:;",
        "",
        "",
        "",
        "",
      ],
      selectLan:0,
      selectMenu:0,
      selectLag: [ {
          value: '1',
          label: '한국어'
        },{
          value: '0',
          label: '中文'
        }, {
          value: '2',
          label: 'ENGLISH'
        }, {
          value: '3',
          label: '日本語'
        }],
      selection: ''
    }
  },
  mounted() {
  },
  computed:{
    menus(){
     return[{
          val:this.$store.state.i18n.menuProjectIntroduction,
          toTarget:"",
        },
        {
         val:this.$store.state.i18n.menuAboutUs,
         toTarget:"#aboutUs", 
        },
        {
         val:this.$store.state.i18n.menuWhitePaper,
         toTarget:"#whitePaper", 
        },
        {
         val:this.$store.state.i18n.menuEcologicalConstruction,
         toTarget:"#menuEcologicalConstruction", 
        },
        {
         val:this.$store.state.i18n.menuContactUs,
         toTarget:"#contactUs", 
        }]
    },
    selectPlaceholder(){
        return this.$store.state.i18n.selectPlaceholder
    }
  },
  methods:{
    show(){
      
    },
    selectMenuFn(i){
      this.selectMenu=i
      if(i===2){
        this.$router.push("/news")
      }
    },
    //切换语言
    switchLanguage(){
      console.log(this.selection)
      switch (Number(this.selection)) {
        case 0:
          this.$i18n.locale='cn'
          this.storeChange()
        break;
        case 1:
          this.$i18n.locale='kr'
          this.storeChange()
          break;
            case 2:
          this.$i18n.locale='en'
          this.storeChange()
          break;
            case 3:
          this.$i18n.locale='ja'
          this.storeChange()
          break;           
        default:
          this.$i18n.locale='cn'
          this.storeChange()
          break;
      }
    },
    storeChange(){
      this.$store.commit('increment', {
            menuProjectIntroduction:this.$t('message.menuProjectIntroduction'),
            menuAboutUs:this.$t('message.menuAboutUs'),
            menuWhitePaper: this.$t('message.menuWhitePaper'),
            menuEcologicalConstruction:this.$t('message.menuEcologicalConstruction'),
            menuContactUs:this.$t('message.menuContactUs'),
            selectPlaceholder:this.$t('message.selectPlaceholder'),
            bannerTextImg:this.$t('message.bannerTextImg'),
            introductionImg:this.$t('message.introductionImg'),
            introduction1:this.$t('message.introduction1'),
            introduction2:this.$t('message.introduction2'),
            aboutImg:this.$t('message.aboutImg'),
            aboutListTitle1:this.$t('message.aboutListTitle1'),
            aboutListContent1:this.$t('message.aboutListContent1'),
            aboutListTitle2:this.$t('message.aboutListTitle2'),
            aboutListContent2:this.$t('message.aboutListContent2'),
            aboutListTitle3:this.$t('message.aboutListTitle3'),
            aboutListContent3:this.$t('message.aboutListContent3'),
            whitePaperImg:this.$t('message.whitePaperImg'),
            whiteFuntionTitle:this.$t('message.whiteFuntionTitle'),
            whiteFuntion1:this.$t('message.whiteFuntion1'),
            whiteFuntion2:this.$t('message.whiteFuntion2'),
            whiteFuntion3:this.$t('message.whiteFuntion3'),
            whiteFuntion4:this.$t('message.whiteFuntion4'),
            ecologicalConstructionImg:this.$t('message.ecologicalConstructionImg'),
            canvasW:this.$t('message.canvasW'),
            canvasH:this.$t('message.canvasH'),
            leftArcUrl:this.$t('message.leftArcUrl'),
            leftArcUrlX:this.$t('message.leftArcUrlX'),
            leftArcUrlY:this.$t('message.leftArcUrlY'),
            leftArcUrlW:this.$t('message.leftArcUrlW'),
            leftArcUrlH:this.$t('message.leftArcUrlH'),
            storeTextX:this.$t('message.storeTextX'),
            storeTextY:this.$t('message.storeTextY'),
            storeUrl:this.$t('message.storeUrl'),
            storeUrlX:this.$t('message.storeUrlX'),
            storeUrlY:this.$t('message.storeUrlY'),
            storeUrlW:this.$t('message.storeUrlW'),
            storeUrlH:this.$t('message.storeUrlH'),
            storeText:this.$t('message.storeText'),
            storeIdUrl:this.$t('message.storeIdUrl'),
            storeIdUrlX:this.$t('message.storeIdUrlX'),
            storeIdUrlY:this.$t('message.storeIdUrlY'),
            storeIdUrlW:this.$t('message.storeIdUrlW'),
            storeIdUrlH:this.$t('message.storeIdUrlH'),
            storeIdText:this.$t('message.storeIdText'),
            storeIdTextX:this.$t('message.storeIdTextX'),
            storeIdTextY:this.$t('message.storeIdTextY'),
            storeCommodityCertificationUrl:this.$t('message.storeCommodityCertificationUrl'),
            storeCommodityCertificationUrlX:this.$t('message.storeCommodityCertificationUrlX'),
            storeCommodityCertificationUrlY:this.$t('message.storeCommodityCertificationUrlY'),
            storeCommodityCertificationUrlW:this.$t('message.storeCommodityCertificationUrlW'),
            storeCommodityCertificationUrlH:this.$t('message.storeCommodityCertificationUrlH'),
            storeCommodityCertificationText:this.$t('message.storeCommodityCertificationText'),
            storeCommodityCertificationTextX:this.$t('message.storeCommodityCertificationTextX'),
            storeCommodityCertificationTextY:this.$t('message.storeCommodityCertificationTextY'),
            rightUrl:this.$t('message.rightUrl'),
            rightUrlX:this.$t('message.rightUrlX'),
            rightUrlY:this.$t('message.rightUrlY'),
            rightUrlW:this.$t('message.rightUrlW'),
            rightUrlH:this.$t('message.rightUrlH'),
            storeBondText:this.$t('message.storeBondText'),
            storeBondUrl:this.$t('message.storeBondUrl'),
            storeBondUrlX:this.$t('message.storeBondUrlX'),
            storeBondUrlY:this.$t('message.storeBondUrlY'),
            storeBondUrlW:this.$t('message.storeBondUrlW'),
            storeBondUrlH:this.$t('message.storeBondUrlH'),
            storeBondText:this.$t('message.storeBondText'),
            storeBondTextX:this.$t('message.storeBondTextX'),
            storeBondTextY:this.$t('message.storeBondTextY'),
            storeShoppingMallText:this.$t('message.storeShoppingMallText'),
            storeShoppingMallTextX:this.$t('message.storeShoppingMallTextX'),
            storeShoppingMallTextY:this.$t('message.storeShoppingMallTextY'),
            storeShoppingMallUrlX:this.$t('message.storeShoppingMallUrlX'),
            storeShoppingMallUrlY:this.$t('message.storeShoppingMallUrlY'),
            storeShoppingMallUrl:this.$t('message.storeShoppingMallUrl'),
            storeShoppingMallUrlW:this.$t('message.storeShoppingMallUrlW'),
            storeShoppingMallUrlH:this.$t('message.storeShoppingMallUrlH'),
            storeTriangleUrl:this.$t('message.storeTriangleUrl'),
            storeTriangleUrlX:this.$t('message.storeTriangleUrlX'),
            storeTriangleUrlY:this.$t('message.storeTriangleUrlY'),
            storeTriangleUrlW:this.$t('message.storeTriangleUrlW'),
            storeTriangleUrlH:this.$t('message.storeTriangleUrlH'),
            buyerText:this.$t('message.buyerText'),
            buyerIdText:this.$t('message.buyerIdText'),
            buyerIdTextX:this.$t('message.buyerIdTextX'),
            buyerIdTextY:this.$t('message.buyerIdTextY'),
            buyerTextX:this.$t('message.buyerTextX'),
            buyerTextY:this.$t('message.buyerTextY'),
            buyerShoppingUrl:this.$t('message.buyerShoppingUrl'),
            buyerShoppingUrlX:this.$t('message.buyerShoppingUrlX'),
            buyerShoppingUrlY:this.$t('message.buyerShoppingUrlY'),
            buyerShoppingUrlW:this.$t('message.buyerShoppingUrlW'),
            buyerShoppingUrlH:this.$t('message.buyerShoppingUrlH'),
            buyerShoppingText:this.$t('message.buyerShoppingText'),
            buyerShoppingTextX:this.$t('message.buyerShoppingTextX'),
            buyerShoppingTextY:this.$t('message.buyerShoppingTextY'),
            buyerLeftArcUrl:this.$t('message.buyerLeftArcUrl'),
            buyerLeftArcUrlX:this.$t('message.buyerLeftArcUrlX'),
            buyerLeftArcUrlY:this.$t('message.buyerLeftArcUrlY'),
            buyerLeftArcUrlW:this.$t('message.buyerLeftArcUrlW'),
            buyerLeftArcUrlH:this.$t('message.buyerLeftArcUrlH'),
            buyerTriangleUrl:this.$t('message.buyerTriangleUrl'),
            buyerTriangleUrlX:this.$t('message.buyerTriangleUrlX'),
            buyerTriangleUrlY:this.$t('message.buyerTriangleUrlY'),
            buyerTriangleUrlW:this.$t('message.buyerTriangleUrlW'),
            buyerTriangleUrlH:this.$t('message.buyerTriangleUrlH'),
            buyerUrl:this.$t('message.buyerUrl'),
            buyerUrlX:this.$t('message.buyerUrlX'),
            buyerUrlY:this.$t('message.buyerUrlY'),
            buyerUrlW:this.$t('message.buyerUrlW'),
            buyerUrlH:this.$t('message.buyerUrlH'),
            buyerIdUrl:this.$t('message.buyerIdUrl'),
            buyerIdUrlX:this.$t('message.buyerIdUrlX'),
            buyerIdUrlY:this.$t('message.buyerIdUrlY'),
            buyerIdUrlW:this.$t('message.buyerIdUrlW'),
            buyerIdUrlH:this.$t('message.buyerIdUrlH'),
            buyerPayUrl:this.$t('message.buyerPayUrl'),
            buyerPayUrlX:this.$t('message.buyerPayUrlX'),
            buyerPayUrlY:this.$t('message.buyerPayUrlY'),
            buyerPayUrlW:this.$t('message.buyerPayUrlW'),
            buyerPayUrlH:this.$t('message.buyerPayUrlH'),
            buyerPayText:this.$t('message.buyerPayText'),
            buyerPayTextX:this.$t('message.buyerPayTextX'),
            buyerPayTextY:this.$t('message.buyerPayTextY'),
            buyerPayUrl1:this.$t('message.buyerPayUrl1'),
            buyerPayUrlX1:this.$t('message.buyerPayUrlX1'),
            buyerPayUrlY1:this.$t('message.buyerPayUrlY1'),
            buyerPayUrlW1:this.$t('message.buyerPayUrlW1'),
            buyerPayUrlH1:this.$t('message.buyerPayUrlH1'),
            buyerPayText1:this.$t('message.buyerPayText1'),
            buyerPayText1X:this.$t('message.buyerPayText1X'),
            buyerPayText1Y:this.$t('message.buyerPayText1Y'),
            buyerRightArcUrl:this.$t('message.buyerRightArcUrl'),
            buyerRightArcUrlX:this.$t('message.buyerRightArcUrlX'),
            buyerRightArcUrlY:this.$t('message.buyerRightArcUrlY'),
            buyerRightArcUrlW:this.$t('message.buyerRightArcUrlW'),
            buyerRightArcUrlH:this.$t('message.buyerRightArcUrlH'),
            buyerGoodsReceivedUrl:this.$t('message.buyerGoodsReceivedUrl'),
            buyerGoodsReceivedUrlX:this.$t('message.buyerGoodsReceivedUrlX'),
            buyerGoodsReceivedUrlY:this.$t('message.buyerGoodsReceivedUrlY'),
            buyerGoodsReceivedUrlW:this.$t('message.buyerGoodsReceivedUrlW'),
            buyerGoodsReceivedUrlH:this.$t('message.buyerGoodsReceivedUrlH'),
            buyerGoodsReceivedText:this.$t('message.buyerGoodsReceivedText'),
            buyerGoodsReceivedTextX:this.$t('message.buyerGoodsReceivedTextX'),
            buyerGoodsReceivedTextY:this.$t('message.buyerGoodsReceivedTextY'),
            buyerTriangleUrl1:this.$t('message.buyerTriangleUrl1'),
            buyerTriangleUrlX1:this.$t('message.buyerTriangleUrlX1'),
            buyerTriangleUrlY1:this.$t('message.buyerTriangleUrlY1'),
            buyerTriangleUrlW1:this.$t('message.buyerTriangleUrlW1'),
            buyerTriangleUrlH1:this.$t('message.buyerTriangleUrlH1'),
            buyerDownTriangleUrl:this.$t('message.buyerDownTriangleUrl'),
            buyerDownTriangleUrlX:this.$t('message.buyerDownTriangleUrlX'),
            buyerDownTriangleUrlY:this.$t('message.buyerDownTriangleUrlY'),
            buyerDownTriangleUrlW:this.$t('message.buyerDownTriangleUrlW'),
            buyerDownTriangleUrlH:this.$t('message.buyerDownTriangleUrlH'),
            buyerDownTriangleUrl1:this.$t('message.buyerDownTriangleUrl1'),
            buyerDownTriangleUrlX1:this.$t('message.buyerDownTriangleUrlX1'),
            buyerDownTriangleUrlY1:this.$t('message.buyerDownTriangleUrlY1'),
            buyerDownTriangleUrlW1:this.$t('message.buyerDownTriangleUrlW1'),
            buyerDownTriangleUrlH1:this.$t('message.buyerDownTriangleUrlH1'),
            buyerDownTriangleUrl2:this.$t('message.buyerDownTriangleUrl2'),
            buyerDownTriangleUrlX2:this.$t('message.buyerDownTriangleUrlX2'),
            buyerDownTriangleUrlY2:this.$t('message.buyerDownTriangleUrlY2'),
            buyerDownTriangleUrlW2:this.$t('message.buyerDownTriangleUrlW2'),
            buyerDownTriangleUrlH2:this.$t('message.buyerDownTriangleUrlH2'),
            buyerDisputeText:this.$t('message.buyerDisputeText'),
            buyerDisputeTextX:this.$t('message.buyerDisputeTextX'),
            buyerDisputeTextY:this.$t('message.buyerDisputeTextY'),
            buyerArbitrationUrl:this.$t('message.buyerArbitrationUrl'),
            buyerArbitrationUrlX:this.$t('message.buyerArbitrationUrlX'),
            buyerArbitrationUrlY:this.$t('message.buyerArbitrationUrlY'),
            buyerArbitrationUrlW:this.$t('message.buyerArbitrationUrlW'),
            buyerArbitrationUrlH:this.$t('message.buyerArbitrationUrlH'),  
            buyerArbitrationText:this.$t('message.buyerArbitrationText'),
            buyerArbitrationTextX:this.$t('message.buyerArbitrationTextX'),
            buyerArbitrationTextY:this.$t('message.buyerArbitrationTextY'),
            buyerDownTriangleUrl3:this.$t('message.buyerDownTriangleUrl3'),
            buyerDownTriangleUrlX3:this.$t('message.buyerDownTriangleUrlX3'),
            buyerDownTriangleUrlY3:this.$t('message.buyerDownTriangleUrlY3'),
            buyerDownTriangleUrlW3:this.$t('message.buyerDownTriangleUrlW3'),
            buyerDownTriangleUrlH3:this.$t('message.buyerDownTriangleUrlH3'),
            buyerRewardUrl:this.$t('message.buyerRewardUrl'),
            buyerRewardUrlX:this.$t('message.buyerRewardUrlX'),
            buyerRewardUrlY:this.$t('message.buyerRewardUrlY'),
            buyerRewardUrlW:this.$t('message.buyerRewardUrlW'),
            buyerRewardUrlH:this.$t('message.buyerRewardUrlH'),
            buyerRewardText:this.$t('message.buyerRewardText'),
            buyerRewardTextX:this.$t('message.buyerRewardTextX'),
            buyerRewardTextY:this.$t('message.buyerRewardTextY'),
            buyerDistributionNodeUrl:this.$t('message.buyerDistributionNodeUrl'),
            buyerDistributionNodeUrlX:this.$t('message.buyerDistributionNodeUrlX'),
            buyerDistributionNodeUrlY:this.$t('message.buyerDistributionNodeUrlY'),
            buyerDistributionNodeUrlW:this.$t('message.buyerDistributionNodeUrlW'),
            buyerDistributionNodeUrlH:this.$t('message.buyerDistributionNodeUrlH'),  
            buyerDistributionNodeText:this.$t('message.buyerDistributionNodeText'),
            buyerDistributionNodeTextX:this.$t('message.buyerDistributionNodeTextX'),
            buyerDistributionNodeTextY:this.$t('message.buyerDistributionNodeTextY'),
            buyerArbitrationResultUrl:this.$t('message.buyerArbitrationResultUrl'),
            buyerArbitrationResultUrlX:this.$t('message.buyerArbitrationResultUrlX'),
            buyerArbitrationResultUrlY:this.$t('message.buyerArbitrationResultUrlY'),
            buyerArbitrationResultUrlW:this.$t('message.buyerArbitrationResultUrlW'),
            buyerArbitrationResultUrlH:this.$t('message.buyerArbitrationResultUrlH'),
            buyerArbitrationResultText:this.$t('message.buyerArbitrationResultText'),
            buyerArbitrationResultTextX:this.$t('message.buyerArbitrationResultTextX'),
            buyerArbitrationResultTextY:this.$t('message.buyerArbitrationResultTextY'),
            buyerDownTriangleUrl4:this.$t('message.buyerDownTriangleUrl4'),
            buyerDownTriangleUrlX4:this.$t('message.buyerDownTriangleUrlX4'),
            buyerDownTriangleUrlY4:this.$t('message.buyerDownTriangleUrlY4'),
            buyerDownTriangleUrlW4:this.$t('message.buyerDownTriangleUrlW4'),
            buyerDownTriangleUrlH4:this.$t('message.buyerDownTriangleUrlH4'),
            buyerArrowUrl:this.$t('message.buyerArrowUrl'),
            buyerArrowUrlX:this.$t('message.buyerArrowUrlX'),
            buyerArrowUrlY:this.$t('message.buyerArrowUrlY'),
            buyerArrowUrlW:this.$t('message.buyerArrowUrlW'),
            buyerArrowUrlH:this.$t('message.buyerArrowUrlH'),
            buyerTriangleUrl2:this.$t('message.buyerTriangleUrl2'),
            buyerTriangleUrlX2:this.$t('message.buyerTriangleUrlX2'),
            buyerTriangleUrlY2:this.$t('message.buyerTriangleUrlY2'),
            buyerTriangleUrlW2:this.$t('message.buyerTriangleUrlW2'),
            buyerTriangleUrlH2:this.$t('message.buyerTriangleUrlH2'),
            buyerConfirmUrl:this.$t('message.buyerConfirmUrl'),
            buyerConfirmUrlX:this.$t('message.buyerConfirmUrlX'),
            buyerConfirmUrlY:this.$t('message.buyerConfirmUrlY'),
            buyerConfirmUrlW:this.$t('message.buyerConfirmUrlW'),
            buyerConfirmUrlH:this.$t('message.buyerConfirmUrlH'),
            buyerConfirmText:this.$t('message.buyerConfirmText'),
            buyerConfirmTextX:this.$t('message.buyerConfirmTextX'),
            buyerConfirmTextY:this.$t('message.buyerConfirmTextY'),
            buyerFinishUrl:this.$t('message.buyerFinishUrl'),
            buyerFinishUrlX:this.$t('message.buyerFinishUrlX'),
            buyerFinishUrlY:this.$t('message.buyerFinishUrlY'),
            buyerFinishUrlW:this.$t('message.buyerFinishUrlW'),
            buyerFinishUrlH:this.$t('message.buyerFinishUrlH'),
            buyerFinishText:this.$t('message.buyerFinishText'),
            buyerFinishTextX:this.$t('message.buyerFinishTextX'),
            buyerFinishTextY:this.$t('message.buyerFinishTextY'),
            subTitleImg:this.$t('message.subTitleImg'),
            exchangeTitleImg:this.$t('message.exchangeTitleImg'),
            atmTitleImg:this.$t('message.atmTitleImg'),
            roadImg:this.$t('message.roadImg'),
            roadMapImg:this.$t('message.roadMapImg'),
            conactUsImg:this.$t('message.conactUsImg'),
            conactUsTitleHeight:this.$t('message.conactUsTitleHeight'),
            textareaPlaceholder:this.$t('message.textareaPlaceholder'),
            button:this.$t('message.button'),
          })
    }
  },
  watch:{
   
  }
}
</script>
<style lang="less">
    .languase{
        width: 150px;
        height: 54px;
        line-height: 54px;
        .selectLag{
          .el-input__inner{
            border-radius: 17px;
            border: 1px solid #B2E4E8;
            background-color: rgba(0, 0, 0, 0) !important;
          }
          .el-input__inner::placeholder{
             color: #B2E4E8;
          }
        }
      }
</style>>
<style lang="less" scoped>
        section{
          display: flex;
          justify-content: center;
          height: 54px;
          text-align: center;
        }
        img{
            width: 80px;
            height: 41px;
            margin-right: 70px;
        }
        .menu{
          width:850px;
          display: flex;
          li{
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            height: 54px;
            color: white;
            font-size: 16px;
            flex: 1;
            label{
              cursor: pointer;
              display: block;
              a{
                text-decoration:none;
                color: white;
              }
            }
            span{
              display: none;
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              margin: auto;
              width: 14px;
              height: 2px;
              background-color:#1bdeb8;
            }
              
              input:checked+label{
                a{
                   color: #1bdeb8;
                }
                span{
                  display: block;
                }
              }
          }
        }
        input{
            display: none;
        }
</style>

