const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
  hamburger.setAttribute('aria-expanded', !expanded);

  if (expanded) {
    hamburger.textContent = '☰';
  } else {
    hamburger.textContent = '❌';
  }

  navList.classList.toggle('active');
});