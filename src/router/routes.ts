import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/Homepage.vue'),
    name: 'homepage',
  },
]

export default routes
