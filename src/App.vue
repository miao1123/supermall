<template>
  <div id="app">
    <main-tab-bar v-show="$store.state.isShow" />
    <router-view/>
  </div>
</template>

<script>
import MainTabBar from './components/MainTabBar.vue'
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>

</style>
