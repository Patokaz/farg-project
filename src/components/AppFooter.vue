<script setup>
import { companyInfo } from '@/data/company.js'
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">

        <!-- Brand -->
        <div class="footer-brand">
          <RouterLink to="/" class="logo">
            FARG<span> Ar-Condicionado</span>
          </RouterLink>
          <p>Engenharia especializada em climatização, ventilação mecânica e exaustão industrial desde {{ companyInfo.foundedYear }}.</p>
        </div>

        <!-- Navegação -->
        <div class="footer-col">
          <h4>Navegação</h4>
          <RouterLink to="/">Início</RouterLink>
          <RouterLink to="/sobre">Sobre Nós</RouterLink>
          <RouterLink to="/servicos">Serviços</RouterLink>
          <RouterLink to="/projetos">Projetos</RouterLink>
          <RouterLink to="/contato">Contato</RouterLink>
        </div>

        <!-- Serviços -->
        <div class="footer-col">
          <h4>Serviços</h4>
          <span>Projetos HVAC</span>
          <span>Instalação e Montagem</span>
          <span>Ventilação Mecânica</span>
          <span>Sistemas de Exaustão</span>
        </div>

        <!-- Contato -->
        <div class="footer-col">
          <h4>Contato</h4>
          <!-- Edite os dados em src/data/company.js -->
          <span>{{ companyInfo.phone }}</span>
          <span>{{ companyInfo.email }}</span>
          <span>{{ companyInfo.address }}</span>
          <span>{{ companyInfo.coverage }}</span>
        </div>

      </div>

      <div class="footer-bottom">
        <p>© {{ new Date().getFullYear() }} FARG Ar-Condicionado. Todos os direitos reservados.</p>
        <p>CNPJ: {{ companyInfo.cnpj }}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #0f1319;
  padding: 4rem 0 2rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

/* Logo */
.logo {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--white);
  text-decoration: none;
  letter-spacing: 0.05em;
}
.logo span { color: var(--blue-light); }

.footer-brand p {
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.88rem;
  margin-top: 1rem;
  max-width: 260px;
}

/* Colunas */
.footer-col { display: flex; flex-direction: column; gap: 0.2rem; }

.footer-col h4 {
  font-family: var(--font-display);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 1rem;
}

.footer-col a,
.footer-col span {
  color: rgba(255, 255, 255, 0.55);
  text-decoration: none;
  font-size: 0.88rem;
  margin-bottom: 0.4rem;
  transition: color 0.2s;
}

.footer-col a:hover { color: var(--cream); }

/* Bottom */
.footer-bottom {
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  text-align: center;
}

.footer-bottom p {
  color: rgba(255, 255, 255, 0.25);
  font-size: 0.8rem;
}

@media (min-width: 768px) {
  .footer-grid { grid-template-columns: 2fr 1fr 1fr 1fr; }
  .footer-bottom { flex-direction: row; justify-content: space-between; text-align: left; }
}
</style>
