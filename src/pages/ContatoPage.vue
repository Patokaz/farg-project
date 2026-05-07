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
    lines: [companyInfo.email.adm, companyInfo.email.compras, companyInfo.email.orcamento, 'Retorno em até 24h úteis'],
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
      title="Fale com a FARG"
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
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29274.01479756465!2d-46.72630559000124!3d-23.487436487471825!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef906e1f3dec3%3A0x314a44f6aafd3731!2sR.%20Tapendi%2C%20362%20-%20Vila%20Pirituba%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002933-080!5e0!3m2!1spt-BR!2sbr!4v1778136590549!5m2!1spt-BR!2sbr" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" width="100%" height="260">
                </iframe>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- ── CTA URGENTE ── -->
    <CTASection
      :dark="true"
      tag="Atendimento Rápido"
      title="Projetos urgentes? Fale conosco agora."
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
