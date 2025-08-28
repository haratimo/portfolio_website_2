/* /js/a11y.js
   Lightweight, defensive enhancements: mobile menu toggle + reduced-motion friendly reveals.
   Safe to include on ALL pages.
*/

// —— Helpers
const $ = (sel, root = document) => root.querySelector(sel);

function toggleHidden(el, show) {
  if (!el) return;
  const next = typeof show === "boolean" ? show : el.hasAttribute("hidden");
  if (next) el.removeAttribute("hidden"); else el.setAttribute("hidden", "");
}

// —— Mobile/compact menu toggle (opt-in if you add a button)
(function initMenu() {
  // Works if you add a button with data-toggle="menu" and aria-controls="site-nav"
  const btn = document.querySelector('[data-toggle="menu"]');
  if (!btn) return;

  const targetId = btn.getAttribute('aria-controls');
  const panel = document.getElementById(targetId);
  if (!panel) return;

  // Ensure starting state is closed for accessibility
  btn.setAttribute('aria-expanded', 'false');
  panel.setAttribute('hidden', '');

  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    toggleHidden(panel, !open);
    if (!open) {
      // Move focus to first focusable in panel (if any)
      const first = panel.querySelector('a,button,input,select,textarea');
      first?.focus();
    } else {
      btn.focus();
    }
  });

  // Esc to close when open
  panel.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
      btn.click();
    }
  });
})();

// —— Subtle reveal for cards (respects reduced motion)
(function initReveals() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const items = document.querySelectorAll('.card');
  if (!items.length) return;

  items.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(8px)';
    el.style.transition = 'opacity 180ms ease, transform 180ms ease';
  });

  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        io.unobserve(e.target);
      }
    }
  }, { rootMargin: '80px 0px' });

  items.forEach(el => io.observe(el));
})();
