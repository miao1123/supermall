<template>
  <div class="kecheng">
    <div class="kecheng1">
      <div class="kecheng2">
        <img src="../../../assets/img/lesson/yue_help_icon8.png" style="width: 0.7rem;"/>
        <span style="color: #973CF3;font-size: 0.9rem;">  进阶课程</span>
        <span style="color: #973CF3; font-size: 0.7rem;position: absolute;right: 1.5rem;">更多</span>
        <img src="../../../assets/img/lesson/yue_help_icon11.png" style=" width: 1.5%; position: absolute;right: 1rem;top: 1rem;" />      </div>
    </div>
    <div class="kc1">
      <div class="kc2" v-for="(item, index) in kechengdata" :key="index">
        <img class="kc-img" :src="item.images[0]" />
        <div class="kc3">{{item.title}}</div>
        <div class="box">
           <div class="kc4">{{item.onlinetime}}</div>
          <div class="kc5"> {{item.share_count}}人已学</div>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'KeCheng',
    props:{
      kechengdata:{
        type:Array
      } 
    }
    
  }
</script>

<style>
  .kecheng{
    background-image: url(../../../assets/img/lesson/section_bg.png);
    width: 100%;
    height: 12rem;
    top: 53rem;
    background-size: 100%;
    /* margin-top: 135%; */
    z-index: 1;
    position: absolute;
    /* overflow: hidden; */
    
  }
  
  .kecheng1{ 
    width: 100%;
    margin-top: 0.8rem;
    height: 2rem;

  }
  .kecheng2{
    margin-left: 0.8rem;
  }
  .kc1{
/*    width: 100%; */
    display: flex;
    flex: 1;
    /* align-items: center; */
    overflow-x: auto;
    margin-left: 0.5rem;
    margin-right: 0.8rem;
    height: 9.5rem;
  }

  .kc-img{
    width: 8rem;
    margin-left: 0.5rem;
    border-radius:0.3125rem ;
  }
  .kc2{
    height: 9.5rem;
    width: 100%;
  }
  .kc3{
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
  .kc4{
    position: absolute;
    left: 0.5rem;

  }
  .kc5{
    position: absolute;
    right: 0.5rem;
  }
</style>
