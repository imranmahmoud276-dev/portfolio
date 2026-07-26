
/* 
   THEME.JS — Dark/Light Toggle & Accent Color Picker
*/

document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const accentToggleBtn = document.getElementById('accent-toggle-btn');
  const accentMenu = document.getElementById('accent-menu');
  const accentDots = document.querySelectorAll('.accent-dot');

  /*
     1. THEME (Dark / Light) TOGGLE
    */
  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (themeToggleBtn) {
      themeToggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
    localStorage.setItem('portfolio-theme', theme);
  }

  // Restore saved theme (falls back to whatever is already in the HTML, i.e. "dark")
  const savedTheme = localStorage.getItem('portfolio-theme');
  applyTheme(savedTheme === 'light' ? 'light' : (savedTheme === 'dark' ? 'dark' : root.getAttribute('data-theme') || 'dark'));

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  /* 
     2. ACCENT COLOR PICKER
      */
  function applyAccent(accent) {
    root.setAttribute('data-accent', accent);
    localStorage.setItem('portfolio-accent', accent);

    accentDots.forEach(dot => {
      dot.classList.toggle('active', dot.dataset.accentColor === accent);
    });
  }

  // Restore saved accent
  const savedAccent = localStorage.getItem('portfolio-accent');
  applyAccent(savedAccent || root.getAttribute('data-accent') || 'amber');

  // Open/close the accent dropdown menu
  if (accentToggleBtn && accentMenu) {
    accentToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      accentMenu.classList.toggle('show');
    });

    // Close when clicking outside the menu
    document.addEventListener('click', (e) => {
      if (!accentMenu.contains(e.target) && e.target !== accentToggleBtn) {
        accentMenu.classList.remove('show');
      }
    });
  }

  // Handle color swatch selection
  accentDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const accent = dot.dataset.accentColor;
      applyAccent(accent);
      if (accentMenu) accentMenu.classList.remove('show');
    });
  });
});

