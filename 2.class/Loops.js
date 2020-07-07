console.log("====================Loops==========================")

var ppNames = [
    {name: "Mehmet", age: 30},
    {name: "Yasin", age: 33}
]

console.log("====================Standart for==========================")

for (var i = 0; i < ppNames.length; i++) {
    console.log(ppNames[i])
    console.log(ppNames[i].name)
    console.log(ppNames[i].age)

}

console.log("====================while==========================")


var numb = 0
while (numb < 4) {
    // console.log(number)
    numb++
    console.log(numb)
}

console.log("====================do-while==========================")

var num = 0
do {
    num++
    console.log(num)
} while (num < 4)

console.log("difference between do-while and while is do-while will work regardless of situation")


console.log("Example")
console.log("var numX = 0 " +
    "do {" +
    "numX++" +
    "console.log(numX)" +
    "} while(false) " + "Bu ifade bir defa donecek ve 1 yazdirir" +
    "" +
    "\twhile(false) " +
    "{numX++ " +
    "console.log(numX)" + " lakin bu ifade ise hicbir sey yazdirmaz" +
    "}")
console.log("==============================================")
