
vi.mock('@/router', () => ({
  default: 'router',
}));

vi.mock('pinia', async ( importOriginal ) => {
  const mod = await importOriginal() ?? {};

  return {
    ...mod,
    createPinia: vi.fn().mockReturnValue('pinia'),
  };
});
describe('Main.test', () => {
  // eslint-disable-next-line
  const vue = require('vue');
  const useSpy = vi.fn();
  const mountSoy = vi.fn();
  const createApp = vi.fn().mockReturnValue({
    use: useSpy,
    mount: mountSoy,
  });

  vue.createApp = createApp;

  test( 'should be configured with pinia and router', async () => {
    await import('@/main.ts');
    expect(vue.createApp).toHaveBeenCalled();
    expect(mountSoy).toHaveBeenCalledWith('#app');

    expect(useSpy).toHaveBeenCalledWith('router');
    expect(useSpy).toHaveBeenCalledWith('pinia');
  });
});