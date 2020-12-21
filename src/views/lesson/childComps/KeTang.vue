<template>
  <div class="ketang">
    <div class="ketang1">
      <div class="ketang2">
        <img src="../../../assets/img/lesson/yue_help_icon9.png" style="width: 4%;"/>
        <span style="color: #973CF3;font-size: 0.9rem;">  达人课堂</span>
        <span style="color: #973CF3; font-size: 0.7rem;position: absolute;right: 1.5rem;">更多</span>
        <img src="../../../assets/img/lesson/yue_help_icon11.png" style=" width: 1.5%; position: absolute;right: 1rem;top: 1rem;" />      </div>
    </div>
    <div class="kt1">
      <div class="kt2" v-for="(item, index) in ketangdata" :key="index">
        <img class="kt-img" :src="item.images[0]" />
        <div class="kt3">{{item.title}}</div>
        <div class="box">
           <div class="kt4">{{item.onlinetime}}</div>
          <div class="kt5"> {{item.share_count}}人已学</div>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'KeTang',
    props:{
      ketangdata:{
        type:Array
      } 
    }
    
  }
</script>

<style>
  .ketang{
    background-image: url(../../../assets/img/lesson/section_bg.png);
    width: 100%;
    height: 12rem;
    top: 66rem;
    background-size: 100%;
    /* margin-top: 135%; */
    z-index: 1;
    position: absolute;
  }
  
  .ketang1{ 
    width: 100%;
    margin-top: 0.8rem;
    height: 2rem;

  }
  .ketang2{
    margin-left: 0.8rem;
  }
  .kt1{
    /* width: 100%; */
    display: flex;
    flex: 1;
    /* align-items: center; */
    overflow-x: auto;
    margin-left: 0.5rem;
    margin-right: 0.8rem;
    height: 9.5rem;
  }

  .kt-img{
    width: 8rem;
    margin-left: 0.5rem;
    border-radius:0.3125rem ;
  }
  .kt2{
    height: 9.5rem;
    width: 100%;
  }
  .kt3{
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
  .kt4{
    position: absolute;
    left: 0.5rem;

  }
  .kt5{
    position: absolute;
    right: 0.5rem;
  }
</style>
