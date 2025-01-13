<template>
  <div class="breadcrumbs text-sm w-full">
    <ul>
      <li>
        <RouterLink to="/">
          <HomeIcon/>
          &nbsp;
          Home
        </RouterLink>
      </li>
      <li>
        <ProjectIcon/> 
        &nbsp;
        {{ name }}	
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
  import HomeIcon from '../icons/HomeIcon.vue';
import ProjectIcon from '../icons/ProjectIcon.vue';

  interface Props {
    name: string;
  }
  defineProps<Props>();
</script>