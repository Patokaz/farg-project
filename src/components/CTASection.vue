<script setup>
import { RouterLink } from 'vue-router'

// Todas as props são opcionais — defina para customizar cada uso do CTA
defineProps({
  tag:          { type: String,  default: 'Vamos Conversar' },
  title:        { type: String,  default: 'Pronto para o próximo grande projeto?' },
  subtitle:     { type: String,  default: 'Entre em contato com nossa equipe de engenharia e receba uma proposta personalizada para o seu empreendimento.' },
  primaryLabel: { type: String,  default: 'Solicitar Orçamento' },
  primaryLink:  { type: String,  default: '/contato' },
  secondLabel:  { type: String,  default: 'Ver Portfólio' },
  secondLink:   { type: String,  default: '/projetos' },
  dark:         { type: Boolean, default: false }, // fundo escuro
  showSecond:   { type: Boolean, default: true },  // ocultar 2º botão
})
</script>

<template>
  <section :class="['cta-section', { 'cta-dark': dark }]">
    <div class="container">
      <!-- Suporte a quebras de linha no título com \n -->
      <h2 v-html="title.replace(/\n/g, '<br>')"></h2>

      <p>{{ subtitle }}</p>

      <div class="cta-btns">
        <RouterLink :to="primaryLink" class="btn btn-primary">
          {{ primaryLabel }}
        </RouterLink>
        <RouterLink v-if="showSecond" :to="secondLink"
          :class="dark ? 'btn btn-outline' : 'btn btn-outline-dark'">
          {{ secondLabel }}
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  background: var(--cream);
  padding: 6rem 0;
  text-align: center;
}

.cta-section.cta-dark {
  background: var(--dark);
}

h2 { margin-bottom: 1rem; }

.cta-dark h2 { color: var(--white); }

p {
  color: var(--gray);
  max-width: 480px;
  margin: 0 auto 2.5rem;
}

.cta-dark p { color: rgba(255, 255, 255, 0.5); }

.cta-btns {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
