import { createRouter, createWebHistory } from 'vue-router';

export const routes = [
  {
    path: '/',
    component: () => import('../layout/LayoutView.vue'),
  },
  // {
  // path: '/',
  // component: () => import('../layout/LayoutView.vue'),
  // children: [
  //   // 在這裡添加子路由
  //   {
  //     path: '',
  //     component: () => import('../layout/')
  //   }
  // ]
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
