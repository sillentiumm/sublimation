<script setup>

  import Main from './components/Main.vue'

</script>

<template>
  <Suspense>
    <router-view>
    </router-view>
  </Suspense>
</template>

<style>
  * {
    margin: 0;  
    padding: 0;
    box-sizing: border-box;
  }
  .bg-gray {
    background-color: lightgray;
  }
  .bg-green {
    background-color: #ADDFAD;
  }
</style>