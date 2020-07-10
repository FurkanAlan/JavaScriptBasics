const arrayOne = ["Ali", "Mehmet", "Alp"]
const arrayTwo = ["Fatih", "Ayse", "Ayce"]
console.log("Tek array concat yapildiginda spread operatoru ile")
const concattedArray = [...arrayOne]

concattedArray.forEach(function (name) {
    // console.log() // eger bu sekilde bos birakilirsa [empty string], [empty string], [empty string] yazdiriyor
    console.log(name)
}) //callback cok onemli, buradaki name bizim verdiigmiz degisken

console.log("===============================================================")
console.log("iki array concat yapildiginda spread operatoru ile")

const concattedArraysTwoOfThem = [...arrayOne, ...arrayTwo]

concattedArraysTwoOfThem.forEach(function (isimListesi) {
    console.log(isimListesi)
})

console.log("===============================================================")
console.log("alinan string degerine spread operatoru uygulanirsa ismi string i character listesine donusturur")

const name = "Mustafa"
const stringToArray = [...name]
// stringToArray.forEach(function (strToCharList){
//     console.log(strToCharList)
//     console.log(strToCharList.length)
// })
stringToArray.forEach(function (str) {
    console.log(str)
})

console.log("============================ function example for spread operator ===================================")
const numberAdditor = function (number1, number2, number3) {
    return number1 + number2 + number3
}

const numbs = [1, 3, 67]

console.log("============================ Without Spread Operator ===================================")

console.log(numberAdditor(1, 3, 5))
//arraydaki elemanlari toplamak icin
const addtionOfNumbers = numberAdditor(numbs[0], numbs[1], numbs[2])
console.log(addtionOfNumbers)

console.log("============================ With Spread Operator ===================================")
const toplama = numberAdditor(...numbs)  //numberAdditor bizim fonksiyonumuzun adi ... => spread operator numbs bizim bu fonksiyona iletmek istedimiz degerler
console.log(toplama)

console.log("numberAdditor bizim fonksiyonumuzun adi| ... ===>  bu noktalarin anlami, spread operator| numbs bizim bu fonksiyona iletmek istedimiz degerler")