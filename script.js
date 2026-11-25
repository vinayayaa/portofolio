// Menu mobile
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});

nav.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => nav.classList.remove('open'))
);

// Tandai menu aktif saat scroll
const sections = document.querySelectorAll('main section');
const links = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(a =>
        a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id)
      );
    }
  });
}, { threshold: 0.5 });

sections.forEach(s => observer.observe(s));
