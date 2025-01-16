import { mount } from "@vue/test-utils";
import { createTestingPinia } from '@pinia/testing'
import { nextTick } from "vue";

import SideMenu from "@/modules/projects/components/SideMenu.vue";
import { useProjectsStore } from "@/modules/projects/store/projects.store";
import { fakeProjects } from "../../../mocks/projects.fake";

describe('SideMenu.test', () => {
  const wrapper = mount( SideMenu, {
    global: {
      stubs: ['RouterLink'],
      plugins: [createTestingPinia()],
    },
  });

  const store = useProjectsStore();

  beforeEach(() => {
    store.$patch({
      projects: []
    });
  });
  test( 'should render with no projects', () => {
    expect(wrapper.html()).toContain('No have projects');
  });

  test( 'should render with projects', async () => {
    store.$patch({
      projects: fakeProjects
    });

    //* await update state
    await nextTick();

    expect(wrapper.html()).not.toContain('No have projects');
    expect(wrapper.find('.menu.rounded-box.w-56').exists()).toBe(true);
  });
});