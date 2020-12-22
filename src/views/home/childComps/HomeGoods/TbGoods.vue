<template>
  <div id="tbgoods">
    <div class="tb">
      <goods-list-item v-for="(item, index) in tbgoods" :key="index" :id="index" @click.native="btnClick(index)">
        <img :src="item.pic_url_for_w_l" alt="" slot="g-img">
        <img src="../../../../assets/img/home/goods/taobao.png" alt="" slot="g-icon">
        <span slot="g-text">{{item.title}}</span>
        <span slot="gn-price">￥{{item.couponPrice}}</span>
        <span slot="gp-price">{{item.price}}</span>
        <span slot="sell">{{item.volume}}</span>
        <span slot="commission">￥{{item.commission}}</span>
        <span slot="amount">{{item.couponAmount}}</span>
      </goods-list-item>
    </div>
  </div>
</template>

<script>
import tb from '../../../../../static/data/home/goods/taobao/taobaogoods1'
import GoodsListItem from '../../../../components/goods/GoodListItem'
	export default {
		name: "TbGoods",
		data(){
      return {
        tbgoods: []
      }
    },
    created(){
      this.tbgoods = tb.data
    },
    components: {
      GoodsListItem
    },
    methods: {
      btnClick(index) {
        this.$router.push({
          path: '/tbdetails',
          query: {
            goods_id: index
          }
        })
      }
    }
	}
</script>

<style>
	.tb {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 3rem;
  }
</style>
