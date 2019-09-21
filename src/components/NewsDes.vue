<template>
  <section class="box">
    <header>
        <div class="menu">
            <router-link to="/"><img v-lazy="require('../assets/logo.png')" alt=""></router-link> <router-link to="/" class="toHome">首页</router-link> 
        </div>
    </header>
    <div class="title">
        <div class="titleWrap">
            <h1>{{newsDes.headline}}</h1>
            <div class="author">作者:{{newsDes.author}}</div>
            <div class="date">{{newsDes.time.substring(0,10)}}</div>
        </div>
    </div>
    <article v-if="id>0">
      <div class="left" v-html="newsDes.content">
      </div>
      <div class="right">
            <h6 >其他文章</h6>
            <ul>
                <li v-for="item,index in newsData"  @click="toNewsDes(item.id)" v-if="index<4">
                    <p>{{item.headline}}</p>
                    <div class="date">
                        {{item.time.substring(0,10)}}
                    </div>
                </li>
            </ul>
      </div>
    </article>
    <vfooter></vfooter>
  </section>    
</template>
<script>
import Vmenu from "./Menu.vue"; 
import Vfooter from "./Vfooter.vue"; 
import { cpus } from 'os';
export default {
    data(){
      return {
        newsDes:{
        },
        newsData:[],
        nowPage:1,
        id:0
      }
    },
    beforeRouteEnter (to, from, next) {
        next(vm => vm.init(to.query.id))
    },
    methods:{
        init(id){
            this.id=id;
            this.axios.get("/api/getNewsDes?id="+id).then((res)=>{
                    let data=res.data;
                    if(data.code){
                        this.newsDes=data.result 
                        console.log(this.newsDes)         
                    }
            })
            this.axios.get("/api/getNewsList?page="+this.nowPage).then((res)=>{
                console.log(res.data);
                let data=res.data;
                if(data.code){
                    this.newsData=data.result;
                    this.newsData=this.newsData.reverse()
                }
            })
        },
        toNewsDes(id){
            this.$router.push({ query: { id} })
            this.init(id)
        }, 
    },
   components:{
       Vmenu,
       Vfooter
   } 
}
</script>
<style lang="less" scoped>
    header{
        background:url("../assets/newsDesMenuBg.png") no-repeat;
        background-size: 100% 100%;
        height: 108px;
        padding-top: 28px;
        .menu{
          position: relative;
          width: 1200px;
          margin: 0 auto;
            .toHome{
                line-height: 54px;
                position: absolute;
                right: 0;
                top: 0;
                bottom: 0;
                margin: auto;
                text-decoration: none;
                color: white;
            }
        }
    }
    .title{
        height: 230px;
        background-color: #f5f7fa;
        .titleWrap{
           width: 1200px;
           margin: 0 auto; 
        }
        h1{
            padding-top: 28px;
            font-size: 46px;
            color: #323232;
        }
        .author{
            margin-top: 48px;
            font-size: 22px;
            color: #323232;
        }
        .date{
            margin-top: 18px;
            font-size: 18px;
            color: #999999;
        }
    }
    article{
        width: 1200px;
        margin: 0 auto;
        .left{
            display: table-cell;
            padding-top: 32px;
            line-height: 28px;
            font-size: 18px;
            color: #323232;
            width: 783px;
            padding-right:35px;
            border-right: 1px solid #e9ecf2; 
        }
        .right{
            flex: 1;
            padding-left: 35px;
            display: table-cell;
            h6{
                padding-left: 8px;
                font-size: 22px;
                color: #323232;
                border-left: 2px solid #1bdeb8;
            }
            ul{
                padding-left: 10px;
                li{
                    cursor: pointer;
                    padding: 25px 0;
                    p{
                        line-height: 28px;
                        font-size: 18px;
                        color: #323232;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                    }
                    .date{
                        margin-top: 12px;
                        font-size: 16px;
                        color: #999999;
                    }

                }
                li:not(:last-of-type){
                    border-bottom: 1px solid #e9ecf2;
                }
            }
        }
    }
</style>
