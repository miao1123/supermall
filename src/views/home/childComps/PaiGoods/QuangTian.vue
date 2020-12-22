<template>
  <!-- 排行榜的全天 -->
  <div class="quangtian">
    <pai-list-item v-for="(item, index) in quandata" :key="index">
      <img :src="item.mainimage" alt="" slot="mainimage">
      <span slot="couponPrice">{{item.couponPrice}}</span>
      <span slot="commission">{{item.commission}}</span>
    </pai-list-item>
  </div>
</template>

<script>
import quangtian from '../../../../../static/data/home/youping/paihang/quangtian'
import PaiListItem from '../../../../components/goods/PaiListItem.vue'
export default {
  name: 'QuangTian',
  components: {
    PaiListItem
  },
  data(){
    return {
      quandata: []
    }
  },
  created(){
    this.quandata = quangtian.data.slice(0, 3)
  }
}
</script>

<style>
  .quangtian {
    width: 100%;
    display: flex;
    justify-content: space-around;
    position: absolute;
    margin-top: 4rem;
  }
</style>