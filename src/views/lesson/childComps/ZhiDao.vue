<template>
  <div class="zhidao">
    <div class="zhidao1">
      <div class="zhidao2">
        <img src="../../../assets/img/lesson/yue_help_icon6.png" style="width: 0.7rem;"/>
        <span style="color: #973CF3;font-size: 0.9rem;">  新人指导</span>
        <span style="color: #973CF3; font-size: 0.7rem;position: absolute;right: 1.5rem;">更多</span>
        <img src="../../../assets/img/lesson/yue_help_icon11.png" style=" width: 1.5%; position: absolute;right: 1rem;top: 1rem;" />      </div>
    </div>
    <div class="zd1">
      <div class="zd2" v-for="(item, index) in zhidaodata" :key="index">
        <img class="zd-img" :src="item.images[0]" />
        <div class="zd3">{{item.title}}</div>
        <div class="box">
           <div class="zd4">{{item.onlinetime}}</div>
          <div class="zd5"> {{item.share_count}}人已学</div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'ZhiDao',
    props:{
      zhidaodata:{
        type:Array
      } 
    }
    
  }
</script>

<style>
  .zhidao{
    background-image: url(../../../assets/img/lesson/section_bg.png);
    width: 100%;
    height:12rem;
    background-size: 100%;
    /* margin-top: 135%; */
    z-index: 1;
    position: absolute;
  }
  
  .zhidao1{ 
    /* width: 100%; */
    margin-top: 0.8rem;
    height: 2rem;

  }
  .zhidao2{
    margin-left: 0.8rem;
  }
  .zd1{
    display: flex;
    flex: 1;
    /* align-items: center; */
    overflow-x: auto;
    margin-left: 0.5rem;
    margin-right: 0.8rem;
    height: 9.5rem;
  }

  .zd-img{
    width: 8rem;
    margin-left: 0.5rem;
    border-radius:0.3125rem ;
  }
  .zd2{
    height: 9.5rem;
    /* width: 100%; */
  }
  .zd3{
    font-size: 0.75rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    height: 2rem;
  }
  .box {
    color: #B1B1B1;
    font-size: 0.75rem;
    position: relative;
    height: 0.8rem;
    line-height: 0.8rem;
  }
  .zd4{
    position: absolute;
    left: 0.5rem;

  }
  .zd5{
    position: absolute;
    right: 0.5rem;
  }
</style>
