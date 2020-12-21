<template>
  <!-- 排行榜的实时 -->
  <div class="shishi">
    <pai-list-item v-for="(item, index) in shidata" :key="index">
      <img :src="item.mainimage" alt="" slot="mainimage">
      <span slot="couponPrice">{{item.couponPrice}}</span>
      <span slot="commission">{{item.commission}}</span>
    </pai-list-item>
  </div>
</template>

<script>
import shishi from '../../../../../static/data/home/youping/paihang/shishi'
import PaiListItem from '../../../../components/goods/PaiListItem.vue'
export default {
  name: 'ShiShi',
  components: {
    PaiListItem
  },
  data(){
    return {
      shidata: []
    }
  },
  created(){
    this.shidata = shishi.data.splice(0, 3)
  }
}
</script>

<style>
  .shishi {
    width: 100%;
    display: flex;
    justify-content: space-around;
    position: absolute;
    margin-top: 4rem;
    /* padding: 0 0.2rem; */
  }
</style>