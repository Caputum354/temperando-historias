const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');
const searchButton = document.querySelector('.search-button');
const searchPanel = document.querySelector('.search-panel');
const searchInput = document.querySelector('#recipe-search');
const searchStatus = document.querySelector('.search-status');
const recipeItems = [...document.querySelectorAll('.recipe-item')];
const emptyState = document.querySelector('.empty-state');

function closeNavigation() {
  menuToggle?.setAttribute('aria-expanded', 'false');
  navigation?.classList.remove('is-open');
}

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('is-open', !isOpen);
});

document.querySelectorAll('.nav-links a').forEach((link) => link.addEventListener('click', closeNavigation));

searchButton?.addEventListener('click', () => {
  const isOpen = searchButton.getAttribute('aria-expanded') === 'true';
  searchButton.setAttribute('aria-expanded', String(!isOpen));
  searchPanel.hidden = isOpen;
  if (!isOpen) searchInput?.focus();
});

searchInput?.addEventListener('input', (event) => {
  const query = event.target.value.trim().toLocaleLowerCase('pt-BR');
  let visible = 0;
  recipeItems.forEach((item) => {
    const matches = !query || item.dataset.search.includes(query);
    item.hidden = !matches;
    if (matches) visible += 1;
  });
  emptyState.hidden = visible !== 0;
  searchStatus.textContent = query ? `${visible} receita${visible === 1 ? '' : 's'} encontrada${visible === 1 ? '' : 's'}.` : '';
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    searchPanel.hidden = true;
    searchButton?.setAttribute('aria-expanded', 'false');
    closeNavigation();
  }
});
