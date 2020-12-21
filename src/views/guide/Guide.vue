<template>
  <div class="guide">
    <guidebox1></guidebox1>
    <pinpaibox></pinpaibox>
  </div>
</template>

<script>
  import guidebox1 from '../../components/guidecom/guidebox1.vue'
  import pinpaibox from '../../components/guidecom/pinpaibox.vue'
  
  export default {
    name: 'guide',
    components: {
      guidebox1,
      pinpaibox,
      isShow:true
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    outline: none;
    list-style: none;
    user-select: none;
    border-style: none;
  }
</style>
