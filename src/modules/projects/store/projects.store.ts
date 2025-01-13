import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Project } from '../interfaces';
import { UuidAdapter } from '@/modules/common/adapters/uuid.adapter';
import { useLocalStorage } from '@vueuse/core';


export const useProjectsStore = defineStore('projects', () => {
  const projects = ref(
    useLocalStorage<Project[]>( 'projects', [] )
  );

  const addTaskToProject = (id: string, name: string) => {
    if ( !name.trim() ) return;
    const project = projects.value.find( project => project.id === id );
    if ( !project ) return;
    project.tasks.push({
      id: UuidAdapter.generate(),
      name,
    });
  }
  const addProject = (name: string) => {
    if ( !name.trim()) return;
    projects.value.push({
      id: UuidAdapter.generate(),
      name,
      tasks: [],
    });
  }
  return {
    // properties
    projects,

    // getters
    projectList: computed( () => [...projects.value] ),
    noProjects: computed( ()=> !projects.value.length ),
    // actions
    addProject,
    addTaskToProject,

  };
});