function ehPrimo(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(ehPrimo(2));
console.log(ehPrimo(4));
console.log(ehPrimo(17));