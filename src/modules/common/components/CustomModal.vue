<template>
  <dialog class="modal" :open="modalOpen">
    <div class="modal-box">

      <div class="border-b border-blue-500">
        <!-- Header -->
        <slot name="header"/>
      </div>
      <div class="my-5">
        <!-- Content -->
        <slot name="body"/>
      </div>
      <div class="border-t border-t-blue-500 pt-2">
        <slot name="footer"/>
      </div>
    </div>
  </dialog>
  <div v-if="modalOpen" class="modal-backdrop fixed top-0 left-0 z-10 bg-black opacity-50 w-screen h-screen"></div>
</template>

<script lang="ts" setup>
  interface Props {
    modalOpen: boolean;
  }

  withDefaults(defineProps<Props>(), {
    modalOpen: false,
  });
</script>