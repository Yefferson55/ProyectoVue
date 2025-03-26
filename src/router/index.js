import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/contador',
      name: 'contador',
      component: () => import('../components/contador.vue'),
    },
    {
      path: '/listaTareas',
      name: 'Lista-de-Tareas',
      component: () => import('../components/listaTareas.vue'),
    },
  ],
})

export default router
