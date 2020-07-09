console.log("=========================================== Example for Let keyword ========================================")

for (var i = 0; i < 8; i++) {
    console.log(i)
}

console.log("================================ eger for loop icerisindeki tanimlanan deger var olsaydi ===================================================")

console.log("eger for loop icersinde let yerine var kullansaydik bu local variable olmak yerine global variable olurdu")
console.log("bize ReferenceError: i is not defined hatasini verir")

console.log("eger for loop icerinde var kullansaydik degiskeni global yani for loop disindada kullanilabilir ve loop a devam ettirip sonuca arti deger katardi hale getiriyor yalniz bu hatali olur cunku for loop icerisindeki ifade local variable olmali")
// console.log(i)

console.log("================================ eger for loop icerisindeki tanimlanan deger const olsaydi ===================================================")

for (const i = 0; i < 8; i++) {
    console.log(i)
}
console.log(i)


console.log("eger let yerine for loop icersinde const kullansaydik bize TypeError: Assignment to constant variable. hatasi veriyor ancak dikkat edilmesi gereken husus ilk degerini yazdiriyor")


console.log("================================ eger for loop icerisindeki tanimlanan deger let olsaydi ===================================================")

for (let i = 0; i < 8; i++) {
    console.log(i)
}
console.log(i)

console.log("===================================================================================")

