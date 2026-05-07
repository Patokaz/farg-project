// ============================================================
// useReveal — Composable de animação de entrada por scroll
// Uso: chame useReveal() no setup() de qualquer page ou componente.
// Adicione a classe .reveal nos elementos que deseja animar.
// ============================================================
import { onMounted, nextTick } from 'vue'

export function useReveal() {
  onMounted(() => {
    nextTick(() => {
      const elements = document.querySelectorAll('.reveal')

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              observer.unobserve(entry.target) // anima só uma vez
            }
          })
        },
        { threshold: 0.1 }
      )

      elements.forEach((el) => observer.observe(el))
    })
  })
}
