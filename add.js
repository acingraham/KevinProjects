/*
   process.argv contains all the parts of the command we ran
   process.argv[0] will be 'node' and process.argv[1] will be 'add.js'
   We only want the numbers that come after so we use slice to get just them
*/
const numbers = process.argv.slice(2);

let sum = 0;
for (let i = 0; i < numbers.length; i++) {

    // We need parseInt because commandline arguments are strings by default
    sum += parseInt(numbers[i]);
}

console.log(sum);
