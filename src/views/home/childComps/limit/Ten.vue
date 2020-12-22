<template>
  <div class="ten">
    <limit-list-item v-for="(item, index) in tendata" :key="index">
      <img :src="item.itempic" alt="" slot="itempic">
      <span slot="itemtitle">{{item.itemtitle}}</span>
      <span slot="itemendprice">{{item.itemendprice}}</span>
    </limit-list-item>
  </div>
</template>

<script>
import ten from '../../../../../static/data/home/youping/xianshi/ten'
import LimitListItem from '../../../../components/goods/LimitListItem.vue'
export default {
  components: { LimitListItem },
  name: 'Ten',
  data() {
    return {
      tendata: []
    }
  },
  created() {
    this.tendata = ten.data.slice(0, 3)
  }
}
</script>

<style>
  .ten {
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    width: 97%;
    margin: 0 auto;
    border-radius: 5%;
  }
</style>