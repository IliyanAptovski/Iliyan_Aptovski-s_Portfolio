// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navigation');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetElement = document.querySelector(this.getAttribute('href'));
    if (targetElement) {
        window.scrollTo({ top: targetElement.offsetTop - 60, behavior: 'smooth' });
    }
    });
});

// Reveal elements on scroll
const revealEls = document.querySelectorAll('.timeline-item, .course-card, .skill-card, .project-card');

const revealOnScroll = () => {
    revealEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
        el.classList.add('show');
    }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
