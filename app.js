alert('Boas Vindas ao Jogo do Número Secreto');

//Escolhe o número secreto de forma Pseudo Aleatória entre 1 e 100, sendo que na função Math.random () ele escolhe um número maior que 0 e menor que 1, então multiplicamos ele por 100 e adicionamos mais 1 pois o número 100 não estaria incluído nos números gerados.
let numeroMaximo = 100
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); 

console.log(numeroSecreto);
let chute;
let tentativas = 1;

// Enquanto chute NÃO FOR IGUAL ao número secreto.
while (chute != numeroSecreto) {

    chute = prompt(`Digite um número entre 1 e ${numeroMaximo}`);

    // Se o chute FOR IGUAL ao número secreto.
    if (chute == numeroSecreto) {
        break;
    } 
    // Se não...
    else {
        // Se o chute for MENOR que o número secreto.
        if (chute < numeroSecreto) {
            alert(`O númemro secreto é maior que ${chute}`);
        } 
        // Se não...
        else {
            alert(`O número secreto é menor que ${chute}`);
        }
        // tentativas = tentativas +1.
        tentativas ++;
    }
}

//Operador ternário diz que: palavraTentativa vai receber uma pergunta... tentativas é maior que 1? se verdadeiro: palavraTentativa = "tentativas" | se falso: palavraTentativa = "tentativa"
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Acertou o número secreto ${numeroSecreto} com: ${tentativas} ${palavraTentativa}, parabéns!`);





//EXERCICIOS E PRÁTICAS DE JAVASCRIPT
// let nome = 'Leonardo';

// console.log(`Olá, Boas vindas ${nome}`);
// alert(`Olá, Boas vindas ${nome}`);

// let linguagem = prompt('Qual linguagem de programação você mais usa?');
// console.log(linguagem);

// let valor1 = 2;
// let valor2 = 8;
// let resultado = valor1 + valor2;
// let resultado2 = valor1 - valor2;
// console.log(`A soma de ${valor1} + ${valor2} resulta em: ${resultado}`);

// console.log(`A diferença entre ${valor1} e ${valor2} é: ${resultado2}`);

// let idade = prompt('Digite sua idade: ');

// let faixaEtaria = idade >= 18 ? 'Você é maior de idade' : 'Você é menor de idade';
// console.log(faixaEtaria);

// let numero = prompt('Digite um número: ');

// if (numero < 0) {
//     console.log('O número é negativo');
// }else if (numero == 0) {
//     console.log('O número é ZERO');
// }else {
//     console.log('O número é positivo');
// }

// let contador = 0;

// while (contador <= 10) {
//     console.log(contador);
//     contador ++;
// }

// let nota = prompt('Digite a nota que você tirou');

// let resultadoNota = nota >= 7 ? 'Aprovado' : 'Não Aprovado';
// console.log(resultadoNota);

// console.log(Math.random());
// console.log(parseInt(Math.random() * 10 + 1));
// console.log(parseInt(Math.random() * 1000 + 1));
