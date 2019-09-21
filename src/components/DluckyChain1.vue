<template>
  <section >
    <header v-html="$t('message.applicationScenarios')">
      The First Application<br>
      Scenario of Dlucky Chain
    </header>
    <vline></vline>
    <!-- <canvas ref="canvas10" width="1200" height="600"></canvas> -->
    <canvas ref="canvas" width="1200" height="600"></canvas>
    <!-- <canvas ref="canvas1" width="1200" height="600"></canvas>
    <canvas ref="canvas3" width="1200" height="600"></canvas>
    <canvas ref="canvas4" width="1200" height="600"></canvas>
    <canvas ref="canvas5" width="1200" height="600"></canvas>
    <canvas ref="canvas6" width="1200" height="600"></canvas>
    <canvas ref="canvas7" width="1200" height="600"></canvas>
    <canvas ref="canvas9" width="1200" height="600"></canvas> -->
  </section>
</template>

<script>
import { setTimeout } from 'timers';
import Vline from "./utilCom/line"
export default {
  name: 'HelloWorld',
  data(){
     return {
        move:50,
       //数据源
        dataRect:[
          
        ],
        //数据源箭头
        dataRectArrow:[],
        //输入箭头数据
        inputDataArrow:[
          {
            x:0,
            y:0,
            x1:246,
            y1:124,
            x2:246,
            y2:124,
            c:"#1bdeb8",
            r:10,
            supplement:50
          },
          {
            x:0,
            y:0,
            x1:346,
            y1:124,
            x2:346,
            y2:124,
            c:"#1bdeb8",
            r:40,
            supplement:30
          },
          {
            x:0,
            y:0,
            x1:600,
            y1:124,
            x2:600,
            y2:124,
            c:"#1bdeb8",
            r:80,
            supplement:1
          },
          {
            x:0,
            y:0,
            x1:804,
            y1:124,
            x2:804,
            y2:124,
            c:"#1bdeb8",
            r:120,
            supplement:-25
          },
          {
            x:0,
            y:0,
            x1:854,
            y1:124,
            x2:854,
            y2:124,
            c:"#1bdeb8",
            r:140,
            supplement:-50
          },
        ],
        DEye:[{
            x:502,
            y:214,
            x1:502,
            y1:214,
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
            x1:500,
            y1:212,
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
       startDataSourceMove:0,
       endDataSourceMove:50,
       time:0
     }
  },
  mounted() {
    this.init();
    // this.animateBackground();
    //输入框
  },
  computed:{
   a(){
      return this.$t('message.menuHome');
   }
  },
  methods:{
    init(){
      let canvas = this.$refs['canvas'];//指定canvas
      this.ctx = canvas.getContext("2d");
      //数据源的数据添加
      for(let i=0;i<7;i++){
         this.dataRect.push([
           {
          x:(0+i*177),
          y:12,
          w:120,
          h:50,
          c:"rgba(27, 222, 184,1)",
          r:5,
          text:this.$t('message.rawmaterial'),
          textC:"white"
        },
        {
          x:(2+i*177),
          y:10,
          w:120,
          h:50,
          c:"rgba(39,44,65,1)",
          r:5,
          text:this.$t('message.rawmaterial'),
          textC:"white"
        }
        ])
      }
      //数据源箭头添加
      for(let i=0;i<this.dataRect.length-1;i++){
          this.dataRectArrow.push({
              fromX:(this.dataRect[i][0].x+128),
              fromY:(this.dataRect[i][0].y+this.dataRect[i][0].h/2), 
              toX:this.dataRect[i][0].x+128+40, 
              toY:this.dataRect[i][0].y+this.dataRect[i][0].h/2,
              theta:30,
              headlen:20,
              width:1,
              color:'#000',
              r:0
          })
      }
      for(let i=0;i<this.dataRect.length-2;i++){
          this.inputDataArrow[i].x=(this.dataRect[i][0].x+128)+20+this.move;
          this.inputDataArrow[i].y=(this.dataRect[i][0].y+this.dataRect[i][0].h/2);
          if(i<3){
            this.inputDataArrow[i].x1=this.inputDataArrow[i].x1-this.move;
            this.inputDataArrow[i].x2=this.inputDataArrow[i].x2-this.move;
          }else if(i>3){
            this.inputDataArrow[i].x1=this.inputDataArrow[i].x1+this.move;
            this.inputDataArrow[i].x2=this.inputDataArrow[i].x2+this.move;
          }
      }
      console.log(this.inputDataArrow)
        requestAnimationFrame(this.animationFrame);
    },
    animationFrame(){
      this.ctx.clearRect(0,0,1200,600);
      this.crateDataSource(this.ctx)
      requestAnimationFrame(this.animationFrame)
    },
    crateDataSource(ctx){
      let dataRect = this.dataRect;
      if(this.startDataSourceMove<=this.endDataSourceMove){
        this.startDataSourceMove++;
      }else{
        this.inputArrow(ctx)   
      }
      for(let i=0;i<dataRect.length;i++){
        for(let j=0;j<dataRect[i].length;j++){
          //渲染方框
          this.redenRect(ctx,dataRect[i][j].x+this.startDataSourceMove,dataRect[i][j].y,dataRect[i][j].w,dataRect[i][j].h,dataRect[i][j].c,dataRect[i][j].r,dataRect[i][j].text)
        }
        //渲染文字
        this.redenText(ctx,dataRect[i][0].x+this.startDataSourceMove,dataRect[i][0].y,dataRect[i][0].w,dataRect[i][0].h,dataRect[i][0].textC,dataRect[i][0].r,dataRect[i][0].text)
      } 
      for(let i=0;i<this.dataRectArrow.length;i++){
        this.redenArrow(ctx,this.dataRectArrow[i].fromX+this.startDataSourceMove,this.dataRectArrow[i].fromY,this.dataRectArrow[i].toX+this.startDataSourceMove,this.dataRectArrow[i].toY,this.dataRectArrow[i].theta,this.dataRectArrow[i].headlen,this.dataRectArrow[i].width,this.dataRectArrow[i].color);
      }     
    },
    //输入箭头
    inputArrow(ctx){
        let dataRect=this.dataRect;
        for(let i=0;i<this.inputDataArrow.length;i++){
          //渲染文字
          if(this.inputDataArrow[i].x2<550&&this.inputDataArrow[i].x<550||this.inputDataArrow[i].x2>550&&this.inputDataArrow[i].x>550){
            if(i===0){
                thia.time++
                console.log(thia.time) 
            }
            this.inputDataArrow[i].x2=this.inputDataArrow[i].x2+Math.trunc((550-this.inputDataArrow[i].x1)/60);
          }
          if(this.inputDataArrow[i].y2<224){
            this.inputDataArrow[i].y2=this.inputDataArrow[i].y2+Math.trunc((224-this.inputDataArrow[i].y1)/60);
          }
          this.inputLine(ctx,this.inputDataArrow[i].x,this.inputDataArrow[i].y,this.inputDataArrow[i].x1,this.inputDataArrow[i].y1,this.inputDataArrow[i].x2,this.inputDataArrow[i].y2,this.inputDataArrow[i].c)
          if(224-this.inputDataArrow[i].y2<=20){
            this.Eye(ctx)
          }
        }
    },
    //Eye
    Eye(ctx){
        for(let i=0;i<this.DEye.length;i++){
              //渲染方框
              let endx=this.DEye[i].x-(this.DEye[i].w/2)+this.move
              if(this.DEye[i].y>this.DEye[i].y1-this.move+40){
                this.DEye[i].y--
              }
              let endy=this.DEye[i].y+this.move-40
              this.redenRect(ctx,endx,endy,this.DEye[i].w,this.DEye[i].h,this.DEye[i].c,this.DEye[i].r,this.DEye[i].text)
              this.redenText(ctx,endx,endy,this.DEye[i].w,this.DEye[i].h,this.DEye[i].textC,this.DEye[i].r,this.DEye[i].text)
        }
        // for(let i=0;i<this.DEyeArrow.length;i++){
        //   let tox = this.DEyeArrow[i].endx;
        //   let toy=-50*(k/num)+this.DEyeArrow[i].endy+50
        //   this.redenArrow1(ctx, 0, 0,Math.trunc(tox),Math.trunc(toy),30,15,1,'rgba(27, 222, 184,1)',this.DEyeArrow[i].r);
        //   if(k===num/2){
        //     this.translate("canvas4",80,40,this.Code)
        //     this.translate("canvas6",80,40,this.dluckyChain)
        //   }
        // }
        // //input Data
        // let endy=-50*(k/num)+this.InputDataRect[0].y+50
        // this.redenRect(ctx,this.InputDataRect[0].x,endy,this.InputDataRect[0].w,this.InputDataRect[0].h,this.InputDataRect[0].c,this.InputDataRect[0].r,this.InputDataRect[0].text,this.InputDataRect[0].strokeColor)
        // this.redenText(ctx,this.InputDataRect[0].x,endy,this.InputDataRect[0].w,this.InputDataRect[0].h,this.InputDataRect[0].textC,this.InputDataRect[0].r,this.InputDataRect[0].text)
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
