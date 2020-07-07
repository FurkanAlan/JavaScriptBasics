console.log("====================Objects==========================")

var person = {
    name: "Maria",
    age: 30,
    hasriverLicense: true
};

console.log(person);
console.log(JSON.stringify(person));
console.log(person.hasriverLicense)

console.log(Object.values(person))

var person2 = {
    name: "Debra",
    age: 32,
    hasriverLicense: true,
    adress: {
        firstLine: "Alice street",
        lastLine: "124 boluward",
        postalCode: "1234",
        country: "United States"
    }
};
console.log("==============================================")
console.log(person2)

console.log(Object.values(person2).length) //4

console.log(Object.values(person2.adress))

console.log(JSON.stringify(person2.adress));