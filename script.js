// ===============================
// CONFIGURAÇÃO DE CURSOS E IDIOMAS
// ===============================
const idiomasPorCurso = {
  especialistaOS: ["EN", "PTBR"],
  agenteIA: ["EN"]
};

let cursoEscolhido = "";
let idiomaEscolhido = "";
let perguntasSelecionadas = [];

// ===============================
// FLUXO DE INICIALIZAÇÃO
// ===============================

// Popula idiomas ao escolher curso
document.getElementById("curso").addEventListener("change", e => {
  cursoEscolhido = e.target.value;
  const idiomaSelect = document.getElementById("idioma");
  idiomaSelect.innerHTML = "";

  if (cursoEscolhido && idiomasPorCurso[cursoEscolhido]) {
    // adiciona a opção padrão
    const optDefault = document.createElement("option");
    optDefault.value = "";
    optDefault.textContent = "-- selecione --";
    idiomaSelect.appendChild(optDefault);

    idiomasPorCurso[cursoEscolhido].forEach(idioma => {
      const opt = document.createElement("option");
      opt.value = idioma;
      opt.textContent = idioma;
      idiomaSelect.appendChild(opt);
    });
    idiomaSelect.disabled = false;
  } else {
    idiomaSelect.disabled = true;
  }
});

document.getElementById("idioma").addEventListener("change", () => {
  const idioma = document.getElementById("idioma").value;
  document.getElementById("btnIniciar").disabled = idioma === "";
});

document.getElementById("btnIniciar").addEventListener("click", iniciarQuiz);

// ===============================
// INICIAR QUIZ OFICIAL
// ===============================
function iniciarQuiz() {
  cursoEscolhido = document.getElementById("curso").value;
  idiomaEscolhido = document.getElementById("idioma").value;

  const msg = mensagens[idiomaEscolhido];

  document.getElementById("tituloQuiz").textContent = msg.tituloQuiz;
  document.getElementById("btnFinalizar").textContent = msg.finalizar;

  document.querySelector(".container").style.display = "block";
  document.getElementById("cronometro").style.display = "block";
  document.getElementById("barraProgresso").style.display = "block";
  document.getElementById("config").style.display = "none";

  // caminho dinâmico: cursos/<curso>/perguntas_<curso>_<idioma>.js
  const script = document.createElement("script");
  script.src = `cursos/${cursoEscolhido}/perguntas_${cursoEscolhido}_${idiomaEscolhido}.js`;
  script.onload = () => {
    if (!Array.isArray(perguntas) || perguntas.length === 0) {
      alert(msg.erroArray);
      return;
    }
    perguntasSelecionadas = selecionarQuestoesPorTema(perguntas, distribuicaoOficial);
    renderizarQuiz();
    iniciarCronometro(90 * 60, document.getElementById("tempo"));

    // salva curso e idioma escolhidos
    localStorage.setItem("curso", cursoEscolhido);
    localStorage.setItem("idioma", idiomaEscolhido);
  };
  script.onerror = () => {
    alert(`Erro ao carregar perguntas para ${cursoEscolhido} em ${idiomaEscolhido}`);
  };
  document.body.appendChild(script);
}

// ===============================
// FUNÇÕES DE APOIO
// ===============================
function renderizarQuiz() {
  const form = document.getElementById("quizForm");
  form.innerHTML = "";

  if (!perguntasSelecionadas || perguntasSelecionadas.length === 0) {
    alert("⚠️ Nenhuma pergunta foi selecionada.");
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

function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

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

function selecionarQuestoesPorTema(perguntas, distribuicao) {
  const selecionadas = [];
  for (const tema in distribuicao) {
    const quantidade = distribuicao[tema];
    const filtradas = perguntas.filter(p => p.tema === tema);
    if (filtradas.length === 0) continue;
    const embaralhadas = embaralhar([...filtradas]).slice(0, quantidade);
    selecionadas.push(...embaralhadas);
  }
  return embaralhar([...selecionadas]).slice(0, 30);
}

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
}

function reiniciarQuiz() {
  location.reload();
}
