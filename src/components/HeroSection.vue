<script setup>
import { RouterLink } from 'vue-router'
import { stats } from '@/data/company.js'
</script>

<template>
  <!--
    HERO SECTION
    Para adicionar uma imagem de fundo real:
    1. Coloque o arquivo em /public/images/hero-bg.jpg
    2. Descomente o estilo abaixo e comente o ::before com gradiente no CSS
  -->
  <section class="hero">
    <div class="hero-grid-overlay"></div>
    <div class="hero-accent"></div>

    <div class="hero-content container">

      <div class="hero-eyebrow">Engenharia Industrial em Climatização</div>

      <h1>
        Soluções em<br>
        <em>Climatização</em><br>
        de Alta Performance
      </h1>

      <p class="hero-sub">
        Projetos HVAC, ventilação mecânica e exaustão para ambientes
        corporativos e industriais. Atuando no Sudeste e Sul do Brasil desde 2008.
      </p>

      <div class="hero-btns">
        <RouterLink to="/contato" class="btn btn-primary">Solicitar Orçamento</RouterLink>
        <RouterLink to="/projetos" class="btn btn-outline">Ver Projetos</RouterLink>
      </div>

      <!-- Stats rápidas -->
      <div class="hero-stats">
        <div class="hero-stat-item" v-for="s in stats" :key="s.label">
          <div class="hero-stat-num">{{ s.num }}<span class="hero-stat-unit">{{ s.unit }}</span></div>
          <div class="hero-stat-label">{{ s.label }}</div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: flex-end;
  padding-bottom: 5rem;
  position: relative;
  overflow: hidden;
  background: var(--dark);
}

/* Fundo — substitua pelo background-image quando tiver foto real */
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #0d1117 0%, #1a2340 40%, #243050 70%, #1a2340 100%);
  z-index: 0;
}

/* Grade decorativa */
.hero-grid-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background-image:
    linear-gradient(rgba(113,137,174,0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(113,137,174,0.07) 1px, transparent 1px);
  background-size: 60px 60px;
}

/* Painel lateral decorativo */
.hero-accent {
  position: absolute;
  top: 0; right: 0;
  width: 45%; height: 100%;
  background: linear-gradient(135deg, transparent 0%, rgba(113,137,174,0.06) 100%);
  border-left: 1px solid rgba(113,137,174,0.12);
  z-index: 1;
}

/* Conteúdo */
.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  padding-top: 8rem;
}

.hero-eyebrow {
  font-family: var(--font-display);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--blue-light);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.hero-eyebrow::before {
  content: '';
  display: block;
  width: 40px; height: 1px;
  background: var(--blue-light);
}

h1 {
  color: var(--white);
  margin-bottom: 1.5rem;
  max-width: 800px;
}

h1 em {
  color: var(--blue-light);
  font-style: normal;
}

.hero-sub {
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.05rem;
  max-width: 500px;
  margin-bottom: 2.5rem;
}

.hero-btns {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* Stats */
.hero-stats {
  margin-top: 4rem;
  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap;
}

.hero-stat-item {
  border-left: 2px solid var(--blue);
  padding-left: 1rem;
}

.hero-stat-num {
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--white);
  line-height: 1;
}

.hero-stat-unit {
  font-size: 1.2rem;
}

.hero-stat-label {
  font-size: 0.72rem;
  font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  margin-top: 0.2rem;
}
</style>
