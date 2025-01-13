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

  const toggleTask = ( projectId: string, taskId: string ) => {
    const project = projects.value.find( project => project.id === projectId );
    if ( !project ) return;

    const task = project.tasks.find( task => task.id === taskId );
    if ( !task ) return;
    
    task.completedAt = task.completedAt ? undefined : new Date();
  }
  return {
    // properties
    projects,

    // getters
    projectList: computed( () => [...projects.value] ),
    noProjects: computed( ()=> !projects.value.length ),
    projectWithCompletions: computed( () => {
      return projects.value.map( project => {
        const total = project.tasks.length;
        const completed = project.tasks.filter( task => task.completedAt ).length;
        const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);
        return {
          id: project.id,
          name: project.name,
          taskCount: project.tasks.length,
          completion: project.tasks.filter( task => task.completedAt ).length,
          percentage,
        }
      });
    }),
    // actions
    addProject,
    addTaskToProject,
    toggleTask,
  };
});