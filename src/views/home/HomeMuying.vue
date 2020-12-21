<template>
  <div class="home-muying">
    <div class="main">
      
      <scroll class="content" 
              ref="scroll" 
              :probe-type="3" 
              @scroll="contentScroll"
              @pullingUp="loadMore"
              :pull-up-load="true">
        <div style="background-color: white;height: 5px;"></div>
      
        <div style="background-color: white;">
          <van-grid :gutter="1" :border=false :icon-size="50">
          <van-grid-item
          v-for="(item, index) in mysort" :key="index" :icon="item.image" :text="item.name" />
          </van-grid>
        </div>
        
        <div style="background-color: white;height: 5px;"></div>
        
        <tab-control-muying class="tab-control-muying"
        :titles="['综合','价格','销量','排序']" @tabClick="tabClick">
          <!-- <per :zhonghedata="zhonghedata"></per> -->
        </tab-control-muying>
         
        <per v-if="ty==0" :data="zhonghedata"></per>
        <per v-if="ty==1" :data="pricedata"></per>
        <per v-if="ty==2" :data="xiaoliangdata"></per>
        
      </scroll>
      
      <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
      <!-- <per :data="zhonghedata"></per> -->
    </div>
  </div>
</template>

<script>
  import Per from './childComps/Per.vue'
  import TabControlMuying from '../../components/tabCtrolMuying/TabControlMuying.vue'
  import Search from '../../components/search/Search.vue'
  
  import Scroll from '../../components/scroll/Scroll.vue'
  import BackTop from '../../components/backTop/BackTop.vue'
  
  import classifiction from '../../../static/data/home/muying/classifiction.js'
  import price from '../../../static/data/home/muying/price.js'
  import zhonghe from '../../../static/data/home/muying/zhonghe.js'
  import xiaoliang from '../../../static/data/home/muying/xiaoliang.js'
  
  export default {
    name: 'home-muying',
    components: {
      TabControlMuying,
      Per,
      Scroll,
      BackTop,
      Search
    },
    data(){
      return {
        mysort: [],
        zhonghedata: [],
        pricedata: [],
        xiaoliangdata: [],
        isShowBackTop: false,
        ty: 0
      }
    },
    created() {
      this.mysort = classifiction.data
      this.zhonghedata = zhonghe.data.goods
      this.pricedata = price.data.goods
      this.xiaoliangdata = xiaoliang.data.goods
    },
    methods: {
      tabClick(index) {
        console.log(index)
        if(index == 0){
          this.ty = 0
        }else if(index == 1){
          this.ty = 1
        }else if(index == 2){
          this.ty = 2
        }else{
          this.ty = 3
        }
      },
      // 返回顶部的方法
      backClick() {
        this.$refs.scroll.scrollTo(0, 0)
      },
      contentScroll(position) {
        // console.log(position)
        this.isShowBackTop = -position.y > 1000
      },
      loadMore() {
        console.log('sssss')
      }
    }
  }
</script>

<style scoped>
  .tab-control-muying{
    /* position: sticky; */
    top: 0rem;
    z-index: 2;
    font-size: 0.8125rem;
    color: #808080;
  }
  .main{
    margin: 0;
    padding: 0;
    margin-bottom: 3.5rem;
    z-index: 1;
    background-color: #f5f5f5;
    margin-top: 7.9rem;
  }
  .content{
    height: 60rem;
    overflow: hidden;
    margin-bottom: 3.5rem;
  }
</style>