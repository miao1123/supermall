<template>
  <div class="baokuan">
    <div v-for="(item,index) in baokuandata" :key="index" class="baokuan-box">
       <bao-kuan-item>
        <span slot="kefu_name">{{item.kefu_name}}</span>
        <span slot="time_transfer">{{item.time_transfer}}</span>
        <span slot="share_count">{{item.share_count}}</span>
      </bao-kuan-item> 
      <bao-kuan-main-item>
        <span slot="content1" v-html="item.content1"></span>
        <div v-for="(item1,index1) in item.goods.smallimages" :key="index1" slot="smallimages" class="baokuan-tupian">
          <img :src="item1"/>
        </div>
        <img slot="goods.mainimage" :src="item.goods.mainimage"/>
        <span slot="goods.title">{{item.goods.title}}</span>
        <span slot="goods.couponPrice">{{item.goods.couponPrice}}</span>
        <span slot="goods.couponAmount">{{item.goods.couponAmount}}</span>
        <span slot="goods.commission">{{item.goods.commission}}</span> 
      </bao-kuan-main-item>
    </div>
    
  </div>
</template>

<script>
  import BaoKuanItem from '../../../components/community/BaoKuanItem.vue'
  import BaoKuanMainItem from '../../../components/community/BaoKuanMainItem.vue'
  import sharepage1 from '../../../../static/data/community/baokuan/sharepage1.js'
  export default{
    name: 'SuCaiBaoKuan',
    data() {
      return {
        baokuandata: [],
        baokuan_images: []
      }
    },
    components:{
      BaoKuanItem,
      BaoKuanMainItem
    },
    created(){
      this.baokuandata = sharepage1.data
    }
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  .baokuan{
    padding-top: 9rem;
    padding-bottom: 4rem;
    background-color: #F5F5F5 ;
  }
  .baokuan-box{
     margin:0 0.7rem ;
     border-radius:0.3125rem ;
     padding-bottom: 0.5rem;
     background-color: white;
   }
  .baokuan-tupian{
    width: 31%;
    height: 5.7rem;
    padding: 0.2rem;
    margin-top: 0.3rem;
    
  }
  .baokuan-tupian>img{
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
  }
</style>
