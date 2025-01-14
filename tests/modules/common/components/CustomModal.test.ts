import CustomModal from "@/modules/common/components/CustomModal.vue";
import { mount } from "@vue/test-utils";

describe('CustomModal.test', () => {
  test( 'Renders dialog whit default state', () => {
    const wrapper = mount(CustomModal);

    const modal = wrapper.find('.modal');
    expect(modal.attributes('open')).toBe(undefined);
  });

  test( 'renders dialog whit header, body and footer slots', () => {
    const wrapper = mount(CustomModal, {
      slots: {
        header: '<h1>Header</h1>',
        body: '<h1>Body</h1>',
        footer: '<h1>Footer</h1>'
      }
    });

    expect(wrapper.text()).toContain('Header');
    expect(wrapper.text()).toContain('Body');
    expect(wrapper.text()).toContain('Footer');
  });

  test( 'opens and closes dialog when modalOpen changes', async () => {
    const wrapper = mount(CustomModal, {
      props: {
        modalOpen: true
      }
    });
    
    const modal = wrapper.find('.modal');
    expect(modal.attributes('open')).toBeDefined();

    const modalBackdrop = wrapper.find('.modal-backdrop');
    expect(modalBackdrop.exists()).toBe(true);
    expect(modalBackdrop.classes())
      .toEqual(['modal-backdrop', 'fixed', 'top-0', 'left-0', 'z-10', 'bg-black', 'opacity-50', 'w-screen', 'h-screen']);
    
    await wrapper.setProps({modalOpen: false});
    expect(modal.attributes('open')).toBeUndefined();
    expect( wrapper.find('.modal-backdrop').exists()).toBe(false);
  });
});