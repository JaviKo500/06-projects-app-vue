<template>
  <progress class="progress progress-accent w-56" :value="value" :max="max"></progress>
  {{ progress }}%
</template>
<script lang="ts" setup>
  interface Props {
    value: number;
    max: number;
    progress: number;
  }
  withDefaults(defineProps<Props>(), {
    value: 0,
    max: 100,
    progress: 0,
  });

</script>