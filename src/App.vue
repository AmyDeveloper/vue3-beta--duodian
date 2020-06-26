<template>
  <div>
    <router-view/>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import vue from 'vue'
import BottomNav from "@/components/nav/bottomNav"
export class App extends vue {}
</script>

<style>
  body {
    background: #f6f6f6;
  }
</style>
