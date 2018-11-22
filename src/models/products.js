import { getUser } from '../services/api';

export default {
  namespace: 'products',
  state: [],

  effects: {
    * getUser({ payload }, { call, put }) {

      const res = yield call(getUser,payload.id);


      console.log(payload);
      console.log('getUser', res);
    },

  },

  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
};
