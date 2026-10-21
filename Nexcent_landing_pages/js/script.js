// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('hidden') === false;
  menuBtn.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile menu when a link is clicked
mobileMenu.querySelectorAll('a').forEach((link) =>
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuBtn.setAttribute('aria-expanded', 'false');
  })
);

// Hero slider dots
const dots = document.querySelectorAll('#hero-dots .dot');
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    dots.forEach((d) => {
      d.classList.remove('bg-brand');
      d.classList.add('bg-brand/30');
    });
    dot.classList.remove('bg-brand/30');
    dot.classList.add('bg-brand');
  });
});

