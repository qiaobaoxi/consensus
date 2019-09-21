<template>
  <section>
    <div class="wrap">
      <h1 v-html="$t('message.futureProspect')">FUTURE PROSPECT</h1>
      <vline></vline>
      <canvas ref="canvas" width="1200" height="800"></canvas>
      <canvas ref="canvas1" width="1200" height="800"></canvas>
    </div>
  </section>
</template>

<script>
import Vline from "./utilCom/line"
import greenLine0 from "../assets/greenLine0.png"
import orangeLine1 from "../assets/orangeLine1.png"
import greenLine2 from "../assets/greenLine0.png"
import orangeLine3 from "../assets/orangeLine1.png"
import greenLine4 from "../assets/greenLine0.png"
export default {
  name: 'Home',
  data(){
    return{
      imgs:[],
      //图片一个一个展示
      n:0
    }
  },
  computed:{
    prospectData(){
      return [
        {
          text:this.$t('message.futureProspectContect1'),
          x:183,
          y:570,
          w:612,
          h:100,
          textX:338,
          textY:585,
          textW:485,
          textH:90,
          c:"#323232",
          img:greenLine0
        },
        {
          text:this.$t('message.futureProspectContect2'), 
          x:358,
          y:468,
          w:340,
          h:100,
          textX:0,
          textY:252,
          textW:373,
          textH:106,
          c:"#323232",
          img:orangeLine1
        },
        {
          text:this.$t('message.futureProspectContect3'), 
          x:450,
          y:350,
          w:600,
          h:100,
          textX:575,
          textY:334,
          textW:610,
          textH:100,
          c:"#323232",
          img:greenLine2
        },
         {
          text:this.$t('message.futureProspectContect4'), 
          x:600,
          y:266,
          w:350,
          h:100,
          textX:120,
          textY:96,
          textW:380,
          textH:48,
          c:"#323232",
          img:orangeLine3
        },
         {
          text:this.$t('message.futureProspectContect5'), 
          x:700,
          y:140,
          w:600,
          h:100,
          textX:826,
          textY:120,
          textW:380,
          textH:110,
          c:"#323232",
          img:greenLine4
        }
      ];
    }
  },
  mounted() {
    this.init();
  },
  methods:{
    init(){
       this.translate("canvas",80,40,this.principalLineArrow)
    },
    translate(obj,times,startTime,fn){
      this.canvas = this.$refs[`${obj}`];//指定canvas
      let ctx = this.canvas.getContext("2d");//设置2D渲染区域
      for(let j=startTime;j<times;j++){
        setTimeout(()=>{
          window.requestAnimationFrame(()=>{
            fn(ctx,times,j)
          })
        },j*12)
      }
    },
    //绘制箭头
    principalLineArrow(ctx,num,k){
      ctx.clearRect(0,0,1200,800);
      let moveY=-50*(k/num)+690+50
      let lineY=-50*(k/num)+20+50
      ctx.beginPath()
      ctx.moveTo(70, moveY)
      ctx.lineTo(865, lineY);
      ctx.strokeStyle = "#323232";
      ctx.lineWidth = 4;
      ctx.stroke()
      this.redenArrow1(ctx, 70, 690, 865, lineY,30,30,4,"#323232",0)
      if(k===num/2){
        this.translate("canvas1",40,20,this.redenContent)
      }
    },
    redenContent(ctx,num,k){
      if(this.n<=this.prospectData.length-1){
        ctx.clearRect(0,0,1200,800);
        for(let i=0;i<this.n;i++){
          let lineX=(i%2===0?this.prospectData[i].x:this.prospectData[i].x-this.prospectData[i].w)
          let lineY=(i%2===0?this.prospectData[i].y:this.prospectData[i].y-this.prospectData[i].h)
          let textX=this.prospectData[i].textX
          let textY=this.prospectData[i].textY
          this.rendenLine(ctx,this.prospectData[i].img,lineX,lineY,this.prospectData[i].w,this.prospectData[i].h,i);
          this.redenText(ctx,textX,textY,this.prospectData[i].textW,this.prospectData[i].textH,this.prospectData[i].c,this.prospectData[i].text)
        }
        let lineX=(this.n%2===0?this.prospectData[this.n].x:this.prospectData[this.n].x-this.prospectData[this.n].w)+20*(k/num)-20
        let lineY=(this.n%2===0?this.prospectData[this.n].y:this.prospectData[this.n].y-this.prospectData[this.n].h)-20*(k/num)+20;
        let textX=this.prospectData[this.n].textX+20*(k/num)-20
        let textY=this.prospectData[this.n].textY-20*(k/num)+20
        this.rendenLine(ctx,this.prospectData[this.n].img,lineX,lineY,this.prospectData[this.n].w,this.prospectData[this.n].h,this.n);
        this.redenText(ctx,textX,textY,this.prospectData[this.n].textW,this.prospectData[this.n].textH,this.prospectData[this.n].c,this.prospectData[this.n].text)
        if(k===num-1){
          this.n++;
          let time=Math.trunc(num/2/this.n)
          setTimeout(() => {
            this.translate("canvas1",num,time,this.redenContent) 
          },time);
        }
      }else{
        return;
      }
      
    },
    animateLine(){
       
    },
    redenText(ctx,x,y,w,h,c,text){
         let txt=text.split("\n")
         for(let i=0;i<txt.length;i++){
            let x1=0  
            let y1=0
            if(txt.length>1){
              y1=y+h/2-4+i*16
            }else{
              y1=y+h/2+4
            }
            x1=(w-ctx.measureText(txt[i]).width)/2+x;
            ctx.beginPath();
            ctx.textBaseline="center";
            ctx.fillStyle=c;
            ctx.font="14px Arial";
            ctx.fillText(txt[i],x1,y1);
            ctx.closePath();  
         } 
    },
    //画线
    rendenLine(ctx,img,x,y,w,h,i){
      let image=new Image();
      image.src=img
      if(!this.imgs[i]){
        this.imgs[i]=image
        image.onload=(obj)=>{
          ctx.drawImage(image,x,y,w,h);
        }
      }else{
        ctx.drawImage(this.imgs[i],x,y,w,h);
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
    prospectData(){
      this.imgs=[],
      //图片一个一个展示
      this.n=0
      this.init();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    section{
      background-color: #eeeeee;
      .wrap{
        position: relative;
        width: 1200px;
        height: 1074px;
        margin: 0 auto;
      }
      h1{
        padding: 66px 0 30px 0;
        font-size: 60px;
        color: #323232; 
      }
      canvas{
        position: absolute;
        left: 0;
        top: 200px;
      }
    }
</style>
