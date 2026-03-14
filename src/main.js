import Swiper from 'swiper';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import './styles.css';

document.getElementById('footer-year').textContent = new Date().getFullYear();

const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    header.style.background = 'rgba(255,255,255,0.98)';
    header.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.08)';
  } else {
    header.style.background = 'rgba(255,255,255,0.96)';
    header.style.boxShadow = '0 1px 0 rgba(0, 0, 0, 0.08)';
  }
}, { passive: true });

const hamburger = document.getElementById('hamburger-btn');
const drawer = document.getElementById('mobile-drawer');
const closeDrawer = () => drawer.classList.remove('open');

hamburger?.addEventListener('click', () => {
  drawer.classList.toggle('open');
});

drawer?.querySelectorAll('a').forEach((link) => {
  if (link.getAttribute('href')?.startsWith('#')) {
    link.addEventListener('click', closeDrawer);
  }
});

new Swiper('.hero-swiper', {
  modules: [Autoplay, EffectFade, Pagination],
  loop: true,
  autoplay: { delay: 5500, disableOnInteraction: false },
  speed: 800,
  pagination: { el: '.hero-swiper .swiper-pagination', clickable: true },
  effect: 'fade',
  fadeEffect: { crossFade: true },
});

new Swiper('.buildings-mobile-swiper', {
  modules: [Pagination],
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 16,
  pagination: { el: '.buildings-mobile-swiper .swiper-pagination', clickable: true },
});

const portfolioItems = {
  'residencia-alto-padrao': {
    category: 'Residencial',
    title: 'Residência Alto Padrão',
    location: 'Goiânia, GO',
    cover: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80',
    description:
      'Obra residencial executada com acompanhamento técnico integral, compatibilização de projetos e foco em acabamento de alto desempenho. O trabalho contemplou controle de cronograma, suprimentos e fiscalização dos serviços críticos.',
    scope: [
      'Planejamento físico-financeiro da obra',
      'Gestão de fornecedores e mão de obra',
      'Compatibilização entre arquitetura, estrutura e instalações',
      'Fiscalização de execução e controle de qualidade',
    ],
    specs: [
      ['Área construída', '420 m²'],
      ['Prazo de execução', '14 meses'],
      ['Atuação', 'Gestão e execução'],
      ['Entregas', 'Obra, relatórios e acabamento final'],
    ],
    video: 'https://www.youtube-nocookie.com/embed/Scxs7L0vhZ4',
    gallery: [
      'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    ],
  },
  'reforma-comercial': {
    category: 'Comercial',
    title: 'Reforma Comercial',
    location: 'Aparecida de Goiânia, GO',
    cover: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&q=80',
    description:
      'Projeto de retrofit e modernização de espaço comercial com adequação de layout, instalações e operação durante a obra. A intervenção foi planejada para reduzir impacto no funcionamento do negócio e acelerar a entrega.',
    scope: [
      'Reorganização de layout interno',
      'Revisão de instalações elétricas e climatização',
      'Execução por etapas com controle operacional',
      'Acompanhamento técnico e medições semanais',
    ],
    specs: [
      ['Área reformada', '680 m²'],
      ['Prazo de execução', '5 meses'],
      ['Atuação', 'Reforma e gerenciamento'],
      ['Entregas', 'Layout, execução e comissionamento'],
    ],
    video: 'https://www.youtube-nocookie.com/embed/7nosDKb0HlU',
    gallery: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80',
      'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=1200&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80',
    ],
  },
  'ampliacao-regularizacao': {
    category: 'Industrial',
    title: 'Ampliação e Regularização',
    location: 'Trindade, GO',
    cover: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&q=80',
    description:
      'Ampliação de área operacional com regularização técnica e documental do empreendimento. O escopo incluiu vistorias, laudos, suporte para aprovação e coordenação das frentes executivas da obra.',
    scope: [
      'Ampliação de área construída',
      'Levantamento técnico e produção de laudos',
      'Apoio documental para regularização',
      'Coordenação de obra e atendimento a exigências técnicas',
    ],
    specs: [
      ['Área ampliada', '1.150 m²'],
      ['Prazo de execução', '8 meses'],
      ['Atuação', 'Obra e regularização'],
      ['Entregas', 'Ampliação, laudos e documentação'],
    ],
    video: 'https://www.youtube-nocookie.com/embed/KM5gYw1i1zM',
    gallery: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80',
      'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=1200&q=80',
    ],
  },
};

const portfolioModal = document.getElementById('portfolio-modal');
const portfolioModalClose = document.getElementById('portfolio-modal-close');
const portfolioModalCover = document.getElementById('portfolio-modal-cover');
const portfolioModalCategory = document.getElementById('portfolio-modal-category');
const portfolioModalTitle = document.getElementById('portfolio-modal-title');
const portfolioModalLocation = document.getElementById('portfolio-modal-location');
const portfolioModalDescription = document.getElementById('portfolio-modal-description');
const portfolioModalScope = document.getElementById('portfolio-modal-scope');
const portfolioModalSpecs = document.getElementById('portfolio-modal-specs');
const portfolioModalVideo = document.getElementById('portfolio-modal-video');
const portfolioModalGallery = document.getElementById('portfolio-modal-gallery');

const closePortfolioModal = () => {
  if (!portfolioModal?.classList.contains('open')) return;
  portfolioModal.classList.remove('open');
  portfolioModal.setAttribute('aria-hidden', 'true');
  portfolioModalVideo.innerHTML = '';
  document.body.classList.remove('modal-open');
};

const openPortfolioModal = (portfolioId) => {
  const item = portfolioItems[portfolioId];
  if (!item || !portfolioModal) return;

  portfolioModalCover.src = item.cover;
  portfolioModalCover.alt = item.title;
  portfolioModalCategory.textContent = item.category;
  portfolioModalTitle.textContent = item.title;
  portfolioModalLocation.textContent = item.location;
  portfolioModalDescription.textContent = item.description;

  portfolioModalScope.innerHTML = item.scope.map((entry) => `<li>${entry}</li>`).join('');
  portfolioModalSpecs.innerHTML = item.specs
    .map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`)
    .join('');
  portfolioModalVideo.innerHTML = `<iframe src="${item.video}" title="Video da obra ${item.title}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  portfolioModalGallery.innerHTML = item.gallery
    .map((image, index) => `<img src="${image}" alt="${item.title} - foto ${index + 1}" loading="lazy" />`)
    .join('');

  portfolioModal.classList.add('open');
  portfolioModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
};

document.querySelectorAll('[data-portfolio-id]').forEach((card) => {
  const open = () => openPortfolioModal(card.dataset.portfolioId);
  card.addEventListener('click', open);
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      open();
    }
  });
});

portfolioModalClose?.addEventListener('click', closePortfolioModal);
portfolioModal?.querySelectorAll('[data-close-portfolio-modal]').forEach((element) => {
  element.addEventListener('click', closePortfolioModal);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closePortfolioModal();
  }
});

const contactForm = document.getElementById('contact-form');
contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const success = document.getElementById('form-success');
  success.style.display = 'block';
  event.target.reset();
  window.setTimeout(() => {
    success.style.display = 'none';
  }, 5000);
});

const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  window.alert('Obrigado! Você receberá nossas novidades em breve.');
  event.target.reset();
});
