// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: "首页",
    path: "/dashboard",
    icon: "home"
  }
];

const asideMenuConfig = [
  {
    name: "首页",
    path: "/dashboard",
    icon: "home"
  },
  {
    name: "账号",
    icon: "yonghu",
    path: "/account",
    children: [
      {
        name: "设置",
        path: "/account/settings"
      }
    ]
  }
];

export { headerMenuConfig, asideMenuConfig };
