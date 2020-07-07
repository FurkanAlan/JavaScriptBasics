console.log("===================== Type Coercion ==,  atomatik tip degisikligi ===========================")

console.log("burada type coercion hadisesi var ve bundan dolayi data tipleri degisiyor, console.log(1 == true) sonuc true oluyor")
console.log("halbuki bunlardan birsi number digeri ise boolean dir")
console.log(typeof 1 + " " + typeof false)
console.log(1 == true)

console.log(typeof "3" + " " + typeof false)
console.log("1" == true)

console.log("====================  1 int ancak bunu double quote icerisnde yazarsak string olucak lakin type coercion dan dolayi true sonucunu veriyor ============================")

console.log(typeof 1 + " " + typeof "4")
console.log(1 == "1")

console.log("==================== javadaki = karsilik geliyor ===  ============================")
console.log("==================== Without type coercion ============================")


console.log(typeof 1 + " " + typeof false)
console.log(1 === false)

console.log(typeof "3" + " " + typeof false)
console.log("1" === false)

console.log(typeof "3" + " " + typeof true)
console.log("1" === false)

console.log(typeof "3" + " " + typeof false)
console.log("1" === false)

console.log(typeof 1 + " " + typeof "4")
console.log(1 === "4")


console.log("================================================")
