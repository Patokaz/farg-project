# FARG Ar-Condicionado — Site Institucional

Site institucional desenvolvido em **Vue 3 + Vite**, com arquitetura de componentes modular e design system próprio.

---

## 🚀 Como rodar o projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) versão 18 ou superior
- npm (já vem com o Node)

### Instalação e execução

```bash
# 1. Instale as dependências
npm install

# 2. Rode em modo desenvolvimento (com hot-reload)
npm run dev

# 3. Acesse no navegador
# http://localhost:5173
```

### Build para produção

```bash
npm run build
# Os arquivos finais estarão em /dist
```

---

## 📁 Estrutura de arquivos

```
farg-project/
├── public/
│   └── images/          ← coloque as fotos reais aqui
├── src/
│   ├── assets/
│   │   └── css/
│   │       └── global.css       ← Design system, variáveis de cor, utilitários
│   │
│   ├── composables/
│   │   └── useReveal.js         ← Animação de scroll (IntersectionObserver)
│   │
│   ├── data/                    ← ⭐ EDITE AQUI os textos e dados
│   │   ├── company.js           ← Dados da empresa, contato, stats, timeline
│   │   ├── services.js          ← Dados dos serviços
│   │   ├── projects.js          ← Dados dos projetos (adicione novos aqui)
│   │   └── icons.js             ← Ícones SVG centralizados
│   │
│   ├── components/              ← Componentes reutilizáveis
│   │   ├── AppHeader.vue        ← Cabeçalho fixo + menu mobile
│   │   ├── AppFooter.vue        ← Rodapé
│   │   ├── HeroSection.vue      ← Seção hero da home
│   │   ├── ServiceCard.vue      ← Card de serviço
│   │   ├── ProjectCard.vue      ← Card de projeto
│   │   ├── StatsSection.vue     ← Seção de estatísticas
│   │   ├── CTASection.vue       ← Seção de chamada para ação
│   │   ├── ContactForm.vue      ← Formulário de contato
│   │   ├── PageBanner.vue       ← Banner topo das páginas internas
│   │   └── SectionHeader.vue   ← Cabeçalho de seção (tag + título + subtítulo)
│   │
│   ├── layouts/
│   │   └── DefaultLayout.vue   ← Layout padrão (Header + slot + Footer)
│   │
│   ├── pages/                  ← Uma página por rota
│   │   ├── HomePage.vue
│   │   ├── SobrePage.vue
│   │   ├── ServicosPage.vue
│   │   ├── ProjetosPage.vue
│   │   └── ContatoPage.vue
│   │
│   ├── router/
│   │   └── index.js            ← Configuração de rotas
│   │
│   ├── App.vue
│   └── main.js
│
├── index.html
├── vite.config.js
└── package.json
```

---

## ✏️ Como editar os conteúdos

### Dados da empresa (telefone, e-mail, endereço)
Edite: `src/data/company.js`

### Adicionar ou editar um projeto
Edite: `src/data/projects.js`

Para adicionar uma imagem real ao projeto:
1. Coloque a imagem em `/public/images/nome-do-arquivo.jpg`
2. Adicione `image: '/images/nome-do-arquivo.jpg'` ao objeto do projeto

### Adicionar ou editar um serviço
Edite: `src/data/services.js`

### Cores do site
Edite as variáveis em `src/assets/css/global.css`:
```css
:root {
  --blue:       #7189ae;  /* cor principal */
  --cream:      #f1e0cf;  /* cor de fundo clara */
  --dark:       #1a1f2e;  /* fundo escuro */
}
```

### Inserir imagens reais
Procure por comentários `<!-- INSERT IMAGE -->` ou `<!-- INSERT MAP -->` nos arquivos `.vue`.
Substitua o bloco de placeholder pela tag `<img>` ou `<iframe>` correspondente.

### Integrar o formulário de contato com backend
Edite `src/components/ContactForm.vue` e substitua o `setTimeout` pelo seu `fetch` ou `axios`.

---

## 🖼️ Onde inserir imagens

| Arquivo | Seção |
|---|---|
| `HomePage.vue` | Foto da empresa (sobre preview) |
| `SobrePage.vue` | Foto da equipe + foto da oficina |
| `ServicosPage.vue` | Foto de cada serviço |
| `ProjetosPage.vue` (via `projects.js`) | Foto de cada projeto |
| `ContatoPage.vue` | Mapa do Google Maps |

---

## 📦 Tecnologias utilizadas

- **Vue 3** com Composition API e `<script setup>`
- **Vue Router 4** para navegação SPA
- **Vite 5** como bundler
- **CSS Scoped** por componente (sem dependências externas)
- **Google Fonts** — Barlow Condensed + Barlow
