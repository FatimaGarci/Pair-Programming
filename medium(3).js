// Write a function that takes in two numbers and determines the largest positive integer that divides the two numbers without a remainder. 

function gcd_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
        return false;
    x = Math.abs(x);
    y = Math.abs(y);
    
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}

console.log(gcd_two_numbers(336,360));
console.log(gcd_two_numbers(78,126));
