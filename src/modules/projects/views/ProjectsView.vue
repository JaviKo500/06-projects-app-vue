<template>
  <div class="overflow-x-auto w-full">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Project</th>
          <th>Task</th>
          <th>Progress</th>
        </tr>
      </thead>
      <tbody>
        <tr class="hover">
          <th>2</th>
          <td>Hart Hagerty</td>
          <td>Desktop Support Technician</td>
          <td>Purple</td>
        </tr>
      </tbody>
    </table>
    
    <InputModal 
      placeholder="Enter project name"
      title="Add new project"
      :modal-open="modalOpen" 
      @close="modalOpen = false" 
      @value="onNewValue"/>

    <fab-button @click="modalOpen = true">
      <AddCircle/> 
    </fab-button>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';

  import FabButton from '@/modules/common/components/FabButton.vue'
  import InputModal from '@/modules/common/components/InputModal.vue';
  import AddCircle from '@/modules/common/icons/AddCircle.vue';

  const modalOpen = ref(false);

  const onNewValue = (projectName: string) => {
    console.log('<--------------- JK ProjectsView --------------->');
    console.log(projectName);
  }
</script>