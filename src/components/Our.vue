<template>
  <section>
    <div class="wrap">
      <team id="team"></team>
      <consultants></Consultants>
      <companies id="companies"></companies>
    </div>
  </section>
</template>

<script>
import Team from "./Team"
import Consultants from "./Consultants"
import Companies from "./Companies"
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
    Team,
    Consultants,
    Companies
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    section{
      background-color: #1d202f;
      .wrap{
        width: 1200px;
        margin: 0 auto;
        color:white;
      }
    }  
</style>
