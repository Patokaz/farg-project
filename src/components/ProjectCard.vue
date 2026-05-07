<script setup>
import { IconImage } from '@/data/icons.js'

defineProps({
  project: {
    type: Object,
    required: true,
    // Formato: { client, location, title, desc, image?, specs[] }
  }
})
</script>

<template>
  <div class="project-card">

    <!-- Imagem do projeto -->
    <!-- Se project.image existir, mostra a foto real; caso contrário, placeholder -->
    <div class="project-img">
      <img
        v-if="project.image"
        :src="project.image"
        :alt="project.title"
      />
      <template v-else>
        <!-- INSERT PROJECT IMAGE: defina project.image em src/data/projects.js -->
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="1" v-html="IconImage"></svg>
        <span>{{ project.client }}</span>
      </template>
    </div>

    <div class="project-body">
      <div class="project-client">{{ project.client }} · {{ project.location }}</div>
      <h3>{{ project.title }}</h3>
      <p>{{ project.desc }}</p>

      <!-- Specs técnicas -->
      <div class="project-specs" v-if="project.specs?.length">
        <div class="project-spec-item" v-for="spec in project.specs" :key="spec.label">
          <strong>{{ spec.value }}</strong>
          <span>{{ spec.label }}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.project-card {
  background: var(--white);
  overflow: hidden;
  transition: box-shadow 0.25s;
}

.project-card:hover {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

/* Área de imagem */
.project-img {
  aspect-ratio: 16 / 10;
  background: var(--cream-dark);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: var(--gray);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  overflow: hidden;
}

.project-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-img svg { opacity: 0.3; }

/* Corpo */
.project-body { padding: 1.75rem; }

.project-client {
  font-family: var(--font-display);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--blue);
  margin-bottom: 0.5rem;
}

h3 {
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
}

p {
  font-size: 0.9rem;
  color: var(--gray);
}

/* Specs */
.project-specs {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-top: 1.25rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--gray-light);
}

.project-spec-item {
  font-size: 0.78rem;
  color: var(--gray);
}

.project-spec-item strong {
  display: block;
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  color: var(--dark);
}
</style>
