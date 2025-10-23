(function () {
  const btn = document.querySelector('.menu-toggle');
  const menu = document.getElementById('nav-menu');
  if (!btn || !menu) return;

  function setExpanded(show) {
    menu.classList.toggle('show', show);
    btn.setAttribute('aria-expanded', String(show));
  }

  // Toggle on button click
  btn.addEventListener('click', () => {
    setExpanded(!menu.classList.contains('show'));
  });

  // Close after tapping a link
  menu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') setExpanded(false);
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setExpanded(false);
  });
})();
