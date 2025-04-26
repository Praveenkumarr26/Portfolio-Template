document.addEventListener('DOMContentLoaded', function() {
    // --- Put all your existing JS inside this function ---

    // Bootstrap Bundle
    const bootstrapScript = document.createElement('script');
    bootstrapScript.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js";
    bootstrapScript.defer = true;
    document.body.appendChild(bootstrapScript);

    // Theme Switcher
    const themeSwitcher = document.querySelector('.theme-switcher');
    const icon = themeSwitcher?.querySelector('i');
    
    if (themeSwitcher && icon) {
        themeSwitcher.addEventListener('click', () => {
            document.body.setAttribute('data-theme',
                document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    
            if (document.body.getAttribute('data-theme') === 'dark') {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        });
    }

    // Scroll Reveal Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => observer.observe(el));

    // View All Projects/Certifications
    const viewAllProjectsBtn = document.getElementById('view-all-projects');
    const extraProjects = document.querySelectorAll('.extra-project');

    if (viewAllProjectsBtn) {
        viewAllProjectsBtn.addEventListener('click', () => {
            extraProjects.forEach(project => {
                project.style.display = 'block';
                setTimeout(() => {
                    project.classList.add('show');
                    project.classList.add('animate');
                }, 100);
            });
            viewAllProjectsBtn.style.display = 'none';
        });
    }

    const viewAllCertificationsBtn = document.getElementById('view-all-certifications');
    const extraCertifications = document.querySelectorAll('.extra-certification');

    if (viewAllCertificationsBtn) {
        viewAllCertificationsBtn.addEventListener('click', () => {
            extraCertifications.forEach(cert => {
                cert.style.display = 'block';
                setTimeout(() => {
                    cert.classList.add('show');
                    cert.classList.add('animate');
                }, 100);
            });
            viewAllCertificationsBtn.style.display = 'none';
        });
    }

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
    
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            } else {
                navbar.style.boxShadow = 'none';
            }
        }
    });

    // Form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }

});
