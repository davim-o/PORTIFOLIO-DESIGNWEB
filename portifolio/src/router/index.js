import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Sobre from '../views/Sobre.vue'
import Habilidades from '../views/Habilidades.vue'
import Projetos from '../views/Projetos.vue'
import Contato from '../views/Contato.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/sobre', component: Sobre },
    { path: '/habilidades', component: Habilidades },
    { path: '/projetos', component: Projetos },
    { path: '/contato', component: Contato }
  ]
})
