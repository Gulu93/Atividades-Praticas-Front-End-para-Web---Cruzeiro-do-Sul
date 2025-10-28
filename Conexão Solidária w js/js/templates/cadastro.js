window.templates.cadastro = function () {
  return `
    <h2>Cadastre-se para ser voluntário</h2>

    <form class="formulario">
      <fieldset>
        <legend>Informações Pessoais</legend>

        <label for="nome">Nome Completo:</label>
        <input type="text" id="nome" name="nome" required>

        <label for="cpf">CPF:</label>
        <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" required>

        <label for="nascimento">Data de Nascimento:</label>
        <input type="text" id="nascimento" name="nascimento" placeholder="00/00/0000" required>

        <label for="telefone">Telefone:</label>
        <input type="tel" id="telefone" name="telefone" placeholder="(00) 00000-0000" required>

        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" required>
      </fieldset>

      <fieldset>
        <legend>Endereço</legend>

        <label for="cep">CEP:</label>
        <input type="text" id="cep" name="cep" placeholder="00000-000" required>

        <label for="cidade">Cidade:</label>
        <input type="text" id="cidade" name="cidade" required>

        <label for="estado">Estado:</label>
        <input type="text" id="estado" name="estado" required>
      </fieldset>

      <fieldset>
          <legend>Áreas de Interesse</legend>
          <label><input type="checkbox" name="interesse" value="educacao"> Educação</label>
          <label><input type="checkbox" name="interesse" value="meioambiente"> Meio Ambiente</label>
          <label><input type="checkbox" name="interesse" value="alimentacao"> Combate à Fome</label>
        </fieldset>

        <fieldset>
          <legend>Mensagem</legend>
          <textarea id="mensagem" name="mensagem" rows="4" placeholder="Conte um pouco sobre você..."></textarea>
        </fieldset>

      <button type="submit" class="btn">Enviar Cadastro</button>
    </form>
  `;
};
