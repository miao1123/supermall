<template>
  <div class="home-guess">
    <div class="main">
      <scroll class="content"
              ref="scroll"
              @scroll="contentScroll"
              @pullingUp="loadMore"
              :pull-up-load="true">
        <per1 :data="goods1data"></per1>
        <per1 v-show="isMore" :data="goods2data"></per1>
      </scroll>
      <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    </div>
  </div>
</template>

<script>
  import Per1 from '../home/childComps/Per1.vue'
  import Scroll from '../../components/scroll/Scroll.vue'
  import BackTop from '../../components/backTop/BackTop.vue'
  import good from '../../../static/data/home/guesslike/goods1.js'
  import good2 from '../../../static/data/home/guesslike/goods2.js'
  
  export default {
    name: 'home-guess',
    components: {
      Per1,
      Scroll,
      BackTop
    },
    data() {
      return {
        goods1data: [],
        goods2data: [],
        isShowBackTop: false,
        isMore: false
      }
    },
    created() {
      this.goods1data = good.data
      this.goods2data = good2.data
    },
    methods: {
      contentScroll(position) {
        // console.log(position)
        this.isShowBackTop = -position.y > 1000
      },
      // 返回顶部的方法
      backClick() {
        this.$refs.scroll.scrollTo(0, 0)
      },
      //加载更多
      loadMore() {
        console.log('sssss')
        this.isMore = !this.isMore
        
      }
    }
  }
</script>

<style scoped>
  .home-guess {
    margin-top: 7.9rem;
  }
  .main{
    margin: 0;
    padding: 0;
    /* margin-bottom: 3.5rem; */
    /* z-index: 1; */
    background-color: #f5f5f5;
  }
  .content{
    height: 50rem;
    overflow: hidden;
    /* bottom: 7rem; */
  }
</style>