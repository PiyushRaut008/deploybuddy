/* ============================================
   PROJECT SHOWCASE WEBSITE - JAVASCRIPT
   Handles: particles, typing effect, counters,
   dynamic cards, navbar, scroll animations,
   contact autofill, validation, toasts
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ──────────────────────────────────────────
  // 1. PARTICLE BACKGROUND (Futuristic Effect)
  // ──────────────────────────────────────────
  const canvas = document.getElementById('particleCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: null, y: null };

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Track mouse for interactive glow
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.hue = Math.random() > 0.5 ? 239 : 280; // indigo or purple
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 80%, 70%, ${this.opacity})`;
        ctx.fill();
      }
    }

    // Create particles
    const particleCount = Math.min(80, Math.floor(window.innerWidth / 15));
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function drawLines() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        // Mouse connection lines
        if (mouse.x && mouse.y) {
          const dx = particles[i].x - mouse.x;
          const dy = particles[i].y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(129, 140, 248, ${0.15 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      drawLines();
      requestAnimationFrame(animateParticles);
    }
    animateParticles();
  }

  // ──────────────────────────────────────────
  // 2. TYPING EFFECT (Hero title)
  // ──────────────────────────────────────────
  const typingTarget = document.getElementById('typingTarget');
  if (typingTarget) {
    const words = ['Ambitions', 'Next Project', 'Professional Brand', 'Experience'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function typeEffect() {
      const current = words[wordIndex];

      if (isDeleting) {
        typingTarget.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
      } else {
        typingTarget.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
      }

      if (!isDeleting && charIndex === current.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 400; // Pause before next word
      }

      setTimeout(typeEffect, typeSpeed);
    }
    typeEffect();
  }

  // ──────────────────────────────────────────
  // 3. COUNTER ANIMATION (Hero stats)
  // ──────────────────────────────────────────
  const counters = document.querySelectorAll('.hero-stat__number');
  let counterStarted = false;

  function animateCounters() {
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;

      function updateCounter() {
        current += step;
        if (current < target) {
          counter.textContent = Math.floor(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      }
      updateCounter();
    });
  }

  // Trigger counters when hero is visible
  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !counterStarted) {
          counterStarted = true;
          animateCounters();
        }
      });
    }, { threshold: 0.5 });

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) counterObserver.observe(heroStats);
  }

  // ──────────────────────────────────────────
  // 4. DYNAMIC PROJECT CARDS (from projects.js)
  // ──────────────────────────────────────────
  const projectsGrid = document.querySelector('.projects-grid');

  if (projectsGrid && typeof PROJECTS !== 'undefined') {
    PROJECTS.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <a href="project.html?id=${project.id}" class="project-card__link">
          <div class="project-card__image-wrapper">
            <img
              src="${project.thumbnail}"
              alt="${project.title}"
              class="project-card__image"
              loading="lazy"
            />
            <span class="project-card__id-badge">${project.id}</span>
          </div>
          <div class="project-card__body">
            <h3 class="project-card__title">${project.title}</h3>
            <p class="project-card__desc">${project.shortDesc}</p>
          </div>
        </a>
        <div class="project-card__body" style="padding-top:0">
          <div class="project-card__footer">
            <span class="project-card__price">${project.price}</span>
            <button class="project-card__btn" data-project-id="${project.id}" data-project-title="${project.title}">
              Place Order
            </button>
          </div>
        </div>
      `;
      projectsGrid.appendChild(card);
    });
  }

  // ──────────────────────────────────────────
  // 4b. DYNAMIC DESIGN CARDS (from designs.js)
  // ──────────────────────────────────────────
  const designsGrid = document.querySelector('.designs-grid');

  if (designsGrid && typeof DESIGNS !== 'undefined') {
    DESIGNS.forEach(design => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <a href="design.html?id=${design.id}" class="project-card__link">
          <div class="project-card__image-wrapper">
            <img
              src="${design.thumbnail}"
              alt="${design.title}"
              class="project-card__image"
              loading="lazy"
            />
            <span class="project-card__id-badge">${design.id}</span>
          </div>
          <div class="project-card__body">
            <h3 class="project-card__title">${design.title}</h3>
            <p class="project-card__desc">${design.shortDesc}</p>
            <div class="detail-tech-tags" style="margin-top: -8px; margin-bottom: 20px;">
              ${design.techStack.slice(0, 3).map(t => `<span class="tech-tag" style="padding: 4px 10px; font-size: 0.7rem;">${t}</span>`).join('')}
            </div>
          </div>
        </a>
        <div class="project-card__body" style="padding-top:0">
          <div class="project-card__footer">
            <span class="project-card__price">${design.price}</span>
            <button class="project-card__btn" data-project-id="${design.id}" data-project-title="${design.title}">
              <i class="fa-solid fa-cart-shopping"></i> Place Order
            </button>
          </div>
        </div>
      `;
      designsGrid.appendChild(card);
    });
  }

  // ──────────────────────────────────────────
  // 5. NAVBAR — scroll effect & mobile toggle
  // ──────────────────────────────────────────
  const navbar = document.querySelector('.navbar');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  if (navLinks) {
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // ──────────────────────────────────────────
  // 6. SCROLL REVEAL — fade-in project cards
  // ──────────────────────────────────────────
  const revealElements = document.querySelectorAll('.project-card, .contact-form-card, .contact-info');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => revealObserver.observe(el));

  // ──────────────────────────────────────────
  // 7. ORDER MODAL LOGIC
  // ──────────────────────────────────────────
  const modalOverlay = document.getElementById('orderModalOverlay');
  const closeBtn = document.getElementById('closeOrderModal');
  const orderForm = document.getElementById('orderForm');
  const orderProjectNameField = document.getElementById('orderProjectName');
  const orderSubjectField = document.getElementById('orderSubject');

  function openOrderModal(id, title) {
    if (!modalOverlay) return;
    if (orderProjectNameField) orderProjectNameField.value = `${title} (${id})`;
    if (orderSubjectField) orderSubjectField.value = `New Order Request: ${title} [${id}]`;
    modalOverlay.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent scroll
  }

  function closeOrderModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('show');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeOrderModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeOrderModal();
    });
  }

  // Handle Order Form Submission
  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      showToast('Order request sent! We will contact you soon. 🚀');
      setTimeout(closeOrderModal, 1000);
    });
  }

  // Attach to project card buttons
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.project-card__btn');
    if (btn) {
      const pid = btn.getAttribute('data-project-id');
      const ptitle = btn.getAttribute('data-project-title') || pid;
      openOrderModal(pid, ptitle);
    }
  });

  // ──────────────────────────────────────────
  // 8. AUTO-FILL FROM DETAIL PAGE (Redirect to modal)
  // ──────────────────────────────────────────
  const storedProjectId = sessionStorage.getItem('autofill_project_id');
  if (storedProjectId) {
    sessionStorage.removeItem('autofill_project_id');
    // Find project title from projects.js or designs.js if possible, or just use ID
    let projectTitle = storedProjectId;
    if (typeof PROJECTS !== 'undefined') {
      const p = PROJECTS.find(item => item.id === storedProjectId);
      if (p) projectTitle = p.title;
    }
    if (projectTitle === storedProjectId && typeof DESIGNS !== 'undefined') {
      const d = DESIGNS.find(item => item.id === storedProjectId);
      if (d) projectTitle = d.title;
    }

    setTimeout(() => {
      openOrderModal(storedProjectId, projectTitle);
    }, 800);
  }

  // ──────────────────────────────────────────
  // 9. FORM VALIDATION & SUBMISSION
  // ──────────────────────────────────────────
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      showToast('Custom project request sent! 🎉');
    });
  }

  // ──────────────────────────────────────────
  // 10. TOAST NOTIFICATION
  // ──────────────────────────────────────────
  function showToast(message, type = 'success') {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;

    if (type === 'error') {
      toast.style.borderColor = 'rgba(239, 68, 68, 0.4)';
      toast.style.color = '#ef4444';
    }

    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  }

  // ──────────────────────────────────────────
  // 11. ACTIVE NAV LINK HIGHLIGHT
  // ──────────────────────────────────────────
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const link = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (link) {
        link.style.color = (scrollPos >= top && scrollPos < top + height) ? '#f0f0f5' : '';
      }
    });
  });
});
