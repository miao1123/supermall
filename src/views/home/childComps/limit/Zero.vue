<template>
  <div class="zero">
    <limit-list-item v-for="(item, index) in zerodata" :key="index">
      <img :src="item.itempic" alt="" slot="itempic">
      <span slot="itemtitle">{{item.itemtitle}}</span>
      <span slot="itemendprice">{{item.itemendprice}}</span>
    </limit-list-item>
  </div>
</template>

<script>
import zero from '../../../../../static/data/home/youping/xianshi/zero'
import LimitListItem from '../../../../components/goods/LimitListItem.vue'
export default {
  name: 'Zero',
  components: { LimitListItem },
  data() {
    return {
      zerodata: []
    }
  },
  created() {
    this.zerodata = zero.data.splice(0, 3)
  }
}
</script>

<style>
  .zero {
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    width: 97%;
    margin: 0 auto;
    border-radius: 5%;
  }
</style>