// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuClose = document.getElementById('menu-close');

menuToggle?.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
});

menuClose?.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    document.body.style.overflow = '';
});

mobileMenu?.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        mobileMenu.classList.add('hidden');
        document.body.style.overflow = '';
    }
});

// Mobile Dropdown Toggle
const dropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const submenu = toggle.nextElementSibling;
        const icon = toggle.querySelector('svg');
        
        if (submenu.classList.contains('open')) {
            submenu.classList.remove('open');
            icon.style.transform = 'rotate(0deg)';
        } else {
            // Close other open submenus
            document.querySelectorAll('.mobile-submenu.open').forEach(menu => {
                menu.classList.remove('open');
                menu.previousElementSibling.querySelector('svg').style.transform = 'rotate(0deg)';
            });
            
            submenu.classList.add('open');
            icon.style.transform = 'rotate(180deg)';
        }
    });
});

// Header scroll effect
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header?.classList.add('scrolled', 'py-2');
        header?.classList.remove('py-3');
    } else {
        header?.classList.remove('scrolled', 'py-2');
        header?.classList.add('py-3');
    }
});

// Form Submission handling (for Kontak page)
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    // Simulate sending data
    const btn = contactForm.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = 'Mengirim...';
    btn.disabled = true;
    
    setTimeout(() => {
        contactForm.reset();
        btn.innerHTML = originalText;
        btn.disabled = false;
        formSuccess.classList.remove('hidden');
        
        setTimeout(() => {
            formSuccess.classList.add('hidden');
        }, 5000);
    }, 1000);
});
