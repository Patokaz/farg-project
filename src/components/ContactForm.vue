<script setup>
import { ref } from 'vue'

const form = ref({
  nome:     '',
  email:    '',
  telefone: '',
  cidade:   '',
  servico:  '',
  mensagem: '',
})

const submitted = ref(false)
const sending   = ref(false)

const handleSubmit = () => {
  sending.value = true
  // ── Integração com backend/e-mail ──
  // Substitua o setTimeout abaixo pelo seu fetch/axios para enviar o formulário.
  // Exemplo:
  // await fetch('/api/contato', { method: 'POST', body: JSON.stringify(form.value) })
  setTimeout(() => {
    sending.value   = false
    submitted.value = true
  }, 1200)
}
</script>

<template>
  <div class="contact-form-wrap">
    <div class="tag">Solicitar Orçamento</div>
    <h2>Envie sua mensagem</h2>
    <p class="form-intro">Preencha o formulário e nossa equipe entrará em contato com uma proposta técnica personalizada.</p>

    <!-- Sucesso -->
    <div v-if="submitted" class="form-success">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      Mensagem enviada com sucesso! Em breve nossa equipe entrará em contato.
    </div>

    <!-- Formulário -->
    <form v-else @submit.prevent="handleSubmit" novalidate>

      <div class="form-row">
        <div class="form-group">
          <label for="nome">Nome Completo *</label>
          <input id="nome" type="text" v-model="form.nome" required placeholder="Seu nome completo" />
        </div>
        <div class="form-group">
          <label for="email">E-mail *</label>
          <input id="email" type="email" v-model="form.email" required placeholder="seu@email.com.br" />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="telefone">Telefone / WhatsApp</label>
          <input id="telefone" type="tel" v-model="form.telefone" placeholder="(11) 90000-0000" />
        </div>
        <div class="form-group">
          <label for="cidade">Cidade *</label>
          <input id="cidade" type="text" v-model="form.cidade" required placeholder="Sua cidade — UF" />
        </div>
      </div>

      <div class="form-group">
        <label for="servico">Serviço de Interesse</label>
        <select id="servico" v-model="form.servico">
          <option value="">Selecione um serviço...</option>
          <option>Projeto HVAC</option>
          <option>Instalação e Montagem</option>
          <option>Ventilação Mecânica</option>
          <option>Sistema de Exaustão</option>
          <option>Outro</option>
        </select>
      </div>

      <div class="form-group">
        <label for="mensagem">Mensagem *</label>
        <textarea
          id="mensagem"
          v-model="form.mensagem"
          required
          placeholder="Descreva seu projeto: área aproximada, tipo de ambiente, localização e qualquer detalhe relevante..."
        ></textarea>
      </div>

      <button type="submit" class="btn btn-primary btn-full" :disabled="sending">
        {{ sending ? 'Enviando...' : 'Enviar Mensagem' }}
      </button>

    </form>
  </div>
</template>

<style scoped>
.contact-form-wrap {
  background: var(--white);
  padding: 2.5rem;
}

h2 { margin-bottom: 0.5rem; }

.form-intro {
  color: var(--gray);
  margin-bottom: 2rem;
}

/* Sucesso */
.form-success {
  background: rgba(113, 137, 174, 0.1);
  border: 1.5px solid var(--blue);
  padding: 1.25rem 1.5rem;
  color: var(--blue-dark);
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 1rem;
}

/* Grid de linha */
.form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0 1rem;
}

@media (min-width: 600px) {
  .form-row { grid-template-columns: 1fr 1fr; }
}

/* Grupos */
.form-group { margin-bottom: 1.25rem; }

.form-group label {
  display: block;
  font-family: var(--font-display);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--dark);
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 0.85rem 1rem;
  border: 1.5px solid rgba(0, 0, 0, 0.12);
  background: var(--gray-light);
  font-family: var(--font-body);
  font-size: 0.92rem;
  color: var(--dark);
  outline: none;
  transition: border-color 0.2s, background 0.2s;
  appearance: none;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  border-color: var(--blue);
  background: var(--white);
}

.form-group textarea {
  resize: vertical;
  min-height: 140px;
}

/* Botão */
.btn-full {
  width: 100%;
  justify-content: center;
}

.btn-full:disabled {
  opacity: 0.65;
  cursor: not-allowed;
  transform: none;
}
</style>
