window.templates.projetos = function () {
  return `
    <h2>Projetos em Destaque</h2>
    <section class="grid-projetos">
      <article class="card">
        <img src="imagens/projeto_crianças.png" alt="Crianças estudando">
        <h3>Projeto Esperança</h3>
        <p>Promove o acesso à educação para crianças em situação de vulnerabilidade.</p>
        <span class="badge verde">Educação</span>
      </article>

      <article class="card">
        <img src="imagens/projeto_arvores.png" alt="Pessoas plantando árvores">
        <h3>Verde Futuro</h3>
        <p>Iniciativa de reflorestamento e preservação ambiental nas comunidades locais.</p>
        <span class="badge azul">Meio Ambiente</span>
      </article>

      <article class="card">
        <img src="imagens/projeto_alimentos.png" alt="Distribuição de alimentos">
        <h3>Alimente o Bem</h3>
        <p>Distribuição solidária de alimentos para famílias em vulnerabilidade social.</p>
        <span class="badge marrom">Alimentação</span>
      </article>
    </section>
  `;
};
