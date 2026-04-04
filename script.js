// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
});

// Typed.js Initialization
const typed = new Typed('.multiple-text', {
    strings: ['Student at RIT', 'Problem Solver', 'Tech Enthusiast', 'Web Developer'],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

// Mobile Navbar Toggle
const menuIcon = document.getElementById('menu-icon');
const mobileNav = document.getElementById('mobile-nav');

menuIcon.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
    mobileNav.classList.toggle('flex');
});

// Close nav when clicking a link (mobile)
const navLinks = document.querySelectorAll('#mobile-nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.add('hidden');
        mobileNav.classList.remove('flex');
    });
});

// Trigger Progress Bars when scrolled into view
const progressSection = document.getElementById('skills');
const progressBars = document.querySelectorAll('.progress-bar-fill');

const showProgress = () => {
    const sectionPos = progressSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;

    if(sectionPos < screenPos) {
        progressBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
        });
    }
};

window.addEventListener('scroll', showProgress);

// Form Submission prevention (Demo)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! This is a demo form.');
        contactForm.reset();
    });
}
