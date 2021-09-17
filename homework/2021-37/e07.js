function repeat(a = "", i = 1) {
    let b = "";
    for (i; i > 0; i--) {
        b += a;
    }
    return b;
}
console.log( repeat("moi") ) // outputs "moi"""
console.log( repeat("moi", 4) ) // outputs "moimoimoimoi"
