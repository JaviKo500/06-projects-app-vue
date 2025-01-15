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

  test( 'add task to project - action', () => {
    const store = useProjectsStore();

    store.addProject('new project');

    const project = store.projects.at(0)!;

    store.addTaskToProject(project.id, 'new task');

    expect(project.tasks.length).toBe(1);
    expect(project.tasks.at(0)).toEqual({
      id: expect.any(String),
      name: 'new task',
      completedAt: undefined,
    });
  });

  test( 'toggle a task', () => {
    const store = useProjectsStore();

    store.addProject('new project');

    const project = store.projects.at(0)!;

    store.addTaskToProject(project.id, 'new task');

    const task = project.tasks.at(0)!;

    store.toggleTask(project.id, task.id);

    expect(project.tasks.at(0)).toEqual({
      id: expect.any(String),
      name: 'new task',
      completedAt: expect.any(Date),
    });
  });

  test( 'should return the project with completions', () => {
    const store = useProjectsStore();
    store.$patch( ( state ) => {
      state.projects = fakeProjects;
    });

    expect( store.projectWithCompletions ).toEqual(
      [
        {
          id: '1',
          name: 'project 1',
          taskCount: 4,
          completion: 1,
          percentage: 25
        },
        {
          id: '2',
          name: 'project 2',
          taskCount: 2,
          completion: 1,
          percentage: 50
        },
        {
          id: '3',
          name: 'project 3',
          taskCount: 2,
          completion: 1,
          percentage: 50
        }
      ]
    );
  });
});