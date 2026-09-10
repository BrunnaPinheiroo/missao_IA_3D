const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ao voltar para casa da escola, você encontra um filhote de cachorro abandonado na rua, assustado e na chuva. Qual o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Preciso encontrar uma forma de resgatá-lo e mantê-lo em segurança!",
                afirmacao: "Você demonstrou empatia imediata ao notar um animal em situação de vulnerabilidade."
            },
            {
                texto: "Vou procurar por perto e ver se o dono dele não está procurando por ele.",
                afirmacao: "Você age com cautela para garantir que o animal não esteja apenas perdido da sua família."
            }
        ]
    },
    {
        enunciado: "Sua escola decide criar um projeto comunitário sobre causa animal. O professor pede para a turma escolher a primeira ação. Qual opção você apoia?",
        alternativas: [
            {
                texto: "Organizar uma campanha de arrecadação de ração e medicamentos para ONGs locais.",
                afirmacao: "Apoiou ações diretas de suprimento para abrigos que cuidam de muitos animais diariamente."
            },
            {
                texto: "Criar uma feira de conscientização sobre adoção responsável e castração.",
                afirmacao: "Apostou na educação da comunidade como principal meio de combater o abandono."
            }
        ]
    },
    {
        enunciado: "Durante o projeto, surge um debate na sala sobre a melhor maneira de combater o abandono de animais nas ruas. Qual o seu posicionamento?",
        alternativas: [
            {
                texto: "Defender políticas públicas severas de punição a maus-tratos e incentivo à castração gratuita.",
                afirmacao: "Defendeu leis mais rígidas e controle populacional para evitar a superpopulação de animais."
            },
            {
                texto: "Incentivar programas voluntários de apoio a lares temporários e feiras de adoção.",
                afirmacao: "Acredita na força do voluntariado e do acolhimento temporário como solução comunitária."
            }
        ]
    },
    {
        enunciado: "Para divulgar a campanha do abrigo local, você precisa criar um material visual de divulgação. Como prefere fazer?",
        alternativas: [
            {
                texto: "Produzir cartazes manuais e fotos reais dos animais do abrigo para gerar conexão.",
                afirmacao: "Preferiu dar visibilidade real às histórias e rostos dos animais que buscam um lar."
            },
            {
                texto: "Criar artes digitais explicativas com dicas de como a comunidade pode ajudar.",
                afirmacao: "Usou a tecnologia e a informação clara para engajar o público nas redes sociais."
            }
        ]
    },
    {
        enunciado: "Um amigo quer comprar um filhote de raça em um canil, mas você sabe que existem diversos animais precisando de um lar nos abrigos da cidade. O que você faz?",
        alternativas: [
            {
                texto: "Convida ele para visitar um abrigo antes de decidir, mostrando a importância da adoção.",
                afirmacao: "Inspirou pessoas ao seu redor a considerarem a adoção responsável antes da compra."
            },
            {
                texto: "Orienta sobre como verificar se o canil é ético e respeita o bem-estar dos animais parentes.",
                afirmacao: "Promoveu a conscientização sobre o bem-estar animal em todas as formas de posse responsável."
            }
        ]
    },
];

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
    caixaPerguntas.textContent = "O seu impacto na causa animal:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();