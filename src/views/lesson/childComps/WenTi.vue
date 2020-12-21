<template>
  <div class="wenti">
    <div class="wenti1">
      <div class="wenti2">
        <img src="../../../assets/img/lesson/yue_help_icon10.png" style="width: 4%;"/>
        <span style="color: #973CF3;font-size: 0.9rem;">  常见问题</span>
        <span style="color: #973CF3; font-size: 0.7rem;position: absolute;right: 1.5rem;">更多</span>
        <img src="../../../assets/img/lesson/yue_help_icon11.png" style=" width: 1.5%; position: absolute;right: 1rem;top: 1rem;" />      </div>
    </div>
    <div class="wt1">
      <div class="wt2" v-for="(item, index) in wentidata" :key="index">
        <img class="wt-img" :src="item.image" />
        <div class="wt3">{{item.name}}</div>
        <div class="box">
           <div class="wt4">{{item.time}}</div>
          <div class="wt5"> {{item.view}}人已学</div>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'WenTi',
    props:{
      wentidata:{
        type:Array
      } 
    }
    
  }
</script>

<style>
  .wenti{
    background-image: url(../../../assets/img/lesson/section_bg.png);
    width: 100%;
    height: 16rem;
    top: 79rem;
    background-size: 100%;
    /* margin-top: 135%; */
    z-index: 1;
    position: absolute;
  }
  
  .wenti1{ 
    width: 100%;
    margin-top: 0.8rem;
    height: 2rem;

  }
  .wenti2{
    margin-left: 0.8rem;
  }
  .wt1{
    /* width: 100%; */
    display: flex;
    flex: 1;
    /* align-items: center; */
    overflow-x: auto;
    margin-left: 0.5rem;
    margin-right: 0.8rem;
    height: 9.5rem;
  }

  .wt-img{
    width: 8rem;
    margin-left: 0.5rem;
    border-radius:0.3125rem ;
  }
  .wt2{
    height: 9.5rem;
    width: 100%;
  }
  .wt3{
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
  .wt4{
    position: absolute;
    left: 0.5rem;

  }
  .wt5{
    position: absolute;
    right: 0.5rem;
  }
</style>
