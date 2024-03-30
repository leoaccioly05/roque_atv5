function ehPar(numero) {
    if (numero % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function calcularMedia(numeros) {
    var soma = 0;
    for(var i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    var media = soma / numeros.length;
    return media;
}

var numeros1 = [10, 20, 30, 40, 50];
var media1 = calcularMedia(numeros1);
console.log("A média do primeiro conjunto de números é " + media1);

var numeros2 = [2, 4, 6, 8, 10];
var media2 = calcularMedia(numeros2);
console.log("A média do segundo conjunto de números é " + media2);

console.log("O número 10 é par? " + ehPar(10));
console.log("O número 15 é par? " + ehPar(15));
