<script setup>
import { RouterLink } from 'vue-router'
import DefaultLayout  from '@/layouts/DefaultLayout.vue'
import HeroSection    from '@/components/HeroSection.vue'
import ServiceCard    from '@/components/ServiceCard.vue'
import ProjectCard    from '@/components/ProjectCard.vue'
import StatsSection   from '@/components/StatsSection.vue'
import CTASection     from '@/components/CTASection.vue'
import SectionHeader  from '@/components/SectionHeader.vue'

import { useReveal }    from '@/composables/useReveal.js'
import { services }     from '@/data/services.js'
import { projects }     from '@/data/projects.js'
import { differentials, } from '@/data/company.js'
import { IconBuilding } from '@/data/icons.js'

useReveal()

// Apenas projetos marcados como destaque
const featuredProjects = projects.filter(p => p.featured)
</script>

<template>
  <DefaultLayout>

    <!-- ── 1. HERO ── -->
    <HeroSection />

    <!-- ── 2. SOBRE PREVIEW ── -->
    <section class="section about-preview">
      <div class="container">
        <div class="about-grid">

          <!-- Imagem -->
          <div class="about-img img-placeholder reveal">
            <!--
              INSERT IMAGE: foto da empresa ou oficina
              Substitua este bloco por:
              <img src="/images/empresa.jpg" alt="FARG Empresa" />
            -->
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="1" v-html="IconBuilding"></svg>
            <span>Foto da empresa / oficina</span>
          </div>

          <!-- Texto -->
          <div class="about-text reveal">
            <div class="tag">Sobre a FARG</div>
            <h2>Estrutura própria.<br>Expertise reconhecida.</h2>
            <p class="lead">Fundada em 2008, a FARG Ar-Condicionado atua no segmento de engenharia de climatização para grandes empreendimentos corporativos e industriais.</p>
            <p>Com oficina própria e capacidade de produção de 50.000 kg/mês, entregamos projetos completos desde a concepção até a instalação, com foco em eficiência energética e qualidade técnica.</p>
            <p>Nossa equipe especializada já executou obras para empresas como Santander, Banco Safra, Cielo e Hexagon, consolidando nossa presença no Sudeste e Sul do Brasil.</p>
            <RouterLink to="/sobre" class="btn btn-outline-dark" style="margin-top: 1.5rem">
              Conheça Nossa História
            </RouterLink>
          </div>

        </div>
      </div>
    </section>

    <!-- ── 3. SERVIÇOS ── -->
    <section class="section services-section">
      <div class="container">
        <SectionHeader
          class="reveal"
          tag="Nossos Serviços"
          title="Soluções completas em\nengenharia de climatização"
          subtitle="Da concepção ao comissionamento, oferecemos serviços integrados para projetos de qualquer porte."
          :light="true"
        />
        <div class="services-grid">
          <ServiceCard
            class="reveal"
            v-for="service in services"
            :key="service.id"
            :service="service"
          />
        </div>
      </div>
    </section>

    <!-- ── 4. STATS ── -->
    <StatsSection />

    <!-- ── 5. PROJETOS EM DESTAQUE ── -->
    <section class="section projects-section">
      <div class="container">
        <SectionHeader
          class="reveal"
          tag="Projetos em Destaque"
          title="Obras que evidenciam\nnossa capacidade técnica"
        />
        <div class="projects-grid">
          <ProjectCard
            class="reveal"
            v-for="project in featuredProjects"
            :key="project.id"
            :project="project"
          />
        </div>
        <div class="projects-link reveal">
          <RouterLink to="/projetos" class="btn btn-outline-dark">
            Ver Todos os Projetos
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- ── 6. DIFERENCIAIS ── -->
    <section class="section diff-section">
      <div class="container">
        <SectionHeader
          class="reveal"
          tag="Nossos Diferenciais"
          title="Por que escolher a FARG?"
          :light="true"
        />
        <div class="diff-grid">
          <div class="diff-item reveal" v-for="(d, i) in differentials" :key="d.title">
            <div class="diff-num">0{{ i + 1 }}</div>
            <h3>{{ d.title }}</h3>
            <p>{{ d.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── 7. CTA ── -->
    <CTASection
      tag="Vamos Conversar"
      title="Pronto para o próximo grande projeto?"
      subtitle="Entre em contato com nossa equipe de engenharia e receba uma proposta personalizada para o seu empreendimento."
    />

  </DefaultLayout>
</template>

<style scoped>
/* ── Sobre Preview ── */
.about-preview { background: var(--cream); }

.about-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}

.about-img {
  aspect-ratio: 4 / 3;
}

.about-text .lead {
  font-size: 1.15rem;
  font-weight: 400;
  color: var(--dark-mid);
  margin-bottom: 1.25rem;
}

.about-text p {
  color: var(--gray);
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .about-grid { grid-template-columns: 1fr 1fr; }
}

/* ── Serviços ── */
.services-section { background: var(--dark); }

.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5px;
}

@media (min-width: 768px)  { .services-grid { grid-template-columns: 1fr 1fr; } }
@media (min-width: 1024px) { .services-grid { grid-template-columns: repeat(4, 1fr); } }

/* ── Projetos ── */
.projects-section { background: var(--gray-light); }

.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.projects-link {
  text-align: center;
  margin-top: 2.5rem;
}

@media (min-width: 768px)  { .projects-grid { grid-template-columns: 1fr 1fr; } }
@media (min-width: 1024px) { .projects-grid { grid-template-columns: repeat(3, 1fr); } }

/* ── Diferenciais ── */
.diff-section { background: var(--dark); }

.diff-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3rem;
}

.diff-item {
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.07);
  transition: border-color 0.25s;
}

.diff-item:hover { border-color: rgba(113, 137, 174, 0.4); }

.diff-num {
  font-family: var(--font-display);
  font-size: 3.5rem;
  font-weight: 800;
  color: rgba(113, 137, 174, 0.2);
  line-height: 1;
  margin-bottom: 1rem;
}

.diff-item h3 { color: var(--white); margin-bottom: 0.75rem; }
.diff-item p  { color: rgba(255, 255, 255, 0.5); font-size: 0.95rem; }

@media (min-width: 768px)  { .diff-grid { grid-template-columns: 1fr 1fr; } }
@media (min-width: 1024px) { .diff-grid { grid-template-columns: repeat(3, 1fr); } }
</style>
