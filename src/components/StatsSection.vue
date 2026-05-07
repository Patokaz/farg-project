<script setup>
import { stats } from '@/data/company.js'

// Props opcionais para customizar aparência
defineProps({
  dark: {
    type: Boolean,
    default: false // false = fundo azul (padrão), true = fundo escuro com números em azul-claro
  }
})
</script>

<template>
  <section :class="['stats-section', { 'stats-dark': dark }]">
    <div class="container">
      <div class="stats-grid">
        <div class="stat-item reveal" v-for="s in stats" :key="s.label">
          <div class="stat-num">
            {{ s.num }}<span class="stat-unit">{{ s.unit }}</span>
          </div>
          <div class="stat-label">{{ s.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats-section {
  background: var(--blue);
  padding: 4rem 0;
}

.stats-section.stats-dark {
  background: var(--dark);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.stat-item { text-align: center; }

.stat-num {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  color: var(--white);
  line-height: 1;
}

.stats-dark .stat-num {
  color: var(--blue-light);
}

.stat-unit { font-size: 1.8rem; }

.stat-label {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.65);
  margin-top: 0.5rem;
}

@media (min-width: 768px) {
  .stats-grid { grid-template-columns: repeat(4, 1fr); }
}
</style>
