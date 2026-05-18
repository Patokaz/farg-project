<script setup>
import { companyInfo } from '@/data/company.js'
import { RouterLink } from 'vue-router'
import { IconLinkedin, IconWhatsapp } from '@/data/icons.js'
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">

        <!-- Brand -->
        <div class="footer-brand">
      <RouterLink to="/" class="logo">
        <img src="/public/images/farg-logo-branco.png" alt="FARG Ar-Condicionado">
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
          <h4>Contatos</h4>
          <!-- Edite os dados em src/data/company.js -->
          <span>
            <a :href="`tel:${companyInfo.phone}`">
              {{ companyInfo.phone }}
            </a>
          </span>

          <span>
            <a :href="`mailto:${companyInfo.email.adm}`">
              {{ companyInfo.email.adm }}
            </a>
          </span>

          <span>
            <a :href="`mailto:${companyInfo.email.compras}`">
              {{ companyInfo.email.compras }}
            </a>
          </span>

          <span>
            <a :href="`mailto:${companyInfo.email.orcamento}`">
              {{ companyInfo.email.orcamento }}
            </a>
          </span>
          <div class="social-icon">
          <a :href="companyInfo.linkedinUrl" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              v-html="IconLinkedin"
            />
            </a>
              <a :href="companyInfo.whatsappLink" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  v-html="IconWhatsapp"
                />
              </a>
          </div>
        </div>

        <!-- Contato -->
        <div class="footer-col">
          <h4>Onde Estamos</h4>
          <span><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29274.01479756465!2d-46.72630559000124!3d-23.487436487471825!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef906e1f3dec3%3A0x314a44f6aafd3731!2sR.%20Tapendi%2C%20362%20-%20Vila%20Pirituba%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002933-080!5e0!3m2!1spt-BR!2sbr!4v1778136590549!5m2!1spt-BR!2sbr" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></span>
          <span>{{ companyInfo.address }} - {{ companyInfo.city }} - {{ companyInfo.state }}</span>
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
.logo img{
  width: 5rem;
}

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

.footer-col iframe {
  width: 100%;
  height: 100px;
  border: none;
  margin-bottom: 0.4rem;
  border-radius: 5px;
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

.social-icon{
  display: flex;
  flex-direction: row;
  gap: .5rem;
}

.social-icon img{
  width: 2rem;
}
@media (min-width: 768px) {
  .footer-grid { grid-template-columns: 2fr 1fr 1fr 1fr; }
  .footer-bottom { flex-direction: row; justify-content: space-between; text-align: left; }
}
</style>
