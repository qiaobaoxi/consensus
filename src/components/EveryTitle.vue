<template>
  <section >
    <div class="title">
      <img class="" v-lazy="imgAddress" alt="" srcset="">
    </div>
  </section>
</template>

<script>
export default {
  props:['imgAddress'],
  name: 'Home',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" scoped>
    .title{
        width: 100%;
        padding: 122px 0 51px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          width: 469px;
        }
    }
</style>
