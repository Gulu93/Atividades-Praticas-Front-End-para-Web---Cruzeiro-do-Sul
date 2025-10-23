window.templates = window.templates || {};

window.templates.home = function () {
  return `
    <section class="hero">
      <img src="imagens/solidariedade.png" alt="Pessoas se ajudando" class="hero-img">
      <div class="hero-texto">
        <h2>Juntos, fazemos a diferença!</h2>
        <p>Conectamos pessoas e projetos que transformam vidas. Faça parte da mudança.</p>
        <a href="#/cadastro" class="btn">Cadastre-se</a>
      </div>
    </section>
  `;
};
