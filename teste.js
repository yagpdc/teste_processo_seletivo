/* 1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{

K = K + 1;

SOMA = SOMA + K;

}

imprimir(SOMA);



Ao final do processamento, qual será o valor da variável SOMA? */

let indice = 13;    
let soma = 0;
let k = 0;

while (k < indice) {
    k = k + 1;
    soma = soma + k;
    }

console.log(soma);

// Escreva uma função informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

function verificaFibonacci(num) {
    let fibonacci = [0, 1];
    
    while (fibonacci[fibonacci.length - 1] < num) {
      let ultimo = fibonacci[fibonacci.length - 1];
      let penultimo = fibonacci[fibonacci.length - 2];
      fibonacci.push(ultimo + penultimo);
    }
    
    if (fibonacci.includes(num)) {
      return `${num} pertence à sequência de Fibonacci: ${fibonacci.join(', ')}.`;
    } else {
      return `${num} não pertence à sequência de Fibonacci: ${fibonacci.join(', ')}.`;
    }
  }
  
  
    console.log(verificaFibonacci(610)); // 610 pertence à sequência de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610.
    console.log(verificaFibonacci(611)); // 611 não pertence à sequência de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610.
  

/* 3) Descubra a lógica e complete o próximo elemento:



a) 1, 3, 5, 7, ___

b) 2, 4, 8, 16, 32, 64, ____

c) 0, 1, 4, 9, 16, 25, 36, ____

d) 4, 16, 36, 64, ____

e) 1, 1, 2, 3, 5, 8, ____

f) 2,10, 12, 16, 17, 18, 19, ____




a) A lógica é somar 2 ao número anterior da sequência. A próxima resposta é 9, porque 7 + 2 = 9.

b) A lógica é multiplicar por 2 o número anterior da sequência. A próxima resposta é 128, porque 64 x 2 = 128.

c) A lógica é elevar o número anterior ao quadrado e somar 1. A próxima resposta é 49, porque 6² + 1 = 37, 7² + 1 = 50.

d) A lógica é adicionar 12 ao número anterior da sequência. A próxima resposta é 100, porque 64 + 12 = 76, 76 + 12 = 88, 88 + 12 = 100.

e) A lógica é somar os dois números anteriores da sequência. A próxima resposta é 13, porque 5 + 8 = 13.

f) A lógica é: 2 é somado a cada número até o número 16, e depois 1 é somado a cada número restante. A próxima resposta é 20, porque 18 + 1 = 19, 19 + 1 = 20.







 viagem de carro: 100 km / 110 km/h = 0,91 horas
 viagem de caminhão: 100 km / 80 km/h + 2 x 5 min = 1,375 horas

Então, o exercício pede para sabermos qual veículo estará mais próximo da cidade de Ribeirão Preto quando os dois se encontrarem na rodovia. Para resolver isso, precisamos pensar na distância que cada um percorreu até o ponto de encontro.

O carro saiu de Ribeirão Preto e foi em direção a Franca, enquanto o caminhão saiu de Franca em direção a Ribeirão Preto. Como os dois pontos ficam a uma distância de 100km, eles vão se encontrar exatamente no meio do caminho, que é quando cada um já terá percorrido 50km.

Aí vem o detalhe dos pedágios: o caminhão leva 5 minutos a mais para passar em cada um dos pedágios, enquanto o carro passa direto, pois tem a tag de pedágio. Isso significa que o caminhão vai demorar um pouco mais para chegar ao ponto de encontro do que o carro.

Assim, podemos concluir que o carro estará mais próximo da cidade de Ribeirão Preto quando os dois veículos se encontrarem na rodovia.


 5) Escreva um programa que inverta os caracteres de uma string */

 
 let nome = "Yago"  // Meu nome
 let inverterCaracters = (str) => {
   return str.split('').reverse().join('')
 }

 console.log(inverterCaracters(nome)) //ogaY