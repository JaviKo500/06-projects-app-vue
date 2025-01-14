import { useProjectsStore } from "@/modules/projects/store/projects.store";
import { createPinia, setActivePinia } from "pinia";

describe('Project.store.test', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    localStorage.clear();
  });
  test( 'should return a default state', () => {
    const { 
      addProject, 
      addTaskToProject, 
      toggleTask, 
      noProjects, 
      projects, 
      projectWithCompletions,
      projectList,
    } = useProjectsStore();

    expect(noProjects).toBe(true);
    expect(projects).toEqual([]);
    expect(projectWithCompletions).toEqual([]);
    expect(projectList).toEqual([]);
    expect(addProject).toBeInstanceOf(Function);
    expect(addTaskToProject).toBeInstanceOf(Function);
    expect(toggleTask).toBeInstanceOf(Function);
  });
});