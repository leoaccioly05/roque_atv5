function fatorial(numero) {
    let resultado = 1;
    for(let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

console.log(fatorial(5));
console.log(fatorial(7));
console.log(fatorial(10));