<template>
  <div className="tabbar">
    <van-tabbar v-model="active" route @change="changeTabbar(active)">
      <van-tabbar-item
        v-for="(item, index) in tabbarList"
        :key="`tabbar-${index}`"
        :icon="item.icon"
        :to="item.route"
        :badge="item.badge">
        {{ item.text }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
  import { Component as VueComponent } from 'vue-tsx-support'
  import { Component } from 'vue-property-decorator'

  interface IItem {
    name: string
    icon: string
    activeIcon: string
    text: string
    route: string
     badge: string
  }
  
  type IProps = {}
  
  @Component
  export default class TabBar extends VueComponent<{props: IProps}> {
    active = 'home'
    tabbarList: IItem[] = [
      { name: 'home', icon: 'home-0', activeIcon: 'home-inactive', text: '首页', route: '/home', badge: '' },
      { name: 'shop-car', icon: 'shopping-o', activeIcon: 'shopping-inactive', text: '购物车', route: '/shop-car', badge: '' },
      { name: 'me', icon: 'user-o', activeIcon: 'user-inactive', text: '我的', route: '/me', badge: '5' },
    ]
    changeTabbar(active: string) {
      this.active = active
    }
  }
</script>
