console.log("================================ Spread Operator With Object ================================")

const address = {
    city: "NJ",
    country: "US",
    ZipCode: "05071"
}
const name = {
    firstName: "Jane",
    lastName: "Doe"
}

console.log("================== 1. method long way =====================")
const personInfos = {
    city: address.city,
    country: address.country,
    zipCode: address.ZipCode,
    firstName: name.firstName,
    lastName: name.lastName
}

console.log(personInfos)

console.log("================== 2. method short way with Spread Operator =====================")

const person = {...address, ...name}

console.log(person)

console.log(JSON.stringify(person,null, 5))
console.log("================== ** =====================")
