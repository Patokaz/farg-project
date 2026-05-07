<script setup>
defineProps({
  tag:      { type: String, default: '' },
  title:    { type: String, required: true },
  subtitle: { type: String, default: '' },
  light:    { type: Boolean, default: false }, // true = textos claros (fundo escuro)
  center:   { type: Boolean, default: false },
})
</script>

<template>
  <div :class="['section-header', { 'section-header--center': center }]">
    <div v-if="tag" class="tag" :class="light ? 'tag--light' : ''">{{ tag }}</div>
    <h2
      :style="light ? 'color: var(--white)' : ''"
      v-html="title.replace(/\n/g, '<br>')"
    ></h2>
    <p v-if="subtitle" :style="light ? 'color: rgba(255,255,255,0.5)' : 'color: var(--gray)'">
      {{ subtitle }}
    </p>
  </div>
</template>

<style scoped>
.section-header { margin-bottom: 3.5rem; }
.section-header p { max-width: 500px; margin-top: 0.75rem; }
.section-header--center { text-align: center; }
.section-header--center p { margin-left: auto; margin-right: auto; }
</style>
