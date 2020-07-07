console.log("====================Arrays==========================")
var name = "Ahmet"
var names = ["Ahmet", "Ali", "James", "Jay"]

console.log(names)

console.log(name[1])
console.log(names[1])

console.log(names.length)

for (let i = 0; i < names.length; i++) {
    // console.log([i])
    // console.log(names[i])
}

for (const nameElement of names) {
    console.log(nameElement)
}

names.forEach(function (n, index) {
    console.log(index + " : " + n)
})
console.log("==============================================")
