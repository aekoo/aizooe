import { routerRedux } from 'dva/router';
// import { reloadAuthorized } from '../utils/Authorized';
import { setAuthority } from '../utils/authority';
import { message } from 'antd';
export default {
  namespace: 'login',

  state: {
    user: null,
  },

  effects: {
    *login({ payload }, { call, put }) {
      console.log(payload)
      if(payload&&payload.username==='admin'){
        setAuthority('1,3');
        yield put(routerRedux.push('/'));
      }else{
        message.error('失败');
        
      }
    },
    *logout({ payload }, { call, put }) {
      localStorage.clear();
      // reloadAuthorized();
      yield put(routerRedux.push('/user/login'));
    },
  },

  reducers: {
  },
};