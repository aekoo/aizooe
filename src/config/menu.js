import { isUrl } from '../utils/utils';

const menuData = [
  {
    name: '首頁',
    icon: 'home',
    path: 'home',
    authority:'1,2'
  },
 
  {
    name: '贷款产品管理',
    icon: 'project',
    path: 'loanProManage',
    children: [
      {
        name: '贷款产品列表',
        path: 'loanProList',
      },
    ],
  },
  {
    name: '运营配置管理',
    icon: 'setting',
    path: 'operateConfigManage',
    children: [
      {
        name: '渠道列表',
        path: 'channelList',
      },
      {
        name: '配置列表',
        path: 'configList',
      },
    ],
  },
  
  {
    name: '异常页面',
    icon: 'setting',
    path: 'exception',
    children: [
      {
        name: '403',
        path: '403',
      },
      {
        name: '404',
        path: '404',
      },
      {
        name: '500',
        path: '500',
        authority:'3'
      },
    ],
  },

];

function formatter(data, parentPath = '/', parentAuthority) {
  return data.map(item => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
// function formatter2(data, parentPath = '/', parentAuthority) {
//   return data.map(item => {
//     let { path } = item;
//     if (!isUrl(path)) {
//       path = parentPath + item.path;
//     }
//     const result = {
//       ...item,
//       path,
//       authority: item.authority || parentAuthority,
//     };
//     if (item.children) {
//       result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
//     }
//     return result;
//   });
  
// }





// function menuaa(){
//   const dataMenu = localStorage.getItem('userMenuList')?JSON.parse(localStorage.getItem('userMenuList')):[]
//   const dataList = dataMenu&&dataMenu.map((v,i)=>({
//       name:v.menuName,
//       path:v.menuPath,
//       children:v.children.map((vo,i)=>({
//         name:vo.menuName,
//         path:vo.menuPath,
//       }))
//   }))
//   return dataList
// }

// export const getMenuData = () => formatter2(menuaa());