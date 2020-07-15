let input = prompt('Enter your name:');
let str;
console.log(input);
if (input){
    str = `user entered ${input}`;
    document.getElementById('name').value = input;
}
else
    str = `user entered nothing (returned null)`
document.getElementById('inputData').innerHTML = str;
