<template>
  <div class="w-full"> 
    <section class="m-2">
      <BreadCrumbs :name="project?.name ?? 'No name'" />
    </section>

    <section class="m-2">
      <div class="overflow-x-auto">
        <table class="table table-zebra">
          <!-- head -->
          <thead>
            <tr>
              <th class="w-14">Completed</th>
              <th>Name</th>
              <th>Completed At</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
            </tr>
            <tr class="hover">
              <th></th>
              <td>
                <input 
                  class="input input-primary w-full opacity-60 transition-all hover:opacity-100 focus:opacity-100"
                  type="text" name="" id="" placeholder="Enter new task">
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

  </div>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router';
  import { ref, watch } from 'vue';

  import BreadCrumbs from '@/modules/common/components/BreadCrumbs.vue';
  import { useProjectsStore } from '../store/projects.store';
  import type { Project } from '../interfaces';

  // const route = useRoute();
  
  // console.log('<--------------- JK ProjectView --------------->');
  // console.log(route.params?.id);
  interface Props {
    id: string;
  }

  const router = useRouter();

  const props = defineProps<Props>();

  const projectStore = useProjectsStore(); 

  const project = ref<Project | null>(null);

  watch( 
    () => props.id, 
    () => {
      project.value = projectStore.projectList.find( project => project.id === props.id ) ?? null;
      if (!project.value) {
        router.replace('/')
      }
    },
    {
      immediate: true,
    }
  );
</script>