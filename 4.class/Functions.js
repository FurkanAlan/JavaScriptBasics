console.log("=================== Functions ===========================")
console.log("it is javascript procedure, it simple a set of statemnt thata allows us to perform a tassk or calculate avalue")
console.log("functions may call (return) or may not return a value (void) ")
var addTwo = 3 + 4
console.log(addTwo)

function addTwoNumNoParameter() { //we spcify arguments inside the paranthesis of addTwoNum
    //start method boddy
    //define logic
    console.log(3 + 8)
    //end method, function boddy
}

addTwoNumNoParameter(); //our functions calling the method

console.log("=================== Parametrized Functions ===========================")


function addTwoNumParametrized(number1, number2) { //we spcify arguments inside the paranthesis of addTwoNum
    //start method boddy
    //define logic
    console.log(number1 + number2)
    //end method, function boddy
}

addTwoNumParametrized(2, 7); //our functions calling the method

// console.log("================================================")

console.log("=================== Parametrized Functions With Return ===========================")


function addTwoNumParametrizedReturn(number1, number2) { //we spcify arguments inside the paranthesis of addTwoNum
    //start method boddy
    //define logic
    var result = number1 + number2
    return result;
    //end method, function boddy
}

var calcResult = addTwoNumParametrizedReturn(7, 7); //our functions calling the method
console.log(calcResult)

console.log("======================== Functions Part 2 ========================")

var ppl = {name: "Ahmed", age: 30}
console.log(Object.keys(ppl))
console.log(Object.values(ppl))

console.log("Mustafa Ali".toLowerCase())
console.log("Mustafa Ali".bold())
console.log("Mustafa Ali".toUpperCase())
console.log("Mustafa Ali".endsWith("Ali"))

console.log("=================== let DEFAULT_VAL = 30 =============================")


let DEFAULT_VAL = 30

function addTwoNumbers(first, second = DEFAULT_VAL) {
    console.log('first parameter is :', first)
    console.log('second parameter is :', second)
    return first + second;
}

console.log("case 1 sum: " +addTwoNumbers(1))


console.log("case 2 sum: " + addTwoNumbers(3, undefined))


// Recursive Function => JS
// Example − Anonymous Recursive
console.log("================================ Recursive Function => JS Example − Anonymous Recursive  ==================================")

let Function = (function () {
    const msg = "Hello World";
    console.log(msg)
})();
// The function calls itself using a pair of parentheses (). The following output is displayed on successful execution of the above code.