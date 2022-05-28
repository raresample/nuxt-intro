export const state = () => ({
  title: 'Test',
  counter: 0,
});

export const mutations = {
  increment(state) {
    state.counter++;
  },
};