<template>
  <div class="user">
    <userbox1></userbox1>
  </div>
</template>

<script>
import userbox1 from '../../components/usercom/userbox1.vue'

export default {
  name: 'User',
  
  components:{
    userbox1
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    outline:none;
    list-style: none;
    user-select: none;
    border-style: none;
  }
</style>