<script setup>
import { ref, computed } from 'vue'
import DefaultLayout  from '@/layouts/DefaultLayout.vue'
import PageBanner     from '@/components/PageBanner.vue'
import ProjectCard    from '@/components/ProjectCard.vue'
import StatsSection   from '@/components/StatsSection.vue'
import CTASection     from '@/components/CTASection.vue'
import SectionHeader  from '@/components/SectionHeader.vue'

import { useReveal }                   from '@/composables/useReveal.js'
import { projects, projectCategories } from '@/data/projects.js'

useReveal()

const activeFilter = ref('todos')

const filteredProjects = computed(() => {
  if (activeFilter.value === 'todos') return projects
  return projects.filter(p => p.category === activeFilter.value)
})

const techStats = [
  { num: '760 HP',   label: 'Capacidade em Projetos' },
  { num: '195k',     label: 'm³/h de Vazão de Ar' },
  { num: '50T/mês',  label: 'Capacidade Produtiva' },
  { num: '16+ anos', label: 'de Experiência' },
]
</script>

<template>
  <DefaultLayout>

    <!-- Banner -->
    <PageBanner
      title="Projetos Realizados"
      subtitle="Um portfólio de obras que demonstra nossa capacidade técnica e experiência em climatização corporativa e industrial."
      crumb="Projetos"
    />

    <!-- ── GRID DE PROJETOS ── -->
    <section class="section">
      <div class="container">

        <!-- Filtros de categoria -->
        <div class="project-filter reveal">
          <button
            v-for="cat in projectCategories"
            :key="cat.id"
            class="filter-btn"
            :class="{ active: activeFilter === cat.id }"
            @click="activeFilter = cat.id"
          >
            {{ cat.label }}
          </button>
        </div>

        <!-- Grid de cards -->
<TransitionGroup
  name="fade"
  tag="div"
  class="projects-grid"
>
  <ProjectCard
    v-for="project in filteredProjects"
    :key="project.id"
    :project="project"
  />
</TransitionGroup>

        <!-- Vazio -->
        <p v-if="filteredProjects.length === 0" class="empty">
          Nenhum projeto encontrado nesta categoria.
        </p>

      </div>
    </section>

    <!-- ── DESTAQUE TÉCNICO ── -->
    <section class="section tech-section">
      <div class="container">
        <SectionHeader
          class="reveal"
          tag="Capacidade Técnica"
          title="Números que comprovam nossa escala"
          :light="true"
        />
        <div class="tech-grid">
          <div class="tech-item reveal" v-for="t in techStats" :key="t.label">
            <div class="tech-num">{{ t.num }}</div>
            <div class="tech-label">{{ t.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CTA ── -->
    <CTASection
      tag="Próximo Projeto"
      title="Seu projeto pode ser o próximo desta lista."
      subtitle="Entre em contato e descubra como a FARG pode entregar a solução ideal para o seu empreendimento."
      second-label=""
      :show-second="false"
    />

  </DefaultLayout>
</template>

<style scoped>
/* Filtros */
.project-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 3rem;
}

.filter-btn {
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.5rem 1.2rem;
  border: 1.5px solid rgba(0, 0, 0, 0.15);
  background: transparent;
  color: var(--gray);
  cursor: pointer;
  transition: all 0.2s;
}

.filter-btn:hover,
.filter-btn.active {
  background: var(--blue);
  border-color: var(--blue-dark);
  color: var(--white);
}

/* Grid */
.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px)  { .projects-grid { grid-template-columns: 1fr 1fr; } }
@media (min-width: 1024px) { .projects-grid { grid-template-columns: repeat(3, 1fr); } }

.empty {
  text-align: center;
  color: var(--gray);
  padding: 3rem 0;
}

/* Transição de filtro */
.fade-enter-active, .fade-leave-active { transition: opacity 0.25s; }
.fade-enter-from, .fade-leave-to       { opacity: 0; }

/* Seção técnica */
.tech-section { background: var(--dark); }

.tech-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
}

@media (min-width: 768px) { .tech-grid { grid-template-columns: repeat(4, 1fr); } }

.tech-item { text-align: center; }

.tech-num {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: var(--blue-light);
  line-height: 1;
}

.tech-label {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 0.5rem;
}
</style>