<template>
  <div id="main-home-nav">
    <home-head-nav>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/tour/pop1.png" alt=""></template>
        <template #item-text><div>一键加油</div></template>
      </home-head-nav-item>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/tour/pop2.png" alt=""></template>
        <template #item-text><div>曹操专车</div></template>
      </home-head-nav-item>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/tour/pop3.gif" alt=""></template>
        <template #item-text><div>美团酒店</div></template>
      </home-head-nav-item>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/tour/pop4.png" alt=""></template>
        <template #item-text><div>携程</div></template>
      </home-head-nav-item>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/tour/pop5.png" alt=""></template>
        <template #item-text><div>去哪儿</div></template>
      </home-head-nav-item>
    </home-head-nav>
    <home-head-nav>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/tour/pop6.png" alt=""></template>
        <template #item-text><div>飞猪</div></template>
      </home-head-nav-item>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/tour/dida.png" alt=""></template>
        <template #item-text><div>嘀嗒</div></template>
      </home-head-nav-item>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/tour/pop8.png" alt=""></template>
        <template #item-text><div>途虎养车</div></template>
      </home-head-nav-item>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/tour/pop10.png" alt=""></template>
        <template #item-text><div>同程</div></template>
      </home-head-nav-item>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/tour/genguo.png" alt=""></template>
        <template #item-text><div>更多</div></template>
      </home-head-nav-item>
    </home-head-nav>
  </div>
</template>

<script>
import HomeHeadNav from '../../../../components/navs/HomeHeadNav'
import HomeHeadNavItem from '../../../../components/navs/HomeHeadNavItem.vue'
export default {
  name: 'TourNav',
  components: { 
    HomeHeadNav,
    HomeHeadNavItem
  },
}
</script>

<style>

</style>