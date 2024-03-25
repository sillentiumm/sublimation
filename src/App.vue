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
    font-family: "Tilda";
  }
  @font-face {
    font-family: "Tilda";
    src: url(./assets/fonts/TildaSans-VF.woff) format("woff"),
      url(./assets/fonts/TildaSans-VF.woff2) format("woff2"),
  }
  .bg-price {
    background-color: rgb(232,232,233);
  }
  .bg-secondary {
    background-color: lightcyan;
  }
  .bg-main {
    background-color: rgb(4,18,48);
    color: #fff;
  }
</style>