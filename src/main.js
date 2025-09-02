/* Smooth scroll for internal links */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    if (link.getAttribute('href') === '#') return;
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

/* Mobile nav toggle */
const toggleBtn = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');
toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

/* IntersectionObserver for fade-ins */
const io = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);
document.querySelectorAll('[data-animate]').forEach(el => io.observe(el));

/* Dynamic year */
document.getElementById('year').textContent = new Date().getFullYear();
