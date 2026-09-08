/**
 * Mustafa Elsayed Portfolio Interactivity
 * Minimal, lightweight, zero dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initProjectFiltering();
  initCopyButtons();
});

/**
 * Theme Toggle: Dark / Light Mode with LocalStorage
 */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('themeToggle');
  const body = document.body;

  // Retrieve saved theme or default to dark
  const savedTheme = localStorage.getItem('me_theme') || 'dark';
  if (savedTheme === 'light') {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
  } else {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = body.classList.contains('dark-theme');
      if (isDark) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('me_theme', 'light');
      } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('me_theme', 'dark');
      }
    });
  }
}

/**
 * Project Filtering by Category
 */
function initProjectFiltering() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active state
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      projectCards.forEach(card => {
        const category = card.dataset.category;
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          // Smooth fade in
          card.style.opacity = '0';
          card.style.transform = 'translateY(8px)';
          setTimeout(() => {
            card.style.transition = 'all 0.25s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/**
 * One-Click Copy to Clipboard with Toast & Button States
 */
function initCopyButtons() {
  const copyButtons = document.querySelectorAll('.copy-btn');
  const toast = document.getElementById('copyToast');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const textToCopy = btn.dataset.copy;
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        
        // Button visual feedback
        btn.classList.add('copied');
        const textSpan = btn.querySelector('.btn-copy-text');
        if (textSpan) textSpan.textContent = 'Copied!';

        showToast(`Copied "${textToCopy}" to clipboard`);

        setTimeout(() => {
          btn.classList.remove('copied');
          if (textSpan) textSpan.textContent = 'Copy Email';
        }, 2200);

      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        showToast(`Copied "${textToCopy}" to clipboard`);
      }
    });
  });

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  }
}
