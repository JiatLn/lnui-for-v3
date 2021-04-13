import { createRouter, createWebHashHistory } from 'vue-router';

import Layout from '@/layouts/index.vue';

export const routes = [
  {
    path: '/',
    component: Layout,
    alwaysShow: true,
    meta: { title: '导航', icon: 'el-icon-setting' },
  },
];

// 用工厂函数创建router实例
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
