<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageBanner    from '@/components/PageBanner.vue'
import CTASection    from '@/components/CTASection.vue'

import { useReveal } from '@/composables/useReveal.js'
import { services }  from '@/data/services.js'
import { IconCheck } from '@/data/icons.js'

useReveal()
</script>

<template>
  <DefaultLayout>

    <!-- Banner -->
    <PageBanner
      title="Nossos Serviços"
      subtitle="Soluções completas em engenharia de climatização, da concepção ao comissionamento."
      crumb="Serviços"
    />

    <!-- ── DETALHES DOS SERVIÇOS ── -->
    <section class="section">
      <div class="container">

        <div
          class="service-detail reveal"
          v-for="(s, i) in services"
          :key="s.id"
        >
          <!-- Layout alternado: par → texto à esq | ímpar → texto à dir -->
          <div class="service-detail-grid" :class="{ 'reverse': i % 2 !== 0 }">

            <!-- Bloco de texto -->
            <div class="service-text">
              <div class="service-detail-num">0{{ i + 1 }}</div>
              <div class="tag">{{ s.tag }}</div>
              <h2>{{ s.title }}</h2>
              <p>{{ s.desc }}</p>
              <p>{{ s.desc2 }}</p>

              <!-- Benefícios -->
              <ul class="benefits-list">
                <li class="benefit-item" v-for="b in s.benefits" :key="b">
                  <span class="benefit-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" v-html="IconCheck"></svg>
                  </span>
                  <span>{{ b }}</span>
                </li>
              </ul>
            </div>

            <!-- Imagem -->
            <div class="service-img">
              <img :src="s.image" :alt="s.title">
            </div>

          </div>
        </div>

      </div>
    </section>

    <!-- ── CTA ── -->
    <CTASection
      tag="Fale com a FARG"
      title="Tem um projeto em mente?"
      subtitle="Nossa equipe de engenharia está pronta para analisar sua demanda e elaborar uma proposta técnica e comercial personalizada."
      primary-label="Solicitar Orçamento"
      primary-link="/contato"
      second-label="Ver Projetos Realizados"
      second-link="/projetos"
    />

  </DefaultLayout>
</template>

<style scoped>
/* Separadores entre serviços */
.service-detail {
  padding: 4rem 0;
  border-bottom: 1px solid var(--gray-light);
}

.service-detail:last-child { border-bottom: none; }

/* Grid 2 colunas com layout alternado */
.service-detail-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: start;
}

@media (min-width: 768px) {
  .service-detail-grid { grid-template-columns: 1fr 1fr; }
  .service-detail-grid.reverse .service-text { order: 2; }
  .service-detail-grid.reverse .service-img  { order: 1; }
}

/* Número decorativo */
.service-detail-num {
  font-family: var(--font-display);
  font-size: 5rem;
  font-weight: 800;
  color: var(--cream-dark);
  line-height: 1;
  margin-bottom: 1rem;
}

.service-text h2 { margin-bottom: 1rem; }
.service-text p  { color: var(--gray); margin-bottom: 1rem; }

/* Imagem */
.service-img {
  aspect-ratio: 4 / 3;
  max-width: 1000px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: auto;
}

.service-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1px solid var(--gray-light);
  border-radius: 20px;
  display: block;
}

/* Benefícios */
.benefits-list {
  list-style: none;
  margin-top: 1.5rem;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  font-size: 0.92rem;
  color: var(--gray);
}

.benefit-icon {
  color: var(--blue);
  flex-shrink: 0;
  margin-top: 1px;
}
</style>
