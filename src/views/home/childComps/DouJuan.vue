<template>
  <div id="dou-juan">
    <div class="dou-juan-head">
      <div class="dou-juan-head-left">
        <img src="../../../assets/img/home/douyin.png" alt="">
        <span class="h-title">抖卷</span>
        <span class="h-text">网红商品视频</span>
      </div>
      <div class="dou-juan-head-right">
        <span class="more">更多</span>
        <img src="../../../assets/img/home/douyinmore1.png" alt="">
      </div>
    </div>
    <div class="dou-juan-body">
      <div class="dou-juan-body-box" v-for="(item, index) in doujuandata" :key="index">
        <div class="dou-juan-body-box-img">
          <img :src="item.first_frame" alt="">
        </div>
        <div class="dou-juan-body-box-text">
          <div class="title">{{item.itemtitle}}</div>
          <div class="price">
            <span class="n-price">￥{{item.itemendprice}}</span>
            <del class="p-price">￥{{item.itemprice}}</del>
          </div>
          <div class="juan">
            <div class="z-juan">
              <span class="z">赚</span>
              <span class="zp">￥{{item.commission}}</span>
            </div>
            <div class="j-juan">
              <span class="j">卷</span>
              <span class="jp">{{item.couponmoney}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DouJuan',
  props: {
    doujuandata: {
      type: Array
    }
  }
}
</script>

<style>
  #dou-juan {
    background-color: #fff;
    padding: 0.25rem;
    margin: 0.25rem 0;
  }
  .dou-juan-head {
    height: 2.5rem;
    line-height: 2.5rem;
    position: relative;
  }
  .dou-juan-head-left {
    position: absolute;
    left: 0.3rem;
  }
  .dou-juan-head-left>img {
    width: 1rem;
  }
  .h-title {
    font-size: 1.1rem;
    font-weight: 600;
    padding: 0 0.3rem;
  }
  .h-text {
    font-size: 0.85rem;
    color: #BBBBBB;
    padding: 0 0.2rem;
  }
  .dou-juan-head-right {
    position: absolute;
    right: 0.3rem;
  }
  .more {
    font-size: 0.85rem;
    color: #000;
    padding: 0 0.3rem;
  }
  .dou-juan-head-right>img {
    width: 0.85rem;
  }
  .dou-juan-body {
    overflow-x: auto;
    display: flex;
    height: 12.25rem;
  }
  .dou-juan-body-box {
    width: 35%;
    padding: 0 0.3rem;
    position: relative;
  }
  .price {
    line-height: 1rem;
  }
  .p-price {
    position: absolute;
    left: 4.25rem;
    font-size: 0.85rem;
    font-weight: 100;
    color: #7A7A7A;
  }
  .n-price {
    position: absolute;
    left: 0.3rem;
  }
  .dou-juan-body-box-img>img {
    height: 7.5rem;
    width: 100%;
  }
  .title {
    height: 1.5rem;
    line-height: 1.5rem;
    font-size: 0.8rem;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .juan {
    margin-top: 1.2rem;
    position: relative;
    display: flex;
    /* padding-bottom: 0.5rem; */
  }
  .z-juan {
    background: url('../../../assets/img/home/lofyb_03.png');
    width: 3.7rem;
    height: 0.8rem;
    line-height: 0.8rem;
    background-size: 100%;
    font-size: 0.4rem;
  }
  .z {
    padding-left: 0.1rem;
    text-align: left;
    color: #E2C394;
  }
  .zp {
    padding-left: 0.5rem;
    color: white;
  }
  .j-juan {
    background: url('../../../assets/img/home/lofyb_05.png');
    width: 3.2rem;
    height: 0.8rem;
    line-height: 0.8rem;
    background-size: 100%;
    font-size: 0.4rem;
    margin-left: 0.3rem;
  }
  .j {
    padding-left: 0.1rem;
    text-align: left;
    color: white;
  }
  .jp {
    padding-left: 0.55rem;
    color: white;
  }
</style>