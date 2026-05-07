<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageBanner    from '@/components/PageBanner.vue'
import StatsSection  from '@/components/StatsSection.vue'
import CTASection    from '@/components/CTASection.vue'
import SectionHeader from '@/components/SectionHeader.vue'

import { useReveal }          from '@/composables/useReveal.js'
import { timeline, values }   from '@/data/company.js'
import { IconBuilding }       from '@/data/icons.js'

useReveal()
</script>

<template>
  <DefaultLayout>

    <!-- Banner -->
    <PageBanner
      title="Nossa História"
      subtitle="Mais de 16 anos entregando excelência em engenharia de climatização para os maiores projetos do Brasil."
      crumb="Sobre Nós"
    />

    <!-- ── 1. HISTÓRIA ── -->
    <section class="section">
      <div class="container">
        <div class="about-grid">
          <div class="about-text reveal">
            <div class="tag">Quem Somos</div>
            <h2>Fundados sobre engenharia. Consolidados pela excelência.</h2>
            <p class="lead">A FARG Ar-Condicionado nasceu em 2008 com uma missão clara: oferecer soluções de engenharia em climatização com alto nível técnico e estrutura própria para atender grandes empreendimentos.</p>
            <p>Ao longo dos anos, construímos um portfólio de obras expressivas nas regiões Sudeste e Sul do Brasil, atendendo clientes do setor financeiro, tecnológico e industrial. Nossa oficina própria nos permite manter controle total sobre qualidade e prazos.</p>
            <p>Com capacidade produtiva de 50.000 kg/mês e equipe multidisciplinar de engenheiros e técnicos, a FARG está preparada para os projetos mais exigentes, desde o planejamento até o comissionamento dos sistemas.</p>
          </div>
          <div class="about-img img-placeholder reveal">
            <!--
              INSERT IMAGE: foto da equipe ou escritório
              <img src="/images/equipe.jpg" alt="Equipe FARG" />
            -->
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="1" v-html="IconBuilding"></svg>
            <span>Foto da equipe / escritório</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── 2. TIMELINE ── -->
    <section class="section timeline-section">
      <div class="container">
        <SectionHeader class="reveal" tag="Nossa Trajetória" title="Marcos que definem quem somos" />
        <div class="timeline">
          <div class="timeline-item reveal" v-for="item in timeline" :key="item.year">
            <div class="timeline-year">{{ item.year }}</div>
            <div class="timeline-body">
              <h4>{{ item.title }}</h4>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── 3. OFICINA ── -->
    <section class="section">
      <div class="container">
        <div class="about-grid">
          <div class="about-img img-placeholder reveal">
            <!--
              INSERT IMAGE: foto da oficina / produção
              <img src="/images/oficina.jpg" alt="Oficina FARG" />
            -->
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="1" v-html="IconBuilding"></svg>
            <span>Foto da oficina / produção</span>
          </div>
          <div class="reveal">
            <div class="tag">Estrutura Própria</div>
            <h2>Oficina e infraestrutura de ponta</h2>
            <p>Nossa oficina própria é um dos nossos principais diferenciais competitivos. Equipada com maquinário especializado, ela nos permite executar a fabricação e montagem de dutos, suportes e componentes com total controle de qualidade.</p>
            <p style="margin-top: 1rem">Com capacidade de processamento de <strong>50.000 kg/mês</strong>, estamos aptos a atender múltiplos projetos simultaneamente, sem comprometer prazos ou qualidade.</p>
            <p style="margin-top: 1rem">A estrutura inclui área de corte, dobra, solda e acabamento de chapa galvanizada, além de espaço para estoque de materiais e equipamentos.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── 4. MISSÃO / VISÃO / VALORES ── -->
    <section class="section">
      <div class="container">
        <SectionHeader class="reveal" tag="Nossos Princípios" title="Missão, Visão e Valores" :center="true" />
        <div class="values-grid">
          <div class="value-card reveal" v-for="v in values" :key="v.title">
            <h3>{{ v.title }}</h3>
            <p>{{ v.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── 5. STATS ── -->
    <StatsSection />

    <!-- ── 6. CTA ── -->
    <CTASection
      tag="Trabalhe Conosco"
      title="Quer fazer parte da nossa história?"
      subtitle="Entre em contato para saber sobre vagas, parcerias ou para solicitar um orçamento para seu projeto."
      primary-label="Falar com a FARG"
      primary-link="/contato"
      second-label="Ver Projetos"
      second-link="/projetos"
    />

  </DefaultLayout>
</template>

<style scoped>
/* Grid reutilizável 2 colunas */
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

.about-text p,
.reveal p { color: var(--gray); margin-bottom: 1rem; }

@media (min-width: 768px) {
  .about-grid { grid-template-columns: 1fr 1fr; }
}

/* Timeline */
.timeline-section { background: var(--gray-light); }

.timeline { margin-top: 3rem; }

.timeline-item {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
}

.timeline-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.timeline-year {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--blue);
  line-height: 1;
  padding-top: 0.25rem;
}

.timeline-body h4 { margin-bottom: 0.5rem; font-size: 1.1rem; }
.timeline-body p  { font-size: 0.9rem; color: var(--gray); }

/* Valores */
.values-section { background: var(--cream); }

.values-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3rem;
}

.value-card {
  padding: 2rem;
  border: 1px solid var(--cream-dark);
  background: var(--cream);
}

.value-card h3 { color: var(--blue-dark); margin-bottom: 0.75rem; }
.value-card p  { font-size: 0.92rem; color: var(--gray); }

@media (min-width: 768px) {
  .values-grid { grid-template-columns: repeat(3, 1fr); }
}
</style>
