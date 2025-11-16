document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header.navbar');
        
        const scrollThreshold = 50;

        window.addEventListener('scroll', () => {
            if (window.scrollY > scrollThreshold) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = mobileMenu.querySelectorAll('a');

    const toggleMenu = () => {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', mobileMenu.classList.contains('active'));
    }

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
    
});