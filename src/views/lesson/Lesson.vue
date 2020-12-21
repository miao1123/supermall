<template>
  <div>
    <div class="lesson">
      <div class="head-bg">
        <img src="../../assets/img/lesson/yue_bg1.png" style="width: 100%; " />
      </div>
      <div class="lesson-title">
        <span>悦课堂</span>
       </div>
      <div class="center">
        <div class="center-box">
          <search />
          <img src="../../assets/img/lesson/yue_help_banner.png" style="position: relative;"/>
        </div>
      </div>
      <div class="daohang">
        <div class="icon">
          <!-- <div class="icon-img"> --><img src="../../assets/img/lesson/yue_help_icon1.png" /><!-- </div> -->
          <!-- <div class="icon-img"> --><img src="../../assets/img/lesson/yue_help_icon2.png" /><!-- </div> -->
          <!-- <div class="icon-img"> --><img src="../../assets/img/lesson/yue_help_icon3.png" /><!-- </div> -->
          <!-- <div class="icon-img"> --><img src="../../assets/img/lesson/yue_help_icon4.png" /><!-- </div> -->
        </div>
        <div class="span1">
          <span>新人指导</span>
          <span>进阶课程</span>
          <span>达人课堂</span>
          <span>常见问题</span>
        </div>
      </div>
    </div>
    <JingXuan :jingxuandata="jinxuandata" />
    <ZhiDao :zhidaodata="zhidaodata" />
    <KeCheng :kechengdata="kechengdata"/>
    <KeTang :ketangdata="ketangdata"/>
    <WenTi :wentidata="wentidata"/>
  </div>
</template>

<script>
import Search from './childComps/Search.vue'
import JingXuan from './childComps/JingXuan.vue'
import ZhiDao from './childComps/ZhiDao.vue'
import KeCheng from './childComps/KeCheng.vue'
import KeTang from './childComps/KeTang.vue'
import WenTi from './childComps/WenTi.vue'
import jinxuan from '../../../static/data/lesson/jinxuan.js'
import zhidao from '../../../static/data/lesson/zhidao.js'
import jinjie from '../../../static/data/lesson/jinjie.js'
import daren from '../../../static/data/lesson/daren.js'
import question from '../../../static/data/lesson/question.js'
export default {
  name: 'Lesson',
  components: { 
    Search,
    JingXuan,
    ZhiDao,
    KeCheng,
    KeTang,
    WenTi
  },
  data(){
    return {
      jinxuandata: [],
      zhidaodata:[],
      kechengdata:[],
      ketangdata:[],
      wentidata:[]
    }
  },
  created() {
    this.jinxuandata = jinxuan.data
    this.zhidaodata = zhidao.data
    this.kechengdata = jinjie.data
    this.ketangdata = daren.data
    this.wentidata = question.data
  }
}


</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  .lesson {
    height: 100%;
    position: relative;
    background-color: rgb(245,245,245);
  }
  .head-bg {
    z-index: 0;
  }
  .head-bg>img {
    width: 100%;
  }
  .lesson-title>span{
    line-height:5rem;
  }
  .lesson-title{
    text-align: center;
    color: white;
    height: 8%;
    position:fixed;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    z-index: 222;
    background-image: url(../../assets/img/lesson/yue_bg2.png);
    background-size: 100%;
  }
  .center {
    /* margin-top: 20%; */
    z-index: 111;
    position: absolute;
    top: 42%;
  }
  .center-box {
    width: 90%;
    margin: 0.625rem auto;
  }
  .center-box>img{
    width: 100%;
  }
  .daohang{
    width: 100%;
    /* top:130%; */
    margin-top:3.25rem;
    /* margin-bottom: 8%; */
    /* top: 13rem; */
    height: 5rem;
    position: absolute;
    border-radius: 0.625rem;
    z-index: 1;
    /* display: flex; */
  }
  .icon>img{
    margin: 0.4rem;
    width: 11%;
    /* margin: 0 auto;
    text-align: ; */
  }
  .icon {
    display: flex;
    flex: 1;
    justify-content: space-around;
    align-items: center;
  }
  .span1{
    display: flex;
    flex: 1;
    justify-content: space-around;
    font-size:0.7rem;
    color: rgb(51,51,51);
    text-align: center;
  }
/*  .jingxuan{
    background-image: url(../../assets/img/lesson/section_bg.png);
    width: 100%;
    height:100%;
    background-size: 100%;
    
    top: 18rem;
    position: absolute;
    z-index: 1;
  }

  .jingxuan1{
    top: 21rem;
    margin: 0.8rem;
  }
  .jx2{
    width: 100%;
    height: 55%;
    
  }
  .jx2>img{
    float: left;
} */
</style>