const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ao voltar para casa da escola, você encontra um filhote de cachorro abandonado na rua, assustado e na chuva.",
        alternativas: [
            {
                texto: "Resgatar o cachorro e mantê-lo em segurança.",
                afirmacao: "Preciso encontrar uma forma de resgatá-lo e mantê-lo em segurança."
            },
            {
                texto: "Procurar o dono do cachorro.",
                afirmacao: "Vou procurar por perto e ver se o dono dele não está procurando por ele."
            }
        ]
    },

    {
        enunciado: "Sua escola decide criar um projeto comunitário sobre causa animal. O professor pede para a turma escolher a primeira ação.",
        alternativas: [
            {
                texto: "Arrecadar ração e medicamentos.",
                afirmacao: "Organizar uma campanha de arrecadação de ração e medicamentos para ONGs locais."
            },
            {
                texto: "Criar uma feira de conscientização.",
                afirmacao: "Criar uma feira de conscientização sobre adoção responsável e castração."
            }
        ]
    },

    {
        enunciado: "Durante o projeto, surge um debate na sala sobre a melhor maneira de combater o abandono de animais nas ruas.",
        alternativas: [
            {
                texto: "Defender políticas públicas.",
                afirmacao: "Defender políticas públicas severas de punição a maus-tratos e incentivo à castração gratuita."
            },
            {
                texto: "Apoiar lares temporários e feiras de adoção.",
                afirmacao: "Incentivar programas voluntários de apoio a lares temporários e feiras de adoção."
            }
        ]
    },

    {
        enunciado: "Para divulgar a campanha do abrigo local, você precisa criar um material visual de divulgação.",
        alternativas: [
            {
                texto: "Produzir cartazes e usar fotos reais.",
                afirmacao: "Produzir cartazes manuais e fotos reais dos animais do abrigo para gerar conexão."
            },
            {
                texto: "Criar artes digitais.",
                afirmacao: "Criar artes digitais explicativas com dicas de como a comunidade pode ajudar."
            }
        ]
    },

    {
        enunciado: "Um amigo quer comprar um filhote de raça em um canil, mas você sabe que existem diversos animais precisando de um lar nos abrigos da cidade.",
        alternativas: [
            {
                texto: "Convidá-lo para visitar um abrigo.",
                afirmacao: "Convidá-lo para visitar um abrigo antes de decidir, mostrando a importância da adoção."
            },
            {
                texto: "Orientá-lo sobre canis responsáveis.",
                afirmacao: "Orientá-lo sobre como verificar se o canil é ético e respeita o bem-estar dos animais."
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
    caixaAlternativas.innerHTML = "";

    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");

        botaoAlternativas.textContent = alternativa.texto;

        botaoAlternativas.addEventListener("click", () => {
            respostaSelecionada(alternativa);
        });

        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " ";

    atual++;

    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "O seu impacto na causa animal:";

    textoResultado.textContent = historiaFinal;

    caixaAlternativas.innerHTML = "";
}

mostraPergunta();