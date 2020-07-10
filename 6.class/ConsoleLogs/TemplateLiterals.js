const name = "Hakan"
const country = "New Zealand"
const age = 35

console.log("There are several wy to use consolo log or printing")
console.log("the first way")
console.log("name: " + name + " country: " +country + " age: " + age)
console.log("===============================================================")

console.log("the second way")

console.log(`Adim ${name} ${country} dan geldim yasim ${age}`)
console.log("ikinci metodda ${} icersinde yer lan parametrelere islem yapilabilir, burada oldugu ${name.toUpperCase()} gibi class, obje, variable, etc olabilir ")

console.log(`Adim ${name.toUpperCase()} ${country.toLowerCase().replace("New Zealand","America")} dan geldim yasim ${age.toString().length}`)
console.log("===============================================================")
