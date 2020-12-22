<template>
  <div class="home-guess">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad">
      <per1 :data="goods1data" @counter="paCounter"></per1>
      <div class="jiazai" v-show="finished"><van-loading /></div>
      <per1 :data="goods2data" v-if="loading === true"></per1>
    </van-list>
    <back-top class="bt" @click.native="scrollToTop"></back-top>
  </div>
</template>

<script>
  import Per1 from '../home/childComps/Per1.vue'
  import BackTop from '../../components/backTop/BackTop.vue'
  import good from '../../../static/data/home/guesslike/goods1.js'
  import good2 from '../../../static/data/home/guesslike/goods2.js'
  
  export default {
    name: 'home-guess',
    components: {
      Per1,
      BackTop
    },
    data() {
      return {
        list: [],
        loading: false,
        finished: false,
        goods1data: [],
        goods2data: [],
        count: 0
      };
    },
    created() {
      this.goods1data = good.data
      this.goods2data = good2.data
    },
    methods: {
      scrollToTop() {
          window.scrollTo(0,0);
      },
      paCounter(data) {
        this.count = data
        console.log(data)
      },
      //思路：距离顶部的距离+ 可视区域高度 == 滚动条高度 如果成立说明已经到页面底部
      onLoad() {
        this.loading = false;
        var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
        var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
        var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
        if(scrollTop+windowHeight==scrollHeight){
           //写后台加载数据的函数
           console.log("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
          this.finished = true;
          setTimeout(() => {
          this.loading = !this.loading
          this.finished = false
          },500);
          
        }   
      },
    },
  }
</script>

<style>
  .jiazai{
    margin-left: 47.5%;
    margin-bottom: 5%;
  }
  .home-guess{
    margin-top: 8rem;
  }
</style>