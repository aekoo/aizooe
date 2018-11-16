import Loadable from 'react-loadable'
import DelayLoading from '../components/DelayLoading'
const Home = Loadable({ loader: () => import('../pages/home'), loading: DelayLoading, delay: 3000 });
const Detail = Loadable({ loader: () => import('../pages/detail'), loading: DelayLoading, delay: 3000 });

export default
  [{
    'path': '/',
    'component': Home
  }, {
    'path': '/detail',
    'component': Detail
  }]