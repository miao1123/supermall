<template>
  <div id="home-main">    
    <van-pull-refresh v-model="isLoading" :head-height="80" @refresh="onRefresh">
      <!-- 下拉提示，通过 scale 实现一个缩放效果 -->
      <template #pulling="props">
        <img
          class="doge"
          src="https://img.yzcdn.cn/vant/doge.png"
          :style="{ transform: `scale(${props.distance / 80})` }"
        />
      </template>
      <!-- 释放提示 -->
      <template #loosing>
        <img class="doge" src="https://img.yzcdn.cn/vant/doge.png" />
      </template>
      <!-- 加载提示 -->
      <template #loading>
        <img class="doge" src="https://img.yzcdn.cn/vant/doge-fire.jpg" />
      </template>
      
      <div class="bg">
        <img :src="bgUrl" alt="" >
      </div>
      <div class="fslide">
        <home-swiper :swiper1="swiper1" />
        <!-- <img :src="swiper1[0].image" alt=""> -->
      </div>
      <div class="center-guide">
        <tab-control :titles="guidetitles" class="guideline" />
      </div>
      <toutiao />
      <home-center-swiper :swiper2="swiper2" class="center-swiper" />
      <center-swiper-data :swiperdatas="swiperdatas" />
      <recommend />
      <ranking />
      <limit />
      <look-more />
      <dou-juan :doujuandata="doujuandata" />
      <hao-juan />
      <te-hui />
      <tab-control-good :titles="titles"/>
    </van-pull-refresh>
  </div>
</template>

<script>
import { Toast } from 'vant'
import firstlunbo from '../../../static/data/home/youping/lunbo/firstlunbo'
import secondlunbo from '../../../static/data/home/youping/lunbo/secondlunbo'
import datas from '../../../static/data/home/youping/lunbo/datas'
import doujuan from '../../../static/data/home/youping/doujuan/doujuan'
import HomeSwiper from './childComps/HomeSwiper.vue'
import TabControl from '../../components/tabControl/TabControl.vue'
import MainHomeNav from './childComps/centernav/MainHomeNav'
import Toutiao from './childComps/Toutiao.vue'
import HomeCenterSwiper from './childComps/HomeCenterSwiper.vue'
import CenterSwiperData from './childComps/CenterSwiperData.vue'
import Recommend from './childComps/Recommend.vue'
import HaoJuan from './childComps/HaoJuan.vue'
import Ranking from './childComps/Ranking.vue'
import Limit from './childComps/Limit.vue'
import LookMore from './childComps/LookMore.vue'
import DouJuan from './childComps/DouJuan.vue'
import TabControlGood from './childComps/TabControlGood'
import TbGoods from './childComps/HomeGoods/TbGoods.vue'
import JdGoods from './childComps/HomeGoods/JdGoods.vue'
import PddGoods from './childComps/HomeGoods/PddGoods.vue'
import TeHui from './childComps/TeHui.vue'
// import MainHomeGoods from './childComps/MainHomeGoods.vue'
export default {
  name: 'HomeMain',
  data() {
    return {
      swiper1: [],
      swiper2: [],
      swiperdatas: [],
      doujuandata: [],
      activeName: 'a',
      guidetitles: ['热门','购物','生活','出行','悦拜专属'],
      titles: ['淘宝新品', '京东爆款', '拼多多爆款'],
      isLoading: false,
      bgUrl: require('../../assets/img/home/bg/bannerba1.png')
    }
  },
  components: { 
    HomeSwiper,
    TabControl,
    MainHomeNav,
    Toutiao,
    HomeCenterSwiper,
    CenterSwiperData,
    Recommend,
    HaoJuan,
    Ranking,
    Limit,
    LookMore,
    DouJuan,
    TabControlGood,
    // MainHomeGoods,
    TbGoods,
    JdGoods,
    PddGoods,
    TeHui,
  },
  created(){
    this.swiper1 = firstlunbo.data
    this.swiper2 = secondlunbo.data
    this.swiperdatas = datas.data
    this.doujuandata = doujuan.data
  },
  computed: {
    showGoods() {
      return this.currentType.data
    }
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
      }, 1000);
    },
  }
}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  #home-main {
    background-color: #F8F7F7;
    margin-top: 7.5rem;
  }
  .bg {
    z-index: 0;
    background-color: #fff;
  }
  .bg>img {
    width: 100%;
  }

  .fslide {
    z-index: 111;
    position: absolute;
    top: 1.8rem;
    left: 5%;
    width: 90%;
  }
  .fslide>img {
    width: 100%;
    height: 100%;
  }
  .center-guide {
    background-color: white;
    padding-top: 1rem;
  }
  .guideline {
    padding-bottom: 0.2rem;
    /* margin-bottom: 1rem; */
  }
  .center-swiper {
    background-color: #fff;
  }
  .doge {
    width: 140px;
    height: 72px;
    margin-top: 8px;
    border-radius: 4px;
  }
</style>