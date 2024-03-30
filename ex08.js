function ehPalindromo(palavra) {
    let palavraInvertida = palavra.split('').reverse().join('');
    return palavra === palavraInvertida;
}

console.log(ehPalindromo("arara"));
console.log(ehPalindromo("javascript"));
console.log(ehPalindromo("reviver"));