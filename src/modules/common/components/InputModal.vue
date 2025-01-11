<template>
  <dialog class="modal modal-bottom sm:modal-middle" :open="modalOpen">
    <div class="modal-box">
      <h3 class="text-lg font-bold">{{ title }}</h3>
      <p class="py-2">{{ subtitle }}</p>
      <div class="modal-action flex flex-col">
        <form method="dialog" @submit.prevent="submitValue">
          <input 
            ref="inputRef"
            v-model="inputValue"
            type="text" name="" id="" :placeholder="placeholder" class="input input-bordered input-primary w-full flex-1">
          <!-- if there is a button in form, it will close the modal -->
          <div class="flex justify-end mt-5">
            <button class="btn mr-4" @click="closeModal">Close</button>
            <button class="btn btn-primary">Save</button>
          </div>
        </form>
      </div>
    </div>
  </dialog>
  <div v-if="modalOpen" class="modal-backdrop fixed top-0 left-0 z-10 bg-black opacity-50 w-screen h-screen"></div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

  interface Props {
    modalOpen: boolean;
    placeholder?: string;
    title?: string;
    subtitle?: string;
  }

  withDefaults(defineProps<Props>(), {
    modalOpen: false,
    placeholder: 'Enter value',
    title: 'Hello',
    subtitle: 'Press ESC key or click the button below to close',
  });

  const emits = defineEmits<{
    close: [void];
    value: [text:string]
  }>();

  const inputValue = ref('');

  const inputRef = ref<HTMLInputElement | null>(null);
  const submitValue = () => {
    if( !inputValue.value.trim() ) {
      inputRef.value?.focus();
      return;
    };
    emits('value', inputValue.value.trim());
    emits('close');
    inputValue.value = '';
  };

  const closeModal = () => {
    emits('close');
  }
</script>