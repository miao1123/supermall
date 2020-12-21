<template>
  <div id="toutiao">
    <div class="toutiao-box">
      <div class="toutiao-box-left">
        <img src="../../../assets/img/home/jiantou_03.png" alt="">
      </div>
      <div class="toutiao-box-center">
        <van-swipe style="height: 2rem;"
                   :autoplay="5000" :loop="true"
                   :touchable="false"
                   vertical
                   :show-indicators="false"
                   class="toutiao-swiper">
          <van-swipe-item v-for="(item, index) in toutiaodata" :key="index" class="toutiao-swiper-item">({{item.name}}){{item.title}}</van-swipe-item>
        </van-swipe>
      </div>
      <div class="toutiao-box-right">
        <img src="../../../assets/img/home/toutiaojinru.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import yuebuytoutiao from '../../../../static/data/home/youping/yuebuytoutiao'
export default {
  name: 'Toutiao',
  data() {
    return {
      toutiaodata: []
    }
  },
  created() {
    this.toutiaodata = yuebuytoutiao.data
  }
}
</script>

<style>
  #toutiao {
    width: 100%;
    background-color: #fff;
    padding: 1rem 0;
  }
  .toutiao-box {
    width: 97%;
    height: 2rem;
    margin: 0 auto;
    background-color: #F8F7F7;
    line-height: 2rem;
    display: flex;
    border-radius: 6%;
    align-items: center;
  }
  .toutiao-box-left {
    border-left: black;
    padding: 0.2rem 0.5rem;
  }
  .toutiao-box-left>img {
    height: 0.9rem;
    margin-top: 0.65rem;

  }
  .toutiao-box-center {
    height: 2rem;
    width: 16.5rem;
    padding-left: 0.3rem;
  }
  .toutiao-swiper-item {
    width: 16.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.8rem;
  }
  .toutiao-box-right>img {
    height: 1.3rem;
    margin-top: 0.6rem;
  }
</style>