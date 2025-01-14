import { shallowMount } from '@vue/test-utils';

import FabButton from '@/modules/common/components/FabButton.vue';

describe('FabButton.test', () => {
  test( 'FabButton renders with default position', () => {
    const wrapper = shallowMount(FabButton);
    expect(wrapper.props().position).toBe('bottom-right');
    const buttonClasses = wrapper.find('button').classes();
    const classesToHave = ['btn', 'btn-circle', 'btn-secondary', 'fixed', 'bottom-right'];
    expect(buttonClasses).toEqual(classesToHave);
  });

  test( 'renders with custom position top-left', () => {
    const wrapper = shallowMount(FabButton, {
      props: {
        position: 'top-left'
      }
    });

    expect(wrapper.props().position).toBe('top-left');

    const buttonClasses = wrapper.find('button').classes();
    const classesToHave = ['btn', 'btn-circle', 'btn-secondary', 'fixed', 'top-left'];
    expect(buttonClasses).toEqual(classesToHave);
  });

  test( 'renders with custom position top-right', () => {
    const wrapper = shallowMount(FabButton, {
      props: {
        position: 'top-right'
      }
    });

    expect(wrapper.props().position).toBe('top-right');

    const buttonClasses = wrapper.find('button').classes();
    const classesToHave = ['btn', 'btn-circle', 'btn-secondary', 'fixed', 'top-right'];
    expect(buttonClasses).toEqual(classesToHave);
  });

  test( 'renders slot content inside button', () => {
    const wrapper = shallowMount(FabButton, {
      slots: {
        default: '<span>Hello World</span>'
      }
    });

    const slotContent = wrapper.find('button span');

    expect(slotContent.exists()).toBe(true);
    expect(slotContent.text()).toBe('Hello World');

  });
});