<template>
  <div id="tehui">
    <div class="tehui-box">
      <div class="tehui-box-title">
        <img src="../../../assets/img/home/tehui/tehui_title.png" alt="">
        <span>更多</span>
      </div>
      
      <div class="tehui-box-body">
        <div class="tehui-box-body-item">
          <img src="../../../assets/img/home/tehui/tehui_item1.png" alt="">
        </div>
        <div class="tehui-box-body-item">
          <img src="../../../assets/img/home/tehui/tehui_item2.png" alt="">
        </div>
        <div class="tehui-box-body-item">
          <img src="../../../assets/img/home/tehui/tehui_item3.png" alt="">
        </div>
        <div class="tehui-box-body-item">
          <img src="../../../assets/img/home/tehui/tehui_item4.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeHui'
}
</script>

<style>
  #tehui {
    background-color: #fff;
    padding: 0.7rem 0;
    margin-top: 0.4rem;
  }
  .tehui-box {
    width: 97%;
    margin: 0 auto;
    background: url('../../../assets/img/home/tehui/tehui.png');
    background-repeat: no-repeat;
    background-size: 100%;
    padding: 0.15rem 0;
    padding-bottom: 0.35rem;
  }
  .tehui-box-title {
    position: relative;
    height: 2.6rem;
    /* line-height: 2.5rem; */
  }
  .tehui-box-title>img {
    height: 2.3rem;
    width: 9.8rem;
    position: absolute;
    left: calc( 50% - 5rem );
  }
  .tehui-box-title>span {
    position: absolute;
    right: 1rem;
    line-height: 2.5rem;
    color: white;
    font-size: 0.9rem;
    font-weight: 0;
  }
  .tehui-box-body {
    display: flex;
    justify-content: space-around;
    padding-top: 0.1rem;
  }
  .tehui-box-body-item {
    width: 23%;
  }
  .tehui-box-body-item>img {
    width: 100%;
  }
</style>