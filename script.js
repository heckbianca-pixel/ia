const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado:
      "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
    alternativas: [
      {
        texto: "Isso é assustador!",
        afirmacao: [
          "No início ficou com medo do que essa tecnologia pode fazer. ",
          "Achou assustador pensar na velocidade na qual a tecnologia está avançando.",
        ],
      },
      {
        texto: "Isso é maravilhoso!",
        afirmacao: [
          "Quis saber como usar IA no seu dia a dia.",
          "Foi atrás de vídeos, artigos e mais informaçõe sobre como utilizar essa tecnologia.",
        ],
      },
    ],
  },
];
    {
        enunciado:
      "Com a descoberta dessa tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre o tema. Ao final de uma aula, ela pede que você escreva um trabalho sobre o uso da tecnologia em sala de aula. Qual atitude você toma?",
    alternativas: [
      {
        texto:
          "Utilizar uma ferramenta de busca na internet que utiliza IA para encontrar informações relevantes para o trabalho e explicá-las em uma linguagem que facilite o entendimento.",
        afirmacao: [
          "Conseguiu utilizar a IA para buscar informações úteis.",
          "Percebeu que a IA pode ajudar a encontrar informações na internet e facilitar a compreensão do conteúdo.",
        ],
      },
      {
        texto:
          "Escrever o trabalho com base nas conversas que teve com colegas, em pesquisas na internet e nos próprios conhecimentos sobre o tema.",
        afirmacao: [
          "Utilizou seus próprios conhecimentos e outras fontes de informação para elaborar o trabalho.",
          "Percebeu que é possível pesquisar e aprender sobre um tema sem depender diretamente de ferramentas de IA.",
        ],
      },
    ],
  },
  {
    enunciado:
      "Após a elaboração do trabalho, a professora realizou um debate com a turma para entender como foram feitas a pesquisa e a escrita. Durante a conversa, também foi levantado um ponto muito importante: como a IA impacta o trabalho no futuro. Nesse debate, como você se posiciona?",
    alternativas: [
      {
        texto:
          "Preocupar-se com as pessoas que perderão seus empregos para as máquinas e defender a importância de proteger os trabalhadores.",
        afirmacao: [
          "Demonstrou preocupação com os impactos da IA sobre os empregos.",
          "Defendeu a importância de proteger os trabalhadores diante das mudanças tecnológicas.",
        ],
      },
      {
        texto:
          "Defender a ideia de que a IA pode criar novas oportunidades de emprego e aprimorar as habilidades humanas.",
        afirmacao: [
          "Reconheceu que a IA pode gerar novas oportunidades profissionais.",
          "Percebeu que a IA pode ajudar as pessoas a desenvolver novas habilidades e melhorar seu trabalho.",
        ],
      },
    ],
  },
  {
    enunciado:
      "Ao final da discussão, você precisa criar uma imagem no computador que represente o que pensa sobre a IA. E agora?",
    alternativas: [
      {
        texto:
          "Criar uma imagem utilizando uma plataforma de desenho, como o Paint.",
        afirmacao: [
          "Optou por criar uma imagem utilizando uma ferramenta de desenho tradicional.",
          "Preferiu expressar suas ideias por meio de uma criação própria, utilizando recursos digitais.",
        ],
      },
      {
        texto: "Criar uma imagem utilizando um gerador de imagens por IA.",
        afirmacao: [
          "Escolheu utilizar a IA para transformar suas ideias em uma imagem.",
          "Explorou como as ferramentas de IA podem auxiliar na criação de conteúdos visuais.",
        ],
      },
    ],
  },
  {
    enunciado:
      "Você tem um trabalho em grupo de biologia para entregar na semana seguinte. O andamento está um pouco atrasado, e uma pessoa do grupo decidiu fazer o trabalho com a ajuda de uma IA. O problema é que o texto ficou exatamente igual ao gerado pelo chat. O que você faz?",
    alternativas: [
      {
        texto:
          "O chat pode ser uma tecnologia muito avançada, mas é preciso ter atenção, pois toda máquina pode cometer erros. Por isso, revisar o trabalho e contribuir com perspectivas pessoais é essencial.",
        afirmacao: [
          "Reconheceu a importância de revisar as respostas geradas pela IA.",
          "Entendeu que o uso responsável da IA envolve pensamento crítico, verificação das informações e contribuição pessoal.",
        ],
      },
      {
        texto:
          "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não considera um problema utilizar o texto inteiro.",
        afirmacao: [
          "Considerou que elaborar comandos para a IA já é uma forma de contribuir com o trabalho.",
          "Ainda precisa refletir sobre a importância de verificar as informações e produzir um trabalho com contribuições próprias.",
        ],
      },
    ],
  },
;

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

function aleatorio (Lista){
    const posicao = Math.random()* Lista.length 
}
mostraPergunta();
