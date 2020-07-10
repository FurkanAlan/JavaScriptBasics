console.log("===================================== with const keyword reassignment not possible ======================================================")
console.log("const behave like final in java")
// const name = "Ali"
// name = {}
// name = 1

console.log("if reassignment is necessary use let")
console.log("burada yapilan obje olusturuluyor ancak bos bir obje daha sonra buna deger ataniyor")

const isim = {}
isim["name"] = "Mustafa"

console.log(isim) //buradaki prensib key value seklinde calisiyor
console.log(isim.name) //Mustafa value of isim

console.log("Array ornegi")
console.log("Array ve obje arasindaki fark => Arrayler [] ile gosterilir ancak Obje ise {} ile gosterilir")
const array = []
array.push("Hakan from array")
console.log(array.length)
console.log(array[0])

console.log("===================================================================")

let x = {}

console.log("const final keyword so reassignment impossible but filling is possible\n" +
    "let reassignment and filling possible")
