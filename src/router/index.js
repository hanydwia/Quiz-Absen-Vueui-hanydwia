import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/students/Home.vue'
import Createstudents from '../views/students/Createstudents.vue'
import Editstudents from '../views/students/Editstudents.vue'
import Groups from '../views/groups/Index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/createstudents',
    name: 'Createstudents',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createstudents 
  },
  {
    path: '/editstudents/:id',
    name: 'Editstudents',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editstudents
  },
  {
    path: '/groups/:id',
    name: 'groups.index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Groups
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
