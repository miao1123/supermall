<template>
  <div class="comminity">
    <share-tabbar />
  </div>
</template>

<script>
  import SuCaiYanHuo from "./childComps/SuCaiYanHuo.vue"
  import SuCaiBaoKuan from "./childComps/SuCaiBaoKuan.vue"
  import ShareTabbar from "./childComps/ShareTabbar.vue"
export default {
  name: 'Community',
  components:{
    SuCaiBaoKuan,
    SuCaiYanHuo,
    ShareTabbar
  },
  data(){
    return {
      
    }
  },
  created(){
  }
}
</script>

<style>

</style>