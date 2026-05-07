<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  title:    { type: String, required: true },
  subtitle: { type: String, default: '' },
  crumb:    { type: String, required: true }, // texto do breadcrumb atual
})
</script>

<template>
  <section class="page-banner">
    <div class="container">
      <div class="page-banner-content">

        <!-- Breadcrumb -->
        <div class="breadcrumb">
          <RouterLink to="/">Início</RouterLink>
          <span>›</span>
          <span>{{ crumb }}</span>
        </div>

        <!-- Título com suporte a quebras de linha via \n -->
        <h1 v-html="title.replace(/\n/g, '<br>')"></h1>

        <p v-if="subtitle">{{ subtitle }}</p>

      </div>
    </div>
  </section>
</template>

<style scoped>
.page-banner {
  padding: 9rem 0 5rem;
  background: var(--dark);
  position: relative;
  overflow: hidden;
}

.page-banner::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(113,137,174,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(113,137,174,0.05) 1px, transparent 1px);
  background-size: 50px 50px;
}

.page-banner-content {
  position: relative;
  z-index: 1;
}

h1 { color: var(--white); }

p {
  color: rgba(255, 255, 255, 0.5);
  max-width: 520px;
  margin-top: 1rem;
  font-size: 1.05rem;
}
</style>
