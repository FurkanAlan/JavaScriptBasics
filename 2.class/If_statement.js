console.log("====================if statements==========================")
console.log("if statement allows us to execute block of code if a specified conditin is true, inside if statemtn must be boolean ")


var cond = false
if (cond) {
    console.log("condition is true")
} else {
    console.log("cond variable is false")
}

console.log("=================if-else if-else chain=============================")

var personDesc = {
    name: "Ahmed",
    age: 15
}
if (personDesc.age >= 18) {
    console.log(personDesc.name + " is greater or bigger than 18 yo")
} else if (personDesc.age === 17) {
    console.log(personDesc.name + " is eqaul or smaller than 17 yo")
} else {
    console.log(personDesc.name + " is smaller than 17 yo")
}

console.log("=================ternary metod if-else=============================")

var X = personDesc.age >= 18 ? console.log(personDesc.name + " is greater or bigger than 18 yo")
    : console.log(personDesc.name + " is smaller than 17 yo")


console.log("==============================================")
