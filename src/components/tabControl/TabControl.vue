<template>
  <div class="">
    <div class="tab-control">
      <div class="tab">
        <div v-for="(item, index) in titles"
            class="tab-control-item"
            :class="{active: index === currentIndex}"
            @click="itemClick(index)" :key="index">
          <span>{{item}}</span>
        </div>
      </div>
    </div>
    <main-home-nav v-show="currentIndex===0" />
    <shop-nav v-show="currentIndex===1" />
    <life-nav v-show="currentIndex===2" />
    <tour-nav v-show="currentIndex===3" />
    <own-nav v-show="currentIndex===4" />
  </div>
  
</template>

<script>
import ShopNav from '../../views/home/childComps/centernav/ShopNav.vue';
import MainHomeNav from '../../views/home/childComps/centernav/MainHomeNav.vue';
import LifeNav from '../../views/home/childComps/centernav/LifeNav.vue';
import TourNav from '../../views/home/childComps/centernav/TourNav.vue';
import OwnNav from '../../views/home/childComps/centernav/OwnNav.vue';
  export default {
  components: { MainHomeNav,ShopNav, LifeNav, TourNav, OwnNav },
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
        // this.$emit('tabClick', index)
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    /* display: flex; */
    text-align: center;
    font-size: 0.95rem;
    height: 1.4rem;
    line-height: 1.4rem;
    background-color: #fff;
    padding-bottom: 0.5rem;
  }
  .tab {
    width: 93%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .tab-control-item span {
    padding: 0.05rem 0.9rem;
  }

  .active {
    color: white;
    background-image: url('../../assets/img/home/buremen.png');
    background-size: 100%;
  }

  .active span {
    border-bottom: 3px solid var(--color-tint);
  }
</style>
