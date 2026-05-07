<script setup>
defineProps({
  service: {
    type: Object,
    required: true,
    // Formato esperado: { icon, title, desc, tags[] }
  }
})
</script>

<template>
  <div class="service-card">
    <!-- Ícone SVG -->
    <div class="service-icon">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="1.5" v-html="service.icon"></svg>
    </div>

    <h3>{{ service.title }}</h3>
    <p>{{ service.shortDesc }}</p>

    <!-- Tags de tecnologia -->
    <div class="service-tags">
      <span class="service-tag" v-for="tag in service.tags" :key="tag">{{ tag }}</span>
    </div>
  </div>
</template>

<style scoped>
.service-card {
  background: var(--dark-mid);
  padding: 2.5rem;
  transition: background 0.25s, border-left-color 0.25s;
  border-left: 3px solid transparent;
}

.service-card:hover {
  background: #323a52;
  border-left-color: var(--blue);
}

.service-icon {
  width: 48px; height: 48px;
  background: rgba(113, 137, 174, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: var(--blue-light);
}

h3 {
  color: var(--white);
  margin-bottom: 0.75rem;
}

p {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.95rem;
}

.service-tags {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.service-tag {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--blue-light);
  background: rgba(113, 137, 174, 0.12);
  padding: 0.3rem 0.7rem;
}
</style>
