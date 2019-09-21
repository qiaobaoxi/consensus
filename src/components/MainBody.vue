<template>
  <section>
    <div class="wrap">
       <project-introduction></project-introduction>
       <about-us id="aboutUs"></about-us>
       <white-paper id="whitePaper"></white-paper>
       <ecological-construction v-if="show1" id="menuEcologicalConstruction"></ecological-construction>
       <road-map></road-map>
       <contact-us id="contactUs"></contact-us>
    </div>
  </section>
</template>

<script>
import ProjectIntroduction from './ProjectIntroduction.vue'
import AboutUs from './AboutUs.vue'
import WhitePaper from './WhitePaper.vue'
import EcologicalConstruction from './EcologicalConstruction.vue'
import RoadMap from './RoadMap.vue'
import ContactUs from './ContactUs.vue'
export default {
  name: 'Home',
  data(){
    return{
      checked:false,
      show1:false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.show, true);
  },
  methods:{
     show(){
        var scrollTop = document.documentElement.scrollTop ||     document.body.scrollTop
        if(scrollTop>2700&&!this.show1){
          this.show1=true
        }
    },
  },
  computed:{
    a(){
      return this.$t('message.buyerGoodsReceivedText')
    }
  },
  watch:{
    a(){
        this.show1=false;
    }
  },
  components:{
      ProjectIntroduction,
      AboutUs,
      WhitePaper,
      EcologicalConstruction,
      RoadMap,
      ContactUs
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" scoped>
    section{
        .wrap{
            height: 6184px;
            background: url("../assets/mainBady.png") 0 0 no-repeat;
            background-size: 100% 100%;
        }
    }
</style>
