window.onload = function () {
  // Recupera dados do teste
  const pontuacaoFinal = localStorage.getItem("pontuacaoFinal");
  const passou = localStorage.getItem("passou") === "true";

  // Recupera o idioma; define PT como padrão se não existir
  const idioma = localStorage.getItem("idioma") || "PT";
  const msg = mensagens[idioma] || mensagens.PT;

  // Renderiza o resultado com textos traduzidos
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `
    <div class="resposta-card ${passou ? 'correta' : 'errada'}">
      <h3>${msg.resultadoTitulo}</h3>
      <p>Percentual: <strong>${pontuacaoFinal}%</strong></p>
      <p>${passou ? msg.passou : msg.naoPassou}</p>
      <button type="button" onclick="window.location.href='index.html'">${msg.novoTeste}</button>
    </div>
  `;
};