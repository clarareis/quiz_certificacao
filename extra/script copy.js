let perguntasSelecionadas = [];
let idiomaEscolhido = "PT";

// Atualiza textos da tela inicial ao mudar o rádio de idioma
function atualizarIdioma() {
  const langRadio = document.querySelector("input[name='lang']:checked");
  idiomaEscolhido = langRadio.value;

  const msg = mensagens[idiomaEscolhido];
  document.getElementById("tituloIdioma").textContent = msg.tituloIdioma;
  document.getElementById("btnIniciar").textContent = msg.iniciar;
}

// Inicia o quiz oficial
function iniciarQuiz() {
  const langRadio = document.querySelector("input[name='lang']:checked");
  idiomaEscolhido = langRadio.value;

  const msg = mensagens[idiomaEscolhido];

  // Atualiza textos do quiz
  document.getElementById("tituloQuiz").textContent = msg.tituloQuiz;
  document.getElementById("btnFinalizar").textContent = msg.finalizar;

  // Mostra quiz e cronômetro; esconde tela de idioma
  document.querySelector(".container").style.display = "block";
  document.getElementById("cronometro").style.display = "block";
  document.getElementById("barraProgresso").style.display = "block";
  document.getElementById("config").style.display = "none";

  // Carrega perguntas do idioma escolhido
  const script = document.createElement("script");
  script.src = `perguntas_${idiomaEscolhido}.js`;
  script.onload = () => {
    if (!Array.isArray(perguntas) || perguntas.length === 0) {
      alert(msg.erroArray);
      return;
    }
    perguntasSelecionadas = selecionarQuestoesPorTema(perguntas, distribuicaoOficial);
    renderizarQuiz();
    iniciarCronometro(90 * 60, document.getElementById("tempo")); // 90 min
  };
  script.onerror = () => {
    alert(`Erro ao carregar perguntas_${idiomaEscolhido}.js`);
  };
  document.body.appendChild(script);
}

// Inicia o quiz de estudo (novo botão)
function iniciarQuizEstudo(grupoEscolhido = "errei") {
  idiomaEscolhido = "PT"; // força português para estudo
  const msg = mensagens[idiomaEscolhido];

  document.getElementById("tituloQuiz").textContent = "Teste de Estudo";
  document.getElementById("btnFinalizar").textContent = msg.finalizar;

  document.querySelector(".container").style.display = "block";
  document.getElementById("cronometro").style.display = "none"; // sem cronômetro
  document.getElementById("barraProgresso").style.display = "none";
  document.getElementById("config").style.display = "none";

  const script = document.createElement("script");
  script.src = "perguntas_estudo_PT.js";
  script.onload = () => {
    if (!Array.isArray(perguntasestudo) ||  perguntasestudo.length === 0) {
      alert("⚠️ Nenhuma pergunta de estudo encontrada.");
      return;
    }
    perguntasSelecionadas = selecionarQuestoesPorGrupo(perguntasestudo, grupoEscolhido);
    renderizarQuiz();
  };
  script.onerror = () => {
    alert("Erro ao carregar perguntas_estudo_PT.js");
  };
  document.body.appendChild(script);
}

function verificarDuplicadas(lista) {
  const vistos = new Map();
  const duplicadas = [];

  lista.forEach((p, i) => {
    const chave = p.texto.trim().toLowerCase();
    if (vistos.has(chave)) {
      duplicadas.push({ indiceOriginal: vistos.get(chave), indiceDuplicado: i, texto: p.texto });
    } else {
      vistos.set(chave, i);
    }
  });

  if (duplicadas.length === 0) {
    console.log("✅ Nenhuma questão duplicada encontrada.");
  } else {
    console.log("⚠️ Questões duplicadas:");
    duplicadas.forEach(d => {
      console.log(`Original #${d.indiceOriginal} e Duplicada #${d.indiceDuplicado}: ${d.texto}`);
    });
  }
}

// Exemplo de uso:
verificarDuplicadas(perguntasestudo);

// Renderiza perguntas no formulário
function renderizarQuiz() {
  const form = document.getElementById("quizForm");
  form.innerHTML = "";

  if (!perguntasSelecionadas || perguntasSelecionadas.length === 0) {
    alert("⚠️ Nenhuma pergunta foi selecionada. Verifique se há perguntas com temas válidos.");
    return;
  }

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
}

// Utilitário: embaralhar array
function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Distribuição oficial por tema
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

// Cronômetro regressivo
function iniciarCronometro(duracao, display) {
  let tempo = duracao;
  const btnFinalizar = document.getElementById("btnFinalizar");

  const intervalo = setInterval(() => {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    display.textContent = `${minutos}:${segundos < 10 ? "0" : ""}${segundos}`;

    const progresso = document.getElementById("progresso");
    const porcentagem = (tempo / duracao) * 100;
    progresso.style.width = `${porcentagem}%`;

    if (tempo <= 5 * 60) {
      btnFinalizar.classList.add("piscar");
    }

    if (--tempo < 0) {
      clearInterval(intervalo);
      validarQuiz();
      btnFinalizar.disabled = true;
      btnFinalizar.classList.remove("piscar");
      alert(mensagens[idiomaEscolhido].tempoEsgotado);
    }
  }, 1000);
}

// Seleciona questões por tema conforme distribuição (limite 30)
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

// Seleciona questões por grupo (errei, aperfeiçoar, revisão)
function selecionarQuestoesPorGrupo(perguntas, grupoEscolhido) {
  const filtradas = perguntas.filter(p => p.grupo === grupoEscolhido);
  if (filtradas.length === 0) {
    console.warn(`⚠️ Nenhuma pergunta encontrada para o grupo "${grupoEscolhido}".`);
    return [];
  }
  return embaralhar([...filtradas]).slice(0, 10); // limita a 10 questões
}


// Valida respostas, salva resultado e mostra feedback
function validarQuiz() {
  let acertos = 0;

  perguntasSelecionadas.forEach((pergunta, index) => {
    const selecionada = document.querySelector(`input[name="q${index}"]:checked`);
    pergunta.escolhida = selecionada ? parseInt(selecionada.value) : null;
    if (pergunta.escolhida === pergunta.correta) acertos++;
  });

  const total = perguntasSelecionadas.length;
  const pontuacaoFinal = (acertos / total) * 100;

  localStorage.setItem("pontuacaoFinal", pontuacaoFinal.toFixed(2));
  localStorage.setItem("passou", pontuacaoFinal >= 70);
  localStorage.setItem("perguntasSelecionadas", JSON.stringify(perguntasSelecionadas));
  localStorage.setItem("idioma", idiomaEscolhido);

  const msg = mensagens[idiomaEscolhido];
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `
    <div class="resposta-card ${pontuacaoFinal >= 70 ? 'correta' : 'errada'}">
      <h3>${msg.resultadoTitulo}</h3>
      <p>${acertos}/${total} (${pontuacaoFinal.toFixed(2)}%)</p>
      <p>${pontuacaoFinal >= 70 ? msg.passou : msg.naoPassou}</p>
      <button type="button" onclick="reiniciarQuiz()">${msg.novoTeste}</button>
      <button type="button" onclick="window.location.href='respostas.html'">${msg.respostaerrada}</button>
    </div>
  `;
  document.getElementById("resultado").scrollIntoView({ behavior: "smooth" });
}

// Reinicia a página para novo teste
function reiniciarQuiz() {
  location.reload();
}