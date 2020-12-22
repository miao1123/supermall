<template>
  <div class="twelve">
    <limit-list-item v-for="(item, index) in twelvedata" :key="index">
      <img :src="item.itempic" alt="" slot="itempic">
      <span slot="itemtitle">{{item.itemtitle}}</span>
      <span slot="itemendprice">{{item.itemendprice}}</span>
    </limit-list-item>
  </div>
</template>

<script>
import twelve from '../../../../../static/data/home/youping/xianshi/twelve'
import LimitListItem from '../../../../components/goods/LimitListItem.vue'
export default {
  components: { LimitListItem },
  name: 'Twelve',
  data() {
    return {
      twelvedata: []
    }
  },
  created() {
    this.twelvedata = twelve.data.slice(0, 3)
  }
}
</script>

<style>
  .twelve {
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    width: 97%;
    margin: 0 auto;
    border-radius: 5%;
  }
</style>