import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Project } from '../interfaces';
import { UuidAdapter } from '@/modules/common/adapters/uuid.adapter';


const initialLoad = (): Project[] => {
  return [
    {
      id: UuidAdapter.generate(),
      name: 'Project 1',
      tasks: [
        {
          id: 1,
          name: 'Task 1',
          completedAt: new Date(),
        },
        {
          id: 1,
          name: 'Task 1',
        },
      ],
    },
    {
      id: UuidAdapter.generate(),
      name: 'Project 2',
      tasks: [],
    },
  ];
};
export const useProjectsStore = defineStore('projects', () => {
  const projects = ref<Project[]>(initialLoad());

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