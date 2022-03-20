'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.trim().split(' ').map(string => {
      return string.trim();
  });

main();
});

function readline() {
  return inputString[currentLine++];
}
// Make a Snippet for the code above this and then write your logic in main();


function main() {
  const x = readline();
  
  countDigit(x);

}
function countDigit(x) {
    let count = 0 
    let num = parseInt(x)
    while(num > 0){
        num = parseInt(num/10)
        count++
    }

    console.log(count)
}
