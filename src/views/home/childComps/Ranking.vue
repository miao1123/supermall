<template>
  <!-- 排行榜 -->
  <div id="ranking">
    <div class="ranking-head-box">
      <!-- 排行榜头部 -->
      <div class="ranking-head">
        <div class="ranking-head-left">
          <img src="../../../assets/img/home/yeartystery.png" alt="" class="paihan-img">
          <span class="paihang">排行榜</span>
          <div class="more-box">
            <span class="more">更多</span>
            <img src="../../../assets/img/home/douyinmore.png" alt="" class="more-img">
          </div>
        </div>
        <div class="ranking-head-right">
          <!-- 切换图标 -->
          <div class="ranking-head-right-text"
               :class="{ractive: index === currentIndex}"
               @click="itemClick(index)"
               v-for="(item, index) in tabcontrol"
               :key="index">
            {{item}}
          </div>
        </div>
      </div>
    </div>
    <!-- 排行榜内容-切换内容 -->
    <div class="ranking-body">
      <shi-shi v-show="currentIndex===0" />
      <gao-yong v-show="currentIndex===1" />
      <quang-tian v-show="currentIndex===2" />
    </div>
  </div>
</template>

<script>
import GaoYong from './PaiGoods/GaoYong.vue'
import QuangTian from './PaiGoods/QuangTian.vue'
import ShiShi from './PaiGoods/ShiShi'
export default {
  name: 'Ranking',
  components: {
    ShiShi,
    GaoYong,
    QuangTian,
  },
  data() {
    return {
      tabcontrol: ['实时榜','高佣榜','全天榜'],
      // 当前图标内容
      currentIndex: 0,
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      // this.$emit('tabClick', index)
    }
  }
}
</script>

<style>
  #ranking {
    height: 15.5rem;
    background-color: #fff;
  }
  .ranking-head-box {
    width: 100%;
    margin-top: 1.5rem;
    position: absolute;
    background-color: #fff;
  }
  .ranking-head {
    width: 100%;
    position: relative;
  }
  .ranking-head-left {
    width: 46%;
    position: absolute;
    display: flex;
    left: 0;
    height: 2rem;
    line-height: 1.8rem;
  }
  .ranking-head-left>img {
    width: 1.5rem;
    height: 1.5rem;
  }
  .paihan-img {
    padding:  0 0.3rem;
  }
  .paihang {
    color: #000;
    font-size: 1.3rem;
    font-weight: 700;
    padding: 0 0.2rem;
  }
  .more-box>img {
    width: 0.8rem;
  }
  .more {
    color: #B0B0B0;
    font-size: 0.8rem;
  }
  .ranking-head-right {
    width: 52%;
    display: flex;
    justify-content: space-around;
    position: absolute;
    left: 46%;
    text-align: center;
  }
  .ranking-head-right-text {
    width: 3rem;
    height: 1rem;
    line-height: 1rem;
    border-radius: 40%;
    font-size: 0.8rem;
    color: black;
    padding: 0.25rem;
  }
  .ractive {
    background-color: #7651F6;
    color: white;
  }
</style>