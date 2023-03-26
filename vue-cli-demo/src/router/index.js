import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import MyView from '../views/MyView.vue'
import ItemDetailsView from '../views/ItemDetailsView.vue'
import TodoView from '../views/TodoView.vue'
import RegView from '../views/RegView.vue'
import LoginView from '../views/LoginView.vue'
import LayoutView from '../views/LayoutView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/reg',
      name: 'reg',
      component: RegView
    },
    
    {
      path: '/',
      name: 'layout',
      component: LayoutView,
      redirect:'/login',
      children:[
        {
          path:'/home',
          name:'home',
          component:HomeView
        },
        {
          path: '/todo',
          name: 'todo',
          component: TodoView
        },
        {
          path: '/items/:id', //动态路由
          name: 'item-details',
          props:true,
          component: ItemDetailsView,
        }
      ]
    },
  ]
})

export default router
