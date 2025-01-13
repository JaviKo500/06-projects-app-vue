<template>
  <aside class="bg-base-200 w-72 min-h-screen">
    <h2 class="text-lg font-bold mx-4">
      <RouterLink to="/">
        Projects
      </RouterLink>
    </h2>
    <p class="text-sm text-gray-500 mx-4" v-if="projectStore.noProjects" >No have projects</p>
    <ul class="menu rounded-box w-56" v-else>
      <li v-for="project in projectStore.projectList" :key="project.id">
        <template v-if="project.tasks.length">
          <details :open="project.tasks.length > 0">
            <summary>
              <RouterLink :to="`/project/${project.id}`">{{ project.name }}</RouterLink>
            </summary>
            <ul>
              <li v-for="task in project.tasks" :key="task.id">
                <RouterLink :to="`/project/${project.id}`">{{ task.name }}</RouterLink>
              </li>
            </ul> 
          </details>
        </template>
        <template v-else>
          <RouterLink :to=" `/project/${project.id}`">{{ project.name }}</RouterLink>
        </template>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts" setup>
  import { RouterLink } from 'vue-router';
import { useProjectsStore } from '../store/projects.store';
  const projectStore = useProjectsStore();
</script>