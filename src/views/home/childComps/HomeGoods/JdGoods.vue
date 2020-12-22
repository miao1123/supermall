<template>
  <div id="jd-goods">
    <div class="jd">
      <goods-list-item v-for="(item, index) in jdgoods" :key="index"  @click.native="btnClick(index)" >
        <img :src="item.pic_url_for_p_c" alt="" slot="g-img">
        <img src="../../../../assets/img/home/goods/jingjing_pt.png" alt="" slot="g-icon">
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
import jd from '../../../../../static/data/home/goods/jd/jdgoods1'
import GoodsListItem from '../../../../components/goods/GoodListItem'
export default {
  name: 'JdGoods',
  data(){
    return {
      jdgoods: []
    }
  },
  created(){
    this.jdgoods = jd.msg
  },
  components: {
    GoodsListItem
  },
  methods: {
    btnClick(index) {
      this.$router.push({
        path: '/jddetails',
        query: {
          goods_id: index
        }
      })
    }
  }
}
</script>

<style>
	.jd {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 3rem;
  }
</style>
