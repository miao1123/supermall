<template>
  <div class="guide">
    <guidebox-1 />
  </div>
</template>

<script>
  import guidebox1 from '../../components/guidecom/guidebox1.vue'
  export default {
    name: 'Guide',
    components: {
      guidebox1,
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
