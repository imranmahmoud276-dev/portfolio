/* 
   APP.JS — Mobile Hamburger Menu, Scroll Progress, Hero Typing Effect
  */

document.addEventListener('DOMContentLoaded', () => {

  /*1. HAMBURGER / MOBILE NAV MEN */
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  function closeMobileMenu() {
    navLinks.classList.remove('mobile-active');
    mobileMenuBtn.textContent = '☰';
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
  }

  function openMobileMenu() {
    navLinks.classList.add('mobile-active');
    mobileMenuBtn.textContent = '✕';
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
  }

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.contains('mobile-active');
      isOpen ? closeMobileMenu() : openMobileMenu();
    });

    // Close the menu when a nav link is tapped
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Close the menu if the user resizes back to desktop width
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) closeMobileMenu();
    });

    // Close the menu when clicking outside it
    document.addEventListener('click', (e) => {
      const clickedInsideMenu = navLinks.contains(e.target);
      const clickedToggleBtn = mobileMenuBtn.contains(e.target);
      if (!clickedInsideMenu && !clickedToggleBtn && navLinks.classList.contains('mobile-active')) {
        closeMobileMenu();
      }
    });
  }

  /* 2. SCROLL PROGRESS BAR*/
  const progressBar = document.getElementById('scroll-progress');

  function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (progressBar) progressBar.style.width = percent + '%';
  }

  window.addEventListener('scroll', updateScrollProgress);
  updateScrollProgress();

  /* 3. HERO TYPING ANIMATION*/
  const typingEl = document.getElementById('typing-text');
  const roles = (typeof PORTFOLIO_DATA !== 'undefined' && PORTFOLIO_DATA.profile.roleTitles)
    ? PORTFOLIO_DATA.profile.roleTitles
    : ['Frontend Developer'];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeLoop() {
    if (!typingEl) return;
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    typingEl.textContent = currentRole.substring(0, charIndex);

    let speed = isDeleting ? 40 : 90;

    if (!isDeleting && charIndex === currentRole.length) {
      speed = 1800; // pause at full word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      speed = 300;
    }

    setTimeout(typeLoop, speed);
  }

  typeLoop();

  /* 4. NAV LINK ACTIVE STATE ON SCROLL*/
  const sections = document.querySelectorAll('main section[id]');
  const navLinkEls = document.querySelectorAll('.nav-link');

  function updateActiveNavLink() {
    let currentId = sections[0]?.id;
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 120) currentId = section.id;
    });

    navLinkEls.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
    });
  }

  window.addEventListener('scroll', updateActiveNavLink);
  updateActiveNavLink();
});