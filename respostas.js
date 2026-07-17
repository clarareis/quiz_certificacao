document.addEventListener("DOMContentLoaded", function () {
  const perguntasSelecionadas = JSON.parse(localStorage.getItem("perguntasSelecionadas")) || [];
  const curso = localStorage.getItem("curso") || "";
  const idioma = localStorage.getItem("idioma") || "PTBR";
  const msg = mensagens[idioma] || mensagens.PTBR;

  const titulo = document.getElementById("tituloRespostas");
  const container = document.getElementById("respostas");
  const btnVoltar = document.getElementById("btnVoltar");

  titulo.textContent = `${msg.tituloRespostas} (${curso} - ${idioma})`;
  btnVoltar.textContent = msg.voltar;

  if (!perguntasSelecionadas.length) {
    container.innerHTML = `<p>${msg.naoRespondida}</p>`;
    return;
  }

  let count = 0;
  perguntasSelecionadas.forEach((pergunta, index) => {
    const usuarioNaoRespondeu = pergunta.escolhida === null || typeof pergunta.escolhida === "undefined";
    const usuarioErrou = !usuarioNaoRespondeu && pergunta.escolhida !== pergunta.correta;

    if (usuarioNaoRespondeu || usuarioErrou) {
      count++;
      const div = document.createElement("div");
      div.className = "resposta-errada";

      const textoPergunta = `${index + 1}. ${pergunta.texto}`;
      const textoUsuario = usuarioNaoRespondeu
        ? `👉 ${msg.naoRespondida}`
        : `${msg.suaResposta}: ${pergunta.opcoes[pergunta.escolhida]}`;

      const textoCorreta = `✅ ${msg.respostaCorreta}: ${pergunta.opcoes[pergunta.correta]}`;

      const explicacaoHtml = pergunta.explicacao
        ? `<p>💡 ${msg.explicacao}: ${pergunta.explicacao}</p>`
        : "";

      div.innerHTML = `
        <h3>${textoPergunta}</h3>
        <p>${textoUsuario}</p>
        <p>${textoCorreta}</p>
        ${explicacaoHtml}
      `;
      container.appendChild(div);
    }
  });

  if (count === 0) {
    container.innerHTML = `<p>🎉 ${msg.passou}</p>`;
  }
});
