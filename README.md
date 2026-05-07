# FARG Ar-Condicionado — Site Institucional

> Site institucional desenvolvido para a **FARG Ar-Condicionado**, empresa especializada em engenharia de climatização, ventilação mecânica e exaustão industrial desde 2008.

---

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Tecnologias](#tecnologias)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Scripts disponíveis](#scripts-disponíveis)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Como editar conteúdo](#como-editar-conteúdo)
- [Como inserir imagens](#como-inserir-imagens)
- [Deploy](#deploy)

---

## 🌐 Visão Geral

Site SPA (Single Page Application) institucional com 5 páginas:

| Rota | Página |
|---|---|
| `/` | Home |
| `/sobre` | Sobre a empresa |
| `/servicos` | Serviços oferecidos |
| `/projetos` | Portfólio de projetos |
| `/contato` | Formulário de contato |

---

## 🛠️ Tecnologias

### Core

| Tecnologia | Versão | Descrição |
|---|---|---|
| [Vue.js](https://vuejs.org/) | ^3.4 | Framework JavaScript progressivo para construção de interfaces |
| [Vue Router](https://router.vuejs.org/) | ^4.3 | Roteamento oficial do Vue — navegação entre páginas sem reload |
| [Vite](https://vitejs.dev/) | ^5.0 | Build tool e dev server ultrarrápido com HMR (Hot Module Replacement) |

### Estilização

| Tecnologia | Descrição |
|---|---|
| CSS Scoped (nativo Vue) | Estilos encapsulados por componente — sem vazamento de estilos |
| CSS Custom Properties | Variáveis CSS globais para design system (cores, fontes, espaçamentos) |
| [Google Fonts](https://fonts.google.com/) | Barlow Condensed (títulos) + Barlow (corpo de texto) |

### Padrões e Arquitetura

| Padrão | Descrição |
|---|---|
| Composition API | API moderna do Vue 3 com `<script setup>` |
| Composables | Lógica reutilizável extraída em funções (`useReveal`) |
| Component-based | Interface dividida em componentes independentes e reutilizáveis |
| Data-driven | Conteúdo centralizado em arquivos de dados (`src/data/`) separado da lógica |
| Layout Pattern | Layout padrão compartilhado via `DefaultLayout.vue` |

### Tooling

| Ferramenta | Descrição |
|---|---|
| [@vitejs/plugin-vue](https://github.com/vitejs/vite-plugin-vue) | Plugin oficial Vite para processar arquivos `.vue` |
| Node.js | Ambiente de execução JavaScript (mínimo v18) |
| npm | Gerenciador de pacotes |

---

## ✅ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** v18 ou superior → [Download](https://nodejs.org/)
- **npm** v9 ou superior (já vem com o Node)

Para verificar suas versões:
```bash
node --version
npm --version
```

---

## ⚙️ Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/farg-ar-condicionado.git

# 2. Entre na pasta do projeto
cd farg-ar-condicionado

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse **http://localhost:5173** no navegador.

---

## 📜 Scripts disponíveis

```bash
# Servidor de desenvolvimento com hot-reload
npm run dev

# Build otimizado para produção (gera a pasta /dist)
npm run build

# Preview do build de produção localmente
npm run preview
```

---

## 📁 Estrutura de pastas

```
farg-ar-condicionado/
│
├── public/
│   └── images/              ← Imagens públicas (fotos reais do projeto)
│ 
├── src/
│   │
│   ├── assets/
│   │   └── css/
│   │       └── global.css   ← Design system: variáveis, reset, utilitários globais
│   │
│   ├── composables/
│   │   └── useReveal.js     ← Animação de entrada por scroll (IntersectionObserver)
│   │
│   ├── data/                ← ⭐ Dados e conteúdo separados da lógica
│   │   ├── company.js       ← Informações da empresa, contato, stats, timeline, valores
│   │   ├── services.js      ← Dados dos serviços (título, descrição, benefícios)
│   │   ├── projects.js      ← Portfólio de projetos + categorias de filtro
│   │   └── icons.js         ← Ícones SVG centralizados
│   │
│   ├── components/          ← Componentes reutilizáveis em múltiplas páginas
│   │   ├── AppHeader.vue    ← Cabeçalho fixo com navegação e menu hamburguer
│   │   ├── AppFooter.vue    ← Rodapé com links e informações de contato
│   │   ├── HeroSection.vue  ← Seção hero da página inicial
│   │   ├── ServiceCard.vue  ← Card individual de serviço
│   │   ├── ProjectCard.vue  ← Card individual de projeto com imagem e specs
│   │   ├── StatsSection.vue ← Seção de estatísticas (16+ anos, 50T kg/mês...)
│   │   ├── CTASection.vue   ← Seção de chamada para ação (configurável via props)
│   │   ├── ContactForm.vue  ← Formulário de contato com validação
│   │   ├── PageBanner.vue   ← Banner de topo das páginas internas com breadcrumb
│   │   └── SectionHeader.vue← Cabeçalho de seção (tag + título + subtítulo)
│   │
│   ├── layouts/
│   │   └── DefaultLayout.vue ← Layout padrão: Header + <slot /> + Footer
│   │
│   ├── pages/               ← Uma página por rota
│   │   ├── HomePage.vue
│   │   ├── SobrePage.vue
│   │   ├── ServicosPage.vue
│   │   ├── ProjetosPage.vue
│   │   └── ContatoPage.vue
│   │
│   ├── router/
│   │   └── index.js         ← Definição de rotas e títulos de aba
│   │
│   ├── App.vue              ← Componente raiz
│   └── main.js              ← Entry point: monta o app, registra plugins
│
├── index.html               ← Entry point HTML (Vite)
├── vite.config.js           ← Configuração do Vite
├── package.json             ← Dependências e scripts npm
└── README.md
```

---

## ✏️ Como editar conteúdo

Todo o conteúdo do site está centralizado na pasta `src/data/`. Você **não precisa mexer nos componentes** para alterar textos.

### Dados da empresa
**Arquivo:** `src/data/company.js`

```js
export const companyInfo = {
  phone:    '(11) 0000-0000',   // ← altere aqui
  email:    'contato@fargac.com.br',
  address:  'São Paulo — SP',
  whatsapp: '5511000000000',    // formato internacional
  cnpj:     '00.000.000/0001-00',
}
```

### Adicionar um novo projeto
**Arquivo:** `src/data/projects.js`

```js
{
  id:       'nome-do-cliente',
  client:   'Nome do Cliente',
  location: 'Cidade, UF',
  title:    'Título do Projeto',
  category: 'corporativo', // corporativo | industrial | financeiro
  featured: true,          // aparece na home se true
  desc:     'Descrição do projeto...',
  image:    '/images/nome-da-foto.jpg', // opcional
  specs: [
    { value: '500 HP', label: 'Capacidade' },
    { value: '10.000 m²', label: 'Área' },
  ],
}
```

### Alterar cores do site
**Arquivo:** `src/assets/css/global.css`

```css
:root {
  --blue:       #7189ae;  /* cor principal — botões, destaques */
  --blue-dark:  #4d6490;  /* hover dos botões */
  --blue-light: #9db0cc;  /* textos sobre fundo escuro */
  --cream:      #f1e0cf;  /* fundo claro (seções alternadas) */
  --dark:       #1a1f2e;  /* fundo escuro (header, seções escuras) */
}
```

### Integrar o formulário de contato com backend
**Arquivo:** `src/components/ContactForm.vue`

Substitua o `setTimeout` pelo seu serviço de e-mail:

```js
// Exemplo com fetch para uma API própria
const handleSubmit = async () => {
  sending.value = true
  await fetch('/api/contato', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form.value),
  })
  sending.value   = false
  submitted.value = true
}
```

---

## 🖼️ Como inserir imagens

1. Coloque os arquivos em **`/public/images/`**
2. Referencie pela raiz: `/images/nome-do-arquivo.jpg`

### Imagens por seção

| Página / Componente | Onde inserir |
|---|---|
| Hero (fundo) | `HeroSection.vue` — substituir o gradiente no CSS pelo `background-image` |
| Home — sobre preview | `HomePage.vue` — bloco com comentário `INSERT IMAGE` |
| Sobre — equipe | `SobrePage.vue` — primeiro `img-placeholder` |
| Sobre — oficina | `SobrePage.vue` — segundo `img-placeholder` |
| Serviços | `ServicosPage.vue` — um por serviço, basta referenciar `s.id` |
| Projetos | `src/data/projects.js` — campo `image` de cada projeto |
| Contato — mapa | `ContatoPage.vue` — substituir placeholder pelo `<iframe>` do Google Maps |

### Exemplo: inserir imagem em um projeto

```js
// src/data/projects.js
{
  id:    'cielo-barueri',
  image: '/images/cielo-barueri.jpg', // ← adicione este campo
  ...
}
```

O componente `ProjectCard.vue` já trata automaticamente: se `image` existir, exibe a foto; caso contrário, exibe o placeholder.

---

## 🚀 Deploy

### Netlify / Vercel (recomendado)

```bash
# Build
npm run build

# A pasta /dist contém os arquivos finais para deploy
```

Configure o redirecionamento para SPA no Netlify criando `public/_redirects`:
```
/* /index.html 200
```

Ou no Vercel, crie `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Apache / cPanel

Faça upload do conteúdo da pasta `/dist` para a raiz pública (`public_html`).

Crie um arquivo `.htaccess`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 📄 Licença

Projeto desenvolvido exclusivamente para a **FARG Ar-Condicionado**. Todos os direitos reservados.
