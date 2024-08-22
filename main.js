const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-Resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Com muitos problemas envolvendo racismo, o convívio é afetado dividindo a humanidade em grupos separados por cor da pele",
        alternativas: [
            {
                texto: "Buscar maneiras de levar o assunto com uma solução a público",
                afirmacao: "Com tentativas de mostrar a realidade, projetos foram iniciados à favor da causa"
            },
            {
                texto: "aceitar que é algo grande demais para que sejá feito algo",
                afirmacao: "Mesmo sendo um grande problema tentar impedir não levaria a nada"
            },
        ]
    },
    {
        enunciado: "A causa criou grandes revoltas em todo o mundo, por causa de abusos e restrição de direitos",
        alternativas: [
            {
                texto: "criar um evento onde todos os grandes lideres são questionados e cobrados",
                afirmacao: "ir contra os lideres causou muitos problemas por fauta de influencia"
            },
            {
                texto: "evitar ao maximo qualquer tipo de interação sobre ou envolvimento",
                afirmacao: "com grandes problemas a decisão de evitar estar no meio te isolou de grupos contra o poder politico",
            },
        ]
    },
    {
        enunciado: "Com a brecha criada por pessoas comuns, muitos lideres tentam acata-la para que consigam tomar o poder",
        alternativas: [
            {
                texto: "intrega-se em grupos que deixaram de se importar com conseguencias dos atos falios",
                afirmacao: "apenas por noticias é possivel entender os acontecimentos, que levaram a destruição de uma raça"
            },
            {
                texto: "unir-se a grupos que estão lutando para sobreviver",
                afirmacao: "as conseguencias são fortes e afetam todos, a falta de segurança inquieta os cidadões negros e brancos que se abstiveram ao governo"
            },
        ]
    },
    {
        enunciado: "A guerra toma força, uma medida imediata é tomada para a erradicação daqueles que se opuseram",
        alternativas: [
            {
                texto: "lutar uma luta que inicialmente não te pertencia, sacrificando sua vida para a liberdade de outros",
                afirmacao: "mesmo sem esperançase com toda a confusão você lutou, até não conseguir mais"
            },
            {
                texto: "render-se ao lado mais forte, com maiores chances de segurança evitando ser caçado como um animal",
                afirmacao: "fugindo a procura de perdão, encontrou a luz da salvação, sendo recrutado como contribuente para uma humanidade superior"
            },
        ]
    },
    {
        enunciado: "Gandes cidades são dizimadas pessoas morrem para todo lado, a guerra vence seu ápice e os negros cedem à ela",
        alternativas: [
            {
                texto: "mesmo tendo lutado, os esforços foram em vão, deixando esse mundo como um difunto",
                afirmacao: "por mais que lembrado por sua valentia nas comunidades que protegeu, sua memoria se apagou junto a eles"
            },
            {
                texto: "com medo você evita fazer parte disso, apenas espera o fim para então seguir a correnteza",
                afirmacao: "a guerra acabou com muito, mas você prevaleceu, o mundo pode ser reconstruido novamente à custo de milhares de vidas"
            },
        ]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostrarPerguntas(){
    if(atual >= perguntas.length){
        mostraResultado();
        return
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = ""
    mostrarAlternativas();
}

function mostrarAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostrarPerguntas();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Distopia de um novo mundo"
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostrarPerguntas();