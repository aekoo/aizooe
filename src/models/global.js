
export default {
  namespace: 'global',

  state: {
    collapsed: false,
  },

  effects: {
  },

  reducers: {
  },

  subscriptions: {
    setup({ history }) {
      console.log(history);
      // Subscribe history(url) change, trigger `load` action if pathname is `/`
      return history.listen(({ pathname, search }) => {
        if (typeof window.ga !== 'undefined') {
          window.ga('send', 'pageview', pathname + search);
        }
      });
    },
  },
};
