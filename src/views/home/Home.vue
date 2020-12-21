<template>
  <div class="home">
    <div class="head">
      <search />
      <div class="head-guide-box">
        <div class="head-guide">
          <router-link to="/home/homemain" class="head-a">
            <div class="head-guide-text-b">今日优品</div>
          </router-link>
          <router-link to="/home/homeguess" class="head-a">
            <div class="head-guide-text-b">猜你喜欢</div>
          </router-link>
          <div v-for="(item, index) in cladata" :key="index">
            <router-link :to="'/home/'+item.name" class="head-a">
              <div class="head-guide-text">{{item.name}}</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import HomeMain from './HomeMain.vue'
import classdata from '../../../static/data/home/classification'
import Search from '../../components/search/Search.vue'
export default {
  name: 'Home',
  data(){
    return {
      cladata: []
    }
  },
  components: {
    HomeMain,
    Search
  },
  created(){
    this.cladata = classdata.data
  }
}
</script>

<style scoped>
  .head {
    background-image: url('../../assets/img/home/bg/bannerba.png');
    background-size: 100%;
    /* width: 100%; */
    height: 8rem;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 1111;
    color: white;
  }
  .head-guide-box {
    padding-top: 0.5rem;
  }
  .head-guide {
    height: 2rem; 
    line-height: 2rem;
    overflow-x: auto;
    padding-left: 0.8rem;
    display: flex;
    text-align: center;
  }
  .head-a {
    display: inline-block;
  }
  .head-guide-text {
    color: white;
    padding: 0 0.2rem;
    font-size: 1rem;
    font-weight: 100;
    width: 3rem;
    padding-bottom: 0.3rem;
  }
  .head-guide-text-b {
    color: white;
    padding: 0 0.6rem;
    font-size: 1rem;
    font-weight: 100;
    width: 4rem;
    padding-bottom: 0.3rem;
  }
  .router-link-active {
    font-size: 1.1rem;
    font-weight: 500;
    text-decoration: underline white;
  }
</style>