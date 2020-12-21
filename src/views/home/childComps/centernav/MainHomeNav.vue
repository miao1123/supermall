<template>
  <div id="main-home-nav">
    <home-head-nav>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/hot/tt.png" alt=""></template>
        <template #item-text><div>淘宝</div></template>
      </home-head-nav-item>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/hot/jjj.png" alt=""></template>
        <template #item-text><div>京东</div></template>
      </home-head-nav-item>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/hot/ppp.png" alt=""></template>
        <template #item-text><div>拼多多</div></template>
      </home-head-nav-item>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/hot/ss.png" alt=""></template>
        <template #item-text><div>苏宁</div></template>
      </home-head-nav-item>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/hot/wei.png" alt=""></template>
        <template #item-text><div>唯品会</div></template>
      </home-head-nav-item>
    </home-head-nav>
    <home-head-nav>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/hot/waimai1.png" alt=""></template>
        <template #item-text><div>外卖返佣</div></template>
      </home-head-nav-item>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/hot/tijian.png" alt=""></template>
        <template #item-text><div>一键加油</div></template>
      </home-head-nav-item>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/hot/lingyuanGou.gif" alt=""></template>
        <template #item-text><div>0元购</div></template>
      </home-head-nav-item>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/hot/duxiang.gif" alt=""></template>
        <template #item-text><div>独享高佣</div></template>
      </home-head-nav-item>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/hot/kaokao.png" alt=""></template>
        <template #item-text><div>考拉海购</div></template>
      </home-head-nav-item>
    </home-head-nav>
  </div>
</template>

<script>
import HomeHeadNav from '../../../../components/navs/HomeHeadNav'
import HomeHeadNavItem from '../../../../components/navs/HomeHeadNavItem.vue'
export default {
  name: 'MainHomeNav',
  components: { 
    HomeHeadNav,
    HomeHeadNavItem
  },
}
</script>

<style>

</style>