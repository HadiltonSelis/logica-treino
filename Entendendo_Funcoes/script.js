//Soma de dois números:

function soma(a, b) {
    return a + b;
}

console.log(soma(2,7));

//Par ou ímpar:

function parOuImpar(n) {
    
    return n % 2 === 0 ? "par" : "Ímpar";

}

console.log(parOuImpar(11));

//Maior número do array

function maiorNumero(arr){
    return Math.max(...arr);
}

console.log(maiorNumero([23,55,43,77]));

//Média notas

function mediaAluno(nota1, nota2){
    var media = (nota1 + nota2) / 2;

    if(media >= 7){
        console.log("Aluno aprovado com a média: " + media)
    }else if(media < 7){
        console.log("Aluno reprovado com média : " + media)
    }
}