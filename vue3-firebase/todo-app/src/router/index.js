import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import YapilacakEkle from '../views/YapilacakEkle.vue'
import YapilacakGüncelle from '../views/YapilacakGüncelle.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/yapilacak-ekle',
    name: 'YapilacakEkle',
    component: YapilacakEkle
  },
  {
    path: '/yapilacak-guncelle/:id',
    name: 'YapilacakGuncelle',
    component: YapilacakGüncelle,
    props:true
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
