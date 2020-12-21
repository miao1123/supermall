<template>
  <!-- 排行榜的高佣 -->
  <div class="gaoyong">
    <pai-list-item v-for="(item, index) in gaodata" :key="index">
      <img :src="item.mainimage" alt="" slot="mainimage">
      <span slot="couponPrice">{{item.couponPrice}}</span>
      <span slot="commission">{{item.commission}}</span>
    </pai-list-item>
  </div>
</template>

<script>
import gaoyong from '../../../../../static/data/home/youping/paihang/gaoyong'
import PaiListItem from '../../../../components/goods/PaiListItem.vue'
export default {
  name: 'GaoYong',
  components: {
    PaiListItem
  },
  data(){
    return {
      gaodata: []
    }
  },
  created(){
    this.gaodata = gaoyong.data.splice(0, 3)
  }
}
</script>

<style>
  .gaoyong {
    width: 100%;
    display: flex;
    justify-content: space-around;
    position: absolute;
    margin-top: 4rem;
  }
</style>