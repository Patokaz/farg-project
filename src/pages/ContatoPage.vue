<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageBanner    from '@/components/PageBanner.vue'
import ContactForm   from '@/components/ContactForm.vue'
import CTASection    from '@/components/CTASection.vue'

import { useReveal }    from '@/composables/useReveal.js'
import { companyInfo }  from '@/data/company.js'
import { IconPhone, IconMail, IconMapPin, IconMap } from '@/data/icons.js'

useReveal()

const contactItems = [
  {
    icon: IconPhone,
    title: 'Telefone',
    lines: [companyInfo.phone, 'Seg–Sex: 8h às 18h'],
  },
  {
    icon: IconMail,
    title: 'E-mail',
    lines: [companyInfo.email, 'Retorno em até 24h úteis'],
  },
  {
    icon: IconMapPin,
    title: 'Localização',
    lines: [companyInfo.address, companyInfo.coverage],
  },
]
</script>

<template>
  <DefaultLayout>

    <!-- Banner -->
    <PageBanner
      title="Fale com\na FARG"
      subtitle="Solicite um orçamento ou tire suas dúvidas. Nossa equipe de engenharia retorna em até 24 horas úteis."
      crumb="Contato"
    />

    <!-- ── FORMULÁRIO + INFO ── -->
    <section class="section">
      <div class="container">
        <div class="contact-grid">

          <!-- Formulário -->
          <div class="reveal">
            <ContactForm />
          </div>

          <!-- Informações -->
          <div class="contact-info reveal">
            <div class="tag">Informações</div>
            <h2>Entre em contato</h2>

            <!-- Items de contato -->
            <div class="contact-items">
              <div class="contact-item" v-for="item in contactItems" :key="item.title">
                <div class="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2" v-html="item.icon"></svg>
                </div>
                <div>
                  <h4>{{ item.title }}</h4>
                  <p v-for="line in item.lines" :key="line">{{ line }}</p>
                </div>
              </div>
            </div>

            <!-- Mapa placeholder -->
            <div class="map-placeholder">
              <!--
                INSERT MAP: cole o iframe do Google Maps aqui.
                Exemplo:
                <iframe
                  src="https://www.google.com/maps/embed?pb=..."
                  width="100%" height="260" style="border:0"
                  allowfullscreen loading="lazy">
                </iframe>
              -->
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="1" v-html="IconMap"></svg>
              <span>Mapa do Google Maps aqui</span>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- ── CTA URGENTE ── -->
    <CTASection
      :dark="true"
      tag="Atendimento Rápido"
      title="Projetos urgentes?\nFale conosco agora."
      subtitle="Para demandas urgentes, entre em contato diretamente por telefone e nossa equipe dará prioridade ao seu atendimento."
      primary-label="Ligar Agora"
      :primary-link="'tel:' + companyInfo.phone.replace(/\D/g, '')"
      :show-second="false"
    />

  </DefaultLayout>
</template>

<style scoped>
/* Layout 2 colunas */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

@media (min-width: 1024px) {
  .contact-grid { grid-template-columns: 3fr 2fr; }
}

/* Info lateral */
.contact-info h2 { margin-bottom: 2rem; }

.contact-items { display: flex; flex-direction: column; gap: 1.75rem; }

.contact-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.contact-icon {
  width: 44px; height: 44px;
  flex-shrink: 0;
  background: var(--blue);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
}

.contact-item h4 {
  font-family: var(--font-display);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--dark);
  margin-bottom: 0.3rem;
}

.contact-item p {
  font-size: 0.9rem;
  color: var(--gray);
  margin: 0;
  line-height: 1.5;
}

/* Mapa */
.map-placeholder {
  width: 100%;
  height: 260px;
  background: var(--cream-dark);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 2.5rem;
  color: var(--gray);
  font-size: 0.8rem;
}

.map-placeholder svg { opacity: 0.3; }
</style>
