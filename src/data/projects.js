// ============================================================
// DADOS DOS PROJETOS
// Adicione ou edite projetos aqui.
// Para inserir imagens reais, adicione o campo:
//   image: '/images/nome-do-arquivo.jpg'
// e coloque o arquivo em /public/images/
// ============================================================

export const projects = [
  {
    id: 'santander-piracicaba',
    client: 'Santander',
    location: 'Piracicaba, SP',
    title: 'Tools Piracicaba',
    category: 'financeiro',
    featured: true,
    desc: 'Sistema HVAC completo para unidade corporativa, com projeto executivo, fornecimento e instalação de equipamentos de alta eficiência energética.',
    // image: '/images/santander-piracicaba.jpg', // ← insira a imagem aqui
    specs: [
      { value: '760 HP',     label: 'Capacidade' },
      { value: '18.000 m²',  label: 'Área' },
    ],
  },
  {
    id: 'banco-safra',
    client: 'Banco Safra',
    location: 'São Paulo, SP',
    title: 'Climatização Corporativa',
    category: 'financeiro',
    featured: true,
    desc: 'Retrofit do sistema de climatização com implantação de VRF e fan-coils de última geração, melhorando eficiência e conforto das dependências.',
    // image: '/images/banco-safra.jpg',
    specs: [
      { value: 'VRF',      label: 'Tecnologia' },
      { value: 'Retrofit', label: 'Tipologia' },
    ],
  },
  {
    id: 'cielo-barueri',
    client: 'Cielo',
    location: 'Barueri, SP',
    title: 'Cielo Barueri',
    category: 'corporativo',
    featured: true,
    desc: 'Climatização crítica de data center e escritórios corporativos para a fintech Cielo, com redundância N+1 e monitoramento remoto integrado.',
    // image: '/images/cielo-barueri.jpg',
    specs: [
      { value: '195.970', label: 'm³/h de ar' },
      { value: 'N+1',     label: 'Redundância' },
    ],
  },
  {
    id: 'hexagon',
    client: 'Hexagon',
    location: 'São Paulo, SP',
    title: 'Sede Hexagon Brasil',
    category: 'corporativo',
    featured: false,
    desc: 'Projeto e instalação de sistema de climatização para a sede brasileira da multinacional de tecnologia Hexagon, contemplando escritórios e laboratórios.',
    // image: '/images/hexagon.jpg',
    specs: [
      { value: 'VRF', label: 'Sistema' },
      { value: 'Lab', label: 'Ambiente especial' },
    ],
  },
  {
    id: 'ipgmb',
    client: 'IPGMB',
    location: 'Interior SP',
    title: 'Complexo IPGMB',
    category: 'industrial',
    featured: false,
    desc: 'Sistema de ventilação mecânica e climatização para complexo industrial, com exaustão de processo e renovação de ar em áreas produtivas.',
    // image: '/images/ipgmb.jpg',
    specs: [
      { value: 'Industrial',  label: 'Tipologia' },
      { value: 'Exaustão',    label: '+ Climatização' },
    ],
  },
  {
    id: 'sumitomo',
    client: 'Sumitomo',
    location: 'São Paulo, SP',
    title: 'Sumitomo do Brasil',
    category: 'industrial',
    featured: false,
    desc: 'Projeto de ventilação mecânica e exaustão para planta industrial da Sumitomo, garantindo conforto térmico e segurança nas áreas de produção.',
    // image: '/images/sumitomo.jpg',
    specs: [
      { value: 'NR-15',      label: 'Conformidade' },
      { value: 'Industrial', label: 'Porte' },
    ],
  },
]

// Categorias disponíveis para o filtro da página de projetos
export const projectCategories = [
  { id: 'todos',       label: 'Todos' },
  { id: 'corporativo', label: 'Corporativo' },
  { id: 'industrial',  label: 'Industrial' },
  { id: 'financeiro',  label: 'Financeiro' },
]
