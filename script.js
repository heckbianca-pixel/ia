const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Assim que você sai da escola, depara-se com uma nova tecnologia de inteligência artificial capaz de criar qualquer imagem instantaneamente. Qual é o seu primeiro pensamento?",
    alternativas: [
      {
        texto: "Isso é assustador!",
        afirmacao: "No início, você ficou receoso com o impacto da IA na sociedade."
      },
      {
        texto: "Isso é maravilhoso!",
        afirmacao: "Você logo percebeu o potencial criativo da ferramenta."
      }
    ]
  },
  {
    enunciado: "Um professor pede para a turma criar um trabalho sobre o futuro das profissões usando IA. O que você faz?",
    alternativas: [
      {
        texto: "Usa a IA para gerar ideias e estruturar o texto rapidamente.",
        afirmacao: "Conseguiu otimizar seus estudos usando a tecnologia como aliada."
      },
      {
        texto: "Escreve o trabalho totalmente sozinho, sem ajuda da IA.",
        afirmacao: "Preferiu confiar apenas nas suas próprias habilidades tradicionais."
      }
    ]
  }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  const afirmacao = opcaoSelecionada.afirmacao;
  historiaFinal += afirmacao + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = "Em 2049...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}

mostraPergunta();