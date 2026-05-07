<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRouter, RouterLink } from 'vue-router'

const scrolled  = ref(false)
const menuOpen  = ref(false)
const router    = useRouter()

const onScroll = () => { scrolled.value = window.scrollY > 40 }
onMounted(()   => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

// Fecha menu ao trocar de rota
watch(() => router.currentRoute.value.path, () => { menuOpen.value = false })
</script>

<template>
  <header :class="['header', { scrolled }]">
    <div class="header-inner container">

      <!-- Logo -->
      <RouterLink to="/" class="logo">
        <img src="/public/images/farg-logo-branco.png" alt="FARG Ar-Condicionado">
      </RouterLink>

      <!-- Navegação desktop -->
      <nav class="nav">
        <RouterLink to="/"         active-class="active" exact>Início</RouterLink>
        <RouterLink to="/sobre"    active-class="active">Sobre</RouterLink>
        <RouterLink to="/servicos" active-class="active">Serviços</RouterLink>
        <RouterLink to="/projetos" active-class="active">Projetos</RouterLink>
        <RouterLink to="/contato"  active-class="active">Contato</RouterLink>
      </nav>

      <!-- CTA desktop -->
      <RouterLink to="/contato" class="nav-cta">Solicitar Orçamento</RouterLink>

      <!-- Hamburguer mobile -->
      <button
        :class="['hamburger', { open: menuOpen }]"
        @click="menuOpen = !menuOpen"
        aria-label="Abrir menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Menu mobile -->
    <Transition name="slide">
      <nav v-if="menuOpen" class="mobile-nav">
        <RouterLink to="/"         @click="menuOpen = false">Início</RouterLink>
        <RouterLink to="/sobre"    @click="menuOpen = false">Sobre</RouterLink>
        <RouterLink to="/servicos" @click="menuOpen = false">Serviços</RouterLink>
        <RouterLink to="/projetos" @click="menuOpen = false">Projetos</RouterLink>
        <RouterLink to="/contato"  @click="menuOpen = false">Solicitar Orçamento</RouterLink>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  background: var(--dark);
  transition: box-shadow 0.3s ease;
}

.header.scrolled {
  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.35);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.1rem;
  padding-bottom: 1.1rem;
}

/* ── Logo ── */
.logo img{
  width: 5rem;
}

/* ── Navegação desktop ── */
.nav {
  display: none;
  gap: 2rem;
}

.nav a {
  font-family: var(--font-display);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.2s;
}

.nav a:hover,
.nav a.active {
  color: var(--cream);
}

/* ── CTA desktop ── */
.nav-cta {
  display: none;
  font-family: var(--font-display);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.6rem 1.4rem;
  background: var(--blue);
  color: var(--white);
  text-decoration: none;
  transition: background 0.2s;
}

.nav-cta:hover {
  background: var(--blue-dark);
}

/* ── Hamburguer ── */
.hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  padding: 4px;
  background: none;
  border: none;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--white);
  transition: all 0.3s;
}

.hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

/* ── Menu mobile ── */
.mobile-nav {
  background: var(--dark-mid);
  padding: 1.5rem var(--container-px);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mobile-nav a {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: color 0.2s;
}

.mobile-nav a:hover { color: var(--cream); }

/* ── Transição menu mobile ── */
.slide-enter-active,
.slide-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.slide-enter-from,
.slide-leave-to     { opacity: 0; transform: translateY(-8px); }

/* ── Responsive ── */
@media (min-width: 768px) {
  .nav      { display: flex; }
  .nav-cta  { display: inline-block; }
  .hamburger { display: none; }
}
</style>
