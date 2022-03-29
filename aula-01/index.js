//  Paradigma da Programação Funcional

//  ==  Imutabilidade  ==

//  As variáreis não mudam de valor ou atributos

//  NÃO FAZER
let numero = 0;
const somarDezNoNumero = () => numero = numero + 10;
console.log(somarDezNoNumero());

//  FAZER
const numero1 = 0;
const somarDezNoNumero1 = () => numero1 + 10;
console.log(somarDezNoNumero1());


//  ==  Stateless  ==

//  As funções não armazenam valores, apenas retornam o que é pedido

const somar = (x, y) => x + y;



//  Exemplo de Recursividade
//  Fibonacci

//  Incorreto
const calcularFibonacci = (contador) => {
    let resultado = [0, 1];

    for (let i = 2; i < contador; i++) {
        const valorSomado = somar(resultado[i - 2], resultado[i - 1]);
        resultado.push(valorSomado);
    }
    return resultado;
}

//  Corrigindo, utilizando recursividade
const calcularFibonacciRecursao = (posicao) => {
    if (posicao < 1) return 0;
    else if (posicao <= 2) return 1;
    else return calcularFibonacciRecursao(posicao - 2) + calcularFibonacciRecursao(posicao - 1);
}

console.log(calcularFibonacciRecursao(9));

//  Agora refatorando o código incorreto
const obterSequenciaFibonacci = (contagem) => {
    return [...Array(contagem)].map((valor, index) => calcularFibonacciRecursao(index));
}

console.log(obterSequenciaFibonacci(10));


//  Exemplo 2 de Recursividade
//  Fatorial -> numero * numero - 1

const fatorial = (numero) => {
    if (numero == 0 || numero == 1) return 1;
    else return numero * fatorial(numero - 1);
}

/*  fatorial(4)
*   4 * fatorial(3)
*   3 * fatorial(2)
*   2 * fatorial(1)
*   1 -> entra no if e devolve o retorno de baixo para cima
*
*   1
*   2 * 1 = 2
*   3 * 2 = 6
*   6 * 4 = 24
*/

console.log(fatorial(4));


//  ==  Funções Puras  ==
//  não dependendem de fatores ou recursos externos à própria função
//  são funções confiáveis que retornam sempre o mesmo resultado se for passado o(s) mesmo(s) parâmetro(s)

// Impura
const somarComPi = (lado) => Math.PI * lado * lado;

//  Pura
const somarComPi1 = (pi, lado) => pi * lado * lado;


//  ==  Composição de Função  ==
//  Encadeamento de funções

[1, 2, 3, 4, 5]
    .filter(o => o != 2)
    .map(o => o + 1);


//  ==  Estado Compartilhado  ==

const PI = 3.14;
const somarPI = () => 3.14 * PI;

console.log(somarPI());


//  ==  Função de Primeira Classe  ==

/*  Devem ter as seguintes características
*
*   Serem atribuídas a variáveis
*   Podem ser passadas por parâmetro
*   Podem ser retornadas como resultado
*/

const primeiraComArrow = () => {}
const primeiraComFunction = function () { return primeiraComArrow }

primeiraComArrow();
primeiraComFunction();

//  Podem ser passadas por parâmetro
function obterNomeUsuario() { return "Matheus" }

function olaUsuario(nome) { console.log(`Olá, ${nome()}`) }

olaUsuario(obterNomeUsuario);

//  Podem ser retornadas como resultado
function obterMensagem() { return olaUsuario }

let ola = obterMensagem();
ola(obterNomeUsuario);


//  ==  Funções de Alta Ordem  ==

//  Podem receber outras funções como argumentos
//  Podem retornar funções
