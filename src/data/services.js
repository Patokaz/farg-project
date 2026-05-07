// ============================================================
// DADOS DOS SERVIÇOS
// Edite aqui para alterar títulos, descrições e benefícios
// ============================================================

export const services = [
  {
    id: 'hvac',
    tag: 'Serviço 01',
    title: 'Projetos HVAC',
    shortDesc: 'Desenvolvimento completo de projetos de aquecimento, ventilação e ar-condicionado para ambientes corporativos e industriais de grande escala.',
    desc: 'Desenvolvemos projetos completos de Aquecimento, Ventilação e Ar-Condicionado para ambientes corporativos e industriais. Nossa equipe de engenharia executa desde o levantamento de carga térmica até a elaboração de memoriais descritivos, especificações de equipamentos e projetos executivos.',
    desc2: 'Utilizamos softwares de cálculo de última geração para garantir projetos precisos, eficientes e em conformidade com as normas técnicas brasileiras e internacionais.',
    benefits: [
      'Cálculo de carga térmica por software especializado',
      'Projeto executivo em CAD/BIM',
      'Especificação técnica de equipamentos',
      'Memorial descritivo completo',
      'Conformidade com normas ABNT e ASHRAE',
      'Análise de eficiência energética (ENCE)',
    ],
    tags: ['Carga Térmica', 'Especificação', 'Memorial'],
    // Substitua o ícone SVG abaixo se quiser
    icon: `<rect x="2" y="6" width="20" height="9" rx="1"/><path d="M12 15v3M6 15v3M18 15v3M2 10h20"/>`,
  },
  {
    id: 'instalacao',
    tag: 'Serviço 02',
    title: 'Instalação e Montagem',
    shortDesc: 'Execução de instalações com equipe técnica especializada, garantindo qualidade e conformidade com as normas ABNT e boas práticas de engenharia.',
    desc: 'Executamos a instalação completa de sistemas de climatização com equipe técnica própria e treinada. Do início ao comissionamento, garantimos que cada sistema seja instalado com precisão e segurança.',
    desc2: 'Nosso processo de instalação inclui gestão de obra, coordenação com outras disciplinas e rigoroso controle de qualidade em todas as etapas.',
    benefits: [
      'Equipe técnica própria e certificada',
      'Gestão completa de obra',
      'Coordenação multidisciplinar',
      'Comissionamento e testes funcionais',
      'Balanceamento de ar e água',
      'Treinamento de operadores',
    ],
    tags: ['Execução', 'Comissionamento', 'Testes'],
    icon: `<path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>`,
  },
  {
    id: 'ventilacao',
    tag: 'Serviço 03',
    title: 'Ventilação Mecânica',
    shortDesc: 'Soluções em ventilação forçada para ambientes com demandas específicas de renovação de ar, pressurização e qualidade do ar interno.',
    desc: 'Projetamos e instalamos sistemas de ventilação mecânica para garantir a qualidade do ar interno, pressurização de ambientes e renovação de ar conforme normas sanitárias e de segurança.',
    desc2: 'Atendemos desde salas técnicas e data centers até galpões industriais e ambientes com demandas especiais de ventilação, como laboratórios e áreas de produção.',
    benefits: [
      'Renovação de ar conforme ABNT NBR 16401',
      'Sistemas de pressurização para rotas de fuga',
      'Ventilação para ambientes especiais',
      'Controle de umidade relativa do ar',
      'Filtração e qualidade do ar (IAQ)',
      'Sensores e automação de VAV',
    ],
    tags: ['IAQ', 'Pressurização', 'Renovação'],
    icon: `<circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M2 12h4M18 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>`,
  },
  {
    id: 'exaustao',
    tag: 'Serviço 04',
    title: 'Sistemas de Exaustão',
    shortDesc: 'Sistemas de exaustão para ambientes com alta carga de calor, gases e partículas. Projetos sob medida para indústrias e galpões logísticos.',
    desc: 'Desenvolvemos sistemas de exaustão industrial sob medida para ambientes com alta geração de calor, gases, fumaça e partículas. Nossos projetos atendem às normas NR-15 e regulamentações de segurança do trabalho.',
    desc2: 'Atuamos em galpões logísticos, plantas industriais, cozinhas industriais e subsolos de garagem, sempre com soluções dimensionadas para garantir conforto térmico e segurança.',
    benefits: [
      'Exaustão de gases e fumaça industrial',
      'Sistemas para galpões e armazéns',
      'Conformidade com NR-15 e NR-21',
      'Exaustão de subsolos e garagens',
      'Cozinhas industriais e restaurantes',
      'Integração com sistemas de detecção de CO',
    ],
    tags: ['Galpões', 'Indústrias', 'NR-15'],
    icon: `<path d="M3 12h18M12 3l9 9-9 9"/>`,
  },
]
