// Mobile menu
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
navToggle?.addEventListener('click', () => nav.classList.toggle('open'));

// Scroll spy + active link
const links = [...document.querySelectorAll('.nav__link')];
const sections = links.map(a => document.querySelector(a.getAttribute('href')));
const activate = (id) => {
  links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${id}`));
};
const onScroll = () => {
  let current = 'home';
  sections.forEach(sec => {
    if (!sec) return;
    const top = sec.getBoundingClientRect().top + window.scrollY - 120;
    if (window.scrollY >= top) current = sec.id;
  });
  activate(current);
};
window.addEventListener('scroll', onScroll);
onScroll();

// Smooth scroll
links.forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');

    // Skip external links (mailto, http, https)
    if (href.startsWith('mailto:') || href.startsWith('http')) {
      return; // let browser handle it normally
    }

    // Smooth scroll for internal #section links
    e.preventDefault();
    const tgt = document.querySelector(href);
    if (!tgt) return;
    nav.classList.remove('open');
    window.scrollTo({ top: tgt.offsetTop - 72, behavior: 'smooth' });
  });
});


// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();
