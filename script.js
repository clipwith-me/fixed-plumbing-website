// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

// Contact form — send via WhatsApp
function handleSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value;

  const text = `Hello FIXED Plumbing Services! 👋\n\nName: ${name}\nPhone: ${phone}\nService Needed: ${service}\nMessage: ${message}\n\nPlease send me a free quote. Thank you!`;
  const waUrl = `https://wa.me/2348153333448?text=${encodeURIComponent(text)}`;

  document.getElementById('contact-form').style.display = 'none';
  document.getElementById('form-success').style.display = 'block';

  setTimeout(() => window.open(waUrl, '_blank'), 800);
}

// Scroll-triggered fade-in for cards
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.why-card, .service-card, .project-card, .project-full-card, .testimonial-card, .service-detail-card, .value-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(28px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
