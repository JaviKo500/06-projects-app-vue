<template>
  <div class="overflow-x-auto w-full">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Project</th>
          <th>Tasks</th>
          <th>Progress</th>
        </tr>
      </thead>
      <tbody>
        <tr class="hover" v-for="(project, index) in projectsStore.projectWithCompletions" :key="project.id">
          <th>{{ index+1 }}</th>
          <td>{{ project.name }}</td>
          <td>{{ project.taskCount }}</td>
          <td>
            <ProgressBar :value="project.completion" :max="project.taskCount" :progress="project.percentage"/>
          </td>
        </tr>
      </tbody>
    </table>
    
    <InputModal 
      placeholder="Enter project name"
      title="Add new project"
      :modal-open="modalOpen" 
      @close="modalOpen = false" 
      @value="projectsStore.addProject"/>
    <custom-modal 
      :modal-open="customModalOpen" >
      <template #header>
        <h1 class="text-2xl ">Hello</h1>
      </template>
      <template #body>
        <p>Consectetur laboris officia tempor incididunt fugiat irure ea do amet ad consectetur pariatur dolore. Et qui nisi cillum anim enim ipsum eiusmod cupidatat do id. Anim sunt aute labore deserunt nisi velit officia. Esse commodo velit aliqua sint. Amet excepteur adipisicing irure fugiat aute dolor pariatur incididunt dolore eiusmod. Ipsum non non labore esse.</p>
      </template>
      <template #footer >
        <div class="flex justify-end">
          <button class="btn mr-4" @click="customModalOpen = false">Close</button>
          <button class="btn btn-primary">Save</button>
        </div>
      </template>
    </custom-modal>

    <fab-button @click="modalOpen = true">
      <AddCircle/> 
    </fab-button>
    <fab-button position="bottom-left" @click="customModalOpen = true">
      <AddProject/> 
    </fab-button>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';

  import FabButton from '@/modules/common/components/FabButton.vue'
  import InputModal from '@/modules/common/components/InputModal.vue';
  import AddCircle from '@/modules/common/icons/AddCircle.vue';
  import CustomModal from '@/modules/common/components/CustomModal.vue';
  import AddProject from '@/modules/common/icons/AddProject.vue';
  import { useProjectsStore } from '../store/projects.store';
  import ProgressBar from '@/modules/common/components/ProgressBar.vue';

  const modalOpen = ref(false);
  const customModalOpen = ref(false);

  const projectsStore = useProjectsStore();
</script>