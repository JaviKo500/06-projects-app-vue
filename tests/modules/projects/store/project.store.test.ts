import { useProjectsStore } from "@/modules/projects/store/projects.store";
import { createPinia, setActivePinia } from "pinia";
import { fakeProjects } from "../../../mocks/projects.fake";

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

  test( 'add a project - action', () => {
    const store = useProjectsStore();
    const nameProject = 'new project';
    store.addProject(nameProject);

    expect(store.projects.length).toBe(1);
    expect(store.projects.at(0)).toEqual({
      id: expect.any(String),
      name: nameProject,
      tasks: []
    });
  });

  test( 'should load from localStorage', () => {
    localStorage.setItem('projects', JSON.stringify(fakeProjects));

    const store = useProjectsStore();

    // expect(store.projects).toEqual(fakeProjects);
    const [ project1, project2 ] = store.projects;

    expect(project1).toEqual( {
      id: '1',
      name: 'project 1',
      tasks: expect.any(Array)
    } );
    expect(project2).toEqual({
      id: '2',
      name: 'project 2',
      tasks: expect.any(Array)
    });

    expect(store.projects.length).toBe(fakeProjects.length);
  });
});