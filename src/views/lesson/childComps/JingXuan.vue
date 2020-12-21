<template>
  <div class="jingxuan">
    <div class="jingxuan1">
    <img src="../../../assets/img/lesson/yue_help_icon5.png" style="width: 4%;"/>
    <span style="color: #973CF3;font-size: 0.8rem;">  悦拜精选</span>
    <span style="color: #973CF3; font-size: 0.7rem;position: absolute;right: 2.1rem;">更多</span>
    <img src="../../../assets/img/lesson/yue_help_icon11.png" style=" width: 1.5%; position: absolute;right: 1.6rem;top: 0.2rem;" />    </div>
    <div class="jx1">
        <div class="jx2" v-for="(item, index) in jingxuandata" :key="index">
          <img class="jx-img" :src="item.images[0]" />
          <div class="jx3">
            <h6 style="color: black;">{{item.title}}</h6>
            <br />
            <div >
              {{item.share_count}}人已学
            </div>
            <br />
            <div>
            <img src="../../../assets/img/lesson/yue-help-share.png" style="width: 6%;"/>
            {{item.share_count}}
            <img src="../../../assets/img/lesson/yue-help-like.png" style="width: 6%;margin-left: 0.2rem;"/>
            {{item.share_count}}
           <div style="float: right;margin-right: rem;">{{item.onlinetime}}</div>
          </div> 
        </div>
       </div>
      
    </div>

  </div>
</template>

<script>
  export default {
    name: 'JingXuan',
    props: {
      jingxuandata:  {
        type: Array
      }
    }
  }
</script>

<style>
  .jingxuan{
    background-image: url(../../../assets/img/lesson/section_bg.png);
    width: 100%;
    height: 20rem;
    background-size: 100%;
    /* top: 18rem; */
    margin-top: 8.5rem;
    position: relative;
    z-index: 1;
    overflow: hidden;
  }
  
 .jingxuan1{ 
    width: 100%;
    margin-top: 1rem;
    margin-left: 0.8rem;
/*    
    margin-bottom: 0.4rem; */
    position: absolute;
  }
 .jx1{
    top: 3rem;
    position: absolute;
  }
  .jx2{
    width: 100%;
    height: 5.5rem;
    position: relative;

  }
  .jx-img{
    left: 0;
    border-radius: 0.3125rem;
    width: 7rem; 
    margin-left: 1rem; 
    margin-right: 1rem;
    position: absolute;
    left: 0;
  }
  .jx3{
    font-size: 0.2rem;
    color: #B1B1B1;
    position: absolute;
    left: 9.5rem;
    width: 10rem;
  }
</style>
