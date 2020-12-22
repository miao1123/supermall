<template>
  <div>
    <div id="mainbox" class="flex">
      <span id="title">超级导航</span>
      <input id="search2" placeholder="输入商品名称或粘贴商品标题" />
      <ul class="nav flex">
        <li @click="pagechange(index)"
            v-for="(item, index) in guidedata"
            :key="index"
            :class="{gactive: index === currentIndex}">
          {{item}}
        </li>
      </ul>
    </div>
    <pindao v-show="currentIndex===0"></pindao>
    <!-- <pinpaibox v-show="currentIndex===1"></pinpaibox> -->
  </div>
</template>

<script>
import Pindao from './pindao.vue';
import pinpaibox from './pinpaibox.vue';
  export default{
  components: { pinpaibox, Pindao },
    name: 'guidebox1',
    data(){
      return{
        guidedata: ['频道', '品牌', '淘宝' , '京东', '拼多多'],
        currentIndex: 0
      }
    },
    methods: {
      pagechange(index){
        this.currentIndex = index;
        console.log(index)
      }
    }
  }
</script>

<style scoped>
  /* 区块大小、位置相关样式和呈现样式以注释为分界 */
  .flex {
    /* 弹性布局类 */
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-around;
  }

  #mainbox {
    flex-direction: column;
    padding-top: 2rem;
    /*  */
    width: 100%;
    min-height: 7rem;
    background-color: #8848FE;
    background-size: 100% 10rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0; 
    z-index: 222;
  }

  #title {
    color: white;
    font-size: 1.1rem;
    
  }

  #search2 {
    width: 80%;
    height: 2rem;
    /*  */
    font-size: 1rem;
    text-align: center;
    border-radius: 2rem;
    margin: 0.8rem 0;
  }

  .nav {
    width: 100%;
    /*  */
    color: #F1D322;
    padding-bottom: 0.5rem;
  }

  .nav>li {
    width: 15%;
    height: 2rem;
    /*  */
    font-size: 1rem;
    line-height: 2rem;
    text-align: center;
  }

  .gactive {
    border-radius: 2rem;
    color: #864AFE;
    background-color: #fff;
  }
  
</style>
