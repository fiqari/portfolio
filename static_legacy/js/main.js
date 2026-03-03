/* ==========================================================================
   Wainaina Thomas — Portfolio JS
   Scroll animations, mobile menu, smooth scroll, live clock
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initMobileMenu();
    initSmoothScroll();
    initNavScroll();
    initLiveClock();
});

/* --- Scroll-triggered fade-in animations --- */
function initScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    if (!elements.length) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        elements.forEach(el => el.classList.add('visible'));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        }
    );

    elements.forEach(el => observer.observe(el));
}

/* --- Mobile hamburger menu --- */
function initMobileMenu() {
    const toggle = document.querySelector('.nav__toggle');
    const overlay = document.querySelector('.nav__overlay');
    if (!toggle || !overlay) return;

    const overlayLinks = overlay.querySelectorAll('.nav__link');

    toggle.addEventListener('click', () => {
        const isOpen = toggle.classList.toggle('active');
        overlay.classList.toggle('open', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
        toggle.setAttribute('aria-expanded', isOpen);
    });

    overlayLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            overlay.classList.remove('open');
            document.body.style.overflow = '';
            toggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('open')) {
            toggle.classList.remove('active');
            overlay.classList.remove('open');
            document.body.style.overflow = '';
            toggle.setAttribute('aria-expanded', 'false');
        }
    });
}

/* --- Smooth scroll for anchor links --- */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const navHeight = document.querySelector('.nav')?.offsetHeight || 0;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* --- Nav border on scroll --- */
function initNavScroll() {
    const nav = document.querySelector('.nav');
    if (!nav) return;

    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
}

/* --- Live clock for Nairobi (EAT UTC+3) --- */
function initLiveClock() {
    const clockEl = document.querySelector('.hero__location-time');
    if (!clockEl) return;

    function updateClock() {
        const now = new Date();
        const nairobiTime = new Date(now.toLocaleString('en-US', { timeZone: 'Africa/Nairobi' }));
        const hours = nairobiTime.getHours();
        const minutes = nairobiTime.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'pm' : 'am';
        const displayHours = hours % 12 || 12;
        clockEl.textContent = `${displayHours.toString().padStart(2, '0')}:${minutes} ${ampm}`;
    }

    updateClock();
    setInterval(updateClock, 30000); // Update every 30s
}
