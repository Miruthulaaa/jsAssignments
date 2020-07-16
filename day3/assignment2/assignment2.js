let os = prompt('Enter the OS name and version with space:');
let output = os.trim().split(/\s+/); // trim trailing and leading space and multiple space between string words
document.write(`The OS name is ${output[0]} and version is ${output[1]}`);
console.log(`The OS name is ${output[0]} and version is ${output[1]}`);
