/*function anagram(s1, s2){
    s1 = s1.replace(/[^w]/g, '').toLowerCase()
    s2 = s2.replace(/[^w]/g, '').toLowerCase()

    if(sortString(s1) === sortString(s2)){
        return true;
    }
    else if(sortString(s1) !== sortString(s2)){
        return false;
    }
}
function sortString(string){
    return string.split('').sort().join('')
}

console.log(anagram('So dark the con of man', 'Madonna of the rocks'))
console.log(anagram('Things are good', 'dogs eat ants'))

let c = "So dark the con of man";
let d = "Madonna of the Rocks";

var a = c.toLowerCase();
var b = d.toLowerCase();

function compare (a, b) {
    var y = a.replace(/\s/g, "");
    var z = b.replace(/\s/g, "");

    var sortY = y.split('').sort().join("");
    var sortZ = z.split('').sort().join("");

    if( sortY === sortZ) {
        console.log(true)
    } else {
        console.log(false)
    }
}

compare(a,b)

let f = "Things are good";
let g = "Dogs eat ants";

var a = c.toLowerCase();
var b = d.toLowerCase();

function compare (a, b) {
    var y = a.replace(/\s/g, "");
    var z = b.replace(/\s/g, "");

    var sortY = y.split('').sort().join("");
    var sortZ = z.split('').sort().join("");

    if( sortY === sortZ) {
        console.log(true)
    } else {
        console.log(true)
    }
}

compare(a,b)*/

const isAnagram = (str1, str2) => {
    const normalize = str =>
      str
        .toLowerCase()
        .replace(/[^a-z0-9]/gi, '')
        .split('')
        .sort()
        .join('');
    return normalize(str1) === normalize(str2);
  };

  console.log(isAnagram('So dark the con of man', ' Madonna of the Rocks')); 
  console.log(isAnagram('Things are good', 'dogs eat ants'));