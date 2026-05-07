import { createRouter, createWebHistory } from 'vue-router'

// Importação das páginas
import HomePage     from '@/pages/HomePage.vue'
import SobrePage    from '@/pages/SobrePage.vue'
import ServicosPage from '@/pages/ServicosPage.vue'
import ProjetosPage from '@/pages/ProjetosPage.vue'
import ContatoPage  from '@/pages/ContatoPage.vue'

const routes = [
  { path: '/',         component: HomePage,     meta: { title: 'Início' } },
  { path: '/sobre',    component: SobrePage,    meta: { title: 'Sobre Nós' } },
  { path: '/servicos', component: ServicosPage, meta: { title: 'Serviços' } },
  { path: '/projetos', component: ProjetosPage, meta: { title: 'Projetos' } },
  { path: '/contato',  component: ContatoPage,  meta: { title: 'Contato' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Volta ao topo ao navegar entre páginas
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

// Atualiza o título da aba ao navegar
router.afterEach((to) => {
  document.title = `${to.meta.title} — FARG Ar-Condicionado`
})

export default router
