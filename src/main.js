import Vue from 'vue'
import App from './App.vue'
import VueAxios from 'vue-axios'
import Axios from 'axios';
import VueI18n from 'vue-i18n'
import { Select ,Option,Input,Button} from 'element-ui';
import messages from "./i18.js"
import VueRouter from 'vue-router'
import routes from "./routes"
import VueLazyload from 'vue-lazyload'
import Vuex from 'vuex'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(VueI18n)
// Vue.use(ElementUI);
Vue.use(VueAxios,Axios);
Vue.use(VueRouter)
Vue.use(VueLazyload)
Vue.use(Vuex)
Vue.use(Select);
Vue.use(Option);
Vue.use(Input);
Vue.use(Button);


const i18n = new VueI18n({
  locale: 'kr', // 设置地区
  messages, // 设置地区信息
})
const store = new Vuex.Store({
  state: {
    i18n:{
      menuProjectIntroduction:i18n.t('message.menuProjectIntroduction'),
      menuAboutUs:i18n.t('message.menuAboutUs'),
      menuWhitePaper: i18n.t('message.menuWhitePaper'),
      menuEcologicalConstruction:i18n.t('message.menuEcologicalConstruction'),
      menuContactUs:i18n.t('message.menuContactUs'),
      selectPlaceholder:i18n.t('message.selectPlaceholder'),
      bannerTextImg:i18n.t('message.bannerTextImg'),
      introductionImg:i18n.t('message.introductionImg'),
      introduction1:i18n.t('message.introduction1'),
      introduction2:i18n.t('message.introduction2'),
      aboutImg:i18n.t('message.aboutImg'),
      aboutListTitle1:i18n.t('message.aboutListTitle1'),
      aboutListContent1:i18n.t('message.aboutListContent1'),
      aboutListTitle2:i18n.t('message.aboutListTitle2'),
      aboutListContent2:i18n.t('message.aboutListContent2'),
      aboutListTitle3:i18n.t('message.aboutListTitle3'),
      aboutListContent3:i18n.t('message.aboutListContent3'),
      whitePaperImg:i18n.t('message.whitePaperImg'),
      whiteFuntionTitle:i18n.t('message.whiteFuntionTitle'),
      whiteFuntion1:i18n.t('message.whiteFuntion1'),
      whiteFuntion2:i18n.t('message.whiteFuntion2'),
      whiteFuntion3:i18n.t('message.whiteFuntion3'),
      whiteFuntion4:i18n.t('message.whiteFuntion4'),
      ecologicalConstructionImg:i18n.t('message.ecologicalConstructionImg'),
      canvasW:i18n.t('message.canvasW'),
      canvasH:i18n.t('message.canvasH'),
      storeTextX:i18n.t('message.storeTextX'),
      storeTextY:i18n.t('message.storeTextY'),
      storeText:i18n.t('message.storeText'),
      storeIdUrl:i18n.t('message.storeIdUrl'),
      storeIdUrlX:i18n.t('message.storeIdUrlX'),
      storeIdUrlY:i18n.t('message.storeIdUrlY'),
      storeIdUrlW:i18n.t('message.storeIdUrlW'),
      storeIdUrlH:i18n.t('message.storeIdUrlH'),
      storeIdText:i18n.t('message.storeIdText'),
      storeIdTextX:i18n.t('message.storeIdTextX'),
      storeIdTextY:i18n.t('message.storeIdTextY'),
      storeUrl:i18n.t('message.storeUrl'),
      storeUrlX:i18n.t('message.storeUrlX'),
      storeUrlY:i18n.t('message.storeUrlY'),
      storeUrlW:i18n.t('message.storeUrlW'),
      storeUrlH:i18n.t('message.storeUrlH'),
      leftArcUrl:i18n.t('message.leftArcUrl'),
      leftArcUrlX:i18n.t('message.leftArcUrlX'),
      leftArcUrlY:i18n.t('message.leftArcUrlY'),
      leftArcUrlW:i18n.t('message.leftArcUrlW'),
      leftArcUrlH:i18n.t('message.leftArcUrlH'),
      storeCommodityCertificationUrl:i18n.t('message.storeCommodityCertificationUrl'),
      storeCommodityCertificationUrlX:i18n.t('message.storeCommodityCertificationUrlX'),
      storeCommodityCertificationUrlY:i18n.t('message.storeCommodityCertificationUrlY'),
      storeCommodityCertificationUrlW:i18n.t('message.storeCommodityCertificationUrlW'),
      storeCommodityCertificationUrlH:i18n.t('message.storeCommodityCertificationUrlH'),
      storeCommodityCertificationText:i18n.t('message.storeCommodityCertificationText'),
      storeCommodityCertificationTextX:i18n.t('message.storeCommodityCertificationTextX'),
      storeCommodityCertificationTextY:i18n.t('message.storeCommodityCertificationTextY'),
      rightUrl:i18n.t('message.rightUrl'),
      rightUrlX:i18n.t('message.rightUrlX'),
      rightUrlY:i18n.t('message.rightUrlY'),
      rightUrlW:i18n.t('message.rightUrlW'),
      rightUrlH:i18n.t('message.rightUrlH'),
      storeBondUrl:i18n.t('message.storeBondUrl'),
      storeBondUrlX:i18n.t('message.storeBondUrlX'),
      storeBondUrlY:i18n.t('message.storeBondUrlY'),
      storeBondUrlW:i18n.t('message.storeBondUrlW'),
      storeBondUrlH:i18n.t('message.storeBondUrlH'),
      storeBondText:i18n.t('message.storeBondText'),
      storeBondTextX:i18n.t('message.storeBondTextX'),
      storeBondTextY:i18n.t('message.storeBondTextY'),
      storeShoppingMallText:i18n.t('message.storeShoppingMallText'),
      storeShoppingMallTextX:i18n.t('message.storeShoppingMallTextX'),
      storeShoppingMallTextY:i18n.t('message.storeShoppingMallTextY'),
      storeShoppingMallUrlX:i18n.t('message.storeShoppingMallUrlX'),
      storeShoppingMallUrlY:i18n.t('message.storeShoppingMallUrlY'),
      storeShoppingMallUrl:i18n.t('message.storeShoppingMallUrl'),
      storeShoppingMallUrlW:i18n.t('message.storeShoppingMallUrlW'),
      storeShoppingMallUrlH:i18n.t('message.storeShoppingMallUrlH'),
      storeTriangleUrl:i18n.t('message.storeTriangleUrl'),
      storeTriangleUrlX:i18n.t('message.storeTriangleUrlX'),
      storeTriangleUrlY:i18n.t('message.storeTriangleUrlY'),
      storeTriangleUrlW:i18n.t('message.storeTriangleUrlW'),
      storeTriangleUrlH:i18n.t('message.storeTriangleUrlH'),
      buyerUrl:i18n.t('message.buyerUrl'),
      buyerUrlX:i18n.t('message.buyerUrlX'),
      buyerUrlY:i18n.t('message.buyerUrlY'),
      buyerUrlW:i18n.t('message.buyerUrlW'),
      buyerUrlH:i18n.t('message.buyerUrlH'),
      buyerText:i18n.t('message.buyerText'),
      buyerTextX:i18n.t('message.buyerTextX'),
      buyerTextY:i18n.t('message.buyerTextY'),
      buyerIdUrl:i18n.t('message.buyerIdUrl'),
      buyerIdUrlX:i18n.t('message.buyerIdUrlX'),
      buyerIdUrlY:i18n.t('message.buyerIdUrlY'),
      buyerIdUrlW:i18n.t('message.buyerIdUrlW'),
      buyerIdUrlH:i18n.t('message.buyerIdUrlH'),
      buyerTriangleUrl:i18n.t('message.buyerTriangleUrl'),
      buyerTriangleUrlX:i18n.t('message.buyerTriangleUrlX'),
      buyerTriangleUrlY:i18n.t('message.buyerTriangleUrlY'),
      buyerTriangleUrlW:i18n.t('message.buyerTriangleUrlW'),
      buyerTriangleUrlH:i18n.t('message.buyerTriangleUrlH'),
      buyerIdText:i18n.t('message.buyerIdText'),
      buyerIdTextX:i18n.t('message.buyerIdTextX'),
      buyerIdTextY:i18n.t('message.buyerIdTextY'),
      buyerDownTriangleUrl:i18n.t('message.buyerDownTriangleUrl'),
      buyerDownTriangleUrlX:i18n.t('message.buyerDownTriangleUrlX'),
      buyerDownTriangleUrlY:i18n.t('message.buyerDownTriangleUrlY'),
      buyerDownTriangleUrlW:i18n.t('message.buyerDownTriangleUrlW'),
      buyerDownTriangleUrlH:i18n.t('message.buyerDownTriangleUrlH'),
      buyerShoppingUrl:i18n.t('message.buyerShoppingUrl'),
      buyerShoppingUrlX:i18n.t('message.buyerShoppingUrlX'),
      buyerShoppingUrlY:i18n.t('message.buyerShoppingUrlY'),
      buyerShoppingUrlW:i18n.t('message.buyerShoppingUrlW'),
      buyerShoppingUrlH:i18n.t('message.buyerShoppingUrlH'),
      buyerShoppingText:i18n.t('message.buyerShoppingText'),
      buyerShoppingTextX:i18n.t('message.buyerShoppingTextX'),
      buyerShoppingTextY:i18n.t('message.buyerShoppingTextY'),
      buyerLeftArcUrl:i18n.t('message.buyerLeftArcUrl'),
      buyerLeftArcUrlX:i18n.t('message.buyerLeftArcUrlX'),
      buyerLeftArcUrlY:i18n.t('message.buyerLeftArcUrlY'),
      buyerLeftArcUrlW:i18n.t('message.buyerLeftArcUrlW'),
      buyerLeftArcUrlH:i18n.t('message.buyerLeftArcUrlH'),
      buyerPayUrl:i18n.t('message.buyerPayUrl'),
      buyerPayUrlX:i18n.t('message.buyerPayUrlX'),
      buyerPayUrlY:i18n.t('message.buyerPayUrlY'),
      buyerPayUrlW:i18n.t('message.buyerPayUrlW'),
      buyerPayUrlH:i18n.t('message.buyerPayUrlH'),
      buyerPayText:i18n.t('message.buyerPayText'),
      buyerPayTextX:i18n.t('message.buyerPayTextX'),
      buyerPayTextY:i18n.t('message.buyerPayTextY'),
      buyerPayUrl1:i18n.t('message.buyerPayUrl1'),
      buyerPayUrlX1:i18n.t('message.buyerPayUrlX1'),
      buyerPayUrlY1:i18n.t('message.buyerPayUrlY1'),
      buyerPayUrlW1:i18n.t('message.buyerPayUrlW1'),
      buyerPayUrlH1:i18n.t('message.buyerPayUrlH1'),
      buyerPayText1:i18n.t('message.buyerPayText1'),
      buyerPayText1X:i18n.t('message.buyerPayText1X'),
      buyerPayText1Y:i18n.t('message.buyerPayText1Y'),
      buyerRightArcUrl:i18n.t('message.buyerRightArcUrl'),
      buyerRightArcUrlX:i18n.t('message.buyerRightArcUrlX'),
      buyerRightArcUrlY:i18n.t('message.buyerRightArcUrlY'),
      buyerRightArcUrlW:i18n.t('message.buyerRightArcUrlW'),
      buyerRightArcUrlH:i18n.t('message.buyerRightArcUrlH'),
      buyerGoodsReceivedUrl:i18n.t('message.buyerGoodsReceivedUrl'),
      buyerGoodsReceivedUrlX:i18n.t('message.buyerGoodsReceivedUrlX'),
      buyerGoodsReceivedUrlY:i18n.t('message.buyerGoodsReceivedUrlY'),
      buyerGoodsReceivedUrlW:i18n.t('message.buyerGoodsReceivedUrlW'),
      buyerGoodsReceivedUrlH:i18n.t('message.buyerGoodsReceivedUrlH'),
      buyerGoodsReceivedText:i18n.t('message.buyerGoodsReceivedText'),
      buyerGoodsReceivedTextX:i18n.t('message.buyerGoodsReceivedTextX'),
      buyerGoodsReceivedTextY:i18n.t('message.buyerGoodsReceivedTextY'),
      buyerTriangleUrl1:i18n.t('message.buyerTriangleUrl1'),
      buyerTriangleUrlX1:i18n.t('message.buyerTriangleUrlX1'),
      buyerTriangleUrlY1:i18n.t('message.buyerTriangleUrlY1'),
      buyerTriangleUrlW1:i18n.t('message.buyerTriangleUrlW1'),
      buyerTriangleUrlH1:i18n.t('message.buyerTriangleUrlH1'),
      buyerDownTriangleUrl1:i18n.t('message.buyerDownTriangleUrl1'),
      buyerDownTriangleUrlX1:i18n.t('message.buyerDownTriangleUrlX1'),
      buyerDownTriangleUrlY1:i18n.t('message.buyerDownTriangleUrlY1'),
      buyerDownTriangleUrlW1:i18n.t('message.buyerDownTriangleUrlW1'),
      buyerDownTriangleUrlH1:i18n.t('message.buyerDownTriangleUrlH1'),
      buyerDownTriangleUrl2:i18n.t('message.buyerDownTriangleUrl2'),
      buyerDownTriangleUrlX2:i18n.t('message.buyerDownTriangleUrlX2'),
      buyerDownTriangleUrlY2:i18n.t('message.buyerDownTriangleUrlY2'),
      buyerDownTriangleUrlW2:i18n.t('message.buyerDownTriangleUrlW2'),
      buyerDownTriangleUrlH2:i18n.t('message.buyerDownTriangleUrlH2'),
      buyerDisputeText:i18n.t('message.buyerDisputeText'),
      buyerDisputeTextX:i18n.t('message.buyerDisputeTextX'),
      buyerDisputeTextY:i18n.t('message.buyerDisputeTextY'),
      buyerArbitrationUrl:i18n.t('message.buyerArbitrationUrl'),
      buyerArbitrationUrlX:i18n.t('message.buyerArbitrationUrlX'),
      buyerArbitrationUrlY:i18n.t('message.buyerArbitrationUrlY'),
      buyerArbitrationUrlW:i18n.t('message.buyerArbitrationUrlW'),
      buyerArbitrationUrlH:i18n.t('message.buyerArbitrationUrlH'),
      buyerArbitrationText:i18n.t('message.buyerArbitrationText'),
      buyerArbitrationTextX:i18n.t('message.buyerArbitrationTextX'),
      buyerArbitrationTextY:i18n.t('message.buyerArbitrationTextY'),
      buyerDistributionNodeText:i18n.t('message.buyerDistributionNodeText'),
      buyerDistributionNodeTextX:i18n.t('message.buyerDistributionNodeTextX'),
      buyerDistributionNodeTextY:i18n.t('message.buyerDistributionNodeTextY'),
      buyerArbitrationResultUrl:i18n.t('message.buyerArbitrationResultUrl'),
      buyerArbitrationResultUrlX:i18n.t('message.buyerArbitrationResultUrlX'),
      buyerArbitrationResultUrlY:i18n.t('message.buyerArbitrationResultUrlY'),
      buyerArbitrationResultUrlW:i18n.t('message.buyerArbitrationResultUrlW'),
      buyerArbitrationResultUrlH:i18n.t('message.buyerArbitrationResultUrlH'),
      buyerArbitrationResultText:i18n.t('message.buyerArbitrationResultText'),
      buyerArbitrationResultTextX:i18n.t('message.buyerArbitrationResultTextX'),
      buyerArbitrationResultTextY:i18n.t('message.buyerArbitrationResultTextY'),
      buyerDownTriangleUrl3:i18n.t('message.buyerDownTriangleUrl3'),
      buyerDownTriangleUrlX3:i18n.t('message.buyerDownTriangleUrlX3'),
      buyerDownTriangleUrlY3:i18n.t('message.buyerDownTriangleUrlY3'),
      buyerDownTriangleUrlW3:i18n.t('message.buyerDownTriangleUrlW3'),
      buyerDownTriangleUrlH3:i18n.t('message.buyerDownTriangleUrlH3'),
      buyerRewardUrl:i18n.t('message.buyerRewardUrl'),
      buyerRewardUrlX:i18n.t('message.buyerRewardUrlX'),
      buyerRewardUrlY:i18n.t('message.buyerRewardUrlY'),
      buyerRewardUrlW:i18n.t('message.buyerRewardUrlW'),
      buyerRewardUrlH:i18n.t('message.buyerRewardUrlH'),
      buyerRewardText:i18n.t('message.buyerRewardText'),
      buyerRewardTextX:i18n.t('message.buyerRewardTextX'),
      buyerRewardTextY:i18n.t('message.buyerRewardTextY'),
      buyerDistributionNodeUrl:i18n.t('message.buyerDistributionNodeUrl'),
      buyerDistributionNodeUrlX:i18n.t('message.buyerDistributionNodeUrlX'),
      buyerDistributionNodeUrlY:i18n.t('message.buyerDistributionNodeUrlY'),
      buyerDistributionNodeUrlW:i18n.t('message.buyerDistributionNodeUrlW'),
      buyerDistributionNodeUrlH:i18n.t('message.buyerDistributionNodeUrlH'),
      buyerDownTriangleUrl4:i18n.t('message.buyerDownTriangleUrl4'),
      buyerDownTriangleUrlX4:i18n.t('message.buyerDownTriangleUrlX4'),
      buyerDownTriangleUrlY4:i18n.t('message.buyerDownTriangleUrlY4'),
      buyerDownTriangleUrlW4:i18n.t('message.buyerDownTriangleUrlW4'),
      buyerDownTriangleUrlH4:i18n.t('message.buyerDownTriangleUrlH4'),
      buyerArrowUrl:i18n.t('message.buyerArrowUrl'),
      buyerArrowUrlX:i18n.t('message.buyerArrowUrlX'),
      buyerArrowUrlY:i18n.t('message.buyerArrowUrlY'),
      buyerArrowUrlW:i18n.t('message.buyerArrowUrlW'),
      buyerArrowUrlH:i18n.t('message.buyerArrowUrlH'),
      buyerConfirmUrl:i18n.t('message.buyerConfirmUrl'),
      buyerTriangleUrl2:i18n.t('message.buyerTriangleUrl2'),
      buyerTriangleUrlX2:i18n.t('message.buyerTriangleUrlX2'),
      buyerTriangleUrlY2:i18n.t('message.buyerTriangleUrlY2'),
      buyerTriangleUrlW2:i18n.t('message.buyerTriangleUrlW2'),
      buyerTriangleUrlH2:i18n.t('message.buyerTriangleUrlH2'),
      buyerConfirmUrlX:i18n.t('message.buyerConfirmUrlX'),
      buyerConfirmUrlY:i18n.t('message.buyerConfirmUrlY'),
      buyerConfirmUrlW:i18n.t('message.buyerConfirmUrlW'),
      buyerConfirmUrlH:i18n.t('message.buyerConfirmUrlH'),
      buyerConfirmText:i18n.t('message.buyerConfirmText'),
      buyerConfirmTextX:i18n.t('message.buyerConfirmTextX'),
      buyerConfirmTextY:i18n.t('message.buyerConfirmTextY'),
      buyerFinishUrl:i18n.t('message.buyerFinishUrl'),
      buyerFinishUrlX:i18n.t('message.buyerFinishUrlX'),
      buyerFinishUrlY:i18n.t('message.buyerFinishUrlY'),
      buyerFinishUrlW:i18n.t('message.buyerFinishUrlW'),
      buyerFinishUrlH:i18n.t('message.buyerFinishUrlH'),
      buyerFinishText:i18n.t('message.buyerFinishText'),
      buyerFinishTextX:i18n.t('message.buyerFinishTextX'),
      buyerFinishTextY:i18n.t('message.buyerFinishTextY'),
      subTitleImg:i18n.t('message.subTitleImg'),
      exchangeTitleImg:i18n.t('message.exchangeTitleImg'),
      atmTitleImg:i18n.t('message.atmTitleImg'),
      roadImg:i18n.t('message.roadImg'),
      roadMapImg:i18n.t('message.roadMapImg'),
      conactUsImg:i18n.t('message.conactUsImg'),
      textareaPlaceholder:i18n.t('message.textareaPlaceholder'),
      conactUsTitleHeight:i18n.t('message.conactUsTitleHeight'),
      button:i18n.t('message.button'),
    }
  },
  mutations: {
    increment (state,obj) {
      state.i18n=obj
    }
  }
})

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})



new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
