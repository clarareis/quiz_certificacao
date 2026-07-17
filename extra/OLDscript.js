window.onload = function () {
  if (!Array.isArray(perguntas) || perguntas.length === 0) {
    console.error("❌ O array 'perguntas' não está carregado ou está vazio.");
    return;
  }

  // 🔧 FILTRO TEMPORÁRIO: só pega perguntas que NÃO começam com "OK -"
  const perguntasNaoVistas = perguntas.filter(p => !p.texto.startsWith("OK - "));

  const perguntasVistas = perguntas.filter(p => p.texto.startsWith("OK - "));

//console.log("📊 Total de perguntas no banco:", perguntas.length);
//console.log("✅ Já vistas (com 'OK -'):", perguntasVistas.length);
//console.log("📌 Ainda não vistas (sem 'OK -'):", perguntasNaoVistas.length);

  // 👉 Usa esse array filtrado para selecionar as questões
  //perguntasSelecionadas = selecionarQuestoesPorTema(perguntasNaoVistas, distribuicaoOficial);

  // 👉 pega todas as perguntas não vistas, sem aplicar distribuição
//perguntasSelecionadas = embaralhar([...perguntasNaoVistas]);

// ✅ MODO NORMAL: usa todas as perguntas
perguntasSelecionadas = selecionarQuestoesPorTema(perguntas, distribuicaoOficial);

  if (perguntasSelecionadas.length === 0) {
    alert("⚠️ Nenhuma pergunta foi selecionada. Verifique se há perguntas com temas válidos.");
    return;
  }

  const form = document.getElementById("quizForm");
  perguntasSelecionadas.forEach((pergunta, index) => {
    const div = document.createElement("div");
    div.className = "question";
    div.innerHTML = `<h3>${index + 1}. ${pergunta.texto}</h3>`;
    pergunta.opcoes.forEach((opcao, i) => {
      div.innerHTML += `
        <label>
          <input type="radio" name="q${index}" value="${i}" />
          ${opcao}
        </label><br>`;
    });
    form.appendChild(div);
  });

  const display = document.getElementById("tempo");
  if (display) {
    iniciarCronometro(90 * 60, display);
  }
};

function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let perguntasSelecionadas = [];

const distribuicaoOficial = {
  "Best Practices": 15,
  "Screens": 4,
  "Data": 4,
  "Queries": 3,
  "Logic": 4,
  "Troubleshooting": 4,
  "Integrations": 4,
  "External Databases": 2,
  "REST APIs": 2,
  "Exception/Transaction Handling": 2,
  "Asynchronous Processes": 4,
  "Work in Teams": 1
};

function iniciarCronometro(duracao, display) {
  let tempo = duracao;
  const intervalo = setInterval(() => {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    display.textContent = `${minutos}:${segundos < 10 ? "0" : ""}${segundos}`;

    const progresso = document.getElementById("progresso");
    const porcentagem = (tempo / duracao) * 100;
    progresso.style.width = `${porcentagem}%`;

    if (tempo <= 5 * 60) {
      document.querySelector("button").classList.add("piscar");
    }

    if (--tempo < 0) {
      clearInterval(intervalo);
      validarQuiz();
      document.querySelector("button").disabled = true;
      document.querySelector("button").classList.remove("piscar");
      alert("⏰ Tempo esgotado! Suas respostas foram enviadas.");
    }
  }, 1000);
}

function selecionarQuestoesPorTema(perguntas, distribuicao) {
  const selecionadas = [];
  for (const tema in distribuicao) {
    const quantidade = distribuicao[tema];
    const filtradas = perguntas.filter(p => p.tema === tema);

    if (filtradas.length === 0) {
      console.warn(`⚠️ Ignorado: nenhuma pergunta encontrada para o tema "${tema}".`);
      continue;
    }

    const embaralhadas = embaralhar([...filtradas]).slice(0, quantidade);
    selecionadas.push(...embaralhadas);
  }
  return embaralhar([...selecionadas]).slice(0, 30);
}

//TEMPORARIO: pega todas as perguntas sem limite
/*function selecionarQuestoesPorTema(perguntas, distribuicao) {
  const selecionadas = [];
  for (const tema in distribuicao) {
    const filtradas = perguntas.filter(p => p.tema === tema);
    selecionadas.push(...filtradas); // pega todas, sem limite
  }
  return embaralhar([...selecionadas]); // não corta em 30
}*/

function validarQuiz() {
  let acertos = 0;

  perguntasSelecionadas.forEach((pergunta, index) => {
    const selecionada = document.querySelector(`input[name="q${index}"]:checked`);
    pergunta.escolhida = selecionada ? parseInt(selecionada.value) : null;
    if (pergunta.escolhida === pergunta.correta) acertos++;
  });

  const total = perguntasSelecionadas.length;
  let pontuacaoFinal = (acertos / total) * 100;

  // Salvar no localStorage
  localStorage.setItem("pontuacaoFinal", pontuacaoFinal.toFixed(2));
  localStorage.setItem("passou", pontuacaoFinal >= 70);
  localStorage.setItem("perguntasSelecionadas", JSON.stringify(perguntasSelecionadas));

  // Mostrar feedback na tela
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `
    <div class="resposta-card ${pontuacaoFinal >= 70 ? 'correta' : 'errada'}">
      <h3>Resultado Final</h3>
      <p>Você acertou <strong>${acertos}</strong> de <strong>${total}</strong> questões.</p>
      <p>Percentual: <strong>${pontuacaoFinal.toFixed(2)}%</strong></p>
      <p>${pontuacaoFinal >= 70 ? "🎉 Parabéns, você passou!" : "❌ Infelizmente não atingiu 70%."}</p>
      <button onclick="window.location.href='respostas.html'">Ver respostas erradas</button>
      <button onclick="reiniciarQuiz()">🔁 Fazer novo teste</button>
    </div>
  `;
}

function reiniciarQuiz() {
  location.reload();
}