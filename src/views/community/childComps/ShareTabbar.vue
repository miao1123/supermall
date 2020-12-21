<template>
	<div class="comminity">
    <div class="share-tabbar-title">
    	<div class="share-header-bg">
			  <img src="../../../assets/img/community/report_bg2.png">
		  </div>
      <div class="share-search-wrapper">
        <van-search class="share-search" v-model="SearchVue" show-action background="rgba(255,255,255,0)" placeholder="输入你想搜索的内容">
          <template #left>
            <div class="share-collection" @click="myCollection">
              <img src="../../../assets/img/community/share_icon1.png">
              <section>收藏</section>
            </div>
          </template>
          <template #left-icon>
            <img class="share-searchLogo" src="../../../assets/img/community/share_icon3.png">
          </template>
          <template #right-icon>
            <section class="share-searchLine">|</section>
            <button class="share-searchBtn">查找</button>
          </template>
          <template #action>
            <div class="share-attention" @click="myAttention">
              <img src="../../../assets/img/community/share_icon2.png">
              <br>
              <section>我的关注</section>
            </div>
          </template>
        </van-search>
        <div class="share-nav-tab">
          <van-tabs v-model="active">
            <van-tab title="商品素材">
              <div class="share-goods">
                <van-row type="flex" justify="space-around">
                  <van-col span="6" :class="{sactive: index === currentIndex}" class="sucai-tabbar"
                          @click="itemClick(index)"
                          v-for="(item, index) in share_tab_control"
                          :key="index" >
                    {{item}}
                  </van-col>
                </van-row>
              </div>
            </van-tab>
            <van-tab title="商品线报">
              <div class="share-goods">
                <van-row type="flex" justify="space-around">
                  <van-col span="6" :class="{sactive: index === currentIndex}" class="sucai-tabbar"
                          @click="itemClick(index)"
                          v-for="(item, index) in share_tab_control"
                          :key="index" >
                    {{item}}
                  </van-col>
                </van-row>
              </div>
            </van-tab>
            </van-tab>
            <van-tab title="推广素材">
              <div class="share-goods">
                <van-row type="flex" justify="space-around">
                  <van-col span="6" :class="{sactive: index === currentIndex}" class="sucai-tabbar"
                          @click="itemClick(index)"
                          v-for="(item, index) in share_tab_control"
                          :key="index" >
                    {{item}}
                  </van-col>
                </van-row>
              </div>
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
  <su-cai-bao-kuan v-show="currentIndex===0"/>
  <su-cai-yan-huo v-show="currentIndex===1"/>
  <su-cai-hao-huo v-show="currentIndex===2"/>
  </div>

</template>

<script>
  import SuCaiBaoKuan from './SuCaiBaoKuan.vue'
  import SuCaiYanHuo from './SuCaiYanHuo.vue'
  import SuCaiHaoHuo from './SuCaiHaoHuo.vue'
	export default {
    components:{
      SuCaiBaoKuan,
      SuCaiYanHuo,
      SuCaiHaoHuo
    },
		name: 'ShareTabbar',
		data() {
			return {
				SearchVue: '',
        active:'',
        share_tab_control:['每日爆款','验货实拍','好货专场'],
        currentIndex:0
			}
		},
    methods:{
      myCollection(){},
      myAttention(){},
      itemClick(index) {
        this.currentIndex = index;
      }
    }
	}
</script>

<style>
  .share-tabbar-title{
   position: fixed;
   z-index: 99;
  }
	.share-header-bg {
		top: -1rem;
		position: fixed;
		z-index: 1;
	}
	.share-header-bg>img {
		width: 100%;
	}
  input::-webkit-input-placeholder {
  /* placeholder颜色  */
  color: #aab2bd;
  /* placeholder字体大小  */
  font-size: 0.75rem;
  /* placeholder位置  */
  text-align: center;
  }
	.share-search-wrapper {
		position: fixed;
		z-index: 999;
		top: -1rem;
    margin: 0.7rem;
    
	/* 	left: 0.5rem; */
		background-color: transparent;
	}
	.share-collection {
		margin-right: 1rem;
	}

	.share-collection>img {
		width: 1.5rem;
	}

	.share-collection>section {
		font-size: .5rem;
		color: rgb(235, 226, 241);
	}
  .share-search{
    bottom:2rem;
  }

	.share-searchLogo {
		width: 0.9rem;
		margin-top: 0.3rem;
		margin-right: 0.7rem;
	}

	.share-van-search__action {
		line-height: 0;
    margin-bottom: 2rem;
	}

	.share-attention>img {
		width: 1.5rem;
		margin-left: 0.8rem;
    margin-top: 1rem;
    position: absolute;
	}

	.share-attention>section {
		font-size: .5rem;
		color: rgb(235, 226, 241);
		margin-bottom: 0.3rem;
	}

	.share-searchLine {
		display: inline-block;
		color: rgb(231, 231, 231);
		margin-right: 1rem;
	}

	.share-searchBtn {
		background-color: rgb(247, 248, 250);
		border: none;
		color: rgb(157, 99, 214);
		text-align: center;
		text-decoration: none;
		display: inline-block;
	}

	/* 
.nav-tab{
	box-shadow: 0.5rem 0.5rem 0.5rem rgb(242,238,246);
} */

	.share-van-tabs__wrap {
/* 		border: 1px solid rgba(239, 214, 248); */
		margin-top: 1rem;
    /* border-bottom-style: none; */
		border-top-left-radius: 0.5rem;
		border-top-right-radius: 0.5rem;
	}
	.share-goods {
		height: 2rem;
		line-height: 2rem;
		background: #F8F8F8;
/* 		border: 2px solid rgba(239, 214, 248); */
    box-shadow: 0rem 0.3rem 0.3rem #EBE3F1;
    margin-top: -0.1rem;
    border-bottom-left-radius: 0.5rem;
		border-bottom-right-radius: 0.5rem;
	}
  .share-nav-tab{
    margin-top: -1rem;
  }
	.share-nav-tab-btn{
/*    
    background-size: 4rem;
    width: 4rem;
    height: 1.2rem; */
		border: none;
    font-size: 0.5rem;
    color: black;
    text-decoration: none;
    margin-left: 1.3rem;
    top: 2.8rem;
/* 		display: inline-block; */
    position: absolute;
	}
  .sucai-tabbar{
    margin-top: 0.2rem;
    font-size: 0.75rem;
    text-align: center;
  }
  .sactive{
    background-color: #954BE0;
    height: 1.8rem;
    width: 4.5rem;
    color: white;
    border-radius:1rem ;
  }

	.van-tabs__line {
		top: 2rem;
		width: 1.5rem;
		background-color: rgb(136, 57, 222);
	}
</style>

