document.addEventListener('DOMContentLoaded', () => {
  console.log('Conexão Solidária SPA carregada com sucesso!');

  // Evita recarregar ao clicar em links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const href = e.target.getAttribute('href');
      window.location.hash = href;
    });
  });
});
