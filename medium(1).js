// Create a Function Called “vowelChecker” that takes in a single argument (x) and logs weather or not the input is a vowel

function vowelChecker(x){
    if(x.match(/[^aeiou]/gi)){
       console.log('This is Not a vowel');
    } else {
       console.log('This is a vowel');
    }
 }

 console.log(vowelChecker('a'));
