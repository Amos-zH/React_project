export default {

  namespace: 'count',   // model state 在全局 state 所用的 key

  state: {    //默认数据
    record: 0,    //highest record
    current: 0,   //当前速度
  },

  subscriptions: {    //订阅数据源
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {    //处理异步逻辑
    *add(action, { call, put }) {
      yield call(delay, 1000);
      yield put({ type: 'minus' });
    },
  },

  reducers: {   //同步更新 state
    save (state, action) {
      return { ...state, ...action.payload };   //... 是对象扩展运算符，类似 Object.extend
    },
    add (state) {
      const newCurren = state.current + 1;
      return {
        record : newCurren > state.record ? newCurren : state.record,
        current : newCurren,
      };
    },
    mins (state) {
      return {
        ...state, current : state.current - 1
      };    //... 是对象扩展运算符，类似 Object.extend
    },
  },
};
function delay(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  })
}
