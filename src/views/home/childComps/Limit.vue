<template>
  <div id="limit">
    <div class="limit-head">
      <div class="limit-head-box">
        <div class="limit-head-left">
          <img src="../../../assets/img/home/home_seckill.png" alt="">
        </div>
        <div class="limit-head-right">
          <div class="limit-head-right-box"
               @click="itemClick(index)"
               v-for="(item, index) in timeControl"
               :key="index">
               <div class="time" :class="{lactive: index === currentIndex}">{{item.time}}</div>
               <div class="time-status">{{item.timeStatus}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="limit-body">
      <zero v-show="currentIndex===0" />
      <ten v-show="currentIndex===1" />
      <twelve v-show="currentIndex===2" />
    </div>
  </div>
</template>

<script>
import Ten from './limit/Ten.vue'
import Twelve from './limit/Twelve.vue'
import Zero from './limit/Zero'
export default {
  components: { Zero, Twelve, Ten },
  name: 'Limit',
  data(){
    return {
      currentIndex: 0,
      timeControl: [{time: '00:00', timeStatus: '已开抢'},
                    {time: '10:00', timeStatus: '即将开始'},
                    {time: '12:00', timeStatus: '即将开始'}]
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style>
  #limit{
    width: 100%;
    height: 15rem;
    background: url('../../../assets/img/home/home_seckill_bg.png');
    /* background-size: 100%; */
  }
  .limit-head {
    position: relative;
    padding: 0.8rem 0;
  }
  .time {
    width: 4rem;
    border-radius: 10%;
  }
  .lactive {
    background-color: #E13C38;
    color: white;
  }
</style>