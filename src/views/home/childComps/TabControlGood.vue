<template>
  <!-- 底部商品页面的切换 -->
  <div>
    <div class="tab-control">
      <div class="tab">
        <div v-for="(item, index) in titles"
            class="tab-control-item"
            :class="{active: index === currentIndex}"
            @click="itemClick(index)" :key="index">
          <div>{{item}}</div>
        </div>
      </div>
    </div>
    <div class="goodsShow">
      <tb-goods v-show="currentIndex===0" />
      <jd-goods v-show="currentIndex===1" />
      <pdd-goods v-show="currentIndex===2" />
    </div>
  </div>
  
</template>

<script>
import JdGoods from './HomeGoods/JdGoods.vue';
import PddGoods from './HomeGoods/PddGoods.vue';
import TbGoods from './HomeGoods/TbGoods.vue';
  export default {
  components: { TbGoods, JdGoods, PddGoods },
    name: "TabControlGood",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0,
        index: 0
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

<style scoped>
  .tab-control {
    /* display: flex; */
    text-align: center;
    font-size: 0.95rem;
    height: 2.8rem;
    line-height: 2.8rem;
    background-color: #E7DDFC;
    color: #A077F5;
    overflow: hidden;
    margin: 0.7rem 0;
  }
  .tab {
    width: 93%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .tab-control-item>div {
    padding: 0.05rem 1.3rem;
  }
  .active {
    color: white;
    background: url('../../../assets/img/home/teams_bg1.png');
    transform: skew(-30deg);
    background-size: 100%;
  }
  .active>div {
    transform: skew(30deg);
  }
</style>
