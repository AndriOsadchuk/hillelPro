let expression = prompt("Enter some expression");
let idFunction = Number(prompt("Enter some number from 1 to 4"));

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomInt = getRandom(0, 10);
const smile = [":-)", ";-)", ":-(", ";-(", ":-|", ";-|", ":-/", ";-/", ":-0", ";-0", "D)"];

if (idFunction === 1) {
    let numberOperation = Number(prompt("Number chart Code operation"));
    console.log(`${expression.charCodeAt(numberOperation)}`); 
} else if (idFunction === 2) {
    let delOperation = Number(prompt("Enter number to delete symbol"));
    console.log(`${expression.replace(expression[delOperation], "")}`);
} else if (idFunction === 3) {
    let changeIndex = Number(prompt("change letter to smile, choose index number"));
    console.log(`${expression.replace((expression[changeIndex]), smile[randomInt])}`);
} else if (idFunction === 4) {
    console.log(expression.split("")); //не можу зрозуміти як порахувати без пробілів
} else {
    alert("Try again!");
}
