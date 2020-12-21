<template>
  <div id="baokuanitem">
    <div class="baokuan-box2">
      <div class="baokuan-guanzhu-title" >
      <img src="../../assets/img/community/fillPathYeart.png"/>
      <div class="baokuan-name-time">
        <div class="baokuan-name"><slot name="kefu_name"></slot></div>
        <div class="baokuan-time"><slot name="time_transfer"></slot></div>
      </div>
      <div class="baokuan-icon">
        <img src="../../assets/img/community/QQ图片20201218195659.png" style="width: 3rem;position: absolute;top: 0rem;right: 8rem;"/>
        <img src="../../assets/img/community/shoucang.png" style="width: 3rem;position: absolute;top: 0rem;right: 4.5rem;"/>
        <div class="baokuan-zhuanfa">
          <img src="../../assets/img/community/share_vs.png" style="width: 1rem;position: absolute; left: 0.3rem;" />
          <div class="baokuan-share-count"><slot name="share_count"></slot></div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
 export default {
   name: 'BaoKuanItem'
 }
</script>

<style>
  /* .baokuan-box{
     margin: 0.7rem;
     border-radius:0.3125rem ;
     padding-bottom: 1rem;
     background-color: white;
   } */
   .baokuan-box2{
     margin: 0.8rem;
     border-radius:0.3125rem ;
     background-color: white;
   }
  .baokuan-guanzhu-title{
     position: relative;
     top: 0.7rem;

   }
   .baokuan-guanzhu-title>img {
     width: 3rem;
     border-radius: 2rem;
   }
   .baokuan-name-time{
     position: absolute;
     top: 0rem;
     left: 3.5rem;
   }
   .baokuan-name{
     font-weight: 550;
   }
   .baokuan-time{
     font-size: 0.75rem;
     color: #C4C4C4;
     margin-top: 0.4rem;
   }
   .baokuan-icon{
     right: 0rem;
     top: 0rem;

   }
   .baokuan-zhuanfa{
     width: 4rem;
     height: 1.1rem;
     background-image: url(../../assets/img/community/exemption_bg6_1.png);
     background-size: 5rem;
     border-radius: 0.5rem;
     position: absolute;
     right: 0.3rem;
     top: 0.05rem;
   }
   .baokuan-share-count{
     font-size: 0.8rem;
     color: white;
     position: absolute;
     top: 0.15rem;
     right: 0.5rem;
   }
 
</style>
