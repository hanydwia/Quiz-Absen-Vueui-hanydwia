import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/students/Home.vue'
import Index from '../views/absens/Index.vue'
import Createstudents from '../views/students/Createstudents.vue'
import Editstudents from '../views/students/Editstudents.vue'
import Createabsens from '../views/absens/Createabsens.vue'
import Editmatakuliahs from '../views/matakuliahs/Editmatakuliahs.vue'
import Creatematakuliahs from '../views/matakuliahs/Creatematakuliahs.vue'
import Matakuliah from '../views/matakuliahs/Matakuliah.vue'
import Editjadwals from '../views/jadwals/Editjadwals.vue'
import Createjadwals from '../views/jadwals/Createjadwals.vue'
import Jadwal from '../views/jadwals/Jadwal.vue'
import Editsemesters from '../views/semesters/Editsemesters.vue'
import Createsemesters from '../views/semesters/Createsemesters.vue'
import Semester from '../views/semesters/Semester.vue'
import Editkontraks from '../views/kontraks/Editkontraks.vue'
import Createkontraks from '../views/kontraks/Createkontraks.vue'
import Kontrak from '../views/kontraks/Kontrak.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  
  {
    path: '/createstudents',
    name: 'Createstudents',
    // route level code-splitting
    // this generates a separate chunk (Createstudents.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createstudents
  },
  {
    path: '/editstudents/:id',
    name: 'Editstudents',
    // route level code-splitting
    // this generates a separate chunk (Editstudents.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editstudents
  },
  {
    path: '/Createabsens',
    name: 'Createabsens',
    // route level code-splitting
    // this generates a separate chunk (Createabsens.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createabsens
  },
  {
    path: '/editmatakuliahs/:id',
    name: 'Editmatakuliahs',
    // route level code-splitting
    // this generates a separate chunk (Editmatakuliah.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editmatakuliahs
  },
  {
    path: '/Creatematakuliahs',
    name: 'Creatematakuliahs',
    // route level code-splitting
    // this generates a separate chunk (Creatematakuliahs.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Creatematakuliahs
  },
  {
    path: '/Matakuliah',
    name: 'Matakuliah',
    // route level code-splitting
    // this generates a separate chunk (Matakuliah.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Matakuliah
  },
  {
    path: '/editjadwals/:id',
    name: 'Editjadwals',
    // route level code-splitting
    // this generates a separate chunk (Editjadwal.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editjadwals
  },
  {
    path: '/Createjadwals',
    name: 'Createjadwals',
    // route level code-splitting
    // this generates a separate chunk (Createjadwals.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createjadwals
  },
  {
    path: '/jadwal',
    name: 'jadwal',
    // route level code-splitting
    // this generates a separate chunk (jadwal.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Jadwal
  },
  {
    path: '/editsemesters/:id',
    name: 'Editsemesters',
    // route level code-splitting
    // this generates a separate chunk (Editsemester.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editsemesters
  },
  {
    path: '/Createsemesters',
    name: 'Createsemesters',
    // route level code-splitting
    // this generates a separate chunk (Createsemesters.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createsemesters
  },
  {
    path: '/semester',
    name: 'semester',
    // route level code-splitting
    // this generates a separate chunk (semester.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Semester
  },
  {
    path: '/editkontraks/:id',
    name: 'Editkontraks',
    // route level code-splitting
    // this generates a separate chunk (Editkontrak.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editkontraks
  },
  {
    path: '/Createkontraks',
    name: 'Createkontraks',
    // route level code-splitting
    // this generates a separate chunk (Createkontraks.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createkontraks
  },
  {
    path: '/kontrak',
    name: 'Kontrak',
    // route level code-splitting
    // this generates a separate chunk (Kontrak.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Kontrak
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router