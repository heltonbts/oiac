import Swiper from "swiper";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "./styles.css";

const BASE = import.meta.env.BASE_URL;
const assetUrl = (path) => BASE + path.replace(/^\//, "");

const defaultLocale = "pt-BR";
const supportedLocales = ["pt-BR", "fr", "en"];

const translations = {
  "pt-BR": {
    meta: {
      title: "OIAC Engenharia — Soluções Técnicas para Obras e Projetos",
      description:
        "OIAC Engenharia — Soluções em administração de obras, regularização, projetos arquitetônicos e consultoria técnica.",
    },
    languageSwitcherAria: "Selecionar idioma",
    internationalBadge: {
      title: "Atendimento internacional",
    },
    openMenuAria: "Abrir menu",
    navAria: "Menu principal",
    nav: ["Portfólio", "Serviços", "A OIAC", "Contato"],
    mobile: {
      phoneLabel: "(88) 9 2189-2134",
      whatsapp: "WhatsApp",
      call: "Ligar",
    },
    heroAria: "Destaques",
    hero: [
      {
        id: "hero-1",
        title: "Administração<br>e Execução",
        description: "Gestão, execução, cronograma, custos e qualidade",
        location: "Acompanhamento completo do início à entrega",
        cta: "Conheça os serviços",
        alt: "Equipe de engenharia analisando obra",
      },
      {
        id: "hero-2",
        title: "Consultoria,<br>Assessoria e Viabilidade",
        description: "Análise técnica, estratégica e validação de escopo",
        location: "Decisões mais seguras para implantar e viabilizar projetos",
        cta: "Conheça os serviços",
        alt: "Consultoria técnica para viabilidade de projetos",
      },
      {
        id: "hero-3",
        title: "Regularização e Projetos",
        description: "Documentação técnica e suporte legal",
        location: "Aprovação, adequação e segurança para seu imóvel",
        cta: "Conheça os serviços",
        alt: "Documentação técnica para regularização de imóvel",
      },
    ],
    portfolio: {
      small: "Portfólio",
      big: "Obras Executadas",
    },
    modal: {
      closeAria: "Fechar detalhes da obra",
      sections: [
        "Sobre a obra",
        "Escopo executado",
        "Ficha técnica",
        "Vídeo da obra",
        "Galeria",
      ],
      videoTitle: "Vídeo da obra",
      galleryAlt: "foto",
    },
    services: {
      small: "Soluções",
      big: "Nossos Serviços",
      items: [
        [
          "Administração e Execução de Obras",
          "Gestão completa da obra com execução, planejamento, suprimentos e atuação também em preservação e manutenção de patrimônio histórico.",
        ],
        [
          "Consultoria, Assessoria e Viabilidade",
          "Análise técnica e estratégica para orientar decisões, validar escopo, custos, implantação e viabilidade de projetos.",
        ],
        [
          "Regularização",
          "Suporte para habite-se, averbação, adequações, documentação e processos junto aos órgãos competentes.",
        ],
        [
          "Laudos e Vistorias",
          "Inspeções técnicas, pareceres, laudos e relatórios para avaliação de patologias, conformidade e suporte decisório.",
        ],
        [
          "Projetos e Compatibilização",
          "Desenvolvimento e integração entre arquitetura, estrutura e instalações para reduzir conflitos e dar mais previsibilidade à execução.",
        ],
      ],
    },
    advantages: {
      small: "Por Que Escolher",
      big: "A OIAC Engenharia",
      items: [
        [
          "Gestão técnica com visão prática",
          "Atuação orientada por planejamento, controle e tomada de decisão baseada em critérios técnicos.",
        ],
        [
          "Soluções sob medida",
          "Cada projeto e cada obra recebem abordagem compatível com o objetivo, o orçamento, o prazo e formatos de contratação mais flexíveis.",
        ],
        [
          "Compatibilização e organização",
          "Integração entre disciplinas, redução de retrabalho e mais previsibilidade durante a execução.",
        ],
        [
          "Regularização com segurança",
          "Apoio técnico para documentação, aprovações, laudos e exigências legais do imóvel ou empreendimento.",
        ],
        [
          "Acompanhamento próximo",
          "Comunicação clara, relatórios objetivos e suporte contínuo ao longo do processo.",
        ],
        [
          "Atuação multidisciplinar",
          "Projetos, obras, perícias, regularização e consultoria reunidos em uma única operação técnica.",
        ],
        [
          "Pagamento em criptomoedas",
          "Aceitamos Bitcoin, Ethereum e USDT — flexibilidade real para clientes nacionais e internacionais contratarem sem barreiras.",
        ],
      ],
    },
    contact: {
      small: "Fale Conosco",
      big: "Entre em Contato",
      description:
        "Nossa equipe está pronta para entender sua necessidade e indicar a melhor solução em projetos, obras, regularização e consultoria técnica.",
      form: {
        labels: [
          "Seu nome",
          "Telefone",
          "E-mail",
          "Serviço de interesse",
          "Mensagem",
        ],
        placeholders: [
          "João Silva",
          "(00) 00000-0000",
          "joao@email.com",
          "Escreva sua mensagem...",
        ],
        options: [
          "— Selecione —",
          "Administração e Execução de Obras",
          "Consultoria, Assessoria e Viabilidade",
          "Regularização",
          "Laudos e Vistorias",
          "Projetos e Compatibilização",
          "Outro",
        ],
        termsHtml:
          'Li e aceito os <a href="#" style="color:var(--color-primary);text-decoration:underline;">Termos e condições</a> e a <a href="#" style="color:var(--color-primary);text-decoration:underline;">Política de Privacidade</a>',
        submit: "Enviar Mensagem",
        success: "Mensagem enviada! Entraremos em contato em breve.",
      },
    },
    newsletter: {
      title: "Receba conteúdos e novidades da engenharia",
      placeholder: "Seu melhor e-mail...",
      button: "Cadastrar",
      alert: "Obrigado! Você receberá nossas novidades em breve.",
    },
    footer: {
      tagline:
        "Empresa de engenharia com foco em gestão, projetos e regularização.<br> Soluções técnicas para obras e imóveis com critério e clareza.",
      headings: ["Serviços", "A Empresa", "Contato"],
      services: [
        "Administração e Execução de Obras",
        "Consultoria e Viabilidade",
        "Regularização",
        "Laudos e Vistorias",
        "Projetos e Compatibilização",
      ],
      company: [
        "Quem somos",
        "Diferenciais",
        "Solicitar orçamento",
        "Atendimento",
      ],
      address: "Aracati – CE",
      copyright: "OIAC Engenharia. Todos os direitos reservados.",
      privacy: "Política de Privacidade",
    },
  },
  fr: {
    meta: {
      title: "OIAC Ingenierie — Solutions techniques pour chantiers et projets",
      description:
        "OIAC Ingenierie — Solutions en gestion de chantiers, regularisation, projets architecturaux et conseil technique.",
    },
    languageSwitcherAria: "Choisir la langue",
    internationalBadge: {
      title: "Service international",
    },
    openMenuAria: "Ouvrir le menu",
    navAria: "Menu principal",
    nav: ["Portfolio", "Services", "OIAC", "Contact"],
    mobile: {
      phoneLabel: "(88) 9 2189-2134",
      whatsapp: "WhatsApp",
      call: "Appeler",
    },
    heroAria: "Mises en avant",
    hero: [
      {
        id: "hero-1",
        title: "Gestion<br>et Execution",
        description: "Gestion, execution, planning, couts et qualite",
        location: "Suivi complet du debut jusqu a la livraison",
        cta: "Decouvrir les services",
        alt: "Equipe d ingenierie analysant un chantier",
      },
      {
        id: "hero-2",
        title: "Conseil,<br>Assistance et Faisabilite",
        description:
          "Analyse technique, strategique et validation du perimetre",
        location:
          "Des decisions plus sures pour implanter et viabiliser les projets",
        cta: "Decouvrir les services",
        alt: "Conseil technique pour la faisabilite des projets",
      },
      {
        id: "hero-3",
        title: "Regularisation",
        description: "Documentation technique et support legal",
        location: "Approbation, mise en conformite et securite pour votre bien",
        cta: "Decouvrir les services",
        alt: "Documentation technique pour la regularisation d un bien",
      },
    ],
    portfolio: {
      small: "Portfolio",
      big: "Realisations",
    },
    modal: {
      closeAria: "Fermer les details du projet",
      sections: [
        "A propos du projet",
        "Perimetre realise",
        "Fiche technique",
        "Video du projet",
        "Galerie",
      ],
      videoTitle: "Video du projet",
      galleryAlt: "photo",
    },
    services: {
      small: "Solutions",
      big: "Nos Services",
      items: [
        [
          "Gestion et Execution de Chantier",
          "Gestion complete du chantier avec execution, planification, approvisionnements et interventions sur patrimoine historique.",
        ],
        [
          "Conseil, Assistance et Faisabilite",
          "Analyse technique et strategique pour orienter les decisions, valider le perimetre, les couts, l implantation et la faisabilite des projets.",
        ],
        [
          "Regularisation",
          "Support pour conformite, enregistrement, adaptations, documentation et procedures aupres des organismes competents.",
        ],
        [
          "Rapports et Inspections",
          "Inspections techniques, avis, rapports et diagnostics pour l evaluation des pathologies, de la conformite et l aide a la decision.",
        ],
        [
          "Projets et Coordination",
          "Developpement et integration entre architecture, structure et installations pour reduire les conflits et apporter plus de previsibilite a l execution.",
        ],
      ],
    },
    advantages: {
      small: "Pourquoi Choisir",
      big: "OIAC Ingenierie",
      items: [
        [
          "Gestion technique avec vision pratique",
          "Intervention guidee par la planification, le controle et la prise de decision basee sur des criteres techniques.",
        ],
        [
          "Solutions sur mesure",
          "Chaque projet et chaque chantier recoivent une approche adaptee aux objectifs, au budget, au delai et a des modeles contractuels plus souples.",
        ],
        [
          "Coordination et organisation",
          "Integration entre disciplines, reduction des reprises et meilleure previsibilite pendant l execution.",
        ],
        [
          "Regularisation en toute securite",
          "Support technique pour documentation, approbations, rapports et exigences legales du bien ou du projet.",
        ],
        [
          "Suivi de proximite",
          "Communication claire, rapports objectifs et accompagnement continu tout au long du processus.",
        ],
        [
          "Intervention pluridisciplinaire",
          "Projets, chantiers, expertises, regularisation et conseil reunis dans une seule operation technique.",
        ],
        [
          "Paiement en cryptomonnaies",
          "Nous acceptons le Bitcoin, l Ethereum et l USDT — une flexibilite reelle pour que les clients nationaux et internationaux contractent sans frontieres.",
        ],
      ],
    },
    contact: {
      small: "Parlez-Nous",
      big: "Entrer en Contact",
      description:
        "Notre equipe est prete a comprendre votre besoin et a indiquer la meilleure solution en projets, chantiers, regularisation et conseil technique.",
      form: {
        labels: [
          "Votre nom",
          "Telephone",
          "E-mail",
          "Service recherche",
          "Message",
        ],
        placeholders: [
          "Jean Dupont",
          "(00) 00000-0000",
          "jean@email.com",
          "Ecrivez votre message...",
        ],
        options: [
          "— Selectionnez —",
          "Gestion et Execution de Chantier",
          "Conseil, Assistance et Faisabilite",
          "Regularisation",
          "Rapports et Inspections",
          "Projets et Coordination",
          "Autre",
        ],
        termsHtml:
          'J ai lu et j accepte les <a href="#" style="color:var(--color-primary);text-decoration:underline;">Conditions generales</a> et la <a href="#" style="color:var(--color-primary);text-decoration:underline;">Politique de confidentialite</a>',
        submit: "Envoyer le Message",
        success: "Message envoye ! Nous vous contacterons bientot.",
      },
    },
    newsletter: {
      title: "Recevez des contenus et nouveautes de l ingenierie",
      placeholder: "Votre meilleur e-mail...",
      button: "S inscrire",
      alert: "Merci ! Vous recevrez bientot nos nouveautes.",
    },
    footer: {
      tagline:
        "Entreprise d ingenierie centree sur la gestion, les projets et la regularisation.<br> Des solutions techniques pour chantiers et biens avec rigueur et clarte.",
      headings: ["Services", "L Entreprise", "Contact"],
      services: [
        "Gestion et Execution de Chantier",
        "Conseil et Faisabilite",
        "Regularisation",
        "Rapports et Inspections",
        "Projets et Coordination",
      ],
      company: [
        "Qui nous sommes",
        "Differenciateurs",
        "Demander un devis",
        "Service client",
      ],
      address: "Aracati – CE",
      copyright: "OIAC Ingenierie. Tous droits reserves.",
      privacy: "Politique de confidentialite",
    },
  },
  en: {
    meta: {
      title:
        "OIAC Engineering — Technical solutions for construction and projects",
      description:
        "OIAC Engineering — Solutions for construction management, compliance, architectural design and technical consulting.",
    },
    languageSwitcherAria: "Choose language",
    internationalBadge: {
      title: "International service",
    },
    openMenuAria: "Open menu",
    navAria: "Main menu",
    nav: ["Portfolio", "Services", "About OIAC", "Contact"],
    mobile: {
      phoneLabel: "(88) 9 2189-2134",
      whatsapp: "WhatsApp",
      call: "Call",
    },
    heroAria: "Highlights",
    hero: [
      {
        id: "hero-1",
        title: "Management<br>and Execution",
        description:
          "Management, execution, schedule, cost and quality control",
        location: "End to end follow-up from kickoff to handover",
        cta: "Explore services",
        alt: "Engineering team reviewing a construction site",
      },
      {
        id: "hero-2",
        title: "Consulting,<br>Advisory and Feasibility",
        description: "Technical and strategic analysis with scope validation",
        location: "Safer decisions to structure and make projects viable",
        cta: "Explore services",
        alt: "Technical consulting for project feasibility",
      },
      {
        id: "hero-3",
        title: "Compliance",
        description: "Technical documentation and legal support",
        location: "Approvals, adjustments and security for your property",
        cta: "Explore services",
        alt: "Technical documentation for property compliance",
      },
    ],
    portfolio: {
      small: "Portfolio",
      big: "Completed Projects",
    },
    modal: {
      closeAria: "Close project details",
      sections: [
        "About the project",
        "Delivered scope",
        "Technical sheet",
        "Project video",
        "Gallery",
      ],
      videoTitle: "Project video",
      galleryAlt: "photo",
    },
    services: {
      small: "Solutions",
      big: "Our Services",
      items: [
        [
          "Construction Management and Execution",
          "Full construction management with execution, planning, procurement and work on preservation and maintenance of historic heritage.",
        ],
        [
          "Consulting, Advisory and Feasibility",
          "Technical and strategic analysis to support decisions, validate scope, costs, site strategy and project feasibility.",
        ],
        [
          "Compliance",
          "Support for permits, registration, adjustments, documentation and approval workflows with local authorities.",
        ],
        [
          "Reports and Inspections",
          "Technical inspections, opinions, reports and diagnostics for pathology assessment, compliance and decision support.",
        ],
        [
          "Projects and Coordination",
          "Development and integration across architecture, structure and building systems to reduce clashes and bring more predictability to execution.",
        ],
      ],
    },
    advantages: {
      small: "Why Choose",
      big: "OIAC Engineering",
      items: [
        [
          "Technical management with practical vision",
          "Work driven by planning, control and decision making based on technical criteria.",
        ],
        [
          "Tailored solutions",
          "Every project and every construction site receives an approach aligned with the client s goals, budget, schedule and more flexible commercial arrangements.",
        ],
        [
          "Coordination and organization",
          "Cross-discipline integration, less rework and greater predictability during execution.",
        ],
        [
          "Secure compliance process",
          "Technical support for documentation, approvals, reports and legal requirements for the property or development.",
        ],
        [
          "Close follow-up",
          "Clear communication, objective reports and continuous support throughout the process.",
        ],
        [
          "Multidisciplinary operation",
          "Projects, construction, expert assessments, compliance and consulting combined in a single technical operation.",
        ],
        [
          "Cryptocurrency payments accepted",
          "We accept Bitcoin, Ethereum and USDT — real flexibility for domestic and international clients to engage without financial barriers.",
        ],
      ],
    },
    contact: {
      small: "Talk to Us",
      big: "Get in Touch",
      description:
        "Our team is ready to understand your needs and recommend the right solution across projects, construction, compliance and technical consulting.",
      form: {
        labels: [
          "Your name",
          "Phone",
          "Email",
          "Service of interest",
          "Message",
        ],
        placeholders: [
          "John Smith",
          "(00) 00000-0000",
          "john@email.com",
          "Write your message...",
        ],
        options: [
          "— Select —",
          "Construction Management and Execution",
          "Consulting, Advisory and Feasibility",
          "Compliance",
          "Reports and Inspections",
          "Projects and Coordination",
          "Other",
        ],
        termsHtml:
          'I have read and accept the <a href="#" style="color:var(--color-primary);text-decoration:underline;">Terms and conditions</a> and the <a href="#" style="color:var(--color-primary);text-decoration:underline;">Privacy Policy</a>',
        submit: "Send Message",
        success: "Message sent! We will get back to you soon.",
      },
    },
    newsletter: {
      title: "Receive engineering insights and updates",
      placeholder: "Your best email...",
      button: "Subscribe",
      alert: "Thank you! You will receive our updates soon.",
    },
    footer: {
      tagline:
        "Engineering company focused on management, design and compliance.<br> Technical solutions for construction and properties with rigor and clarity.",
      headings: ["Services", "Company", "Contact"],
      services: [
        "Construction Management and Execution",
        "Consulting and Feasibility",
        "Compliance",
        "Reports and Inspections",
        "Projects and Coordination",
      ],
      company: [
        "Who we are",
        "Differentiators",
        "Request a quote",
        "Customer service",
      ],
      address: "Aracati – CE",
      copyright: "OIAC Engineering. All rights reserved.",
      privacy: "Privacy Policy",
    },
  },
};

const portfolioItems = {
  "vila-severina": {
    cover: "/vila-serverina/IMG_4639.JPG",
    gallery: [
      "/vila-serverina/IMG_4639.JPG",
      "/vila-serverina/dji_fly_20251223_095156_64_1766495544621_photo.jpg",
      "/vila-serverina/dji_fly_20251223_095210_65_1766495540778_photo.jpg",
      "/vila-serverina/IMG_4550.jpg",
      "/vila-serverina/IMG_4562.jpg",
      "/vila-serverina/IMG_4531.jpg",
    ],
    translations: {
      "pt-BR": {
        category: "Residencial",
        title: "Vila Severina",
        location: "Pontal de Maceio, Fortim - CE",
        cardAlt: "Vista aerea da Vila Severina com piscina central",
        cardShort:
          "Implantacao com patio interno e interiores acolhedores em madeira.",
        mobileShort: "Projeto com lazer central e ambientes internos autorais.",
        ariaLabel: "Abrir detalhes da obra Vila Severina",
        description:
          "Projeto residencial com atmosfera praiana, valorizando o patio interno, a piscina central e uma composicao com 5 suites, area gourmet, sala, lavanderia e deposito.",
        scope: [
          "Composicao volumetrica com linguagem leve e horizontal",
          "Valorizacao da area de lazer como nucleo central do projeto",
          "Integracao entre deck, piscina, paisagismo e acessos cobertos",
          "Distribuicao funcional com 5 suites e apoio completo para estadia",
          "Registro aereo para apresentacao do conjunto e da implantacao",
        ],
        specs: [
          ["Tipologia", "Residencial"],
          ["Area do terreno", "557,82 m²"],
          ["Area ocupada", "257,38 m²"],
          ["Area edificada", "242,69 m²"],
          ["Area permeavel", "200,00 m²"],
          ["Area parcial edificada", "283,53 m²"],
          ["Destaques", "Piscina, area gourmet e patio interno"],
          ["Suites", "5 suites"],
          ["Ambientes", "1 area gourmet, 1 sala, 1 lavanderia e 1 deposito"],
          ["Localizacao", "Pontal de Maceio"],
          ["Cidade", "Fortim - CE"],
        ],
      },
      fr: {
        category: "Residentiel",
        title: "Vila Severina",
        location: "Pontal de Maceio, Fortim - CE",
        cardAlt: "Vue aerienne de Vila Severina avec piscine centrale",
        cardShort:
          "Implantation avec patio interieur et espaces chaleureux en bois.",
        mobileShort: "Projet avec loisir central et interieurs signatures.",
        ariaLabel: "Ouvrir les details du projet Vila Severina",
        description:
          "Projet residentiel a l atmosphere balneaire, mettant en valeur le patio interieur, la piscine centrale et une composition avec 5 suites, espace gourmet, salon, buanderie et depot.",
        scope: [
          "Composition volumetrique avec une ecriture legere et horizontale",
          "Valorisation de l espace de loisir comme noyau central du projet",
          "Integration entre deck, piscine, paysage et acces couverts",
          "Distribution fonctionnelle avec 5 suites et espaces d appui complets",
          "Prises de vue aeriennes pour presenter l ensemble et l implantation",
        ],
        specs: [
          ["Typologie", "Residentiel"],
          ["Surface du terrain", "557,82 m²"],
          ["Surface occupee", "257,38 m²"],
          ["Surface construite", "242,69 m²"],
          ["Surface permeable", "200,00 m²"],
          ["Surface construite partielle", "283,53 m²"],
          ["Points forts", "Piscine, espace gourmet et patio interieur"],
          ["Suites", "5 suites"],
          ["Espaces", "1 espace gourmet, 1 salon, 1 buanderie et 1 depot"],
          ["Localisation", "Pontal de Maceio"],
          ["Ville", "Fortim - CE"],
        ],
      },
      en: {
        category: "Residential",
        title: "Vila Severina",
        location: "Pontal de Maceio, Fortim - CE",
        cardAlt: "Aerial view of Vila Severina with central pool",
        cardShort:
          "Layout centered on an internal courtyard and warm timber-lined interiors.",
        mobileShort:
          "Project with a central leisure core and distinctive interiors.",
        ariaLabel: "Open details for the Vila Severina project",
        description:
          "Residential project with a coastal atmosphere, highlighting the internal courtyard, the central pool and a layout with 5 suites, gourmet area, living room, laundry room and storage.",
        scope: [
          "Volumetric composition with a light horizontal language",
          "Leisure area designed as the central nucleus of the project",
          "Integration between deck, pool, landscaping and covered access",
          "Functional layout with 5 suites and full support spaces for stays",
          "Aerial records to present the full composition and site layout",
        ],
        specs: [
          ["Typology", "Residential"],
          ["Site area", "557.82 m²"],
          ["Occupied area", "257.38 m²"],
          ["Built area", "242.69 m²"],
          ["Permeable area", "200.00 m²"],
          ["Partial built area", "283.53 m²"],
          ["Highlights", "Pool, gourmet area and internal courtyard"],
          ["Suites", "5 suites"],
          [
            "Spaces",
            "1 gourmet area, 1 living room, 1 laundry room and 1 storage room",
          ],
          ["Location", "Pontal de Maceio"],
          ["City", "Fortim - CE"],
        ],
      },
    },
  },
  "casa-caio": {
    cover: "/Caio/cover.jpg",
    gallery: [
      "/Caio/gallery-1.jpg",
      "/Caio/gallery-2.jpg",
      "/Caio/gallery-3.jpg",
      "/Caio/gallery-4.jpg",
      "/Caio/gallery-5.jpg",
      "/Caio/gallery-6.jpg",
    ],
    translations: {
      "pt-BR": {
        category: "Residencial",
        title: "Bangalô Duplo",
        location: "Pontal de Maceió, Fortim – CE",
        cardAlt:
          "Bangalô duplo beira-mar com piscina, deck e cobertura em bambu",
        cardShort:
          "Bangalô duplo em área litorânea com deck, piscina, lavabo externo, lavanderia e guarda kite.",
        mobileShort:
          "Bangalô duplo com deck e materiais naturais em Pontal de Maceió.",
        ariaLabel: "Abrir detalhes da obra Bangalô Duplo em Pontal de Maceió",
        description:
          "Projeto de execução e acabamento de bangalô duplo em área de praia, com estrutura em madeira e cobertura em palha. O conjunto integra lavabo externo, lavanderia e guarda kite, com revestimentos em cimento queimado, deck corrido e materiais naturais alinhados à identidade litorânea do local.",
        scope: [
          "Execução de bangalô duplo com estrutura e cobertura em madeira e palha",
          "Lavabo externo com revestimento em cimento queimado e cuba de sobrepor",
          "Lavanderia e guarda kite integrados ao programa",
          "Deck corrido, instalações elétricas e hidráulicas",
          "Acabamentos internos com foco em conforto e identidade praiana",
        ],
        specs: [
          ["Tipologia", "Residencial / Hospedagem"],
          ["Bangalô duplo", "42,0 m²"],
          ["Lavabo externo", "3,8 m²"],
          ["Lavanderia", "3,9 m²"],
          ["Guarda kite", "3,9 m²"],
          ["Área total", "53,6 m²"],
          ["Localização", "Pontal de Maceió"],
          ["Cidade", "Fortim – CE"],
        ],
      },
      fr: {
        category: "Résidentiel",
        title: "Bungalow Double",
        location: "Pontal de Maceió, Fortim – CE",
        cardAlt:
          "Bungalow double en bord de mer avec piscine, deck et toiture en chaume",
        cardShort:
          "Bungalow double en bord de plage avec deck, piscine, lavabo extérieur, buanderie et local kite.",
        mobileShort:
          "Bungalow double avec deck et matériaux naturels à Pontal de Maceió.",
        ariaLabel:
          "Ouvrir les détails du projet Bungalow Double à Pontal de Maceió",
        description:
          "Projet d'exécution et de finition d'un bungalow double en bord de plage, avec une structure en bois et une toiture en chaume. L'ensemble intègre un lavabo extérieur, une buanderie et un local kite, avec des revêtements en béton ciré, une terrasse continue et des matériaux naturels en harmonie avec l'identité balnéaire du lieu.",
        scope: [
          "Exécution du bungalow double avec structure et toiture en bois et chaume",
          "Lavabo extérieur avec revêtement en béton ciré et vasque à poser",
          "Buanderie et local kite intégrés au programme",
          "Terrasse continue, installations électriques et plomberie",
          "Finitions intérieures axées sur le confort et l'identité balnéaire",
        ],
        specs: [
          ["Typologie", "Résidentiel / Hébergement"],
          ["Bungalow double", "42,0 m²"],
          ["Lavabo extérieur", "3,8 m²"],
          ["Buanderie", "3,9 m²"],
          ["Local kite", "3,9 m²"],
          ["Surface totale", "53,6 m²"],
          ["Localisation", "Pontal de Maceió"],
          ["Ville", "Fortim – CE"],
        ],
      },
      en: {
        category: "Residential",
        title: "Duplex Bungalow",
        location: "Pontal de Maceió, Fortim – CE",
        cardAlt:
          "Beachfront duplex bungalow with pool, deck and thatched bamboo roof",
        cardShort:
          "Beachfront duplex bungalow with deck, pool, outdoor restroom, laundry and kite storage.",
        mobileShort:
          "Duplex bungalow with deck and natural materials at Pontal de Maceió.",
        ariaLabel:
          "Open details for the Duplex Bungalow at Pontal de Maceió project",
        description:
          "Construction and finishing project for a duplex bungalow in a beachfront setting, featuring a timber structure and thatched roof. The programme includes an outdoor restroom, laundry room and kite storage, with polished concrete finishes, a continuous deck and natural materials in keeping with the coastal character of the site.",
        scope: [
          "Duplex bungalow construction with timber structure and thatched roof",
          "Outdoor restroom with polished concrete finish and vessel sink",
          "Laundry room and kite storage integrated into the programme",
          "Continuous deck, electrical and plumbing installations",
          "Interior finishes focused on comfort and coastal identity",
        ],
        specs: [
          ["Typology", "Residential / Hospitality"],
          ["Duplex bungalow", "42.0 m²"],
          ["Outdoor restroom", "3.8 m²"],
          ["Laundry room", "3.9 m²"],
          ["Kite storage", "3.9 m²"],
          ["Total area", "53.6 m²"],
          ["Location", "Pontal de Maceió"],
          ["City", "Fortim – CE"],
        ],
      },
    },
  },
  "casa-major": {
    cover: "/major/IMG_2808.jpg",
    gallery: [
      "/major/IMG_2808.jpg",
      "/major/IMG_2797.jpg",
      "/major/IMG_2800.jpg",
      "/major/IMG_2821.jpg",
      "/major/IMG_2815.jpg",
      "/major/IMG_2803.jpg",
    ],
    translations: {
      "pt-BR": {
        category: "Residencial",
        title: "Casa em Majorlândia",
        location: "Majorlândia, Aracati – CE",
        cardAlt: "Varanda com cobertura de palha e vista panorâmica em Majorlândia",
        cardShort:
          "Residência de dois pavimentos com piscina, deck, cobertura de palha e identidade litorânea em Majorlândia.",
        mobileShort:
          "Casa com piscina, deck e cobertura de palha em Majorlândia.",
        ariaLabel: "Abrir detalhes da obra Casa em Majorlândia",
        description:
          "Residência unifamiliar em fase avançada de execução em Majorlândia, com 81,5% de conclusão. O projeto de dois pavimentos integra linguagem rústica e materiais naturais — tijolo aparente, pedra tosca, madeira e cobertura de palha — ao contexto litorâneo da região. O conjunto conta com piscina, deck, varanda coberta, escada em madeira e vistas panorâmicas da vila.",
        scope: [
          "Execução de estrutura e vedações em dois pavimentos",
          "Revestimentos em pedra tosca e tijolo aparente",
          "Cobertura de palha e forro em bambu e madeira",
          "Piscina com deck em porcelanato e deck em madeira",
          "Escada em madeira, esquadrias e acabamentos internos",
        ],
        specs: [
          ["Tipologia", "Residencial unifamiliar"],
          ["Status", "81,5% concluído — obra em andamento"],
          ["Pavimentos", "2 (térreo + superior)"],
          ["Área do terreno", "323,17 m²"],
          ["Área construída térreo", "223,33 m²"],
          ["Área construída superior", "66,78 m²"],
          ["Varanda térreo", "51,23 m²"],
          ["Deck", "21,83 m²"],
          ["Área total construída", "362,98 m²"],
          ["Taxa de ocupação", "91,69%"],
          ["Taxa de permeabilidade", "16,97%"],
          ["Índice de aproveitamento", "1,12"],
          ["Localização", "Majorlândia"],
          ["Cidade", "Aracati – CE"],
        ],
      },
      fr: {
        category: "Résidentiel",
        title: "Maison à Majorlândia",
        location: "Majorlândia, Aracati – CE",
        cardAlt: "Terrasse avec toiture en chaume et vue panoramique à Majorlândia",
        cardShort:
          "Maison de deux niveaux avec piscine, deck, toiture en chaume et identité balnéaire à Majorlândia.",
        mobileShort:
          "Maison avec piscine, deck et toiture en chaume à Majorlândia.",
        ariaLabel: "Ouvrir les détails du projet Maison à Majorlândia",
        description:
          "Maison individuelle en phase avancée d'exécution à Majorlândia, avec 81,5 % d'avancement. Le projet de deux niveaux intègre un langage rustique et des matériaux naturels — brique apparente, pierre brute, bois et toiture en chaume — au contexte balnéaire de la région. L'ensemble comprend une piscine, un deck, une terrasse couverte, un escalier en bois et des vues panoramiques sur le village.",
        scope: [
          "Exécution de la structure et des cloisonnements sur deux niveaux",
          "Revêtements en pierre brute et brique apparente",
          "Toiture en chaume et plafond en bambou et bois",
          "Piscine avec margelle en grès cérame et deck en bois",
          "Escalier en bois, menuiseries et finitions intérieures",
        ],
        specs: [
          ["Typologie", "Maison individuelle"],
          ["Avancement", "81,5 % — chantier en cours"],
          ["Niveaux", "2 (rez-de-chaussée + étage)"],
          ["Surface du terrain", "323,17 m²"],
          ["Surface construite RDC", "223,33 m²"],
          ["Surface construite étage", "66,78 m²"],
          ["Véranda RDC", "51,23 m²"],
          ["Deck", "21,83 m²"],
          ["Surface totale construite", "362,98 m²"],
          ["Taux d'occupation", "91,69 %"],
          ["Taux de perméabilité", "16,97 %"],
          ["Indice d'exploitation", "1,12"],
          ["Localisation", "Majorlândia"],
          ["Ville", "Aracati – CE"],
        ],
      },
      en: {
        category: "Residential",
        title: "House in Majorlândia",
        location: "Majorlândia, Aracati – CE",
        cardAlt: "Thatched roof terrace with panoramic view in Majorlândia",
        cardShort:
          "Two-storey house with pool, deck, thatched roof and coastal identity in Majorlândia.",
        mobileShort:
          "House with pool, deck and thatched roof in Majorlândia.",
        ariaLabel: "Open details for the House in Majorlândia project",
        description:
          "Single-family residence in an advanced stage of construction in Majorlândia, 81.5% complete. The two-storey project integrates a rustic language and natural materials — exposed brick, rough stone, timber and thatched roofing — with the coastal character of the region. The programme includes a pool, deck, covered veranda, wooden staircase and panoramic views over the village.",
        scope: [
          "Structural and masonry works across two storeys",
          "Rough stone and exposed brick cladding",
          "Thatched roofing with bamboo and timber ceiling",
          "Pool with porcelain tile surround and wooden deck",
          "Timber staircase, doors, windows and interior finishes",
        ],
        specs: [
          ["Typology", "Single-family residential"],
          ["Status", "81.5% complete — under construction"],
          ["Storeys", "2 (ground floor + upper floor)"],
          ["Site area", "323.17 m²"],
          ["Built area – ground floor", "223.33 m²"],
          ["Built area – upper floor", "66.78 m²"],
          ["Ground floor veranda", "51.23 m²"],
          ["Deck", "21.83 m²"],
          ["Total built area", "362.98 m²"],
          ["Site coverage", "91.69%"],
          ["Permeability rate", "16.97%"],
          ["Floor area ratio", "1.12"],
          ["Location", "Majorlândia"],
          ["City", "Aracati – CE"],
        ],
      },
    },
  },
  "casa-em-canoa": {
    cover: "/canoa-atualizado/IMG_2768.jpg",
    gallery: [
      "/canoa-atualizado/IMG_2768.jpg",
      "/canoa-atualizado/IMG_2783.jpg",
      "/canoa-atualizado/IMG_2786.jpg",
      "/canoa-atualizado/IMG_2788.jpg",
      "/canoa-atualizado/IMG_2773.jpg",
      "/canoa-atualizado/IMG_2766.jpg",
    ],
    translations: {
      "pt-BR": {
        category: "Residencial",
        title: "Casa em Canoa",
        location: "Canoa Quebrada – CE",
        cardAlt: "Fachada da Casa em Canoa Quebrada em execução",
        cardShort:
          "Obra em andamento em Canoa Quebrada — finalização dos ambientes internos e acabamentos externos.",
        mobileShort:
          "Obra em andamento — reta final dos acabamentos em Canoa Quebrada.",
        ariaLabel: "Abrir detalhes da obra Casa em Canoa Quebrada",
        description:
          "Residência unifamiliar em fase de finalização em Canoa Quebrada. A obra encontra-se com 94,3% de conclusão, com os ambientes internos em etapa de acabamento e os serviços externos em andamento. O projeto integra linguagem contemporânea ao contexto litorâneo da região.",
        scope: [
          "Execução da estrutura e vedações",
          "Instalações elétricas e hidráulicas",
          "Revestimentos internos e externos",
          "Acabamentos de piso, parede e teto",
          "Esquadrias, marcenaria e serviços finais",
        ],
        specs: [
          ["Tipologia", "Residencial unifamiliar"],
          ["Status", "94,3% concluído — obra em andamento"],
          ["Localização", "Canoa Quebrada"],
          ["Cidade", "Aracati – CE"],
        ],
      },
      fr: {
        category: "Résidentiel",
        title: "Maison à Canoa",
        location: "Canoa Quebrada – CE",
        cardAlt: "Façade de la Maison à Canoa Quebrada en cours de construction",
        cardShort:
          "Chantier en cours à Canoa Quebrada — finition des espaces intérieurs et travaux extérieurs.",
        mobileShort:
          "Chantier en cours — dernière ligne droite des finitions à Canoa Quebrada.",
        ariaLabel: "Ouvrir les détails du projet Maison à Canoa Quebrada",
        description:
          "Maison individuelle en phase de finalisation à Canoa Quebrada. Le chantier est avancé à 94,3 %, avec les espaces intérieurs en cours de finition et les travaux extérieurs en cours. Le projet intègre un langage contemporain au contexte balnéaire de la région.",
        scope: [
          "Exécution de la structure et des cloisonnements",
          "Installations électriques et plomberie",
          "Revêtements intérieurs et extérieurs",
          "Finitions sol, mur et plafond",
          "Menuiseries, agencement et travaux finaux",
        ],
        specs: [
          ["Typologie", "Maison individuelle"],
          ["Avancement", "94,3 % — chantier en cours"],
          ["Localisation", "Canoa Quebrada"],
          ["Ville", "Aracati – CE"],
        ],
      },
      en: {
        category: "Residential",
        title: "Casa em Canoa",
        location: "Canoa Quebrada – CE",
        cardAlt: "Facade of Casa em Canoa Quebrada under construction",
        cardShort:
          "Project under construction in Canoa Quebrada — finishing interiors and completing exterior works.",
        mobileShort:
          "Under construction — final finishing stage in Canoa Quebrada.",
        ariaLabel: "Open details for the Casa em Canoa Quebrada project",
        description:
          "Single-family residence in its final construction phase in Canoa Quebrada. The project is 94.3% complete, with interior finishes under way and exterior works in progress. The design blends a contemporary language with the coastal character of the region.",
        scope: [
          "Structural and masonry works",
          "Electrical and plumbing installations",
          "Interior and exterior cladding",
          "Floor, wall and ceiling finishes",
          "Doors, windows, joinery and final works",
        ],
        specs: [
          ["Typology", "Single-family residential"],
          ["Status", "94.3% complete — under construction"],
          ["Location", "Canoa Quebrada"],
          ["City", "Aracati – CE"],
        ],
      },
    },
  },
};

const resolveLocale = (locale) =>
  supportedLocales.includes(locale) ? locale : defaultLocale;

let currentLocale = resolveLocale(window.localStorage.getItem("oiac-locale"));
let activePortfolioId = null;

const portfolioModal = document.getElementById("portfolio-modal");
const portfolioModalClose = document.getElementById("portfolio-modal-close");
const portfolioModalCover = document.getElementById("portfolio-modal-cover");
const portfolioModalCategory = document.getElementById(
  "portfolio-modal-category",
);
const portfolioModalTitle = document.getElementById("portfolio-modal-title");
const portfolioModalLocation = document.getElementById(
  "portfolio-modal-location",
);
const portfolioModalDescription = document.getElementById(
  "portfolio-modal-description",
);
const portfolioModalScope = document.getElementById("portfolio-modal-scope");
const portfolioModalSpecs = document.getElementById("portfolio-modal-specs");
const portfolioModalVideoSection = document.getElementById(
  "portfolio-modal-video-section",
);
const portfolioModalVideo = document.getElementById("portfolio-modal-video");
const portfolioModalGallery = document.getElementById(
  "portfolio-modal-gallery",
);
const contactForm = document.getElementById("contact-form");
const newsletterForm = document.querySelector(".newsletter-form");
const header = document.getElementById("main-header");
const hamburger = document.getElementById("hamburger-btn");
const drawer = document.getElementById("mobile-drawer");

const setYear = () => {
  const footerYear = document.getElementById("footer-year");
  if (footerYear) footerYear.textContent = new Date().getFullYear();
};

const getPortfolioItem = (portfolioId) => {
  const item = portfolioItems[portfolioId];
  if (!item) return null;

  return {
    ...item,
    ...item.translations[currentLocale],
  };
};

const setText = (selector, text) => {
  const element = document.querySelector(selector);
  if (element) element.textContent = text;
};

const setHTML = (selector, html) => {
  const element = document.querySelector(selector);
  if (element) element.innerHTML = html;
};

const setTextList = (selector, values, childSelector) => {
  document.querySelectorAll(selector).forEach((element, index) => {
    const value = values[index];
    if (!value) return;
    const target = childSelector
      ? element.querySelector(childSelector)
      : element;
    if (target) target.textContent = value;
  });
};

const setCardContent = (portfolioId, item) => {
  document
    .querySelectorAll(`[data-portfolio-id="${portfolioId}"]`)
    .forEach((card) => {
      const isMobile = card.closest(".buildings-mobile-swiper");
      card.setAttribute("aria-label", item.ariaLabel);
      const status = card.querySelector(".status-badge");
      const title = card.querySelector(".title");
      const text = card.querySelector(".desc-item .text");
      const image = card.querySelector("img");

      if (status) status.textContent = item.category;
      if (title) title.textContent = item.title;
      if (text) text.textContent = isMobile ? item.mobileShort : item.cardShort;
      if (image) image.alt = item.cardAlt;
    });
};

const setLocationText = (element, text) => {
  if (!element) return;
  const icon = element.querySelector("svg")?.outerHTML ?? "";
  element.innerHTML = `${icon} ${text}`;
};

const updateFooterCopyright = (locale) => {
  const footerContainer = document.querySelector(".index-footer .container");
  const footer = translations[locale].footer;
  if (!footerContainer) return;

  footerContainer.innerHTML =
    `&copy; <span id="footer-year"></span> ${footer.copyright} &nbsp;|&nbsp; ` +
    `<a href="#" style="color:rgba(255,255,255,0.5);text-decoration:underline;">${footer.privacy}</a>`;
  setYear();
};

const closePortfolioModal = () => {
  if (!portfolioModal?.classList.contains("open")) return;
  portfolioModal.classList.remove("open");
  portfolioModal.setAttribute("aria-hidden", "true");
  portfolioModalVideo.innerHTML = "";
  document.body.classList.remove("modal-open");
  activePortfolioId = null;
};

const openPortfolioModal = (portfolioId) => {
  const item = getPortfolioItem(portfolioId);
  if (!item || !portfolioModal) return;

  const modalUi = translations[currentLocale].modal;
  activePortfolioId = portfolioId;
  portfolioModalCover.src = assetUrl(item.cover);
  portfolioModalCover.alt = item.title;
  portfolioModalCategory.textContent = item.category;
  portfolioModalTitle.textContent = item.title;
  portfolioModalLocation.textContent = item.location;
  portfolioModalDescription.textContent = item.description;

  portfolioModalScope.innerHTML = item.scope
    .map((entry) => `<li>${entry}</li>`)
    .join("");
  portfolioModalSpecs.innerHTML = item.specs
    .map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`)
    .join("");

  if (item.video) {
    portfolioModalVideoSection?.classList.remove("is-hidden");
    portfolioModalVideo.innerHTML = `<iframe src="${item.video}" title="${modalUi.videoTitle} ${item.title}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  } else {
    portfolioModalVideoSection?.classList.add("is-hidden");
    portfolioModalVideo.innerHTML = "";
  }

  portfolioModalGallery.innerHTML = item.gallery
    .map(
      (image, index) =>
        `<img src="${assetUrl(image)}" alt="${item.title} - ${modalUi.galleryAlt} ${index + 1}" loading="lazy" />`,
    )
    .join("");

  portfolioModal.classList.add("open");
  portfolioModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
};

const applyTranslations = (locale) => {
  currentLocale = resolveLocale(locale);
  window.localStorage.setItem("oiac-locale", currentLocale);

  const t = translations[currentLocale];
  document.documentElement.lang = currentLocale;
  document.title = t.meta.title;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription)
    metaDescription.setAttribute("content", t.meta.description);

  document.querySelectorAll(".language-switcher").forEach((switcher) => {
    switcher.setAttribute("aria-label", t.languageSwitcherAria);
  });
  document.querySelectorAll(".international-badge").forEach((badge) => {
    const title = badge.querySelector("strong");
    const subtitle = badge.querySelector(".international-badge__text span");
    if (title) title.textContent = t.internationalBadge.title;
    if (subtitle) subtitle.remove();
  });
  document.querySelectorAll(".lang-btn").forEach((button) => {
    const isActive = button.dataset.lang === currentLocale;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  const desktopMenu = document.querySelector(".desktop-menu");
  if (desktopMenu) desktopMenu.setAttribute("aria-label", t.navAria);
  if (hamburger) hamburger.setAttribute("aria-label", t.openMenuAria);

  setTextList(".main-menu__item a", t.nav);
  setTextList(".mobile-drawer > a", [
    ...t.nav,
    t.mobile.phoneLabel,
    t.mobile.whatsapp,
  ]);
  setText(".nav-right .access-item:first-of-type", t.mobile.whatsapp);
  setText(".nav-right .access-item:last-of-type", t.mobile.call);

  const heroSection = document.querySelector(".home-top-slider");
  if (heroSection) heroSection.setAttribute("aria-label", t.heroAria);
  t.hero.forEach((slide) => {
    document
      .querySelectorAll(`[data-slide-id="${slide.id}"]`)
      .forEach((element) => {
        const title = element.querySelector(".title");
        const description = element.querySelector(".description");
        const location = element.querySelector(".location");
        const cta = element.querySelector(".see-more");
        const image = element.querySelector("img");

        if (title) title.innerHTML = slide.title;
        if (description) description.textContent = slide.description;
        setLocationText(location, slide.location);
        if (cta) cta.textContent = slide.cta;
        if (image) image.alt = slide.alt;
      });
  });

  setText(".our-buildings .small-text", t.portfolio.small);
  setText(".our-buildings .big-text", t.portfolio.big);

  Object.keys(portfolioItems).forEach((portfolioId) => {
    setCardContent(portfolioId, getPortfolioItem(portfolioId));
  });

  if (portfolioModalClose) {
    portfolioModalClose.setAttribute("aria-label", t.modal.closeAria);
  }
  const modalSections = document.querySelectorAll(
    ".portfolio-modal__section h4",
  );
  t.modal.sections.forEach((title, index) => {
    if (modalSections[index]) modalSections[index].textContent = title;
  });

  setText(".services-section .small-text", t.services.small);
  setText(".services-section .big-text", t.services.big);
  document
    .querySelectorAll(".services-grid .service-card")
    .forEach((card, index) => {
      const [title, description] = t.services.items[index];
      const heading = card.querySelector("h3");
      const text = card.querySelector("p");
      if (heading) heading.textContent = title;
      if (text) text.textContent = description;
    });

  setText(".advantages-container .small-text", t.advantages.small);
  setText(".advantages-container .big-text", t.advantages.big);
  document
    .querySelectorAll(".advantages-listing .advantage-item")
    .forEach((item, index) => {
      const [title, description] = t.advantages.items[index];
      const top = item.querySelector(".top-text");
      const content = item.querySelector(".content-text");
      if (top) top.textContent = title;
      if (content) content.textContent = description;
    });

  setText(".contact-info .small-text", t.contact.small);
  setText(".contact-info .big-text", t.contact.big);
  setText(".contact-info > p", t.contact.description);
  setText('label[for="cf-name"]', t.contact.form.labels[0]);
  setText('label[for="cf-phone"]', t.contact.form.labels[1]);
  setText('label[for="cf-email"]', t.contact.form.labels[2]);
  setText('label[for="cf-empreendimento"]', t.contact.form.labels[3]);
  setText('label[for="cf-message"]', t.contact.form.labels[4]);
  document
    .getElementById("cf-name")
    ?.setAttribute("placeholder", t.contact.form.placeholders[0]);
  document
    .getElementById("cf-phone")
    ?.setAttribute("placeholder", t.contact.form.placeholders[1]);
  document
    .getElementById("cf-email")
    ?.setAttribute("placeholder", t.contact.form.placeholders[2]);
  document
    .getElementById("cf-message")
    ?.setAttribute("placeholder", t.contact.form.placeholders[3]);
  document
    .querySelectorAll("#cf-empreendimento option")
    .forEach((option, index) => {
      if (t.contact.form.options[index])
        option.textContent = t.contact.form.options[index];
    });
  setHTML('label[for="cf-terms"]', t.contact.form.termsHtml);
  setText(".btn-submit", t.contact.form.submit);
  setText("#form-success", t.contact.form.success);

  setText(".newsletter-inner h3", t.newsletter.title);
  document
    .querySelector('.newsletter-form input[type="email"]')
    ?.setAttribute("placeholder", t.newsletter.placeholder);
  setText(".newsletter-form button", t.newsletter.button);

  setHTML(".footer-tagline", t.footer.tagline);
  const footerColumns = document.querySelectorAll(".footer-grid > .footer-col");
  footerColumns.forEach((column, index) => {
    const heading = column.querySelector("h4");
    if (heading) heading.textContent = t.footer.headings[index];
  });
  setTextList(
    ".footer-grid > .footer-col:nth-child(2) ul li a",
    t.footer.services,
  );
  setTextList(
    ".footer-grid > .footer-col:nth-child(3) ul li a",
    t.footer.company,
  );
  const footerAddress = document.querySelector(".footer-contacts span");
  if (footerAddress) footerAddress.innerHTML = t.footer.address;
  updateFooterCopyright(currentLocale);

  if (activePortfolioId) {
    openPortfolioModal(activePortfolioId);
  }
};

window.addEventListener(
  "scroll",
  () => {
    if (window.scrollY > 60) {
      header.style.background = "rgba(255,255,255,0.96)";
      header.style.borderColor = "rgba(0,0,0,0.1)";
    } else {
      header.style.background = "rgba(255,255,255,0.88)";
      header.style.borderColor = "rgba(0,0,0,0.06)";
    }
  },
  { passive: true },
);

const closeDrawer = () => {
  drawer.classList.remove("open");
  hamburger?.setAttribute("aria-expanded", "false");
};

hamburger?.addEventListener("click", () => {
  const isOpen = drawer.classList.toggle("open");
  hamburger.setAttribute("aria-expanded", String(isOpen));
});

drawer?.querySelectorAll("a").forEach((link) => {
  if (link.getAttribute("href")?.startsWith("#")) {
    link.addEventListener("click", closeDrawer);
  }
});

document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => {
    applyTranslations(button.dataset.lang);
  });
});

new Swiper(".hero-swiper", {
  modules: [Autoplay, EffectFade, Pagination],
  loop: true,
  autoplay: { delay: 5500, disableOnInteraction: false },
  speed: 800,
  pagination: { el: ".hero-swiper .swiper-pagination", clickable: true },
  effect: "fade",
  fadeEffect: { crossFade: true },
});

new Swiper(".buildings-mobile-swiper", {
  modules: [Pagination],
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 16,
  pagination: {
    el: ".buildings-mobile-swiper .swiper-pagination",
    clickable: true,
  },
});

document.querySelectorAll("[data-portfolio-id]").forEach((card) => {
  const open = () => openPortfolioModal(card.dataset.portfolioId);
  card.addEventListener("click", open);
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      open();
    }
  });
});

portfolioModalClose?.addEventListener("click", closePortfolioModal);
portfolioModal
  ?.querySelectorAll("[data-close-portfolio-modal]")
  .forEach((element) => {
    element.addEventListener("click", closePortfolioModal);
  });

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closePortfolioModal();
  }
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const success = document.getElementById("form-success");
  success.style.display = "block";
  event.target.reset();
  window.setTimeout(() => {
    success.style.display = "none";
  }, 5000);
});

newsletterForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  window.alert(translations[currentLocale].newsletter.alert);
  event.target.reset();
});

setYear();
applyTranslations(currentLocale);

// Scroll reveal
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -48px 0px" },
);
document
  .querySelectorAll(".reveal")
  .forEach((el) => revealObserver.observe(el));
