(function () {
  const btn = document.querySelector('.menu-toggle');
  const menu = document.getElementById('nav-menu');
  if (!btn || !menu) return;

  function toggleMenu(force) {
    const willShow = typeof force === 'boolean' ? force : !menu.classList.contains('show');
    menu.classList.toggle('show', willShow);
    btn.setAttribute('aria-expanded', String(willShow));
  }

  btn.addEventListener('click', () => toggleMenu());
  menu.addEventListener('click', e => {
    if (e.target.tagName === 'A') toggleMenu(false);
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') toggleMenu(false);
  });
})();
