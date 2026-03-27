/**
 * Maithilee Dolharkar — Portfolio Script
 * Tech / Cyberpunk Theme
 */

document.addEventListener('DOMContentLoaded', () => {
    initMatrixRain();
    populatePortfolio();
    initNavigation();
    initScrollAnimations();
    initCounters();
    document.getElementById('current-year').textContent = new Date().getFullYear();
});

/* ══════════════════════════════════════
   MATRIX RAIN CANVAS
══════════════════════════════════════ */
function initMatrixRain() {
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');

    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = 'MAITHILEE0110ABCDEF<>{}[]|$#@!%^&*PySparkAzureSQL'.split('');
    const fontSize = 13;
    const columns  = Math.floor(canvas.width / fontSize);
    const drops    = Array(columns).fill(1);

    function drawMatrix() {
        ctx.fillStyle = 'rgba(2, 4, 8, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#00ff88';
        ctx.font = fontSize + 'px Share Tech Mono, monospace';

        drops.forEach((y, i) => {
            const char = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(char, i * fontSize, y * fontSize);
            if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        });
    }

    setInterval(drawMatrix, 45);

    window.addEventListener('resize', () => {
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

/* ══════════════════════════════════════
   POPULATE PORTFOLIO FROM DATA.JS
══════════════════════════════════════ */
function populatePortfolio() {
    const d = portfolioData;

    // ---- Hero contact badges ----
    const contactEl = document.getElementById('contact-info');
    contactEl.innerHTML = `
        <span class="hero-badge"><i class="fas fa-map-marker-alt"></i> ${d.personal.location}</span>
        <a href="mailto:${d.personal.email}" class="hero-badge"><i class="fas fa-envelope"></i> ${d.personal.email}</a>
        <a href="tel:${d.personal.phone.replace(/[^0-9+]/g,'')}" class="hero-badge"><i class="fas fa-phone"></i> ${d.personal.phone}</a>
        <a href="${d.personal.linkedin}" target="_blank" rel="noopener" class="hero-badge"><i class="fab fa-linkedin"></i> LinkedIn</a>
    `;

    // ---- About / Summary ----
    const summaryEl = document.getElementById('summary-content');
    summaryEl.innerHTML = d.summary.replace(
        /(Python|SQL|Azure|AWS|SDLC|Agile|ETL|Power BI|Microsoft Fabric|Machine Learning|July 2026)/g,
        '<strong>$1</strong>'
    );

    // ---- Skills ----
    const skillsEl = document.getElementById('skills-container');
    for (const [category, items] of Object.entries(d.skills)) {
        const card = document.createElement('div');
        card.className = 'terminal-card skill-category';
        card.innerHTML = `
            <div class="card-header-bar">
                <span class="dot dot-r"></span><span class="dot dot-y"></span><span class="dot dot-g"></span>
                <span class="card-filename">${category.toLowerCase().replace(/ /g,'-')}.js</span>
            </div>
            <div class="skill-category-title">${category}</div>
            <div class="skill-pills">
                ${items.map(item => `<span class="skill-pill">${item}</span>`).join('')}
            </div>
        `;
        skillsEl.appendChild(card);
    }

    // ---- Experience ----
    const expEl = document.getElementById('experience-container');
    d.experience.forEach(job => {
        const hasCerts = job.certificates && job.certificates.length > 0;
        const certsHTML = hasCerts
            ? `<div class="cert-section">
                <span class="cert-label"><i class="fas fa-certificate"></i> Certificates</span>
                <div class="cert-links">
                    ${job.certificates.map(c => `
                        <a href="${c.file}" target="_blank" rel="noopener" class="cert-btn">
                            <i class="fas fa-file-pdf"></i> ${c.name}
                        </a>`).join('')}
                </div>
               </div>`
            : '';

        const item = document.createElement('div');
        item.className = 'timeline-item terminal-card reveal';
        item.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-header">
                <div class="timeline-title">${job.title}</div>
                <div class="timeline-company">${job.company} &nbsp;·&nbsp; ${job.location}</div>
            </div>
            <div class="timeline-meta">
                <span><i class="fas fa-calendar-alt"></i>${job.period}</span>
            </div>
            <ul class="timeline-responsibilities">
                ${job.responsibilities.map(r => `<li>${r}</li>`).join('')}
            </ul>
            ${certsHTML}
        `;
        expEl.appendChild(item);
    });

    // ---- Projects ----
    const projEl = document.getElementById('projects-container');
    d.projects.forEach((proj, i) => {
        const card = document.createElement('div');
        card.className = 'project-card terminal-card';
        card.innerHTML = `
            <div class="card-header-bar">
                <span class="dot dot-r"></span><span class="dot dot-y"></span><span class="dot dot-g"></span>
                <span class="card-filename">project_${String(i + 1).padStart(2, '0')}.py</span>
            </div>
            <div class="project-index">0${i + 1}</div>
            <h4 class="project-title">${proj.title}</h4>
            <div class="project-tech-tags">
                ${proj.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
            <ul class="project-details">
                ${proj.details.map(det => `<li>${det}</li>`).join('')}
            </ul>
        `;
        projEl.appendChild(card);
    });

    // ---- Education ----
    const eduEl = document.getElementById('education-container');
    d.education.forEach(edu => {
        const certHTML = edu.certificate
            ? `<a href="${edu.certificate}" target="_blank" rel="noopener" class="cert-btn" style="margin-top:0.75rem;display:inline-flex;">
                   <i class="fas fa-file-pdf"></i> View Degree Certificate
               </a>`
            : `<span class="cert-placeholder"><i class="fas fa-clock"></i> Certificate available Jun 2026</span>`;

        const item = document.createElement('div');
        item.className = 'edu-item';
        item.innerHTML = `
            <div class="edu-degree">${edu.degree}</div>
            <div class="edu-inst">${edu.institution}</div>
            <div class="edu-details mt-2">${edu.period} &nbsp;|&nbsp; ${edu.details}</div>
            ${certHTML}
        `;
        eduEl.appendChild(item);
    });

    // ---- Achievements ----
    const achEl = document.getElementById('achievements-container');
    d.achievements.forEach(ach => {
        ach.items.forEach(item => {
            const imageHTML = item.image
                ? `<div class="ach-image-wrap">
                       <img src="${item.image}" alt="${item.title}" class="ach-image" onerror="this.parentElement.style.display='none'">
                   </div>`
                : '';

            const linkHTML = item.link
                ? `<a href="${item.link}" target="_blank" rel="noopener" class="ach-link-btn">
                       <i class="fab fa-linkedin"></i> ${item.linkLabel || 'View Post'}
                   </a>`
                : '';

            const card = document.createElement('div');
            card.className = 'achievement-card';
            card.innerHTML = `
                ${imageHTML}
                <div class="ach-content">
                    <div class="ach-title"><i class="fas fa-trophy"></i> ${item.title}</div>
                    <p class="ach-desc">${item.description}</p>
                    ${linkHTML}
                </div>
            `;
            achEl.appendChild(card);
        });
    });

    // ---- Contact CTA ----
    const ctaEl = document.getElementById('contact-cta');
    ctaEl.innerHTML = `
        <a href="mailto:${d.personal.email}" class="btn btn-primary" id="cta-email"><i class="fas fa-envelope"></i> Send Email</a>
        <a href="${d.personal.linkedin}" target="_blank" rel="noopener" class="btn btn-secondary" id="cta-linkedin"><i class="fab fa-linkedin"></i> LinkedIn</a>
    `;

    // ---- Footer links ----
    const footerLinks = document.getElementById('footer-links');
    footerLinks.innerHTML = `
        <a href="mailto:${d.personal.email}" id="footer-email">Email</a>
        <a href="${d.personal.linkedin}" target="_blank" id="footer-linkedin">LinkedIn</a>
        <a href="#hero" id="footer-top">Back to Top</a>
    `;
}

/* ══════════════════════════════════════
   NAVIGATION
══════════════════════════════════════ */
function initNavigation() {
    const navbar  = document.getElementById('navbar');
    const mobileBtn = document.getElementById('mobile-btn');
    const navLinks  = document.querySelector('.nav-links');

    // Scrolled class
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });

    // Mobile toggle
    mobileBtn.addEventListener('click', () => {
        const open = navLinks.style.display === 'flex';
        navLinks.style.display = open ? 'none' : 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.right = '0';
        navLinks.style.background = 'rgba(2, 4, 8, 0.97)';
        navLinks.style.backdropFilter = 'blur(12px)';
        navLinks.style.padding = '1rem 2rem';
        navLinks.style.border = '1px solid var(--border-glow)';
        navLinks.style.minWidth = '220px';
        mobileBtn.innerHTML = open ? '<i class="fas fa-bars"></i>' : '<i class="fas fa-times"></i>';
    });

    // Close menu on link click (mobile)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
                mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });

    // Active nav link highlighting on scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY + 120;
        sections.forEach(sec => {
            const top    = sec.offsetTop;
            const height = sec.offsetHeight;
            const id     = sec.getAttribute('id');
            const link   = navLinks.querySelector(`a[href="#${id}"]`);
            if (link) {
                link.style.color = (scrollY >= top && scrollY < top + height)
                    ? 'var(--neon-green)' : '';
            }
        });
    }, { passive: true });
}

/* ══════════════════════════════════════
   SCROLL REVEAL ANIMATIONS
══════════════════════════════════════ */
function initScrollAnimations() {
    const allReveal = () => document.querySelectorAll('.reveal, .reveal-stagger');

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('active');
            obs.unobserve(entry.target);
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    // Observe initial elements
    allReveal().forEach(el => observer.observe(el));

    // Also observe dynamically added elements (experience, projects etc.)
    const mutationObs = new MutationObserver(() => {
        allReveal().forEach(el => {
            if (!el.classList.contains('active')) observer.observe(el);
        });
    });
    mutationObs.observe(document.body, { childList: true, subtree: true });
}

/* ══════════════════════════════════════
   COUNTER ANIMATIONS (hero stats)
══════════════════════════════════════ */
function initCounters() {
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');

    const counterObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el     = entry.target;
            const target = parseInt(el.getAttribute('data-target'), 10);
            animateCounter(el, target);
            obs.unobserve(el);
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => counterObserver.observe(el));
}

function animateCounter(el, target) {
    const duration = 1800;
    const startTime = performance.now();
    const isLarge = target > 10000;

    function update(currentTime) {
        const elapsed  = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased    = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
        const current  = Math.floor(eased * target);

        el.textContent = isLarge
            ? current.toLocaleString()
            : current;

        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = isLarge ? target.toLocaleString() : target;
    }

    requestAnimationFrame(update);
}
