<template>
  <BreadCrumbs :name="project?.name ?? 'No name'" />
</template>

<script lang="ts" setup>
  import BreadCrumbs from '@/modules/common/components/BreadCrumbs.vue';
  import { useProjectsStore } from '../store/projects.store';
import { ref, watch } from 'vue';
import type { Project } from '../interfaces';

// import { useRoute } from 'vue-router';
  // const route = useRoute();
  
  // console.log('<--------------- JK ProjectView --------------->');
  // console.log(route.params?.id);
  interface Props {
    id: string;
  }
  const props = defineProps<Props>();

  const projectStore = useProjectsStore(); 

  const project = ref<Project | null>(null);

  watch( 
    () => props.id, 
    () => {
      project.value = projectStore.projectList.find( project => project.id === props.id ) ?? null;
    },
    {
      immediate: true,
    }
  );
</script>