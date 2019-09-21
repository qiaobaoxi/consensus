<template>
  <section >
    <header v-html="$t('message.applicationScenarios')">
      The First Application<br>
      Scenario of Dlucky Chain
    </header>
    <vline></vline>
    <!-- <canvas ref="canvas10" width="1200" height="600"></canvas> -->
    <canvas ref="canvas" width="1200" height="600"></canvas>
    <canvas ref="canvas1" width="1200" height="600"></canvas>
    <canvas ref="canvas3" width="1200" height="600"></canvas>
    <canvas ref="canvas4" width="1200" height="600"></canvas>
    <canvas ref="canvas5" width="1200" height="600"></canvas>
    <canvas ref="canvas6" width="1200" height="600"></canvas>
    <canvas ref="canvas7" width="1200" height="600"></canvas>
    <canvas ref="canvas9" width="1200" height="600"></canvas>
  </section>
</template>

<script>
import { setTimeout } from 'timers';
import Vline from "./utilCom/line"
export default {
  name: 'HelloWorld',
  data(){
     return {
       dataRect:[
          [{
            x:2,
            y:12,
            w:120,
            h:50,
            c:"rgba(27, 222, 184,1)",
            r:5,
            text:this.$t('message.rawmaterial'),
            textC:"white"
          },
          {
            x:0,
            y:10,
            w:120,
            h:50,
            c:"rgba(39,44,65,1)",
            r:5,
            text:this.$t('message.rawmaterial'),
            textC:"white"
          }
          ],
          [{
            x:2,
            y:12,
            w:120,
            h:50,
            c:"rgba(27, 222, 184,1)",
            r:5,
            text:this.$t('message.treatmen'),
            textC:"white"
          },
          {
            x:0,
            y:10,
            w:120,
            h:50,
            c:"rgba(39,44,65,1)",
            r:5,
            text:this.$t('message.treatmen'),
            textC:"white"
          }
          ],
          [{
            x:2,
            y:12,
            w:120,
            h:50,
            c:"rgba(27, 222, 184,1)",
            r:5,
            text:this.$t('message.sterilization'),
            textC:"white"
          },
          {
            x:0,
            y:10,
            w:120,
            h:50,
            c:"rgba(39,44,65,1)",
            r:5,
            text:this.$t('message.sterilization'),
            textC:"white"
          }
          ],
          [{
            x:2,
            y:12,
            w:120,
            h:50,
            c:"rgba(27, 222, 184,1)",
            r:5,
            text:this.$t('message.purification'),
            textC:"white"
          },
          {
            x:0,
            y:10,
            w:120,
            h:50,
            c:"rgba(39,44,65,1)",
            r:5,
            text:this.$t('message.purification'),
            textC:"white"
          }
          ],
          [{
            x:2,
            y:12,
            w:120,
            h:50,
            c:"rgba(27, 222, 184,1)",
            r:5,
            text:this.$t('message.internal'),
            textC:"white"
          },
          {
            x:0,
            y:10,
            w:120,
            h:50,
            c:"rgba(39,44,65,1)",
            r:5,
            text:this.$t('message.internal'),
            textC:"white"
          }
          ],
          [{
            x:2,
            y:12,
            w:120,
            h:50,
            c:"rgba(27, 222, 184,1)",
            r:5,
            text:this.$t('message.outSide'),
            textC:"white"
          },
          {
            x:0,
            y:10,
            w:120,
            h:50,
            c:"rgba(39,44,65,1)",
            r:5,
            text:this.$t('message.outSide'),
            textC:"white"
          }
          ],
          [{
            x:2,
            y:8,
            w:134,
            h:76,
            c:"rgba(27, 222, 184,1)",
            r:5,
            text:this.$t('message.finalProduct'),
            textC:"white"
          },
          {
            x:0,
            y:6,
            w:134,
            h:76,
            c:"rgba(39,44,65,1)",
            r:5,
            text:this.$t('message.finalProduct'),
            textC:"white"
          }
          ],
        ],
        DEye:[{
            x:502,
            y:214,
            w:420,
            h:50,
            c:"rgba(27, 222, 184,1)",
            r:5,
            text:"D-Eye",
            textC:"white"
          },
          {
            x:500,
            y:212,
            w:420,
            h:50,
            c:"rgba(39,44,65,1)",
            r:5,
            text:"D-Eye",
            textC:"white"
          }
          ],
          DCode:[{
            x:1202,
            y:214,
            w:172,
            h:50,
            c:"rgba(27, 222, 184,1)",
            r:5,
            text:"D-Code",
            textC:"white"
          },
          {
            x:1200,
            y:212,
            w:172,
            h:50,
            c:"rgba(39,44,65,1)",
            r:5,
            text:"D-Code",
            textC:"white"
          }
          ],
          DluckyChain:[{
            x:726,
            y:382,
            w:420,
            h:50,
            c:"rgba(27, 222, 184,1)",
            r:5,
            text:this.$t('message.dluckyChain'),
            textC:"white"
          },
          {
            x:724,
            y:380,
            w:420,
            h:50,
            c:"rgba(39,44,65,1)",
            r:5,
            text:this.$t('message.dluckyChain'),
            textC:"white"
          }
        ],
          DTag:[{
            x:1200,
            y:382,
            w:174,
            h:50,
            c:"rgba(27, 222, 184,1)",
            r:5,
            text:"D-Tag",
            textC:"white"
          },
          {
            x:1198,
            y:380,
            w:174,
            h:50,
            c:"rgba(39,44,65,1)",
            r:5,
            text:"D-Tag",
            textC:"white"
          }
          ],
           UsersData:[{
            x:1200,
            y:470,
            w:174,
            h:50,
            c:"rgba(27, 222, 184,1)",
            r:5,
            text:this.$t('message.users'),
            textC:"white"
          },
          {
            x:1198,
            y:470,
            w:174,
            h:50,
            c:"rgba(39,44,65,1)",
            r:5,
            text:this.$t('message.users'),
            textC:"white"
          }
        ],
       DEyeArrow:[],
       DCodeArrow:{
          x:726,
          y:212,
          w:280,
          h:2,
          c:"#1bdeb8"
       },
       DluckyChainArrow:[{
          x:356,
          y:366,
          w:2,
          h:90,
          c:"#1bdeb8",
          r:90
       },
       {
          x:665,
          y:270,
          w:2,
          h:90,
          c:"#1bdeb8",
          r:-90
       }
       ],
       ENCodeArrow:{
          endx:888,
          endy:84,
          r:224
       },
       DTagArrow:{
          x:734,
          y:406,
          w:280,
          h:2,
          c:"#1bdeb8",
          r:0
       },
       UsersArrow:{
          x:1114,
          y:456,
          w:2,
          h:16,
          c:"#1bdeb8",
          r:90
       },
       EnCodeLine:{
          x:1200-172/2,
          y:212,
          x1:918,
          y1:154,
          x2:852,
          y2:35,
          c:"#1bdeb8",
          r:10,
          supplement:50
       },
       InputDataRect:[{
         w:200,
         h:34,
         x:400,
         y:110,
         strokeColor:"#1bdeb8",
         c:"white",
         r:15,
         text:this.$t('message.inputdData'),
         textC:"#000000"
       },
       {
         w:224,
         h:46,
         x:766,
         y:212,
         strokeColor:"#1bdeb8",
         c:"white",
         r:15,
         text:this.$t('message.application'),
         textC:"#000000"
       },
       {
         w:200,
         h:36,
         x:850,
         y:120,
         strokeColor:"#1bdeb8",
         c:"white",
         r:15,
         text:this.$t('message.encoding'),
         textC:"#000000"
       },
       {
         w:200,
         h:34,
         x:250,
         y:306,
         strokeColor:"#1bdeb8",
         c:"white",
         r:15,
         text:this.$t('message.uploadData'),
         textC:"#000000"
       },
       {
         w:200,
         h:34,
         x:568,
         y:300,
         strokeColor:"#1bdeb8",
         c:"white",
         r:15,
         text:this.$t('message.returnCode'),
         textC:"#000000"
       }
       ],
       backgroundArcData:[],
       //0表示未进入1表示进入
       inputDataMouseSign:0
     }
  },
  mounted() {
    this.inputData();
    // this.animateBackground();
    //输入框
  },
  computed:{
   a(){
      return this.$t('message.menuHome');
   }
  },
  methods:{
    animateBackground(){
        this.canvas = this.$refs["canvas10"];//指定canvas
        let ctx = this.canvas.getContext("2d");
        window.setInterval(() => {
          ctx.clearRect(0,0,1200,600);
          this.backgroundArcData.push({
            x:Math.random()*1200,y:Math.random()*600,radius:0,start:0,r:27,g:222,b:184,a:1,
          })
          for(let i=0;i<this.backgroundArcData.length;i++){
            let radius=this.backgroundArcData[i].radius++;
            this.backgroundArcData[i].a=(this.backgroundArcData[i].a*100-100/50)/100
            if(radius>=50){
              this.backgroundArcData.splice(i,1);
              continue;
            }
            this.addArc(ctx,this.backgroundArcData[i].x,this.backgroundArcData[i].y,radius,0,this.backgroundArcData[i].r,this.backgroundArcData[i].g,this.backgroundArcData[i].b,this.backgroundArcData[i].a)
          }
        }, 40);
    },
    addArc(ctx,x,y,radius,start,r,g,b,a){
      ctx.beginPath();
      ctx.arc(x,y,radius,start,2*Math.PI);
      ctx.fillStyle=`rgba(${r},${g},${b},${a})`
      ctx.fill();
    }, 
    inputData(){
      this.translate("canvas",80,40,this.showTranslate)
    },
    translate(obj,times,startTime,fn){
      this.canvas = this.$refs[`${obj}`];//指定canvas
      let ctx = this.canvas.getContext("2d");//设置2D渲染区域
      //录入数据之前模块事件
      this.canvas.addEventListener('mousemove', (ev)=>{
        this.inputDataMouseMove(ev,ctx,times,startTime)
      }, false);
      this.run(ctx,times,startTime,fn)
    },
    run(ctx,times,startTime,fn){
       for(let j=startTime;j<times;j++){
        setTimeout(()=>{
          fn(ctx,times,j)
        },j*12)
      } 
    },
    //输入框动画
    showTranslate(ctx,num,k){
        let dataRect=this.dataRect
        ctx.clearRect(0,0,1200,600);
        this.crateDataSource(ctx,dataRect,num,k)
        for(let i=0;i<(dataRect.length-1);i++){
          let arrow=dataRect[i][0].x+i*177+128
          this.redenArrow(ctx, arrow*(k/num), (dataRect[i][0].y+dataRect[i][0].h/2)*(k/num),(arrow+40)*(k/num),(dataRect[i][0].y+dataRect[i][0].h/2)*(k/num),30,20,1,'#2e2e2e');
        }
        if(k===num-1){
          this.translate("canvas1",80,40,this.inputArrow)
        }
    },
    //录入数据之前模块事件
    inputDataMouseMove(ev,ctx,num,k){
      let dataRect=this.dataRect;
      for(let i=0;i<dataRect.length;i++){
          for(let j=0;j<dataRect[i].length;j++){
            //渲染方框
            if(ev.layerX>(dataRect[i][j].x+i*177)&&ev.layerX<((dataRect[i][j].x+i*177)+dataRect[i][j].w)&&ev.layerY>dataRect[i][j].y&&ev.layerY<(dataRect[i][j].y+dataRect[i][j].h)){
              if(this.inputDataMouseSign===0){
                  this.dataRect[i][0].w=470;
                  this.dataRect[i][0].h=100;
                   this.dataRect[i][1].w=470;
                  this.dataRect[i][1].h=100;
                  this.run(ctx,num,k,this.showTranslate)
                  this.inputDataMouseSign=1
              }
            }
          }
          //渲染文字
          // this.redenText(ctx,dataRect[i][0].x+i*177*(k/num),dataRect[i][0].y*(k/num),dataRect[i][0].w,dataRect[i][0].h,dataRect[i][0].textC,dataRect[i][0].r,dataRect[i][0].text)
      }
    },
    //录入数据之前模块生成
    crateDataSource(ctx,dataRect,num,k){
      for(let i=0;i<dataRect.length;i++){
          for(let j=0;j<dataRect[i].length;j++){
            //渲染方框
            this.redenRect(ctx,(dataRect[i][j].x+i*177)*(k/num),dataRect[i][j].y*(k/num),dataRect[i][j].w,dataRect[i][j].h,dataRect[i][j].c,dataRect[i][j].r,dataRect[i][j].text)
          }
          //渲染文字
          this.redenText(ctx,dataRect[i][0].x+i*177*(k/num),dataRect[i][0].y*(k/num),dataRect[i][0].w,dataRect[i][0].h,dataRect[i][0].textC,dataRect[i][0].r,dataRect[i][0].text)
      }
    },
    //输入箭头
    inputArrow(ctx,num,k){
        let dataRect=this.dataRect;
        let inputData=[
          {
            x:0,
            y:0,
            x1:245,
            y1:142,
            c:"#1bdeb8",
            r:10,
            supplement:50
          },
          {
            x:0,
            y:0,
            x1:346,
            y1:124,
            c:"#1bdeb8",
            r:40,
            supplement:30
          },
          {
            x:0,
            y:0,
            x1:500,
            y1:101,
            c:"#1bdeb8",
            r:80,
            supplement:1
          },
          {
            x:0,
            y:0,
            x1:644,
            y1:124,
            c:"#1bdeb8",
            r:120,
            supplement:-25
          },
          {
            x:0,
            y:0,
            x1:758,
            y1:140,
            c:"#1bdeb8",
            r:140,
            supplement:-50
          },
        ]
        ctx.clearRect(0,0,1200,600);
        for(let i=0;i<inputData.length;i++){
          //渲染文字
          let x=177*(i+1)-28
          let y=this.dataRect[i][0].y+this.dataRect[i][0].h/2
          let endx=(500-x)*(k/num)+x
          let endy=(224-y)*(k/num)+y
          if(k===num/2){
            this.DEyeArrow.push({
              endx:inputData[i].x1+inputData[i].supplement,
              endy:inputData[i].y1,
              r:inputData[i].r
            })
          }
          this.inputLine(ctx,x,y,inputData[i].x1,inputData[i].y1,endx,endy,inputData[i].c)
        }
        if(k===num/2){
          this.translate("canvas3",80,40,this.Eye)
        }
        
    },
    //deye框绘制
    Eye(ctx,num,k){
        ctx.clearRect(0,0,1200,600);
        for(let i=0;i<this.DEye.length;i++){
              //渲染方框
              let endx=this.DEye[i].x-(this.DEye[i].w/2)
              let endy=-50*(k/num)+this.DEye[i].y+50
              this.redenRect(ctx,endx,endy,this.DEye[i].w,this.DEye[i].h,this.DEye[i].c,this.DEye[i].r,this.DEye[i].text)
              this.redenText(ctx,endx,endy,this.DEye[i].w,this.DEye[i].h,this.DEye[i].textC,this.DEye[i].r,this.DEye[i].text)
        }
        for(let i=0;i<this.DEyeArrow.length;i++){
          let tox = this.DEyeArrow[i].endx;
          let toy=-50*(k/num)+this.DEyeArrow[i].endy+50
          this.redenArrow1(ctx, 0, 0,Math.trunc(tox),Math.trunc(toy),30,15,1,'rgba(27, 222, 184,1)',this.DEyeArrow[i].r);
          if(k===num/2){
            this.translate("canvas4",80,40,this.Code)
            this.translate("canvas6",80,40,this.dluckyChain)
          }
        }
        //input Data
        let endy=-50*(k/num)+this.InputDataRect[0].y+50
        this.redenRect(ctx,this.InputDataRect[0].x,endy,this.InputDataRect[0].w,this.InputDataRect[0].h,this.InputDataRect[0].c,this.InputDataRect[0].r,this.InputDataRect[0].text,this.InputDataRect[0].strokeColor)
        this.redenText(ctx,this.InputDataRect[0].x,endy,this.InputDataRect[0].w,this.InputDataRect[0].h,this.InputDataRect[0].textC,this.InputDataRect[0].r,this.InputDataRect[0].text)
    },
    //d-code
    Code(ctx,num,k){
      ctx.clearRect(0,0,1200,600);
      for(let i=0;i<this.DCode.length;i++){
            //渲染方框
            let endx=this.DCode[i].x-this.DCode[i].w-10
            let endy=-50*(k/num)+this.DCode[i].y+50
            this.redenRect(ctx,endx,endy,this.DCode[i].w,this.DCode[i].h,this.DCode[i].c,this.DCode[i].r,this.DCode[i].text)
            this.redenText(ctx,endx,endy,this.DCode[i].w,this.DCode[i].h,this.DCode[i].textC,this.DCode[i].r,this.DCode[i].text)
      }
      let fromx =50*(k/num)+this.DCodeArrow.x-50;
      let fromy=this.DCodeArrow.y+this.DCode[0].h/2
      this.redenArrow(ctx, fromx, fromy,Math.trunc(fromx+this.DCodeArrow.w),Math.trunc(fromy),30,15,this.DCodeArrow.h,this.DCodeArrow.c);
      //Application code and query code Cache to DCode
      let endy=-50*(k/num)+this.InputDataRect[1].y+50
      this.redenRect(ctx,this.InputDataRect[1].x,endy,this.InputDataRect[1].w,this.InputDataRect[1].h,this.InputDataRect[1].c,this.InputDataRect[1].r,this.InputDataRect[1].text,this.InputDataRect[1].strokeColor)
      this.redenText(ctx,this.InputDataRect[1].x,endy,this.InputDataRect[1].w,this.InputDataRect[1].h,this.InputDataRect[1].textC,this.InputDataRect[1].r,this.InputDataRect[1].text)
      if(k===num/2){
        this.translate("canvas5",80,40,this.EnCode)
      } 
    },
    //dluckyChain部分绘制
    dluckyChain(ctx,num,k){
        ctx.clearRect(0,0,1200,600);
        for(let i=0;i<this.DluckyChain.length;i++){
              //渲染方框
              let endx=this.DluckyChain[i].x-this.DluckyChain[i].w-10
              let endy=-50*(k/num)+this.DluckyChain[i].y+50
              this.redenRect(ctx,endx,endy,this.DluckyChain[i].w,this.DluckyChain[i].h,this.DluckyChain[i].c,this.DluckyChain[i].r,this.DluckyChain[i].text)
              this.redenText(ctx,endx,endy,this.DluckyChain[i].w,this.DluckyChain[i].h,this.DluckyChain[i].textC,this.DluckyChain[i].r,this.DluckyChain[i].text)
        }
        this.DluckyChainArrow.forEach((item)=>{
            let fromx =item.x;
            let fromy=-50*(k/num)+item.y+50;
            this.redenArrow(ctx, fromx-item.h, fromy,fromx,fromy,30,15,item.w,item.c,item.r);
        })
        
        let endy=-50*(k/num)+this.InputDataRect[3].y+50
        this.redenRect(ctx,this.InputDataRect[3].x,endy,this.InputDataRect[3].w,this.InputDataRect[3].h,this.InputDataRect[3].c,this.InputDataRect[3].r,this.InputDataRect[3].text,this.InputDataRect[3].strokeColor)
        this.redenText(ctx,this.InputDataRect[3].x,endy,this.InputDataRect[3].w,this.InputDataRect[3].h,this.InputDataRect[3].textC,this.InputDataRect[3].r,this.InputDataRect[3].text)
        let endy1=-50*(k/num)+this.InputDataRect[4].y+50
        this.redenRect(ctx,this.InputDataRect[4].x,endy1,this.InputDataRect[4].w,this.InputDataRect[4].h,this.InputDataRect[4].c,this.InputDataRect[4].r,this.InputDataRect[4].text,this.InputDataRect[4].strokeColor)
        this.redenText(ctx,this.InputDataRect[4].x,endy1,this.InputDataRect[4].w,this.InputDataRect[4].h,this.InputDataRect[4].textC,this.InputDataRect[4].r,this.InputDataRect[4].text)
        if(k===num/2){
          this.translate("canvas7",80,40,this.Tag)
        } 
    },
    //DTag
    Tag(ctx,num,k){
        ctx.clearRect(0,0,1200,600);
        for(let i=0;i<this.DTag.length;i++){
          let endx=50*(k/num)+this.DTag[i].x-50-this.DTag[i].w
          this.redenRect(ctx,endx,this.DTag[i].y,this.DTag[i].w,this.DTag[i].h,this.DTag[i].c,this.DTag[i].r,this.DTag[i].text,this.DTag[i].strokeColor)
          this.redenText(ctx,endx,this.DTag[i].y,this.DTag[i].w,this.DTag[i].h,this.DTag[i].textC,this.DTag[i].r,this.DTag[i].text)  
        } 
        let fromx =50*(k/num)+this.DTagArrow.x-50;
        let fromy=this.DTagArrow.y
        this.redenArrow(ctx, fromx, fromy,Math.trunc(fromx+this.DTagArrow.w),Math.trunc(fromy),30,15,this.DTagArrow.h,this.DTagArrow.c); 
        if(k===num/2){
          this.translate("canvas9",80,40,this.Users)
        }
    },
    //DTag
    Users(ctx,num,k){
        ctx.clearRect(0,0,1200,600);
        this.UsersData.forEach((item)=>{
           let endx=item.x-item.w
          let endy=-50*(k/num)+item.y+50
          this.redenRect(ctx,endx,endy,item.w,item.h,item.c,item.r,item.text)
          this.redenText(ctx,endx,endy,item.w,item.h,item.textC,item.r,item.text)
        })
        let fromx =this.UsersArrow.x;
        let fromy=-50*(k/num)+this.UsersArrow.y+50;
        this.redenArrow(ctx, fromx-this.UsersArrow.h, fromy,fromx,fromy,30,15,this.UsersArrow.w,this.UsersArrow.c,this.UsersArrow.r);
    },
    //EnCode
    EnCode(ctx,num,k){
         ctx.clearRect(0,0,1200,600);
            this.inputLine(ctx,this.EnCodeLine.x,this.EnCodeLine.y,this.EnCodeLine.x+(this.EnCodeLine.x1-this.EnCodeLine.x)*k/num,this.EnCodeLine.y+(this.EnCodeLine.y1-this.EnCodeLine.y)*k/num,this.EnCodeLine.x+(this.EnCodeLine.x2-this.EnCodeLine.x)*k/num,this.EnCodeLine.y+(this.EnCodeLine.y2-this.EnCodeLine.y)*k/num,this.EnCodeLine.c)
            let tox = this.ENCodeArrow.endx;
            let toy=-50*(k/num)+this.ENCodeArrow.endy+50
            this.redenArrow1(ctx, 0, 0,Math.trunc(tox),Math.trunc(toy),30,15,1,'rgba(27, 222, 184)',this.ENCodeArrow.r);
            // //Application code and query code Cache to DCode
            let endy=-50*(k/num)+this.InputDataRect[2].y+50
            this.redenRect(ctx,this.InputDataRect[2].x,endy,this.InputDataRect[2].w,this.InputDataRect[2].h,this.InputDataRect[2].c,this.InputDataRect[2].r,this.InputDataRect[2].text,this.InputDataRect[2].strokeColor)
            this.redenText(ctx,this.InputDataRect[2].x,endy,this.InputDataRect[2].w,this.InputDataRect[2].h,this.InputDataRect[2].textC,this.InputDataRect[2].r,this.InputDataRect[2].text)
    },
    //输入箭头绘制
    inputLine(ctx,x,y,pathx,pathy,tox,toy,c){
        ctx.beginPath();
        ctx.moveTo( x , y );
        ctx.quadraticCurveTo( pathx , pathy , tox , toy);
        ctx.lineWidth  = 2 ;
        ctx.strokeStyle = c;
        ctx.stroke();
    },
    //画方框
    redenRect(ctx,x,y,w,h,c1,radius,text,strokeColor=c1){
        ctx.beginPath();
        ctx.arc(x + radius, y + radius, radius, Math.PI, Math.PI * 3 / 2);   
        ctx.lineTo(w - radius + x, y);   
        ctx.arc(w - radius + x, radius + y, radius, Math.PI * 3 / 2, Math.PI * 2);   
        ctx.lineTo(w + x, h + y - radius);   
        ctx.arc(w - radius + x, h - radius + y, radius, 0, Math.PI * 1 / 2);   
        ctx.lineTo(radius + x, h +y);   
        ctx.arc(radius + x, h - radius + y, radius, Math.PI * 1 / 2, Math.PI);
        ctx.closePath(); 
        ctx.lineWidth  = 2 ;
        ctx.strokeStyle =strokeColor;
        ctx.fillStyle=c1;
        ctx.stroke();
        ctx.fill()
    },
    //画文字
    redenText(ctx,x,y,w,h,c,radius,text){
         let txt=text.split("\n")
         for(let i=0;i<txt.length;i++){
            let x1=0  
            let y1=0
            if(txt.length>1){
              y1=y+h/2-4+i*16
            }else{
              y1=y+h/2+4
            }
            ctx.font="14px Arial";
            x1=(w-ctx.measureText(txt[i]).width)/2+x;
            ctx.beginPath();
            ctx.textBaseline="center";
            ctx.fillStyle=c;
            ctx.fillText(txt[i],x1,y1);
            ctx.closePath();  
         } 
    },
    //画箭头
    redenArrow(ctx, fromX, fromY, toX, toY,theta=30,headlen=10,width=1,color='#000',r=0){
         ctx.beginPath(); 
         var angle = Math.atan2(fromY - toY, fromX - toX) * 180 / Math.PI,
            angle1 = (angle + theta) * Math.PI / 180,
            angle2 = (angle - theta) * Math.PI / 180,
            topX = headlen * Math.cos(angle1),
            topY = headlen * Math.sin(angle1),
            botX = headlen * Math.cos(angle2),
            botY = headlen * Math.sin(angle2);
            ctx.save();
            ctx.beginPath();
            var arrowX, arrowY;
            ctx.translate(toX,toY)
            ctx.rotate(r*Math.PI/180)
            ctx.translate(-toX,-toY)
            if(fromX&&fromY){
              ctx.moveTo(fromX, fromY);
              ctx.lineTo(toX, toY);                
            }
            arrowX = toX + topX;
            arrowY = toY + topY;
            ctx.moveTo(arrowX+10, arrowY);
            ctx.lineTo(toX, toY);
            arrowX = toX + botX;
            arrowY = toY + botY;
            ctx.lineTo(arrowX+10, arrowY);
            ctx.strokeStyle = color;
            ctx.lineWidth = width;
            ctx.stroke();
            ctx.restore();
    },
    //无主线箭头
    redenArrow1(ctx, fromX, fromY, toX, toY,theta,headlen,width,color,r=0){
         ctx.beginPath(); 
         var theta = theta || 30,
            headlen = headlen || 10,
            width = width || 1,
            color = color || '#000',
            angle = Math.atan2(fromY - toY, fromX - toX) * 180 / Math.PI,
            angle1 = (angle + theta) * Math.PI / 180,
            angle2 = (angle - theta) * Math.PI / 180,
            topX = headlen * Math.cos(angle1),
            topY = headlen * Math.sin(angle1),
            botX = headlen * Math.cos(angle2),
            botY = headlen * Math.sin(angle2);
            ctx.save();
            ctx.beginPath();
            var arrowX, arrowY;
            ctx.translate(toX,toY)
            ctx.rotate(r*Math.PI/180)
            ctx.translate(-toX,-toY)
            ctx.moveTo(toX, toY);
            ctx.lineTo(toX, toY);                
            arrowX = toX + topX;
            arrowY = toY + topY;
            ctx.moveTo(arrowX, arrowY);
            ctx.lineTo(toX, toY);
            arrowX = toX + botX;
            arrowY = toY + botY;
            ctx.lineTo(arrowX, arrowY);
            ctx.strokeStyle = color;
            ctx.lineWidth = width;
            ctx.stroke();
            ctx.restore();
    },
  },
  components:{
      Vline
    },
  watch:{
    a(){
      this.dataRect=[
          [{
            x:2,
            y:12,
            w:120,
            h:50,
            c:"rgba(27, 222, 184)",
            r:5,
            text:this.$t('message.rawmaterial'),
            textC:"white"
          },
          {
            x:0,
            y:10,
            w:120,
            h:50,
            c:"rgb(39,44,65)",
            r:5,
            text:this.$t('message.rawmaterial'),
            textC:"white"
          }
          ],
          [{
            x:2,
            y:12,
            w:120,
            h:50,
            c:"rgba(27, 222, 184)",
            r:5,
            text:this.$t('message.treatmen'),
            textC:"white"
          },
          {
            x:0,
            y:10,
            w:120,
            h:50,
            c:"rgb(39,44,65)",
            r:5,
            text:this.$t('message.treatmen'),
            textC:"white"
          }
          ],
          [{
            x:2,
            y:12,
            w:120,
            h:50,
            c:"rgba(27, 222, 184)",
            r:5,
            text:this.$t('message.sterilization'),
            textC:"white"
          },
          {
            x:0,
            y:10,
            w:120,
            h:50,
            c:"rgb(39,44,65)",
            r:5,
            text:this.$t('message.sterilization'),
            textC:"white"
          }
          ],
          [{
            x:2,
            y:12,
            w:120,
            h:50,
            c:"rgba(27, 222, 184)",
            r:5,
            text:this.$t('message.purification'),
            textC:"white"
          },
          {
            x:0,
            y:10,
            w:120,
            h:50,
            c:"rgb(39,44,65)",
            r:5,
            text:this.$t('message.purification'),
            textC:"white"
          }
          ],
          [{
            x:2,
            y:12,
            w:120,
            h:50,
            c:"rgba(27, 222, 184)",
            r:5,
            text:this.$t('message.internal'),
            textC:"white"
          },
          {
            x:0,
            y:10,
            w:120,
            h:50,
            c:"rgb(39,44,65)",
            r:5,
            text:this.$t('message.internal'),
            textC:"white"
          }
          ],
          [{
            x:2,
            y:12,
            w:120,
            h:50,
            c:"rgba(27, 222, 184)",
            r:5,
            text:this.$t('message.outSide'),
            textC:"white"
          },
          {
            x:0,
            y:10,
            w:120,
            h:50,
            c:"rgb(39,44,65)",
            r:5,
            text:this.$t('message.outSide'),
            textC:"white"
          }
          ],
          [{
            x:2,
            y:8,
            w:134,
            h:76,
            c:"rgba(27, 222, 184)",
            r:5,
            text:this.$t('message.finalProduct'),
            textC:"white"
          },
          {
            x:0,
            y:6,
            w:134,
            h:76,
            c:"rgb(39,44,65)",
            r:5,
            text:this.$t('message.finalProduct'),
            textC:"white"
          }
          ],
        ]
        this.DluckyChain=[{
            x:726,
            y:382,
            w:420,
            h:50,
            c:"rgba(27, 222, 184)",
            r:5,
            text:this.$t('message.dluckyChain'),
            textC:"white"
          },
          {
            x:724,
            y:380,
            w:420,
            h:50,
            c:"rgba(39,44,65)",
            r:5,
            text:this.$t('message.dluckyChain'),
            textC:"white"
          },
        ]
        this.UsersData=[{
            x:1200,
            y:470,
            w:174,
            h:50,
            c:"rgba(27, 222, 184)",
            r:5,
            text:this.$t('message.users'),
            textC:"white"
          },
          {
            x:1198,
            y:470,
            w:174,
            h:50,
            c:"rgba(39,44,65)",
            r:5,
            text:this.$t('message.users'),
            textC:"white"
          }
        ]
        this.InputDataRect=[{
         w:200,
         h:34,
         x:400,
         y:110,
         strokeColor:"#1bdeb8",
         c:"white",
         r:15,
         text:this.$t('message.inputdData'),
         textC:"#000000"
       },
       {
         w:224,
         h:46,
         x:766,
         y:212,
         strokeColor:"#1bdeb8",
         c:"white",
         r:15,
         text:this.$t('message.application'),
         textC:"#000000"
       },
       {
         w:200,
         h:36,
         x:850,
         y:120,
         strokeColor:"#1bdeb8",
         c:"white",
         r:15,
         text:this.$t('message.encoding'),
         textC:"#000000"
       },
       {
         w:200,
         h:34,
         x:250,
         y:306,
         strokeColor:"#1bdeb8",
         c:"white",
         r:15,
         text:this.$t('message.uploadData'),
         textC:"#000000"
       },
       {
         w:200,
         h:34,
         x:568,
         y:300,
         strokeColor:"#1bdeb8",
         c:"white",
         r:15,
         text:this.$t('message.returnCode'),
         textC:"#000000"
       }
       ]
        this.inputData();
    }
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    section{
      position: relative;
      width: 1200px;
      height: 1016px;
      margin: 0 auto;
      header{
        padding: 114px 0 33px 0;
        font-size: 56px;
        color: #323232;
        line-height: 86px;
      } 
    }
    canvas{
      position: absolute;
      left: 0;
      top: 346px;
    }
</style>
