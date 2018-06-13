export const headerMenuData = [
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

export const siderMenuData = [
  {
    name: '招聘管理',
    icon: 'recruit',
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
    icon: 'process',
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
