// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 850,
    once: true,
    offset: 80,
    easing: 'ease-out-cubic'
});

// Typed.js Initialization with resume-aligned titles
const typed = new Typed('.multiple-text', {
    strings: [
        'Full Stack Developer',
        'B.Tech CSE Student (CGPA 9.38)',
        'College Rank 1 Holder',
        'Assistant Technical Lead',
        'DSA Problem Solver (500+ Solved)'
    ],
    typeSpeed: 60,
    backSpeed: 45,
    backDelay: 1200,
    loop: true
});

// Mobile Navbar Toggle
const menuIcon = document.getElementById('menu-icon');
const mobileNav = document.getElementById('mobile-nav');

if (menuIcon && mobileNav) {
    menuIcon.addEventListener('click', () => {
        mobileNav.classList.toggle('hidden');
        mobileNav.classList.toggle('flex');
    });

    // Close nav when clicking any link
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.add('hidden');
            mobileNav.classList.remove('flex');
        });
    });
}

// Resume Modal Handlers
function openResumeModal() {
    const modal = document.getElementById('resume-modal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    }
}

function closeResumeModal() {
    const modal = document.getElementById('resume-modal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = 'auto';
    }
}

// Close modal on escape key or clicking outside
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeResumeModal();
    }
});

const resumeModal = document.getElementById('resume-modal');
if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
        if (e.target === resumeModal) {
            closeResumeModal();
        }
    });
}

// Contact Form Submission Handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        const nameVal = nameInput ? nameInput.value.trim() : 'there';
        
        // Show stylish notification
        alert(`Thank you, ${nameVal}! Your message has been sent successfully. Shreya will reach out to you shortly.`);
        
        contactForm.reset();
    });
}

// Dynamic Header glassmorphism shadow on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        header.classList.add('shadow-lg', 'shadow-orange-500/5', 'bg-[#070708]/95');
    } else {
        header.classList.remove('shadow-lg', 'shadow-orange-500/5', 'bg-[#070708]/95');
    }
});
