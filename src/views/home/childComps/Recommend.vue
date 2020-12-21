<template>
  <div id="recommend">
    <div class="rd-head">
      <img src="../../../assets/img/home/recommend/yue_help_icon5.png" alt="">
      <span class="rd-head-rd">精选推荐</span>
      <span class="rd-head-text">特色频道</span>
    </div>
    <div class="rd-center">
      <div class="rd-center-img"><img src="../../../assets/img/home/recommend/showYepro_07.png" alt=""></div>
      <div class="rd-center-img"><img src="../../../assets/img/home/recommend/showYepro_09.png" alt=""></div>
      <div class="rd-center-img"><img src="../../../assets/img/home/recommend/showYepro_11.png" alt=""></div>
    </div>
    <div class="rd-bottom">
      <div class="rd-bottom-left">
        <img src="../../../assets/img/home/recommend/rush_buy_left.png" alt="">
      </div>
      <div class="rd-bottom-right">
        <img src="../../../assets/img/home/recommend/rush_buy_right1.png" alt="">
        <img src="../../../assets/img/home/recommend/rush_buy_right2.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend'
}
</script>

<style>
  #recommend {
    background-color: #fff;
  }
  .rd-head {
    width: 100%;
    height: 3rem;
    position: relative;
    line-height: 3rem;
    margin-top: 0.2rem;
  }
  .rd-head>img {
    width: 1.2rem;
    height: 1.2rem;
    position: absolute;
    top: 0.9rem;
    left: 0.7rem;
    /* padding: 0.25rem 0.3rem; */
  }
  .rd-head-rd {
    color: #000;
    font-size: 1.3rem;
    font-weight: 700;
    padding: 0 0.3rem;
    position: absolute;
    left: 2rem;
  }
  .rd-head-text {
    color: #BBBBBB;
    font-size: 0.85rem;
    padding: 0 0.2rem;
    position: absolute;
    left: 8rem;
  }
  .rd-center {
    display: flex;
    justify-content: space-around;
    width: 97%;
    margin: 0 auto;
  }
  .rd-center-img {
    width: 33.3%;
    padding: 0 0.3rem;
  }
  .rd-center-img>img {
    width: 100%;
  }
  .rd-bottom {
    display: flex;
    justify-content: space-around;
    width: 97%;
    margin: 0 auto;
    padding: 0.3rem 0;
  }
  .rd-bottom-left {
    width: 48%;
  }
  .rd-bottom-left>img {
    width: 100%;
  }
  .rd-bottom-right {
    width: 48%;
  }
  .rd-bottom-right>img {
    width: 100%;
    padding: 0.2rem 0;
  }
</style>