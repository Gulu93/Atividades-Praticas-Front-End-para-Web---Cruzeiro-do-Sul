const routes = {
  '/': 'home',
  '/projetos': 'projetos',
  '/cadastro': 'cadastro',
};

function router() {
  const path = window.location.hash.replace('#', '') || '/';
  const pageName = routes[path];

  const conteudo = document.getElementById('conteudo');
  conteudo.innerHTML = '';

  if (pageName && window.templates[pageName]) {
    conteudo.innerHTML = window.templates[pageName]();
  } else {
    conteudo.innerHTML = `<h2>Página não encontrada 😕</h2>`;
  }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
