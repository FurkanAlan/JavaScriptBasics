console.log('================== Maps Filters Reduce ==============================')

console.log('======================= Map => Transformation =========================')

var data = [1, 2, 3, 4, 5, 6, 7, 8, 9]

var dataWithMap = data.map(function (items) {
    return items * 4
})


console.log("datanin islmesiz hali: " + data)
console.log("data ya islem, 4 ila carpildi uygunlamis hali: " + dataWithMap)

console.log('=============================================================================================')

console.log('======================= Filter => Boolean =========================')

var data2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

var dataWithFilter = data.filter(function (item) {
    return item % 2 === 0
})


console.log("datanin filtresiz hali: " + data2)
console.log("data ya filtreli hali, bize sadece cift sayilari verir: " + dataWithFilter)


var dataWithFilter2 = data.filter(function (item) {
    return item >= 3
})


console.log("datanin filtresiz hali: " + data2)
console.log("data ya filtreli hali, bize sadece 3 e esit ve buyuklerini verir: " + dataWithFilter2)


var dataWithFilter3 = data.filter(function (item) {
    return item % 3 === 0
})


console.log("datanin filtresiz hali: " + data2)
console.log("data ya filtreli hali, bize sadece 3 un katlarini verir: " + dataWithFilter3)
console.log('=============================================================================================')


console.log('======================= Reduce =========================')


var data3 = [5, 14, "a", "c", "d", 12]

var dataWithReduce = data3.reduce(function (accumulator, current) {
    return (accumulator + current)
})


console.log("datanin reduce olmadan hali: " + data3)
console.log("data reduce fonksiyonu uygulanmis hali, dizideki sayilari concat yapiyor?: " + dataWithReduce)

console.log('=============================================================================================')
