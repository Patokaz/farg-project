// ============================================================
// DADOS DOS PROJETOS
// Adicione ou edite projetos aqui.
// Para inserir imagens reais, adicione o campo:
//   image: '/images/nome-do-arquivo.jpg'
// e coloque o arquivo em /public/images/
// ============================================================

export const projects = [
  {
    id: 'hexagon',
    client: 'Hexagon',
    location: 'São Paulo, SP',
    title: 'Obra e Manutenção Predial Hexagon',
    category: 'corporativo',
    featured: false,
    desc: 'Execução de obra e manutenção predial para a Hexagon, multinacional de tecnologia de sensores e software, contemplando serviços de climatização, ventilação e adequações técnicas nas instalações brasileiras.',
    image: '/images/projetos/projeto-hexagon.jpg',
  },
  {
    id: 'safra',
    client: 'Banco Safra',
    location: 'São Paulo, SP',
    title: 'Climatização Corporativa Safra',
    category: 'financeiro',
    featured: true,
    desc: 'Retrofit do sistema de climatização com implantação de tecnologia VRF e fan-coils de última geração, modernizando a infraestrutura de conforto térmico das dependências do banco.',
    image: '/images/projetos/projeto-safra.jpeg',
  },
  {
    id: 'cielo',
    client: 'Cielo',
    location: 'Barueri, SP',
    title: 'Cielo Barueri',
    category: 'corporativo',
    featured: true,
    desc: 'Climatização crítica de data center e escritórios corporativos para a fintech Cielo, com redundância N+1, controle preciso de temperatura e monitoramento remoto integrado.',
    image: '/images/projetos/projeto-cielo.jpg',
  },
  {
    id: 'bradesco',
    client: 'Bradesco',
    location: 'São Paulo, SP',
    title: 'Unidade Corporativa Bradesco',
    category: 'financeiro',
    featured: true,
    desc: 'Projeto e instalação de sistema de climatização para unidade corporativa do Bradesco, contemplando ambientes de escritório, salas de reunião e infraestrutura de TI com controle de temperatura dedicado.',
    image: '/images/projetos/projeto-bradesco.jpeg',
  },
  {
    id: 'prologis',
    client: 'Prologis',
    location: 'Interior SP',
    title: 'Complexo Logístico Prologis',
    category: 'industrial',
    featured: false,
    desc: 'Sistemas de ventilação mecânica e exaustão para complexo logístico da Prologis, garantindo renovação de ar adequada, conforto térmico operacional e conformidade com normas de segurança em galpões de grande porte.',
    image: '/images/projetos/projeto-prologis.jpeg',
  },
  {
    id: 'araymond',
    client: 'ARaymond',
    location: 'São Paulo, SP',
    title: 'Planta Industrial ARaymond',
    category: 'industrial',
    featured: false,
    desc: 'Projeto de climatização e ventilação mecânica para planta industrial da multinacional ARaymond, com foco em conforto nas áreas produtivas e controle térmico em ambientes de precisão.',
    image: '/images/projetos/projeto-araymond.jpeg',
  },
  {
    id: 'atmo',
    client: 'ATMO',
    location: 'São Paulo, SP',
    title: 'Sede ATMO',
    category: 'corporativo',
    featured: false,
    desc: 'Desenvolvimento e execução de projeto HVAC para a sede da ATMO, integrando climatização de escritórios e áreas técnicas com soluções de eficiência energética e qualidade do ar interno.',
    image: '/images/projetos/projeto-atmo.jpg',
  },
  {
    id: 'whg',
    client: 'WHG',
    location: 'São Paulo, SP',
    title: 'Empreendimento WHG',
    category: 'corporativo',
    featured: false,
    desc: 'Projeto e instalação de sistema de climatização para empreendimento da WHG, com especificação técnica detalhada, execução por equipe própria e comissionamento completo dos sistemas.',
    image: '/images/projetos/projeto-whg.jpeg',
  },
  {
    id: 'sumitomo',
    client: 'Sumitomo',
    location: 'São Paulo, SP',
    title: 'Sumitomo do Brasil',
    category: 'industrial',
    featured: false,
    desc: 'Projeto de ventilação mecânica e exaustão para planta industrial da Sumitomo, garantindo conforto térmico e segurança nas áreas de produção em conformidade com as normas NR-15.',
    image: '/images/projetos/projeto-sumitomo.jpeg',
  },
]

// Categorias disponíveis para o filtro da página de projetos
export const projectCategories = [
  { id: 'todos',       label: 'Todos' },
  { id: 'corporativo', label: 'Corporativo' },
  { id: 'industrial',  label: 'Industrial' },
  { id: 'financeiro',  label: 'Financeiro' },
]
