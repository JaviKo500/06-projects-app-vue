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
    <fab-button @click="() => console.log('add')">
      <AddCircle/> 
    </fab-button>
  </div>
</template>
<script lang="ts" setup>
  import FabButton from '@/modules/common/components/FabButton.vue'
  import AddCircle from '@/modules/common/icons/AddCircle.vue'
</script>