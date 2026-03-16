// ═══════════════════════════════════════
//  ANNIE MATRIC SCHOOL — Shared Components
// ═══════════════════════════════════════

const SCHOOL = {
  name: 'Annie Matric Hr. Sec. School',
  fullName: 'Annie Matriculation Higher Secondary School',
  est: '2010',
  phones: ['044-27761953', '94890 82523', '94456 69314', '98401 97268'],
  email: 'st.annieschool@gmail.com',
  address: 'No.4/146A, Amudham Nagar, Mudichur Rd, Madanapuram, Chennai – 600048',
  whatsapp: '919840197268',
  motto: 'Truth · Love · Wisdom',
};

function injectTopbar() {
  document.body.insertAdjacentHTML('afterbegin', `
  <div class="topbar">
    <span>📍 ${SCHOOL.address}</span>
    <span class="topbar-right">
      📞 <a href="tel:${SCHOOL.phones[0].replace(/-/g,'')}">${SCHOOL.phones[0]}</a>
      <span class="sep">|</span>
      <a href="tel:${SCHOOL.phones[1].replace(/\s/g,'')}">${SCHOOL.phones[1]}</a>
      <span class="sep">|</span>
      📧 <a href="mailto:${SCHOOL.email}">${SCHOOL.email}</a>
    </span>
  </div>`);
}

function injectNav(activePage) {
  const pages = [
    { href: 'index.html',       label: 'Home'       },
    { href: 'about.html',       label: 'About'      },
    { href: 'academics.html',   label: 'Academics'  },
    { href: 'facilities.html',  label: 'Facilities' },
    { href: 'gallery.html',     label: 'Gallery'    },
    { href: 'contact.html',     label: 'Admissions', cta: true },
  ];

  const links = pages.map(p => `
    <li><a href="${p.href}" class="${p.cta ? 'nav-cta' : ''} ${p.label === activePage ? 'active' : ''}">${p.label}</a></li>
  `).join('');

  const mobileLinks = pages.map(p => `
    <a href="${p.href}" class="${p.cta ? 'mob-cta' : ''}">${p.label}</a>
  `).join('');

  document.body.insertAdjacentHTML('afterbegin', `
  <nav id="main-nav">
    <a class="nav-brand" href="index.html">
      <img class="nav-logo" src="images/logo.jpg" alt="Annie School Logo"/>
      <div class="nav-text">
        <span class="nav-name">${SCHOOL.name}</span>
        <span class="nav-sub">Established ${SCHOOL.est} · Madanapuram, Chennai</span>
        <span class="nav-motto">Truth &nbsp;✦&nbsp; Love &nbsp;✦&nbsp; Wisdom</span>
      </div>
    </a>
    <ul class="nav-links">${links}</ul>
    <button class="hamburger" id="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </nav>
  <div class="mobile-menu" id="mobile-menu">
    <button class="mobile-menu-close" id="mob-close">✕</button>
    ${mobileLinks}
  </div>`);

  // Hamburger logic
  const ham = document.getElementById('hamburger');
  const mob = document.getElementById('mobile-menu');
  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    mob.classList.toggle('open');
    document.body.style.overflow = mob.classList.contains('open') ? 'hidden' : '';
  });
  document.getElementById('mob-close').addEventListener('click', () => {
    ham.classList.remove('open');
    mob.classList.remove('open');
    document.body.style.overflow = '';
  });
  mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    ham.classList.remove('open'); mob.classList.remove('open'); document.body.style.overflow = '';
  }));
}

function injectFooter() {
  document.body.insertAdjacentHTML('beforeend', `
  <footer>
    <div class="footer-grid">
      <div>
        <img class="f-logo" src="images/logo.jpg" alt="Annie School"/>
        <div class="f-name">${SCHOOL.fullName}</div>
        <p class="f-desc">Established 2010 · Nurturing young minds with Truth, Love and Wisdom in Madanapuram, Chennai. Consistent 100% board results since inception.</p>
      </div>
      <div>
        <div class="f-col-title">Quick Links</div>
        <ul class="f-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="academics.html">Academics</a></li>
          <li><a href="facilities.html">Facilities</a></li>
          <li><a href="gallery.html">Gallery</a></li>
          <li><a href="contact.html">Admissions</a></li>
        </ul>
      </div>
      <div>
        <div class="f-col-title">Contact</div>
        <ul class="f-links">
          <li><a href="tel:04427761953">📞 044-27761953</a></li>
          <li><a href="tel:09489082523">📞 94890 82523</a></li>
          <li><a href="mailto:${SCHOOL.email}">📧 ${SCHOOL.email}</a></li>
          <li><a href="https://wa.me/${SCHOOL.whatsapp}">💬 WhatsApp Us</a></li>
        </ul>
      </div>
      <div>
        <div class="f-col-title">Programs</div>
        <ul class="f-links">
          <li><a href="academics.html">Primary (I–V)</a></li>
          <li><a href="academics.html">Middle (VI–VIII)</a></li>
          <li><a href="academics.html">Secondary (IX–X)</a></li>
          <li><a href="academics.html">Higher Sec (XI–XII)</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="f-copy">© 2026 ${SCHOOL.fullName} · All Rights Reserved</span>
      <span class="f-motto">${SCHOOL.motto}</span>
    </div>
  </footer>
  <a class="wa-float" href="https://wa.me/${SCHOOL.whatsapp}?text=Hello%2C%20I%20am%20interested%20in%20admission%20at%20Annie%20Matric%20School" target="_blank" title="Chat on WhatsApp">💬</a>`);
}

function initReveal() {
  const els = document.querySelectorAll('.reveal, .stagger');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.07 });
  els.forEach(el => obs.observe(el));
}

window.addEventListener('DOMContentLoaded', initReveal);
