import { useProjectsStore } from "@/modules/projects/store/projects.store";
import ProjectsView from "@/modules/projects/views/ProjectsView.vue";
import { createTestingPinia } from "@pinia/testing";
import { mount } from "@vue/test-utils";
import { fakeProjects } from "../../../mocks/projects.fake";

describe('ProjectsView.test', () => {
  const wrapper = mount(ProjectsView, {
    global: {
      plugins: [createTestingPinia()],
    },
  });

  const store = useProjectsStore();
  
  beforeEach(() => {
    store.$patch({
      projects: fakeProjects
    });
  });

  test( 'should be render with projects', () => { 
    const tableRows = wrapper.findAll('tbody tr');
    expect(tableRows.length).toBe(3);
    tableRows.forEach((row, index) => {
      const project = fakeProjects[index];
      const cells = row.findAll('td');
      expect(cells.at(0)?.html()).toContain(`<td>${project.name}</td>`)
      expect(cells.at(1)?.text()).toBe(`${project.tasks.length}`)
    });
  });

  test( 'should call addProject method on modal submit', () => {
    const inputModal = wrapper.findComponent({ name: 'InputModal' });

    const newProjectName = 'new project';

    inputModal.vm.$emit('value', newProjectName);

    expect(store.addProject).toHaveBeenCalledWith(newProjectName);
  });
});