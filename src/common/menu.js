const headerMenuData = [
  {
    name: '招聘管理',
    icon: 'recruit',
    path: 'recruit'
  },
  {
    name: '新流程中心',
    icon: 'process',
    path: 'process'
  }
];

const siderMenuData = [
  {
    name: '招聘管理',
    icon: 'usergroup-add',
    path: 'recruit',
    children: [
      {
        name: '应聘登记表',
        path: 'registration'
      },
      {
        name: '入职登记表',
        path: 'employees'
      }
    ]
  },
  {
    name: '新流程中心',
    icon: 'fork',
    path: 'process',
    children: [
      {
        name: '待办',
        path: 'todo'
      },
      {
        name: '已办',
        path: 'handing'
      }
    ]
  }
];

function formatter(data, parentPath = '/') {
  return data.map(item => {
    let { path } = item;  //相当于let path = item.path;
    path = parentPath + path;
    const result = {
      ...item,
      path
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`);
    }
    return result;
  })
}

export const getHeraderMenuDate = () => formatter(headerMenuData);
export const getSiderMenuDate = () => formatter(siderMenuData);
