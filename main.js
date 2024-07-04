const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternatias');
const caixaResultado = document.querySelector('.caixa-Resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Enunciado 01",
        Alternativas: [
            "alternativa 01",
            "alternativa 02"
        ]
    },
    {
        enunciado: "Enunciado 02",
        Alternativas: [
            "alternativa 01",
            "alternativa 02"
        ]
    },
    {
        enunciado: "Enunciado 03",
        Alternativas: [
            "alternativa 01",
            "alternativa 02"
        ]
    },
    {
        enunciado: "Enunciado 04",
        Alternativas: [
            "alternativa 01",
            "alternativa 02"
        ]
    },
    {
        enunciado: "Enunciado 05",
        Alternativas: [
            "alternativa 01",
            "alternativa 02"
        ]
    },
]

let atual = 0;
let perguntaAtual;

function mostrarPerguntas() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado
}

function mostrarAlternativas() {
    for (const alternatia of perguntaAtual.alternatias)
         constbotaoAlternativas = document.createElement("button")
         botaoAlternativas.textContent = alternatia;
         caixaAlternativas.appendChild(botaoAlternativas);
}

mostrarPerguntas();