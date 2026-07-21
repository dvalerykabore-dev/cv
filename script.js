/**
 * CV EN LIGNE - LOGIQUE INTERACTIVE JAVASCRIPT
 */

document.addEventListener('DOMContentLoaded', () => {
    initProfileData();
    initAboutData();
    initTimelineData();
    initSkillsData();
    initProjectsData();
    initCertifsAndLangsData();
    initFooterData();

                            if (typeof feather !== 'undefined') {
                                  feather.replace();
                            }

                            initThemeManager();
    initScrollEffects();
    initPrintPdf();
    initContactForm();
});

function initProfileData() {
    if (!cvData || !cvData.profile) return;
    const { profile } = cvData;

  document.getElementById('nav-logo-text').textContent = profile.name;
    document.getElementById('hero-name').textContent = profile.name;
    document.getElementById('hero-title-sub').textContent = profile.title;
    document.getElementById('hero-bio-text').textContent = profile.bio;
    document.getElementById('hero-availability').textContent = profile.availability;
    document.getElementById('hero-avatar-img').src = profile.avatar;

  const emailEl = document.getElementById('contact-email');
    emailEl.textContent = profile.email;
    emailEl.href = `mailto:${profile.email}`;

  const phoneEl = document.getElementById('contact-phone');
    phoneEl.textContent = profile.phone;
    phoneEl.href = `tel:${profile.phone.replace(/\s+/g, '')}`;

  document.getElementById('contact-location').textContent = profile.location;

  const statsContainer = document.getElementById('hero-stats-container');
    statsContainer.innerHTML = profile.stats.map(stat => `
        <div class="stat-card">
              <span class="stat-value">${stat.value}</span>
                    <span class="stat-label">${stat.label}</span>
                        </div>
                          `).join('');
}

function initAboutData() {
    if (!cvData || !cvData.about) return;
    const { about } = cvData;

  document.getElementById('about-heading').textContent = about.heading;
    document.getElementById('about-description').textContent = about.description;

  const highlightsContainer = document.getElementById('about-highlights');
    highlightsContainer.innerHTML = about.highlights.map(item => `
        <li>
              <span class="check-icon"><i data-feather="check"></i></span>
                    <span>${item}</span>
                        </li>
                          `).join('');
}

function initTimelineData() {
    if (!cvData) return;
    const timelineContainer = document.getElementById('timeline-container');
    let html = '';

  if (cvData.experiences && cvData.experiences.length > 0) {
        html += `<h3 style="font-size: 1.6rem; margin-bottom: 2rem; color: var(--primary);">Experiences Professionnelles</h3>`;
        cvData.experiences.forEach(exp => {
                html += `
                        <div class="timeline-item">
                                  <div class="timeline-dot"></div>
                                            <div class="glass-card">
                                                        <div class="timeline-header">
                                                                      <div>
                                                                                      <h4 class="timeline-role">${exp.role}</h4>
                                                                                                      <span class="timeline-company">${exp.company} - ${exp.location}</span>
                                                                                                                    </div>
                                                                                                                                  <span class="timeline-period">${exp.period}</span>
                                                                                                                                              </div>
                                                                                                                                                          <p class="timeline-desc">${exp.description}</p>
                                                                                                                                                                      <ul class="timeline-achievements">
                                                                                                                                                                                    ${exp.achievements.map(ach => `<li>${ach}</li>`).join('')}
                                                                                                                                                                                                </ul>
                                                                                                                                                                                                            <div class="tech-tags">
                                                                                                                                                                                                                          ${exp.techs.map(t => `<span class="tag">${t}</span>`).join('')}
                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                              `;
        });
  }

  const educationData = cvData.education || cvData.educations;
    if (educationData && educationData.length > 0) {
          html += `<h3 style="font-size: 1.6rem; margin-top: 3rem; margin-bottom: 2rem; color: var(--primary);">Formations & Diplomes</h3>`;
          educationData.forEach(edu => {
                  html += `
                          <div class="timeline-item">
                                    <div class="timeline-dot"></div>
                                              <div class="glass-card">
                                                          <div class="timeline-header">
                                                                        <div>
                                                                                        <h4 class="timeline-role">${edu.degree}</h4>
                                                                                                        <span class="timeline-company">${edu.school} - ${edu.location}</span>
                                                                                                                      </div>
                                                                                                                                    <span class="timeline-period">${edu.period}</span>
                                                                                                                                                </div>
                                                                                                                                                            <p class="timeline-desc">${edu.description}</p>
                                                                                                                                                                      </div>
                                                                                                                                                                              </div>
                                                                                                                                                                                    `;
          });
    }

  timelineContainer.innerHTML = html;
}

function initSkillsData() {
    if (!cvData || !cvData.skills) return;
    const { skills } = cvData;
    const filterContainer = document.getElementById('skills-filter-container');
    const gridContainer = document.getElementById('skills-grid-container');

  if (!gridContainer) return;

  if (filterContainer && skills.categories) {
        filterContainer.innerHTML = skills.categories.map((cat, idx) => `
              <button class="filter-btn ${idx === 0 ? 'active' : ''}" data-filter="${cat.id}">
                      ${cat.name}
                            </button>
                                `).join('');

      const filterBtns = filterContainer.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                          filterBtns.forEach(b => b.classList.remove('active'));
                          btn.classList.add('active');
                          const filterValue = btn.getAttribute('data-filter');
                          renderSkills(filterValue);
                });
        });
  }

    function renderSkills(categoryFilter = 'all') {
          let filteredItems = skills.items || [];
          if (categoryFilter !== 'all') {
                  filteredItems = filteredItems.filter(item => item.category === categoryFilter);
          }

      gridContainer.innerHTML = filteredItems.map(skill => `
            <div class="skill-card">
                    <div class="skill-info">
                              <span class="skill-name">${skill.name}</span>
                                        <span class="skill-percent">${skill.level}%</span>
                                                </div>
                                                        <div class="progress-bar-bg">
                                                                  <div class="progress-bar-fill" style="width: ${skill.level}%"></div>
                                                                          </div>
                                                                                </div>
                                                                                    `).join('');
    }

  renderSkills('all');
}

function initProjectsData() {
    if (!cvData || !cvData.projects) return;
    const projectsGrid = document.getElementById('projects-grid-container');
    if (!projectsGrid) return;

  projectsGrid.innerHTML = cvData.projects.map(project => `
      <div class="project-card glass-card">
            <div class="project-thumb">
                    <img src="${project.image}" alt="${project.title}">
                          </div>
                                <div class="project-body">
                                        <span class="project-metric">${project.metrics}</span>
                                                <h3 class="project-title">${project.title}</h3>
                                                        <p class="project-desc">${project.description}</p>
                                                                <div class="tech-tags" style="margin-bottom: 1.5rem;">
                                                                          ${project.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                                                                                  </div>
                                                                                          <div class="project-footer">
                                                                                                    <a href="${project.demoUrl}" target="_blank" class="btn btn-secondary" style="padding: 0.4rem 1rem; font-size: 0.85rem;">
                                                                                                                <i data-feather="external-link"></i> Demo
                                                                                                                          </a>
                                                                                                                                    <a href="${project.githubUrl}" target="_blank" class="btn btn-secondary" style="padding: 0.4rem 1rem; font-size: 0.85rem;">
                                                                                                                                                <i data-feather="github"></i> Code
                                                                                                                                                          </a>
                                                                                                                                                                  </div>
                                                                                                                                                                        </div>
                                                                                                                                                                            </div>
                                                                                                                                                                              `).join('');
}

function initCertifsAndLangsData() {
    if (!cvData) return;

  const certifsContainer = document.getElementById('certif-list');
    if (certifsContainer && cvData.certifications && cvData.certifications.length > 0) {
          certifsContainer.innerHTML = cvData.certifications.map(cert => `
                <div class="certif-item">
                        <h4 class="certif-title">${cert.name}</h4>
                                <p class="certif-meta">${cert.issuer} | ${cert.year}</p>
                                      </div>
                                          `).join('');
    }

  const langsContainer = document.getElementById('lang-list');
    if (langsContainer && cvData.languages && cvData.languages.length > 0) {
          langsContainer.innerHTML = cvData.languages.map(lang => `
                <div class="lang-item" style="display: flex; justify-content: space-between; align-items: center;">
                        <span class="lang-name">${lang.name}</span>
                                <span class="lang-level" style="color: var(--text-muted); font-size: 0.9rem;">${lang.level}</span>
                                      </div>
                                          `).join('');
    }
}

function initFooterData() {
    if (!cvData || !cvData.profile) return;
    const { profile } = cvData;

  const footerYear = document.getElementById('footer-year');
    if (footerYear) {
          footerYear.textContent = new Date().getFullYear();
    }

  const footerName = document.getElementById('footer-name');
    if (footerName) {
          footerName.textContent = profile.name;
    }

  const footerSocials = document.getElementById('footer-socials');
    if (footerSocials && profile.socials) {
          footerSocials.innerHTML = Object.entries(profile.socials).map(([key, url]) => {
                  let icon = key;
                  if (key === 'whatsapp') icon = 'message-square';
                  return `
                          <a href="${url}" class="social-link" target="_blank">
                                    <i data-feather="${icon}"></i>
                                            </a>
                                                  `;
          }).join('');
    }
}

function initThemeManager() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

  const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

  themeToggle.addEventListener('click', () => {
        const targetTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElementetAttribute('data-theme', targetTheme);
        localStorage.setItem('theme', targetTheme);
        updateThemeIcon(targetTheme);
  });
}

function updateThemeIcon(theme) {
    const iconContainer = document.querySelector('#theme-toggle i');
    if (!iconContainer) return;

  if (theme === 'dark') {
        iconContainer.setAttribute('data-feather', 'sun');
  } else {
        iconContainer.setAttribute('data-feather', 'moon');
  }

  if (typeof feather !== 'undefined') {
        feather.replace();
  }
}

function initScrollEffects() {
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
          if (window.scrollY > 50) {
                  if (header) header.classList.add('scrolled');
          } else {
                  if (header) header.classList.remove('scrolled');
          }
          updateActiveNavLink();
    });

  const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
          link.addEventListener('click', (e) => {
                  const targetId = link.getAttribute('href');
                  if (targetId.startsWith('#')) {
                            e.preventDefault();
                            const targetSection = document.querySelector(targetId);
                            if (targetSection) {
                                        window.scrollTo({
                                                      top: targetSection.offsetTop - 80,
                                                      behavior: 'smooth'
                                        });
                            }
                  }
          });
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    let currentSectionId = '';

  sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
                currentSectionId = section.getAttribute('id');
        }
  });

  navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
        }
  });
}

function initPrintPdf() {
    const printBtn = document.getElementById('print-cv-btn');
    if (!printBtn) return;

  printBtn.addEventListener('click', () => {
        window.print();
  });
}

function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

  form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('form-name').value.trim();
        const email = document.getElementById('form-email').value.trim();
        const subject = document.getElementById('form-subject').value.trim();
        const message = document.getElementById('form-message').value.trim();

                            if (!name || !email || !subject || !message) {
                                    showFormStatus('Veuillez remplir tous les champs.', 'error');
                                    return;
                            }

                            showFormStatus('Envoi en cours...', 'info');

                            setTimeout(() => {
                                    showFormStatus('Votre message a ete envoye avec succes !', 'success');
                                    form.reset();
                            }, 1500);
  });
}

function showFormStatus(msg, type) {
    const statusContainer = document.getElementById('form-status');
    if (!statusContainer) return;

  statusContainer.textContent = msg;
    statusContainer.className = `form-status ${type}`;
    statusContainer.style.display = 'block';

  setTimeout(() => {
            statusContainer.style.display = 'none';
  }, 5000);
}
