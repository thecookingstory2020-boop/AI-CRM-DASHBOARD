/* ============================================================
   sidebar.js — Shared sidebar logic
   Handles active-link highlighting and mobile toggle.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // --- Active link highlighting ---
  const currentPage = document.body.getAttribute('data-page');
  const navLinks = document.querySelectorAll('.sidebar-nav-link');

  navLinks.forEach(link => {
    if (link.getAttribute('data-nav') === currentPage) {
      link.classList.add('active');
    }
  });

  // --- Mobile sidebar toggle ---
  const hamburger = document.getElementById('hamburger-btn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');

  if (hamburger && sidebar && overlay) {
    hamburger.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('open');
    });

    overlay.addEventListener('click', () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('open');
    });
  }
});
