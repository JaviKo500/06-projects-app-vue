import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Project } from '../interfaces';
import { UuidAdapter } from '@/modules/common/adapters/uuid.adapter';
import { useLocalStorage } from '@vueuse/core';


export const useProjectsStore = defineStore('projects', () => {
  const projects = ref(
    useLocalStorage<Project[]>( 'projects', [] )
  );

  const addProject = (name: string) => {
    if (!name) return;
    projects.value.push({
      id: UuidAdapter.generate(),
      name,
      tasks: [],
    });
  }
  return {
    // properties
    // projects,

    // getters
    projectList: computed( () => [...projects.value] ),
    
    // actions
    addProject
  };
});