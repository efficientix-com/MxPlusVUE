<script setup>
import { ref } from "vue";
import menuItem from "./menuItem";
import MenuItemComponent from "./MenuItemComponent.vue";

const collapsed = ref(false);
</script>
<template>
  <div :class="['menu', collapsed ? 'collapsed' : 'expanded']">
    <!-- <div class="header">
      <div class="menu-button" @click="collapsed = !collapsed">
        <font-awesome-icon icon="fa-solid fa-bars" size="1x" />
      </div>
    </div> -->

    <div class="profile" @click="collapsed = !collapsed">
      <img
        src="https://tstdrv2220309.app.netsuite.com/core/media/media.nl?id=41816&c=TSTDRV2220309&h=hwk7nQLvm4DhhjGxOgJM-NWBL0bkmeRsiz9CBRzkD-eyV8Yc&fcts=20230228102607&whence="
        alt="alt"
      />
      <!-- <div class="profile-name" v-if="!collapsed">
        {{ menuItem.profile.name }}
      </div> -->
    </div>

    <div class="menu-items">
      <ul>
        <MenuItemComponent
          v-for="menuItemElement in menuItem.items"
          v-bind:key="menuItemElement.id"
          :item="menuItemElement"
          :collapsed="collapsed"
        />
      </ul>
    </div>
  </div>
</template>

