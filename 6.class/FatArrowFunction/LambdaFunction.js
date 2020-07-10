console.log("================== ** ======================================= ** =====================")

console.log("================== ** ================= Spreader ognekleri ====================== ** =====================")


console.log("bu konu arraylerle ilgili oldugu icin sadece int degeri gonderilemiyor const agirlik = 14 bu olmuyor iterator non-callable hatasi veriyor")
const hello = function () {
    const es = "JavaScript & Java"
    return `Programming Languages ${es}`
}


const powers = [1, 3, 5, 7, 9].map(function (number, index) {
    return Math.pow(number, index)
})

const addNumbers = function (number1, number2, number3) {
    return number1 + number2 + number3
}

const numberForAdding = [1, 5, 6]

const KgrToGr = function (KgrInWeight) {
    return KgrInWeight * 1000
}

const agirlik = [14] //bu konu arraylerle ilgili oldugu icin sadece int degeri gonderilemiyor const agirlik = 14 bu olmuyor iterator non-callable hatasi veriyor


const deneme1 = console.log(...hello())
const deneme2 = console.log(...powers)

const toplama = addNumbers(...numberForAdding)
console.log(toplama)

const agrilikbulma = KgrToGr(...agirlik)
console.log(agrilikbulma)
console.log("================== ** ================= converting from normal function to Fat Arrow Function ====================== ** =====================")
//the process for converint from normal function to arraow functions
//1-) remove function after parenthesis place equal then greater sign 
//2-) if there is only one statements we can remove curly bracket and remove return statemnts
//3-) after parenthesis (x) if there is only single statements we can also remove the parenthesis

console.log("============================ example 1 ================================")
const proLanguage = () => {
    const es = "JavaScript & Python"
    return `Programming Languages ${es}`
}
console.log(proLanguage)
console.log(proLanguage())

console.log("============================ example 2 ================================")
const powersOfNumbersWithArrow = [1, 3, 5, 7, 9].map((number, index) => Math.pow(number, index))

console.log(powersOfNumbersWithArrow)


console.log("============================ example 3 ================================")

const sayiToplama = (number1, number2, number3) => number1 + number2 + number3

console.log(sayiToplama)
console.log(sayiToplama(12, 4, 57))

console.log("============================ example 4 ==== eger okun => uzerine gelip sag tiklama yaparsak oradan tekrar eski haline cevirebiliriz convert to .... ============================")


const agirlikBulmaGr = KgrInWeight => KgrInWeight * 1000
console.log(agirlikBulmaGr(12))

console.log("============================================ ** ====================================================")