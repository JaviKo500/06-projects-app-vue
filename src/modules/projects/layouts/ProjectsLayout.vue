<template>
  <div class="flex flex-col">
    <!-- Top menu -->
    <top-menu></top-menu>
    <main>
      <!-- Side menu -->
      <side-menu></side-menu>
      <!-- Router view -->
      <router-view></router-view>

    </main>
  </div>
</template>
<script setup lang="ts">
  import TopMenu from '@/modules/common/components/TopMenu.vue';
  import SideMenu from '@/modules/projects/components/SideMenu.vue';
</script>