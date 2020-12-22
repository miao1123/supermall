<template>
  <div id="pdd-goods">
    <div class="pdd">
      <goods-list-item v-for="(item, index) in pddgoods" :key="index" @click.native="btnClick(index)">
        <img :src="item.pic_url_for_p_c" alt="" slot="g-img">
        <img src="../../../../assets/img/home/goods/pinpin_pt.png" alt="" slot="g-icon">
        <span slot="g-text">{{item.title}}</span>
        <span slot="gn-price">￥{{item.quanhou}}</span>
        <span slot="gp-price">{{item.act_price}}</span>
        <span slot="sell">{{item.volume}}</span>
        <span slot="commission">￥{{item.commission}}</span>
        <span slot="amount">{{item.couponAmount}}</span>
      </goods-list-item>
    </div>
  </div>
</template>

<script>
import pdd from '../../../../../static/data/home/goods/pdd/pddgoods1'
import GoodsListItem from '../../../../components/goods/GoodListItem'
export default {
  name: 'PddGoods',
  data(){
    return {
      pddgoods: []
    }
  },
  created(){
    this.pddgoods = pdd.data
  },
  components: {
    GoodsListItem
  },
  methods: {
    btnClick(index) {
      this.$router.push({
        path: '/pdddetails',
        query: {
          goods_id: index
        }
      })
    }
  }
}
</script>

<style>
	.pdd {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 3rem;
  }
</style>
