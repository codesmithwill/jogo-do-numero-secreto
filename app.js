let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
console.log(numeroSecreto)

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirTextoInicial () {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirTextoInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Você acertou!');
        let plvrTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let msgTentativas = `Você descobriu o número secreto com ${tentativas} ${plvrTentativas}!`;
        exibirTextoNaTela('p', msgTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor.');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior.');
        }
        tentativas++
        limparCampo()
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ''
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo()
    tentativas = 1;
    exibirTextoInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
};

let listaGenerica = [];
let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python']
linguagensDeProgramacao.push('Java')
linguagensDeProgramacao.push('Ruby')
linguagensDeProgramacao.push('GoLang')

let listaNomes = ['Carlos', 'Rafael', 'Antonio']
console.log(listaNomes[0])
console.log(listaNomes[1])
console.log(listanomes[listanomes.length - 1])
/*
function calculoIMC (altura, peso) {
    let imc = peso / (alturaMetros * alturaMetros)
}

function calculoFatorial (numero) {
    if (numero === 0 || numero === 1) {
        return 1
    };

    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }

    return fatorial;

// Exemplo de uso
let numero = 5;
let resultado = calculoFatorial(numero)
console.log(`O fatorial de ${numero} é ${resultado}`)
}

function calculoDolar(numero) {
    numero = 5;
    let dolar = 4.80;
    let conversao = numero * dolar;
    console.log(`O valor de $${numero} USD é R$${conversao}`)
}*/