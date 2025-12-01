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