const routes = {
'/': 'home',
'/projetos': 'projetos',
'/cadastro': 'cadastro',
};


function renderRoute() {
const hash = window.location.hash.replace('#', '') || '/';
const page = routes[hash];
const container = document.getElementById('conteudo');
if (!container) return;
container.innerHTML = '';
if (page && window.templates && typeof window.templates[page] === 'function') {
container.innerHTML = window.templates[page]();
// After injecting, move focus to main for a11y
container.setAttribute('tabindex', '-1');
container.focus();
} else {
container.innerHTML = '<h2>Página não encontrada</h2>';
}
}


window.addEventListener('hashchange', renderRoute, false);
window.addEventListener('load', renderRoute, false);