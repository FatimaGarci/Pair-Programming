function splitOddEven(num){
    let odd = [];
    let even = [];

    for (let i = 0; i < num.length; i++){
        if (num[i] % 2 === 0){
            even.push(num[i]);
        }
        else {
            odd.push(num[i]);
        }
    }
    const returnObject = {
        odd, 
        even,
    };
    return returnObject;
}
console.log(splitOddEven([2, 4, 7, 11, 15, 16]))